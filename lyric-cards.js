// WBA lyric cards (site build): config + renderer. Template = approved v5 card.
// Assets: assets/lyrics/art_<id>.webp, title_<id>.webp, bg_<id>.webp (faded song-card background).
window.WBA_PALETTES = {
  "sodium-dusk":    { name: "Sodium Dusk",    sky: "#103842", glow: "#f29a3a" },
  "ember-crimson":  { name: "Ember Crimson",  sky: "#3a0d0c", glow: "#e0452a" }, // anchor tracks only
  "atomic-mint":    { name: "Atomic Mint",    sky: "#1d3b33", glow: "#e8c547" },
  "fallout-violet": { name: "Fallout Violet", sky: "#2a1838", glow: "#ff6b5a" },
  "tidal-indigo":   { name: "Tidal Indigo",   sky: "#101c3a", glow: "#7fd1d8" },
  "ash-gold":       { name: "Ash Gold",       sky: "#2e2618", glow: "#d9a441" },
  "rust-desert":    { name: "Rust Desert",    sky: "#3b1f12", glow: "#f2c26b" },
  "radium-green":   { name: "Radium Green",   sky: "#0f2a12", glow: "#b7f36b" }
};
// ly: desktop lyric box (percent of card) · cols · fs (cqw) · mb: mobile bottom pad (x card width) · scrim: rgba behind lyrics
window.WBA_CARDS = [
  { id: "when-the-love-runs-out", palette: "fallout-violet", value: "night", scene: "Abandoned atomic-age drive-in: one blank tattered screen over a tire-tracked lot, a few burning feathers",
    sky: "#251732", scrim: "rgba(26,14,36,.55)", title: { l: 5, w: 80, t: 1.5 }, ly: { l: 5, r: 5, t: 19.6, cols: 2, fs: 1.5 }, mb: .82 },
  { id: "edges-of-earth", palette: "tidal-indigo", value: "night", scene: "Tire-tracked highway splitting open at an earthquake fissure, the road running off the edge of the world",
    sky: "#040929", scrim: "rgba(4,9,41,.5)", title: { l: 9, w: 76, t: 3 }, ly: { l: 10, r: 10, t: 24.1, cols: 1, fs: 2.2, center: true }, mb: .58 },
  { id: "opposite-day", palette: "radium-green", value: "night", scene: "Toppled atomic-age air-raid siren tower in rubble, radium glow inside — the alarm that rang",
    sky: "#010302", scrim: "rgba(1,6,3,.55)", title: { l: 8, w: 66, t: 1.5 }, ly: { l: 5, r: 4, t: 20.7, cols: 2, fs: 1.38 }, mb: .84 },
  { id: "find-yourself", palette: "ash-gold", value: "dusk", scene: "Lone bent starburst road sign at a dead end, nowhere to go, smoke and a few embers",
    sky: "#7b592f", scrim: "rgba(38,26,10,.62)", title: { l: 4, w: 70, t: 2 }, ly: { l: 41, r: 4, t: 21.2, cols: 1, fs: 1.62 }, mb: .9 },
  { id: "the-alone", palette: "atomic-mint", value: "dusk", scene: "Scorched jet-age finned car seen from behind, tires kicking gravel and choking dust",
    sky: "#47675c", scrim: "rgba(14,32,27,.6)", title: { l: 4, w: 52, t: 1.5 }, ly: { l: 4.5, r: 4, t: 18.0, cols: 2, fs: 1.36 }, mb: .72 },
  { id: "the-getaway-theme", palette: "sodium-dusk", value: "dusk", scene: "Burned-out chrome-finned wagon on the highway shoulder, rocket on its gantry, starburst sign, ruined diner (wave removed)",
    sky: "#0b3943", scrim: "rgba(16,56,66,.5)", title: { l: 3, w: 74, t: 1.2 }, ly: { l: 35, r: 3.5, t: 20, cols: 2, fs: 1.6 }, mb: 1.1 },
  { id: "living-again", palette: "rust-desert", value: "dusk", scene: "A single giant feather burning back to life on cracked earth, embers lifting",
    sky: "#452410", scrim: "rgba(46,22,10,.55)", title: { l: 5, w: 72, t: 2 }, ly: { l: 10, r: 10, t: 22.4, cols: 1, fs: 2.0, center: true }, mb: 0.85 },
  { id: "wild-heart", palette: "fallout-violet", value: "night", scene: "Smoking impact crater torn through the highway, smoke column rising",
    sky: "#251148", scrim: "rgba(30,12,48,.55)", title: { l: 4, w: 70, t: 2 }, ly: { l: 40, r: 4, t: 20.1, cols: 1, fs: 1.6 }, mb: 0.8 },
  { id: "moon", palette: "tidal-indigo", value: "night", scene: "Googie chapel sinking into dark floodwater, its swooping roof still lit",
    sky: "#0d0e2f", scrim: "rgba(10,12,40,.5)", title: { l: 26, w: 48, t: 2 }, ly: { l: 6, r: 6, t: 21.7, cols: 2, fs: 1.75 }, mb: 0.8 },
  { id: "sweet-sweet-love", palette: "ash-gold", value: "dusk", scene: "One giant broken atomic-age gear half-buried in the sand, gold light glowing through its spokes (repainted darker for legibility)",
    sky: "#140f0b", scrim: "rgba(30,22,10,.5)", title: { l: 4, w: 74, t: 2 }, ly: { l: 5, r: 5, t: 16.7, cols: 2, fs: 1.42 }, mb: 0.8 },
  { id: "dirty-talk", palette: "atomic-mint", value: "dusk", scene: "Retro rocket crashed nose-down in the desert, fins in the air",
    sky: "#557b6b", scrim: "rgba(14,34,28,.66)", title: { l: 4, w: 66, t: 2 }, ly: { l: 5, r: 4, t: 19.8, cols: 2, fs: 1.38 }, mb: 0.8 },
  { id: "talk-in-my-sleep", palette: "rust-desert", value: "burn", scene: "Storm of blank burning pages blowing down an empty highway",
    sky: "#451b13", scrim: "rgba(46,18,12,.6)", title: { l: 4, w: 74, t: 1.5 }, ly: { l: 5, r: 4, t: 18.7, cols: 3, fs: 1.16 }, mb: 0.95 },
  { id: "future-tripper", palette: "radium-green", value: "night", scene: "Elevated monorail track snapped off mid-air over the wasteland",
    sky: "#010705", scrim: "rgba(2,12,6,.5)", title: { l: 4, w: 74, t: 2 }, ly: { l: 46, r: 6, t: 19.4, cols: 1, fs: 2.4 }, mb: 0.78 },
  { id: "analog-exe", palette: "sodium-dusk", value: "dusk", scene: "Toppled reel-to-reel tape machine in the desert, tape unspooling, one orange VU light",
    sky: "#00212f", scrim: "rgba(0,30,42,.5)", title: { l: 4, w: 70, t: 2 }, ly: { l: 5, r: 5, t: 20.2, cols: 2, fs: 1.72 }, mb: 0.72 },
  { id: "stuffed-animal", palette: "fallout-violet", value: "night", scene: "Giant cracked, hollow roadside teddy bear statue toppled in the dust",
    sky: "#37204c", scrim: "rgba(36,18,52,.55)", title: { l: 4, w: 74, t: 2 }, ly: { l: 6, r: 6, t: 20.0, cols: 1, fs: 1.7 }, mb: 0.76 },
  { id: "ticket-to-hell", palette: "ember-crimson", value: "burn", scene: "Ruined googie ticket booth at a broken gate, the road beyond descending into a fire canyon",
    sky: "#330a0b", scrim: "rgba(40,6,6,.62)", title: { l: 4, w: 74, t: 1.5 }, ly: { l: 5, r: 5, t: 20.1, cols: 2, fs: 1.5 }, mb: 0.82 },
  { id: "big-bang", palette: "tidal-indigo", value: "night", scene: "Derailed jet-age streamliner wrecked across bent rails, dust rising",
    sky: "#00112d", scrim: "rgba(2,10,40,.5)", title: { l: 4, w: 52, t: 2 }, ly: { l: 5, r: 5, t: 17.8, cols: 2, fs: 1.45 }, mb: 0.75 },
  { id: "out", palette: "ash-gold", value: "night", scene: "Empty cracked parking lot, a lone starburst googie lamp casting the only light",
    sky: "#231b13", scrim: "rgba(30,22,14,.55)", title: { l: 4, w: 74, t: 2 }, ly: { l: 36, r: 4, t: 19.9, cols: 1, fs: 1.42 }, mb: 0.8 },
  { id: "solarace", palette: "atomic-mint", value: "dusk", scene: "Rocket standing alone on its launch gantry, a thin smoke trail drifting off the pad",
    sky: "#004748", scrim: "rgba(0,40,40,.55)", title: { l: 4, w: 66, t: 2 }, ly: { l: 5, r: 5, t: 19.1, cols: 2, fs: 1.9 }, mb: 0.72 },
  { id: "down", palette: "ember-crimson", value: "burn", scene: "Highway collapsing into a glowing sinkhole, a chrome-finned wagon tipping in",
    sky: "#140707", scrim: "rgba(30,6,6,.55)", title: { l: 29, w: 42, t: 2 }, ly: { l: 6, r: 6, t: 18.3, cols: 2, fs: 1.85 }, mb: 0.9 },
  { id: "on-the-rocks", palette: "rust-desert", value: "dusk", scene: "Tidal wave exploding over jagged black sea rocks",
    sky: "#301a12", scrim: "rgba(36,18,10,.7)", title: { l: 4, w: 64, t: 1.5 }, ly: { l: 4, r: 4, t: 19.0, cols: 3, fs: 1.18 }, mb: 0.72 },
  { id: "just-a-beautiful-mess", palette: "radium-green", value: "night", scene: "Glowing scrapyard heap of chrome tail fins and hubcaps",
    sky: "#000607", scrim: "rgba(0,8,6,.5)", title: { l: 4, w: 84, t: 4 }, ly: { l: 5, r: 5, t: 21.1, cols: 2, fs: 1.65 }, mb: 0.78 },
  { id: "hollywood-has-fallen", palette: "fallout-violet", value: "night", scene: "Darkened atomic-age Hollywood Hills mansion over the fallen sign, a tent encampment in the park below, flaming coral sky",
    sky: "#2a173d", scrim: "rgba(30,14,44,.55)",
    stanzas: [["Fading slowly", "You won’t show me", "Who you really are", "(Left in the dark)"],
      ["Out of nowhere", "Yea, I’ve been there", "And I can tell when I’m bein", "(Left in the dark)"],
      ["Mind your manners", "When your mansion’s", "left in the dark", "Just like the tents in the park", "When you’re left in the dark", "Just like the tents in the park"],
      ["Think I can’t see you? (It’s true)", "Can’t trust a silhouette (that’s you)", "I’m done defining (defining)", "What my eyes see through you", "It’s nothing"],
      ["Sole provider", "Hides the lighter", "When it’s needed most"],
      ["Just like the tents in the park, left in the dark"]], title: { l: 4, w: 78, t: 2 }, ly: { l: 5, r: 5, t: 21.8, cols: 2, fs: 1.6 }, mb: 0.8 }
];

