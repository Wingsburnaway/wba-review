/* Shared storage adapter.
   Now: localStorage on this device only.
   Later: change kind to "remote" and point endpoint at the chosen backend
   (see README.md). Keep the same Reviews shape so the UI does not change. */
(function (w) {
  const KEY = "wba-exit-us-reviews-v1";
  /* Reviews shape:
     { [songId]: [ { user, score, notes, ts } ] }
     Newest entries are appended. The latest entry per user is their current review. */

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); }
    catch { return {}; }
  }
  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  w.WBAStorage = {
    kind: "local",
    label: "Saving on this device only — not shared with the band until a backend is connected.",
    async getAll() { return load(); },
    async addReview(songId, user, score, notes) {
      const data = load();
      if (!data[songId]) data[songId] = [];
      data[songId].push({
        user,
        score,
        notes: String(notes || "").trim(),
        ts: new Date().toISOString()
      });
      save(data);
      return data[songId];
    }
  };
})(window);
