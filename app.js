(function () {
  const { MEMBERS, PHASES, VOX, SONGS, CHAT_LYRICS_NOTE, THEMES, ALBUM_SUMMARY, HERO_LINES } = window.WBA_DATA;
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
    if (stage === "Logic import") return (song.instrumental || (song.media && (song.media.logic || song.media.inst))) ? "done" : "unc";
    if (stage === "Click / guide") return song.media && song.media.click ? "done" : "unc";
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

  const isScore = (v) => v === 1 || v === 2 || v === 3;
  const currentScores = (entries) => {
    const map = {};
    (entries || []).forEach((e) => { if (isScore(e.score)) map[e.user] = e.score; });
    return map;
  };
  const fmtAvg = (avg) => {
    const x = Math.round(avg * 100) / 100;
    return x.toFixed(2).replace(/\.?0+$/, "") || "0";
  };
  const songTally = (entries) => {
    const scores = Object.values(currentScores(entries));
    if (!scores.length) return { avg: null, votes: 0, text: "—" };
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const votes = scores.length;
    return { avg, votes, text: fmtAvg(avg) + " · " + votes + " vote" + (votes === 1 ? "" : "s") };
  };
  const statusRank = (status) => {
    if (status === "done") return 3;
    if (status === "tbd") return 0;
    if (status === "unc") return 1;
    return 2;
  };
  let sortBy = { key: "n", dir: "asc" };

  const DRUM_AT = Date.parse("2027-01-10T14:00:00-06:00");
  const DRUM_META = "Sunday, January 10, 2027 · 2:00 PM CT · Stormy Cooper Media, Houston, TX";
  const pad2 = (n) => String(n).padStart(2, "0");
  function tickCountdown() {
    const root = $("#countdown");
    const body = $("#cd-body");
    if (!root || !body) return false;
    const ms = DRUM_AT - Date.now();
    if (ms <= 0) {
      root.classList.add("is-live");
      body.innerHTML = `<p class="cd-live">Drum tracking is underway</p>`;
      return false;
    }
    root.classList.remove("is-live");
    const total = Math.floor(ms / 1000);
    const d = Math.floor(total / 86400);
    const h = Math.floor((total % 86400) / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const unit = (n, label) => `<div class="cd-unit"><div class="cd-n">${n}</div><div class="cd-l">${label}</div></div>`;
    body.innerHTML = `<div class="cd-units">${unit(d, "Days")}${unit(pad2(h), "Hours")}${unit(pad2(m), "Minutes")}${unit(pad2(s), "Seconds")}</div><p class="cd-meta">${DRUM_META}</p>`;
    return true;
  }
  function startCountdown() {
    const run = () => { if (!tickCountdown()) clearInterval(tid); };
    run();
    const tid = setInterval(run, 1000);
  }
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

  function sortHeader(key, label, extraClass, extraAttr, extraHtml) {
    const active = sortBy.key === key;
    const aria = active ? (sortBy.dir === "asc" ? "ascending" : "descending") : "none";
    const arr = active ? (sortBy.dir === "asc" ? "▲" : "▼") : "↕";
    return `<th scope="col" class="${extraClass || ""}" ${extraAttr || ""} aria-sort="${aria}"><button type="button" class="sortbtn" data-sort="${esc(key)}">${label}<span class="arr" aria-hidden="true">${arr}</span></button>${extraHtml || ""}</th>`;
  }
  function sortedSongs() {
    const list = SONGS.slice();
    const { key, dir } = sortBy;
    const mul = dir === "asc" ? 1 : -1;
    const cmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0) * mul;
    list.sort((a, b) => {
      let r = 0;
      if (key === "n") r = cmp(a.n, b.n);
      else if (key === "score") {
        const ta = songTally(reviews[a.id]);
        const tb = songTally(reviews[b.id]);
        const va = ta.votes ? ta.avg : null;
        const vb = tb.votes ? tb.avg : null;
        if (va === null && vb === null) r = 0;
        else if (va === null) r = 1;
        else if (vb === null) r = -1;
        else r = cmp(va, vb);
      } else if (key.slice(0, 6) === "stage:") {
        r = cmp(statusRank(st(key.slice(6), a)), statusRank(st(key.slice(6), b)));
      }
      return r || (a.n - b.n);
    });
    return list;
  }
  function tableRows() {
    return sortedSongs().map((s) => {
      const tly = songTally(reviews[s.id]);
      const scoreCell = tly.votes ? `${fmtAvg(tly.avg)} <span class="muted">· ${tly.votes}</span>` : "—";
      return `<tr data-song="${esc(s.title.toLowerCase())}"><td class="song"><button type="button" data-goto="${s.id}" aria-label="Open song card: ${esc(s.title)}"><span class="i">${String(s.n).padStart(2, "0")}</span>${esc(s.title)}</button></td><td class="score-col">${scoreCell}</td>${PHASES.map((p) => p.stages.map((x, i) =>
        `<td data-c="${p.id}" class="${i ? "" : "grp"} ${VOX.has(x) ? "dim" : ""}">${mk(st(x, s))}</td>`
      ).join("")).join("")}</tr>`;
    }).join("");
  }
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
      <thead><tr class="ph"><th class="song"></th><th class="score-col"></th>${PHASES.map((p) => `<th colspan="${p.stages.length}" class="${p.id} grp" data-c="${p.id}">${p.name}</th>`).join("")}</tr>
      <tr>${sortHeader("n", "Song", "song")}${sortHeader("score", "Score", "score-col")}${PHASES.map((p) => p.stages.map((s, i) =>
        sortHeader("stage:" + s, s, (i ? "" : "grp ") + (VOX.has(s) ? "dim" : ""), `data-c="${p.id}"`, VOX.has(s) ? "<small>Vox TBD</small>" : "")
      ).join("")).join("")}</tr></thead>
      <tbody>${tableRows()}</tbody></table></div>`;
  }

  function mediaRow(label, m, extra) {
    if (!m || !m.url) return "";
    return `<li><span>${label}</span><a href="${esc(m.url)}" target="_blank" rel="noopener" download>${esc(m.name)}${extra ? ` <small class="muted">${esc(extra)}</small>` : ""}</a></li>`;
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

  function reviewLog(entries) {
    const list = (entries || []).slice().reverse();
    const items = list.map((e) => {
      const notes = String(e.notes || "").trim();
      const scored = isScore(e.score);
      if (!notes && !scored) return "";
      if (notes) {
        const pill = scored ? `<span class="score-pill">${e.score} · ${SCORE[e.score]}</span>` : "";
        return `<li><span class="who">${esc(e.user)}</span><span class="when">${esc(fmt(e.ts))}</span><div>${pill}${esc(notes)}</div></li>`;
      }
      return `<li class="score-only"><span class="who">${esc(e.user)}</span><span class="when">${esc(fmt(e.ts))}</span><div>${esc(e.user)} set score ${e.score}</div></li>`;
    }).filter(Boolean);
    if (!items.length) return `<p class="muted">No reviews yet.</p>`;
    return `<h4 class="ph">Log</h4><ul class="log">${items.join("")}</ul>`;
  }
  function currentScoresLine(entries) {
    const scores = currentScores(entries);
    const names = Object.keys(scores);
    if (!names.length) return "";
    const bits = names.map((name) => `<span class="cs">${esc(name)} <span class="score-pill">${scores[name]} · ${SCORE[scores[name]]}</span></span>`);
    return `<p class="current-scores"><b>Current scores</b> ${bits.join("")}</p>`;
  }
  function reviewForm(s, entries) {
    const mine = currentScores(entries)[user];
    return `<form class="rev" data-rev="${s.id}">
      <p class="muted">Reviewing as <b>${esc(user)}</b>. Add notes anytime. Your score can be changed, but only your latest score counts in the tally.</p>
      <div class="scores" role="radiogroup" aria-label="Score">
        ${[3, 2, 1].map((n) => `<label><input type="radio" name="score-${s.id}" value="${n}" ${mine === n ? "checked" : ""}> <strong>${n}</strong> — ${SCORE[n]}</label>`).join("")}
      </div>
      <label class="sr" for="notes-${s.id}">Notes</label>
      <textarea id="notes-${s.id}" placeholder="Add a note"></textarea>
      <button class="btn save" type="submit">Save review</button>
      <p class="note" data-saved hidden>Saved for the band.</p>
      </form>
      ${currentScoresLine(entries)}
      ${reviewLog(entries)}`;
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


  /* ---------- Audio: one shared engine for card mini players + Playlist ---------- */
  const PLAYLIST = SONGS.filter((s) => s.media && s.media.main && s.media.main.stream);
  const NOAUDIO = SONGS.filter((s) => !(s.media && s.media.main && s.media.main.stream));
  const audio = new Audio();
  audio.preload = "none";
  const durs = {};
  let curId = null;
  const ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z" fill="currentColor"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.5h4.2v15H6zM13.8 4.5H18v15h-4.2z" fill="currentColor"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h2.6v14H5zM19.5 5v14L8.6 12z" fill="currentColor"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.4 5H19v14h-2.6zM4.5 5v14L15.4 12z" fill="currentColor"/></svg>'
  };
  const tfmt = (t) => {
    if (!isFinite(t) || t < 0) return "–:––";
    const m = Math.floor(t / 60), sec = Math.floor(t % 60);
    return m + ":" + String(sec).padStart(2, "0");
  };
  const byId = (id) => SONGS.find((s) => s.id === id);
  function playSong(id, fromStart) {
    const s = byId(id);
    if (!s || !s.media.main) return;
    if (curId !== id) {
      curId = id;
      audio.src = s.media.main.stream;
      audio.currentTime = 0;
    } else if (fromStart) audio.currentTime = 0;
    const pr = audio.play();
    if (pr && pr.catch) pr.catch(() => syncAudioUI());
    if ("mediaSession" in navigator) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({ title: s.title, artist: "Wings Burn Away", album: "Exit Us" });
      } catch (e) {}
    }
    syncAudioUI();
  }
  function toggleSong(id) {
    if (curId === id && !audio.paused) { audio.pause(); return; }
    playSong(id);
  }
  function step(dir) {
    if (!PLAYLIST.length) return;
    let i = PLAYLIST.findIndex((s) => s.id === curId);
    if (dir < 0 && curId && audio.currentTime > 3) { audio.currentTime = 0; return; }
    i = i < 0 ? 0 : (i + dir + PLAYLIST.length) % PLAYLIST.length;
    playSong(PLAYLIST[i].id, true);
  }
  function seekFrac(f) {
    if (!curId || !isFinite(audio.duration)) return;
    audio.currentTime = Math.max(0, Math.min(1, f)) * audio.duration;
  }
  function syncAudioUI() {
    const playing = !!curId && !audio.paused && !audio.ended;
    const d = audio.duration, t = audio.currentTime;
    const frac = curId && isFinite(d) && d > 0 ? t / d : 0;
    if (curId && isFinite(d)) durs[curId] = d;
    $$("[data-mini]").forEach((el) => {
      const id = el.dataset.mini, on = id === curId;
      el.classList.toggle("on", on);
      el.classList.toggle("playing", on && playing);
      const b = el.querySelector(".mp-btn");
      if (b) { b.innerHTML = on && playing ? ICON.pause : ICON.play; b.setAttribute("aria-label", (on && playing ? "Pause " : "Play ") + el.dataset.title); }
      const bar = el.querySelector(".mp-bar i");
      if (bar) bar.style.width = (on ? frac * 100 : 0) + "%";
      const tt = el.querySelector(".mp-t");
      if (tt) tt.textContent = on ? tfmt(t) + " / " + tfmt(d) : (durs[id] ? tfmt(durs[id]) : "Original");
    });
    const pl = $("#pl");
    if (!pl) return;
    const s = curId ? byId(curId) : null;
    pl.classList.toggle("playing", playing);
    $("#pl-title").textContent = s ? s.title : "Press play to start the album";
    $("#pl-sub").textContent = s ? `Track ${String(PLAYLIST.indexOf(s) + 1).padStart(2, "0")} of ${PLAYLIST.length} · ${s.media.main.name}` : `${PLAYLIST.length} tracks · originals only · in album order`;
    const tg = $("#pl-toggle");
    tg.innerHTML = playing ? ICON.pause : ICON.play;
    tg.setAttribute("aria-label", playing ? "Pause" : "Play");
    $("#pl-cur").textContent = tfmt(curId ? t : 0);
    $("#pl-dur").textContent = curId ? tfmt(d) : "–:––";
    const r = $("#pl-range");
    if (r && !r.matches(":active")) { r.value = Math.round(frac * 1000); r.style.setProperty("--p", (frac * 100).toFixed(2) + "%"); }
    $$("#pl [data-plrow]").forEach((row) => {
      const on = row.dataset.plrow === curId;
      row.classList.toggle("on", on);
      row.setAttribute("aria-current", on ? "true" : "false");
      const dd = row.querySelector(".d");
      if (dd) dd.innerHTML = on && playing ? '<span class="eq" aria-label="Playing"><i></i><i></i><i></i></span>' : (durs[row.dataset.plrow] ? tfmt(durs[row.dataset.plrow]) : "");
    });
  }
  ["play", "pause", "timeupdate", "loadedmetadata", "durationchange", "emptied"].forEach((ev) => audio.addEventListener(ev, syncAudioUI));
  audio.addEventListener("ended", () => step(1));
  if ("mediaSession" in navigator) {
    try {
      navigator.mediaSession.setActionHandler("previoustrack", () => step(-1));
      navigator.mediaSession.setActionHandler("nexttrack", () => step(1));
    } catch (e) {}
  }
  function miniPlayer(s) {
    if (!s.media.main) return `<div class="mini none"><span class="mp-x">No streamable original on a shared link yet</span></div>`;
    return `<div class="mini" data-mini="${esc(s.id)}" data-title="${esc(s.title)}">
      <button class="mp-btn" type="button" data-mp="${esc(s.id)}" aria-label="Play ${esc(s.title)}">${ICON.play}</button>
      <div class="mp-bar" data-mpseek="${esc(s.id)}" role="presentation"><i></i></div>
      <span class="mp-t">Original</span></div>`;
  }
  function playlist() {
    const rows = PLAYLIST.map((s, i) => `<li><button type="button" data-plrow="${esc(s.id)}" aria-current="false"><span class="i">${String(i + 1).padStart(2, "0")}</span><span class="t">${esc(s.title)}</span><span class="d"></span></button></li>`).join("");
    const skipped = NOAUDIO.length ? `<p class="note pl-skip">Not in the playlist yet (no streamable file on a shared link): ${NOAUDIO.map((s) => esc(s.title)).join(", ")}.</p>` : "";
    return `<div class="pl" id="pl">
      <div class="pl-deck">
        <img class="pl-em" src="assets/emblem-w.png" alt="" width="600" height="593">
        <div class="pl-info"><div class="pl-k">Exit Us · now playing</div><div class="pl-title" id="pl-title"></div><div class="pl-sub" id="pl-sub"></div></div>
        <div class="pl-ctrls">
          <button type="button" class="pl-b" data-pl="prev" aria-label="Previous track">${ICON.prev}</button>
          <button type="button" class="pl-b big" id="pl-toggle" data-pl="toggle" aria-label="Play">${ICON.play}</button>
          <button type="button" class="pl-b" data-pl="next" aria-label="Next track">${ICON.next}</button>
        </div>
      </div>
      <div class="pl-seek"><span id="pl-cur">0:00</span><input type="range" id="pl-range" min="0" max="1000" value="0" step="1" aria-label="Seek"><span id="pl-dur">–:––</span></div>
      <ol class="pl-list">${rows}</ol>
      ${skipped}
      <p class="note">Full versions only — click and instrumental files live in each song card's Downloads. Streams from the band Dropbox; first play of a track can take a second to buffer.</p>
    </div>`;
  }

  function card(s, reviews) {
    const entries = (reviews[s.id] || []);
    const lc = window.hasLyricCard && window.hasLyricCard(s.id);
    const lcfg = lc ? window.WBA_CARDS.find((x) => x.id === s.id) : null;
    return `<article class="card${lc ? " has-art" : ""}" id="song-${s.id}" data-song="${esc(s.title.toLowerCase())}">
      ${lc ? `<div class="card-bg" data-bg="assets/lyrics/bg_${esc(s.id)}.webp" style="--card-sky:${lcfg.sky}" aria-hidden="true"></div>` : ""}
      <span class="num" aria-hidden="true">${String(s.n).padStart(2, "0")}</span>
      <h3>${esc(s.title)}</h3>
      <dl class="meta">
        <div><dt>Song</dt><dd>${esc(s.title)}</dd></div>
        <div><dt>Year written</dt><dd>${esc(s.year)}</dd></div>
        <div><dt>Tuning</dt><dd>${esc(s.tuning)}</dd></div>
        <div><dt>Demo title</dt><dd>${esc(s.demoTitle || "TBD")}</dd></div>
      </dl>
      ${miniPlayer(s)}
      <div class="tally">${esc(songTally(entries).votes ? "Band score  " + songTally(entries).text : "No scores yet")}</div>
      ${PHASES.map((p) => `<div class="barl"><span>${p.name}</span><span>${pct(s, p) ? pct(s, p) + "% confirmed" : "Unknown"}</span></div><div class="bar" role="img" aria-label="${p.name}: ${pl(s, p)}"><i style="width:${pct(s, p)}%"></i></div>`).join("")}
      ${lc ? `<div class="lyr-row"><button type="button" class="lyr-btn" data-lyric="${esc(s.id)}" aria-haspopup="dialog">Lyrics</button></div>` : `<details class="brk"><summary>Lyrics</summary>${lyricsBlock(s)}</details>`}
      <details class="brk"><summary>Downloads</summary>
        <ul class="dl">
          ${mediaRow("Original", s.media.main, s.media.main && s.media.main.note ? s.media.main.note : "pre-production mix")}
          ${s.media.inst ? mediaRow("Instrumental", s.media.inst) : dlRow("Instrumental", s.instrumental, s.instrumentalFound)}
          ${mediaRow("Click", s.media.click)}
          ${mediaRow("Logic session", s.media.logic, s.media.logic && s.media.logic.mb ? `.logicx folder · zipped · ~${s.media.logic.mb >= 1000 ? (s.media.logic.mb / 1000).toFixed(1) + " GB" : s.media.logic.mb + " MB"}` : ".logicx folder · zipped")}
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
    return `<p class="lead">Tap Lyrics on a card to open its lyric card. Open any other breakout for downloads, reviews, or the pipeline. Bars fill with confirmed work only — empty means unknown, not zero.${user === "Rob" ? " As Rob, you can check stages off in the pipeline breakout; each check is logged like a review." : ""}</p>
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

  function themeStats() {
    const counts = {};
    SONGS.forEach((s) => (s.themes || []).forEach((id) => { counts[id] = (counts[id] || 0) + 1; }));
    return Object.keys(THEMES || {}).map((id) => ({
      id,
      name: THEMES[id].name,
      blurb: THEMES[id].blurb,
      n: counts[id] || 0,
      songs: SONGS.filter((s) => (s.themes || []).includes(id))
    })).sort((a, b) => b.n - a.n || a.name.localeCompare(b.name));
  }
  function motifStats() {
    const counts = {};
    SONGS.forEach((s) => (s.motifs || []).forEach((m) => { counts[m] = (counts[m] || 0) + 1; }));
    return Object.keys(counts).map((name) => ({ name, n: counts[name] }))
      .sort((a, b) => b.n - a.n || a.name.localeCompare(b.name));
  }
  function templatedAlbumBlurb(ranked) {
    const top = ranked.filter((t) => t.n);
    if (!top.length) return `No lyrical annotations are on file for the ${SONGS.length} songs now on the list.`;
    const lead = top.slice(0, 3).map((t) => `${t.name} (${t.n} song${t.n === 1 ? "" : "s"})`);
    const phrase = lead.length === 1 ? lead[0]
      : lead.length === 2 ? lead[0] + " and " + lead[1]
      : lead[0] + ", " + lead[1] + ", and " + lead[2];
    return `Of the ${SONGS.length} songs now on the list, the strongest currents are ${phrase}. As songs are selected or cut, these counts update on their own.`;
  }
  function lyricalOverview() {
    const ranked = themeStats();
    const motifs = motifStats();
    const maxM = motifs.reduce((n, m) => Math.max(n, m.n), 1);
    const cloud = motifs.map((m) => {
      const size = 12 + Math.round((m.n / maxM) * 16);
      const color = m.n > 1 ? "var(--ox)" : "var(--ink)";
      const opacity = (0.55 + (m.n / maxM) * 0.45).toFixed(2);
      return `<span style="font-size:${size}px;color:${color};opacity:${opacity}">${esc(m.name)}</span>`;
    }).join("");
    const cards = ranked.filter((t) => t.n).map((t) => {
      const key = (t.songs.find((s) => s.keyLine) || {}).keyLine || "";
      const list = t.songs.map((s) => esc(s.title)).join(" · ");
      return `<article class="theme-card"><div class="tn">${t.n}</div><h3>${esc(t.name)}</h3><p class="blurb">${esc(t.blurb)}</p><p class="sl">${list}</p>${key ? `<p class="key">${esc(key)}</p>` : ""}</article>`;
    }).join("");
    return `<p class="lead lyr-sum">${esc(ALBUM_SUMMARY || "")}</p>
      <p class="lyr-snap">A snapshot of the current ${SONGS.length}-song list. If songs are later selected or cut, the theme cards, counts, and the paragraph below will update automatically.</p>
      <p class="lead lyr-sum">${esc(templatedAlbumBlurb(ranked))}</p>
      <h4 class="ph">Themes</h4>
      <div class="theme-grid">${cards}</div>
      <h4 class="ph">Motifs</h4>
      <div class="motif-cloud">${cloud || `<span class="muted">No motifs on file.</span>`}</div>`;
  }

  const open = new Set(["all", "playlist", "songs"]);
  const SECS = () => [
    { id: "all", t: "All songs — overview", m: `${SONGS.length} songs · 19 stages`, b: grid },
    { id: "songs", t: "Song cards", m: `${SONGS.length} cards`, b: () => cards(reviews) },
    { id: "playlist", t: "Playlist", m: `${PLAYLIST.length} tracks · originals`, b: playlist },
    { id: "lyrics-overview", t: "Lyrical overview", m: `${SONGS.length} songs · ${Object.keys(THEMES || {}).length} themes`, b: lyricalOverview },
    ...PHASES.map((p) => ({ id: p.id, t: p.name, m: p.id === "pre" ? `Suno ${countDone("Suno demo")}/${SONGS.length} · Logic ${countDone("Logic import")}/${SONGS.length}` : p.id === "prod" ? "Vocals on hold" : "Unknown", b: () => phase(p) })),
    { id: "mkt", t: "Marketing", m: "10 proposed to-dos", b: () => MKT },
    { id: "art", t: "Artwork / brand", m: "Ash Wings · Ink & Paper", b: () => ART }
  ];

  /* ---------- Lyric cards: lazy faded backgrounds + modal ---------- */
  let bgObs = null;
  function lazyBgs() {
    const els = $$(".card-bg[data-bg]");
    const load = (el) => { const u = el.dataset.bg; el.removeAttribute("data-bg"); const im = new Image(); im.onload = () => { el.style.backgroundImage = `url(${u})`; el.classList.add("in"); }; im.src = u; };
    if (!("IntersectionObserver" in window)) { els.forEach(load); return; }
    if (bgObs) bgObs.disconnect();
    bgObs = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { bgObs.unobserve(en.target); load(en.target); } }), { rootMargin: "300px 0px" });
    els.forEach((el) => bgObs.observe(el));
  }
  let lcDlg = null, lcReturn = null;
  function lyricModal() {
    if (lcDlg) return lcDlg;
    lcDlg = document.createElement("dialog");
    lcDlg.className = "lc-modal";
    lcDlg.setAttribute("aria-label", "Lyric card");
    lcDlg.innerHTML = `<button type="button" class="lc-x" aria-label="Close lyrics">✕</button><div class="lc-wrap"></div>`;
    document.body.append(lcDlg);
    lcDlg.addEventListener("click", (e) => {
      if (e.target.closest(".lc-x") || !e.target.closest(".lc")) lcDlg.close();
    });
    lcDlg.addEventListener("close", () => {
      document.body.classList.remove("lc-lock");
      lcDlg.querySelector(".lc-wrap").innerHTML = "";
      if (lcReturn) { lcReturn.focus({ preventScroll: true }); lcReturn = null; }
    });
    return lcDlg;
  }
  function openLyric(id, from) {
    const d = lyricModal();
    const s = byId(id);
    d.setAttribute("aria-label", (s ? s.title : "Song") + " lyric card");
    d.querySelector(".lc-wrap").innerHTML = window.lyricCardHTML(id, "assets/lyrics/");
    lcReturn = from || null;
    document.body.classList.add("lc-lock");
    if (typeof d.showModal === "function") d.showModal(); else d.setAttribute("open", "");
    d.scrollTop = 0;
    d.querySelector(".lc-x").focus({ preventScroll: true });
  }

  function paintBreakouts() {
    const secs = SECS();
    const B = $("#breakouts"), T = $("#tiles");
    const num = (i) => String(i + 1).padStart(2, "0");
    B.innerHTML = secs.map((x, i) => `<div class="acc" id="sec-${x.id}"><button class="acc-h" type="button" aria-expanded="false" aria-controls="body-${x.id}" id="h-${x.id}" data-sec="${x.id}"><span class="no">${num(i)}</span><span class="tt">${x.t}</span><span class="ss">${x.m}</span><span class="pm" aria-hidden="true">+</span></button><div class="acc-b" id="body-${x.id}" role="region" aria-labelledby="h-${x.id}" hidden>${x.b()}</div></div>`).join("");
    T.innerHTML = secs.map((x, i) => `<button class="tile" type="button" data-sec="${x.id}" aria-expanded="false" aria-controls="body-${x.id}"><span class="n">${num(i)}</span><span class="t">${x.t}</span><span class="m">${x.m}</span></button>`).join("");
    bindDynamic();
    sync();
    syncAudioUI();
    lazyBgs();
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
    if (tbl) tbl.style.minWidth = v === "all" ? "1680px" : "0";
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
    const mp = e.target.closest("[data-mp]");
    if (mp) { toggleSong(mp.dataset.mp); return; }
    const ms = e.target.closest("[data-mpseek]");
    if (ms) {
      const r = ms.getBoundingClientRect();
      const f = (e.clientX - r.left) / r.width;
      if (ms.dataset.mpseek !== curId) {
        playSong(ms.dataset.mpseek);
        audio.addEventListener("loadedmetadata", () => seekFrac(f), { once: true });
      } else seekFrac(f);
      return;
    }
    const plb = e.target.closest("[data-pl]");
    if (plb) {
      const a = plb.dataset.pl;
      if (a === "prev") step(-1);
      else if (a === "next") step(1);
      else if (!curId) step(0);
      else audio.paused ? playSong(curId) : audio.pause();
      return;
    }
    const lyb = e.target.closest("[data-lyric]");
    if (lyb) { openLyric(lyb.dataset.lyric, lyb); return; }
    const plr = e.target.closest("[data-plrow]");
    if (plr) { toggleSong(plr.dataset.plrow); return; }
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
        if (!c.querySelector("[data-lyric]")) c.querySelectorAll("details").forEach((d, i) => { if (i === 0) d.open = true; });
        c.scrollIntoView({ behavior: "smooth", block: "center" });
        const sm = c.querySelector("[data-lyric]") || c.querySelector("summary");
        if (sm) sm.focus();
      }
      return;
    }
    const sortBtn = e.target.closest("[data-sort]");
    if (sortBtn) {
      const key = sortBtn.dataset.sort;
      if (sortBy.key === key) sortBy.dir = sortBy.dir === "asc" ? "desc" : "asc";
      else { sortBy.key = key; sortBy.dir = key === "n" ? "asc" : "desc"; }
      const tb = $("#tbl tbody");
      if (tb) tb.innerHTML = tableRows();
      const headRow = $("#tbl thead tr:last-child");
      if (headRow) {
        const rebuilt = document.createElement("tr");
        rebuilt.innerHTML = `${sortHeader("n", "Song", "song")}${sortHeader("score", "Score", "score-col")}${PHASES.map((p) => p.stages.map((s, i) =>
          sortHeader("stage:" + s, s, (i ? "" : "grp ") + (VOX.has(s) ? "dim" : ""), `data-c="${p.id}"`, VOX.has(s) ? "<small>Vox TBD</small>" : "")
        ).join("")).join("")}`;
        headRow.replaceWith(rebuilt);
      }
      setPh(phFilter);
      filterSongs();
      return;
    }
    const p = e.target.closest("[data-ph]");
    if (p) { setPh(p.dataset.ph); return; }
    if (e.target.id === "csv") {
      const rows = [["Song", "Year written", "Tuning", "Score", "Votes", ...PHASES.flatMap((p) => p.stages.map((s) => p.name + ": " + s))]];
      SONGS.forEach((s) => {
        const tly = songTally(reviews[s.id]);
        rows.push([s.title, s.year, s.tuning, tly.votes ? fmtAvg(tly.avg) : "", tly.votes || "", ...PHASES.flatMap((p) => p.stages.map((x) => LBL[st(x, s)]))]);
      });
      const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
      a.download = "WBA_ExitUs_status.csv";
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }
  });

  document.addEventListener("input", (e) => {
    if (e.target.id !== "pl-range") return;
    const f = e.target.value / 1000;
    e.target.style.setProperty("--p", (f * 100).toFixed(2) + "%");
    seekFrac(f);
  });

  document.addEventListener("submit", async (e) => {
    const form = e.target.closest("form.rev");
    if (!form) return;
    e.preventDefault();
    const id = form.dataset.rev;
    const raw = (form.querySelector("input[type=radio]:checked") || {}).value;
    const picked = raw ? Number(raw) : null;
    const notes = ((form.querySelector("textarea") || {}).value || "").trim();
    const mine = currentScores(reviews[id] || [])[user];
    const scoreChanged = isScore(picked) && picked !== mine;
    if (!notes && !scoreChanged) {
      alert(isScore(picked) || isScore(mine) ? "Change the score or add a note to save." : "Pick a score or add a note.");
      return;
    }
    const scoreToSend = notes && !scoreChanged ? null : picked;
    try { reviews[id] = await window.WBAStorage.addReview(id, user, scoreToSend, notes); }
    catch (err) { alert("Couldn't save your review. Check your connection and try again."); return; }
    refresh();
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
    return { openDetails, q, ph: phFilter, sortKey: sortBy.key, sortDir: sortBy.dir };
  }

  function restoreUI(snap) {
    if (snap.sortKey) sortBy = { key: snap.sortKey, dir: snap.sortDir || "asc" };
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
  startCountdown();

  Promise.all([window.WBAStorage.getAll(), window.WBAStorage.getStages()]).catch(() => [{}, {}]).then(([rev, stg]) => {
    reviews = rev || {};
    stages = stg || {};
    updateHeroCounts();
    paintBreakouts();
    setPh("pre");
    gate();
  });
})();