// Each lyric section once: drop [labels]; remove any run of >=3 lines already sung earlier
// (prefix-tolerant so "living it" == "living it, now"); break stanzas around first-time repeated runs.
window.lyricsOnce = function (text) {
  const norm = (l) => l.toLowerCase().replace(/[’'`]/g, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
  const eq = (a, b) => a === b || (a.length > 8 && b.length > 8 && (a.startsWith(b) || b.startsWith(a)));
  const lines = []; // {t, brk}
  text.split("\n").forEach((raw) => {
    const t = raw.trim();
    if (!t) { lines.push({ brk: true }); return; }
    if (/^\[.*\]$/.test(t) || /^(verse|chorus|pre-chorus|post-chorus|bridge|outro|outtro|intro|last chorus)\b[^a-z]*$/i.test(t.replace(/[:\d\s]+$/, "")) && t.length < 22 && /:$|^\[|^(verse|chorus|pre|post|bridge|out|intro|last)/i.test(t)) { lines.push({ brk: true }); return; }
    lines.push({ t, n: norm(t) });
  });
  const txt = lines.filter((x) => !x.brk);
  const idx = []; lines.forEach((x, i) => { if (!x.brk) idx.push(i); });
  const N = txt.length, drop = new Array(N).fill(false), startBrk = new Array(N).fill(false);
  const hasBreaks = lines.some((x) => x.brk);
  const gap = (m) => m > 0 && idx[m] - idx[m - 1] > 1; // stanza break before text line m
  let i = 0;
  while (i < N) {
    let best = 0, bestJ = -1;
    for (let j = 0; j < i; j++) {
      let k = 0; while (i + k < N && j + k < i && (k === 0 || !gap(i + k)) && eq(txt[i + k].n, txt[j + k].n)) k++;
      if (k > best) { best = k; bestJ = j; }
    }
    if (best >= 3) {
      for (let k = 0; k < best; k++) drop[i + k] = true;
      if (!hasBreaks) { startBrk[bestJ] = true; if (bestJ + best < N) startBrk[bestJ + best] = true; if (i + best < N) startBrk[i + best] = true; }
      i += best;
    } else i++;
  }
  const stanzas = []; let cur = [];
  const flush = () => { if (cur.length) stanzas.push(cur); cur = []; };
  for (let m = 0; m < N; m++) {
    const prevBrk = m > 0 && idx[m] - idx[m - 1] > 1;
    if (prevBrk || startBrk[m]) flush();
    if (!drop[m]) cur.push(txt[m].t);
  }
  flush();
  // merge stray 1-line stanzas into the previous stanza when tiny
  return stanzas.filter((s) => s.length);
};

window.lyricCardHTML = function (id, base) {
  base = base || "assets/lyrics/";
  const D = window.WBA_DATA, P = window.WBA_PALETTES;
  const c = window.WBA_CARDS.find((x) => x.id === id);
  const s = D.SONGS.find((x) => x.id === id);
  if (!c || !s) return "";
  const esc = (t) => String(t).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  const pal = P[c.palette];
  const st = c.stanzas || (s.lyrics ? window.lyricsOnce(s.lyrics) : null); // c.stanzas: hand-deduped override when the auto pass misses a near-repeat
  const ly = c.ly;
  return `<article class="lc" id="lc-${c.id}" data-palette="${c.palette}" style="--sky:${c.sky};--glow:${pal.glow};--scrim:${c.scrim};--mb:${c.mb};--art:url(${base}art_${c.id}.webp)">
  <h2 style="--tl:${c.title.l}%;--tw:${c.title.w}%;--tt:${c.title.t}%"><img src="${base}title_${c.id}.webp" alt="${esc(s.title)}"></h2>
  <div class="ly${ly.center ? " ctr" : ""}" style="--ll:${ly.l}%;--lr:${ly.r}%;--lt:${ly.t}%;--cols:${ly.cols};--fs:${ly.fs}cqw">${!st ? `<p class="soon">Lyrics coming soon</p>` : st.map((L) => `<div class="st${L.length > 9 ? " long" : ""}">${L.map((l) => `<p>${esc(l)}</p>`).join("")}</div>`).join("")}</div>
</article>`;
};
window.hasLyricCard = (id) => window.WBA_CARDS.some((x) => x.id === id);
