/* Shared storage adapter: Supabase (shared with the whole band).
   Tables: reviews(song_id, user, score, notes, ts), stage_checks(song_id, stage, done, user, ts).
   Shapes returned to the UI:
     reviews: { [songId]: [ { user, score, notes, ts } ] }  (oldest first)
     stages:  { [songId]: [ { stage, done, user, ts } ] }   (oldest first) */
(function (w) {
  const URL = "https://pacygrdrbuqpwzlsihco.supabase.co/rest/v1/";
  const KEY = "sb_publishable_BOHmCc-AFhEVp-foMQpO1A_xiGqpmRm";
  const H = { apikey: KEY, Authorization: "Bearer " + KEY, "Content-Type": "application/json" };

  async function req(path, opts) {
    const r = await fetch(URL + path, Object.assign({ headers: H }, opts || {}));
    const text = await r.text();
    if (!r.ok) throw new Error("Save failed (" + r.status + "): " + text);
    /* Inserts use Prefer: return=minimal, so Supabase answers 201 Created with an EMPTY body.
       Calling r.json() on that threw, which showed "Couldn't save" even though the row was saved. */
    return text ? JSON.parse(text) : null;
  }
  function group(rows, map) {
    const out = {};
    (rows || []).forEach((row) => { (out[row.song_id] = out[row.song_id] || []).push(map(row)); });
    return out;
  }
  const rev = (r) => ({ user: r.user, score: r.score, notes: r.notes || "", ts: r.ts });
  const stg = (r) => ({ stage: r.stage, done: r.done, user: r.user, ts: r.ts });

  w.WBAStorage = {
    kind: "remote",
    label: "Shared with the band — saves instantly for everyone.",
    async getAll() { return group(await req("reviews?select=*&order=ts.asc"), rev); },
    async addReview(songId, user, score, notes) {
      const body = { song_id: songId, user, notes: String(notes || "").trim(),
        score: (score === 1 || score === 2 || score === 3) ? score : null };
      await req("reviews", { method: "POST", headers: Object.assign({ Prefer: "return=minimal" }, H),
        body: JSON.stringify(body) });
      return group(await req("reviews?select=*&song_id=eq." + encodeURIComponent(songId) + "&order=ts.asc"), rev)[songId] || [];
    },
    async getStages() { return group(await req("stage_checks?select=*&order=ts.asc"), stg); },
    async addStageCheck(songId, stage, done, user) {
      await req("stage_checks", { method: "POST", headers: Object.assign({ Prefer: "return=minimal" }, H),
        body: JSON.stringify({ song_id: songId, stage, done: !!done, user }) });
      return group(await req("stage_checks?select=*&song_id=eq." + encodeURIComponent(songId) + "&order=ts.asc"), stg)[songId] || [];
    }
  };
})(window);
