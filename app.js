(function () {
  const { MEMBERS, PHASES, VOX, SONGS, CHAT_LYRICS_NOTE } = window.WBA_DATA;
  const SCORE = { 3: "Please yes", 2: "Sure", 1: "Don't feel it" };
  const LBL = { done: "Done (confirmed)", unc: "Unknown", tbd: "On hold — vocalist TBD" };

  const userKey = "wba-exit-us-user";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  let reviews = {};
  let stages = {};
  let phFilter = "pre";
  const latestStage = (songId, stage) => {
    const list = stages[songId] || [];
    for (let i = list.length - 1; i >= 0; i--) if (list[i].stage === stage) return list[i];
    return null;
  };
  const defaultSt = (stage, song) => {
    if (stage === "Suno demo") return song.suno === "done" ? "done" : "unc";
    if (stage === "Logic import") return song.instrumental ? "done" : "unc";
    if (VOX.has(stage)) return "tbd";
    return "unc";
  };
  const st = (stage, song) => {
    const last = latestStage(song.id, stage);
    if (last) return last.done ? "done" : (VOX.has(stage) ? "tbd" : "unc");
    return defaultSt(stage, song);
  };
  const countDone = (stage) => SONGS.filter((s) => st(stage, s) === "done").length;
  const mk = (s) => `<span class="mk ${s}" role="img" aria-label="${LBL[s]}" title="${LBL[s]}"></span>`;
  const pct = (song, p) => Math.round(100 * p.stages.filter((x) => st(x, song) === "done").length / p.stages.length);
  const pl = (song, p) => { const v = pct(song, p); return v ? v + "% confirmed · rest unknown" : "Unknown · nothing confirmed yet"; };
  const fmt = (iso) => {
    try {
      return new Date(iso).toLocaleString("en-US", { timeZone: "America/Chicago", dateStyle: "medium", timeStyle: "short" }) + " CT";
    } catch { return iso; }
  };
  const matchMember = (raw) => {
    const n = String(raw || "").trim().toLowerCase();
    return MEMBERS.find((m) => m.toLowerCase() === n) || null;
  };

  const KEEP_MS = 30 * 24 * 60 * 60 * 1000; // stay signed in 30 days
  function loadUser() {
    try {
      const v = JSON.parse(localStorage.getItem(userKey) || "null");
      if (v && MEMBERS.includes(v.u) && v.exp > Date.now()) return v.u;
    } catch (e) {}
    localStorage.removeItem(userKey);
    return null;
  }
  function saveUser(u) { localStorage.setItem(userKey, JSON.stringify({ u, exp: Date.now() + KEEP_MS })); }
  let user = loadUser();
  if (user) saveUser(user);

  function gate() {
    const splash = $("#splash");
    const app = $("#app");
    if (user) {
      splash.hidden = true;
      app.hidden = false;
      document.body.classList.remove("locked");
      $("#who").textContent = user;
      return true;
    }
    splash.hidden = false;
    app.hidden = true;
    document.body.classList.add("locked");
    $("#code").focus();
    return false;
  }

  $("#enter").addEventListener("submit", (e) => {
    e.preventDefault();
    const found = matchMember($("#code").value);
    const err = $("#gate-err");
    if (!found) {
      err.textContent = "That name isn't on the list.";
      $("#code").select();
      return;
    }
    user = found;
    saveUser(user);
    err.textContent = "";
    updateHeroCounts();
    paintBreakouts();
    setPh(phFilter);
    gate();
  });
  $("#signout").addEventListener("click", () => {
    localStorage.removeItem(userKey);
    user = null;
    $("#code").value = "";
    paintBreakouts();
    gate();
  });

  /* ---- views ---- */
  const LEG = `<div class="legend">${mk("done")}<span>Done (confirmed)</span>${mk("unc")}<span>Unknown — not yet reported</span>${mk("tbd")}<span>On hold — vocalist TBD</span></div>`;

  function grid() {
    return `<div class="controls" role="search"><label class="sr" for="q">Search songs</label><input id="q" type="search" placeholder="Search songs…" autocomplete="off">
      <span role="group" aria-label="Show phase columns">${["pre", "prod", "post", "all"].map((id) =>
        `<button class="btn" type="button" data-ph="${id}" aria-pressed="${id === "pre"}">${id === "all" ? "All 19 stages →" : PHASES.find((p) => p.id === id).name}</button>`
      ).join(" ")}</span>
      <button class="btn" type="button" id="csv">Download CSV</button>
      <span id="cnt" aria-live="polite"></span></div>
      ${LEG}
      <p id="scrollnote" class="note" hidden>All 19 stages: the table scrolls sideways → song names stay pinned.</p>
      <div class="gridwrap" tabindex="0" role="region" aria-label="Song by stage table">
      <table id="tbl"><caption class="sr">All songs by pipeline stage</caption>
      <thead><tr class="ph"><th class="song"></th>${PHASES.map((p) => `<th colspan="${p.stages.length}" class="${p.id} grp" data-c="${p.id}">${p.name}</th>`).join("")}</tr>
      <tr><th class="song" scope="col">Song</th>${PHASES.map((p) => p.stages.map((s, i) =>
        `<th scope="col" data-c="${p.id}" class="${i ? "" : "grp"} ${VOX.has(s) ? "dim" : ""}">${s}${VOX.has(s) ? "<small>Vox TBD</small>" : ""}</th>`
      ).join("")).join("")}</tr></thead>
      <tbody>${SONGS.map((s) => `<tr data-song="${esc(s.title.toLowerCase())}"><td class="song"><button type="button" data-goto="${s.id}" aria-label="Open song card: ${esc(s.title)}"><span class="i">${String(s.n).padStart(2, "0")}</span>${esc(s.title)}</button></td>${PHASES.map((p) => p.stages.map((x, i) =>
        `<td data-c="${p.id}" class="${i ? "" : "grp"} ${VOX.has(x) ? "dim" : ""}">${mk(st(x, s))}</td>`
      ).join("")).join("")}</tr>`).join("")}</tbody></table></div>`;
  }

  function dlRow(label, link, found) {
    if (link && link.url) return `<li><span>${label}</span><a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)}</a></li>`;
    if (link && link.file) return `<li><span>${label}</span><span class="muted">On file at ${esc(link.file)}${link.label ? " · " + esc(link.label) : ""} (no public link yet)</span></li>`;
    if (found) return `<li><span>${label}</span><span class="muted">TBD — file found at ${esc(found.file)} (no public link yet)</span></li>`;
    return `<li><span>${label}</span><span class="muted">TBD</span></li>`;
  }

  function lyricsBlock(s) {
    if (s.lyrics) return `<div class="ly">${esc(s.lyrics)}</div>`;
    if (s.lyricsStatus === "chat") return `<p class="muted">${esc(CHAT_LYRICS_NOTE)}</p>`;
    return `<p class="muted">TBD — lyrics not on file yet.</p>`;
  }

  function latestByUser(entries) {
    const map = {};
    (entries || []).forEach((e) => { map[e.user] = e; });
    return map;
  }

  function reviewForm(s, entries) {
    const mine = latestByUser(entries)[user];
    const log = (entries || []).slice().reverse();
    return `<form class="rev" data-rev="${s.id}">
      <p class="muted">Reviewing as <b>${esc(user)}</b>. Scores and notes are shared with the whole band.</p>
      <div class="scores" role="radiogroup" aria-label="Score">
        ${[3, 2, 1].map((n) => `<label><input type="radio" name="score-${s.id}" value="${n}" ${mine && mine.score === n ? "checked" : ""}> <strong>${n}</strong> — ${SCORE[n]}</label>`).join("")}
      </div>
      <label class="sr" for="notes-${s.id}">Notes</label>
      <textarea id="notes-${s.id}" placeholder="Notes">${mine ? esc(mine.notes) : ""}</textarea>
      <button class="btn save" type="submit">Save review</button>
      <p class="note" data-saved hidden>Saved for the band.</p>
      </form>
      <h4 class="ph">Log</h4>
      ${log.length ? `<ul class="log">${log.map((e) => `<li><span class="who">${esc(e.user)}</span><span class="when">${esc(fmt(e.ts))}</span><div><span class="score-pill">${e.score} · ${SCORE[e.score]}</span>${e.notes ? esc(e.notes) : "<span class='muted'>No notes</span>"}</div></li>`).join("")}</ul>` : `<p class="muted">No reviews yet.</p>`}`;
  }

  function stageItem(s, x) {
    const status = st(x, s);
    const dim = VOX.has(x) ? "dim" : "";
    if (user === "Rob") {
      return `<li class="${dim}"><label class="chk"><input type="checkbox" data-stage-song="${esc(s.id)}" data-stage="${esc(x)}" ${status === "done" ? "checked" : ""}> ${mk(status)}${esc(x)}</label></li>`;
    }
    return `<li class="${dim}">${mk(status)}${esc(x)}</li>`;
  }

  function stageLog(entries) {
    const log = (entries || []).slice().reverse();
    if (!log.length) return "";
    return `<h4 class="ph">Stage log</h4>
      <ul class="log stage-log">${log.map((e) =>
        `<li><span class="who">${esc(e.user)}</span><span class="when">${esc(fmt(e.ts))}</span><div>${esc(e.user)} ${e.done ? "checked" : "unchecked"} ${esc(e.stage)}</div></li>`
      ).join("")}</ul>`;
  }

  function card(s, reviews) {
    const entries = (reviews[s.id] || []);
    return `<article class="card" id="song-${s.id}" data-song="${esc(s.title.toLowerCase())}">
      <span class="num" aria-hidden="true">${String(s.n).padStart(2, "0")}</span>
      <h3>${esc(s.title)}</h3>
      <dl class="meta">
        <div><dt>Song</dt><dd>${esc(s.title)}</dd></div>
        <div><dt>Year written</dt><dd>${esc(s.year)}</dd></div>
        <div><dt>Tuning</dt><dd>${esc(s.tuning)}</dd></div>
        <div><dt>Demo title</dt><dd>${esc(s.demoTitle || "TBD")}</dd></div>
      </dl>
      ${PHASES.map((p) => `<div class="barl"><span>${p.name}</span><span>${pct(s, p) ? pct(s, p) + "% confirmed" : "Unknown"}</span></div><div class="bar" role="img" aria-label="${p.name}: ${pl(s, p)}"><i style="width:${pct(s, p)}%"></i></div>`).join("")}
      <details class="brk"><summary>Lyrics</summary>${lyricsBlock(s)}</details>
      <details class="brk"><summary>Downloads</summary>
        <ul class="dl">
          ${dlRow("Demo", s.demo, s.demoFound)}
          ${dlRow("Instrumental", s.instrumental, s.instrumentalFound)}
          ${dlRow("Drum demo", s.drumDemo, s.drumFound)}
        </ul>
      </details>
      <details class="brk" data-review="${s.id}"><summary>Review</summary><div class="rev-body">${reviewForm(s, entries)}</div></details>
      <details class="brk" data-pipe="${s.id}"><summary>Pipeline</summary>
        ${PHASES.map((p) => `<div class="ph">${p.name}</div><ul class="stages">${p.stages.map((x) => stageItem(s, x)).join("")}</ul>`).join("")}
        ${stageLog(stages[s.id])}
      </details>
    </article>`;
  }

  function cards(reviews) {
    return `<p class="lead">Open any breakout on a card for lyrics, downloads, reviews, or the pipeline. Bars fill with confirmed work only — empty means unknown, not zero.${user === "Rob" ? " As Rob, you can check stages off in the pipeline breakout; each check is logged like a review." : ""}</p>
      <div class="songs" id="cards">${SONGS.map((s) => card(s, reviews)).join("")}</div>`;
  }

  function phase(p) {
    const nSongs = SONGS.length;
    const d = p.id === "pre"
      ? `Suno demo is confirmed for ${countDone("Suno demo")} of ${nSongs} songs. Logic import is confirmed for ${countDone("Logic import")} of ${nSongs} songs (from an instrumental on file, or a check). Other pre-production stages stay unknown until they're checked.`
      : p.id === "prod"
        ? "Vocals and vocal edits are on hold until the new singer is chosen, but can still be checked off. Everything else is unknown until checked."
        : "Mix, stereo masters and Atmos mixes follow production lock. Status is unknown until checked.";
    const confirmedPct = Math.round(100 * SONGS.reduce((n, s) => n + p.stages.filter((x) => st(x, s) === "done").length, 0) / (p.stages.length * nSongs));
    const label = confirmedPct ? confirmedPct + "% confirmed · rest unknown" : "Unknown · nothing confirmed yet";
    return `<div class="two"><div><p class="lead">${p.stages.length} stages × ${nSongs} songs. ${d}</p><ul class="list">${p.stages.map((x) => {
      const n = SONGS.filter((s) => st(x, s) === "done").length;
      const txt = n ? `${n}/${nSongs} confirmed` : VOX.has(x) ? "On hold · vocalist TBD" : "Unknown";
      return `<li class="${VOX.has(x) ? "dim" : ""}"><b>${x}</b><span>${txt}</span></li>`;
    }).join("")}</ul></div>
    <div class="panel"><div class="badge">Confirmed only</div><div class="big ${confirmedPct ? "" : "u"}">${label}</div>
    <div class="bar" style="height:10px;margin-top:14px" role="img" aria-label="${p.name}: ${label}"><i style="width:${confirmedPct}%"></i></div>
    <p class="note" style="margin-top:10px">The bar shows confirmed work, not actual progress.</p></div></div>`;
  }

  const MKT = `<div class="two"><div><p class="lead"><b>Proposed</b> to-do inventory — suggestions to review, none started or assigned.</p><ul class="list">
    ${["Pick the singles (cut the list → final tracklist)", "Vocalist search: brief, auditions, decision", "Exit Us cover art + single artwork", "Press photos (band + new singer)", "Release plan, dates, distributor", "Socials: handles, bios, posting calendar", "Video: lyric videos + one hero video", "Press kit / one-sheet (“The Alone” angle)", "Website + link-in-bio", "First merch run"].map((x) => `<li><b>${x}</b><span>Proposed</span></li>`).join("")}</ul></div>
    <div class="panel"><div class="badge">Proposed</div><div class="big" style="font-size:20px">Crossover goal</div><p class="lead" style="margin-top:8px">Younger singer, same alt-rock / emo-pop spine. Lean on “The Alone” listeners.</p></div></div>`;

  const ART = `<div class="two"><div><p class="lead">Build everything around the Ash Wings logo: engraved wings, flame and ash tips, heavy geometric sans. Black, bone, oxblood. Hairline frames, angular cuts.</p>
    <div class="sw"><div style="background:#0b0b0b;color:#F2EFE6">BLACK</div><div style="background:#F2EFE6">BONE #F2EFE6</div><div style="background:#6E0F14;color:#F2EFE6">OXBLOOD #6E0F14</div></div>
    <ul class="list"><li><b>Logo</b><span>Ash Wings — never redrawn or scripted</span></li><li><b>Type</b><span>Heavy geometric sans, uppercase</span></li><li><b>Line</b><span>Hairline frames, corner marks</span></li><li><b>Accent</b><span>Oxblood, used sparingly</span></li><li><b>Test</b><span>Must work in pure black &amp; white</span></li></ul></div>
    <div><img class="logo-sm" src="assets/logo.jpg" alt="Ash Wings logo, reference"><p class="note" style="margin-top:8px">Primary mark · use on white or bone.</p></div></div>`;

  const open = new Set(["all", "songs"]);
  const SECS = () => [
    { id: "all", t: "All songs — overview", m: `${SONGS.length} songs · 19 stages`, b: grid },
    { id: "songs", t: "Song cards", m: `${SONGS.length} cards`, b: () => cards(reviews) },
    ...PHASES.map((p) => ({ id: p.id, t: p.name, m: p.id === "pre" ? `Suno ${countDone("Suno demo")}/${SONGS.length} · Logic ${countDone("Logic import")}/${SONGS.length}` : p.id === "prod" ? "Vocals on hold" : "Unknown", b: () => phase(p) })),
    { id: "mkt", t: "Marketing", m: "10 proposed to-dos", b: () => MKT },
    { id: "art", t: "Artwork / brand", m: "Ash Wings · Ink & Paper", b: () => ART }
  ];

  function paintBreakouts() {
    const secs = SECS();
    const B = $("#breakouts"), T = $("#tiles");
    const num = (i) => String(i + 1).padStart(2, "0");
    B.innerHTML = secs.map((x, i) => `<div class="acc" id="sec-${x.id}"><button class="acc-h" type="button" aria-expanded="false" aria-controls="body-${x.id}" id="h-${x.id}" data-sec="${x.id}"><span class="no">${num(i)}</span><span class="tt">${x.t}</span><span class="ss">${x.m}</span><span class="pm" aria-hidden="true">+</span></button><div class="acc-b" id="body-${x.id}" role="region" aria-labelledby="h-${x.id}" hidden>${x.b()}</div></div>`).join("");
    T.innerHTML = secs.map((x, i) => `<button class="tile" type="button" data-sec="${x.id}" aria-expanded="false" aria-controls="body-${x.id}"><span class="n">${num(i)}</span><span class="t">${x.t}</span><span class="m">${x.m}</span></button>`).join("");
    bindDynamic();
    sync();
  }

  function sync() {
    SECS().forEach((x) => {
      const o = open.has(x.id);
      const body = document.getElementById("body-" + x.id);
      if (body) body.hidden = !o;
      $$(`[data-sec="${x.id}"]`).forEach((b) => b.setAttribute("aria-expanded", o));
    });
  }
  function toggle(id, force) {
    (force ?? !open.has(id)) ? open.add(id) : open.delete(id);
    sync();
  }
  function setPh(v) {
    phFilter = v;
    $$("[data-ph]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.ph === v));
    $$("#tbl [data-c]").forEach((c) => { c.style.display = (v === "all" || c.dataset.c === v) ? "" : "none"; });
    const note = $("#scrollnote");
    if (note) note.hidden = v !== "all";
    const tbl = $("#tbl");
    if (tbl) tbl.style.minWidth = v === "all" ? "1550px" : "0";
  }
  function filterSongs() {
    const qEl = $("#q");
    if (!qEl) return;
    const q = qEl.value.trim().toLowerCase();
    let n = 0;
    $$("#tbl tbody tr").forEach((r) => { const h = q && !r.dataset.song.includes(q); r.classList.toggle("hide", h); if (!h) n++; });
    $$(".card").forEach((c) => c.classList.toggle("hide", !!q && !c.dataset.song.includes(q)));
    const cnt = $("#cnt");
    if (cnt) cnt.textContent = q ? `${n} of ${SONGS.length} songs` : "";
  }

  function bindDynamic() {
    const q = $("#q");
    if (q) q.addEventListener("input", filterSongs);
  }

  document.addEventListener("click", (e) => {
    const s = e.target.closest("[data-sec]");
    if (s) {
      const id = s.dataset.sec;
      toggle(id);
      if (s.classList.contains("tile") && open.has(id)) document.getElementById("sec-" + id).scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const g = e.target.closest("[data-goto]");
    if (g) {
      toggle("songs", true);
      const c = document.getElementById("song-" + g.dataset.goto);
      if (c) {
        c.querySelectorAll("details").forEach((d, i) => { if (i === 0) d.open = true; });
        c.scrollIntoView({ behavior: "smooth", block: "center" });
        const sm = c.querySelector("summary");
        if (sm) sm.focus();
      }
      return;
    }
    const p = e.target.closest("[data-ph]");
    if (p) { setPh(p.dataset.ph); return; }
    if (e.target.id === "csv") {
      const rows = [["Song", "Year written", "Tuning", ...PHASES.flatMap((p) => p.stages.map((s) => p.name + ": " + s))]];
      SONGS.forEach((s) => rows.push([s.title, s.year, s.tuning, ...PHASES.flatMap((p) => p.stages.map((x) => LBL[st(x, s)]))]));
      const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
      a.download = "WBA_ExitUs_status.csv";
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }
  });

  document.addEventListener("submit", async (e) => {
    const form = e.target.closest("form.rev");
    if (!form) return;
    e.preventDefault();
    const id = form.dataset.rev;
    const score = Number((form.querySelector("input[type=radio]:checked") || {}).value);
    if (!score) { alert("Pick a score first."); return; }
    const notes = form.querySelector("textarea").value;
    try { reviews[id] = await window.WBAStorage.addReview(id, user, score, notes); }
    catch (err) { alert("Couldn't save your review. Check your connection and try again."); return; }
    const host = form.closest(".rev-body");
    const song = SONGS.find((s) => s.id === id);
    host.innerHTML = reviewForm(song, reviews[id]);
    const openDet = host.closest("details");
    if (openDet) openDet.open = true;
  });

  function updateHeroCounts() {
    const n = SONGS.length;
    const sunoN = countDone("Suno demo");
    const logicN = countDone("Logic import");
    const elSuno = $("#suno-count");
    const elLogic = $("#logic-count");
    const elBanner = $("#status-banner");
    if (elSuno) elSuno.textContent = sunoN + "/" + n;
    if (elLogic) elLogic.textContent = logicN + "/" + n;
    if (elBanner) elBanner.innerHTML = `BAND SITE · <b>SUNO ${sunoN}/${n} · LOGIC IMPORT ${logicN}/${n}</b> · OTHER STAGES AS CHECKED · NO TEAM SYNC YET`;
  }

  function snapshotUI() {
    const openDetails = $$("details[open]").map((d) => {
      const card = d.closest("[id]");
      const sum = d.querySelector("summary");
      return { card: card && card.id, summary: sum && sum.textContent };
    });
    const q = ($("#q") || {}).value || "";
    return { openDetails, q, ph: phFilter };
  }

  function restoreUI(snap) {
    setPh(snap.ph);
    if (snap.q) {
      const q = $("#q");
      if (q) { q.value = snap.q; filterSongs(); }
    }
    snap.openDetails.forEach(({ card, summary }) => {
      if (!card) return;
      const el = document.getElementById(card);
      if (!el) return;
      el.querySelectorAll("details").forEach((d) => {
        const sum = d.querySelector("summary");
        if (sum && sum.textContent === summary) d.open = true;
      });
    });
  }

  function refresh() {
    const snap = snapshotUI();
    updateHeroCounts();
    paintBreakouts();
    restoreUI(snap);
  }

  document.addEventListener("change", async (e) => {
    const box = e.target.closest("input[data-stage-song]");
    if (!box) return;
    if (user !== "Rob") { box.checked = !box.checked; return; }
    const id = box.dataset.stageSong;
    const stageName = box.dataset.stage;
    try { stages[id] = await window.WBAStorage.addStageCheck(id, stageName, box.checked, user); }
    catch (err) { box.checked = !box.checked; alert("Couldn't save that check. Try again."); return; }
    refresh();
  });

  $("#storage-label").textContent = window.WBAStorage.label;
  $("#song-count").textContent = String(SONGS.length);

  Promise.all([window.WBAStorage.getAll(), window.WBAStorage.getStages()]).catch(() => [{}, {}]).then(([rev, stg]) => {
    reviews = rev || {};
    stages = stg || {};
    updateHeroCounts();
    paintBreakouts();
    setPh("pre");
    gate();
  });
})();
