/* Shared storage adapter.
   Now: localStorage on this device only.
   Later: change kind to "remote" and point endpoint at the chosen backend
   (see README.md). Keep the same Reviews and Stages shapes so the UI does not change. */
(function (w) {
  const REVIEW_KEY = "wba-exit-us-reviews-v1";
  const STAGE_KEY = "wba-exit-us-stages-v1";
  /* Reviews shape:
     { [songId]: [ { user, score, notes, ts } ] }
     Newest entries are appended. The latest entry per user is their current review. */
  /* Stages shape:
     { [songId]: [ { stage, done, user, ts } ] }
     Newest entries are appended. The latest entry for a stage is its current check. */

  function load(key) {
    try { return JSON.parse(localStorage.getItem(key) || "{}"); }
    catch { return {}; }
  }
  function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  w.WBAStorage = {
    kind: "local",
    label: "Saving on this device only — not shared with the band until a backend is connected.",
    async getAll() { return load(REVIEW_KEY); },
    async addReview(songId, user, score, notes) {
      const data = load(REVIEW_KEY);
      if (!data[songId]) data[songId] = [];
      data[songId].push({
        user,
        score,
        notes: String(notes || "").trim(),
        ts: new Date().toISOString()
      });
      save(REVIEW_KEY, data);
      return data[songId];
    },
    async getStages() { return load(STAGE_KEY); },
    async addStageCheck(songId, stage, done, user) {
      const data = load(STAGE_KEY);
      if (!data[songId]) data[songId] = [];
      data[songId].push({
        stage,
        done: !!done,
        user,
        ts: new Date().toISOString()
      });
      save(STAGE_KEY, data);
      return data[songId];
    }
  };
})(window);
