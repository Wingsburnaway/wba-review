/* WBA Exit Us catalog. Edit this file to add lyrics, years, tunings, or links. */
window.WBA_DATA = (() => {
  const KEEP = "https://www.dropbox.com/scl/fo/qnbhzu8cy86km14gehvbc/AFzGM4yrVWhb9vDIiC1Si48?rlkey=f4awu5k1kg42pwq18k8ccigjr&dl=0&preview=";
  const keep = (filename) => ({
    url: KEEP + encodeURIComponent(filename),
    file: "/EMO/Keepers/" + filename,
    label: filename
  });

  const MEMBERS = ["Rob", "Gary", "Eddie", "Daniel", "Tony"];

  const PHASES = [
    { id: "pre", name: "Pre-production", stages: ["Suno demo", "Logic import", "Drum demo", "Vocal demo", "Keys demo", "Click / guide"] },
    { id: "prod", name: "Production", stages: ["Drums", "Drum edits", "Bass", "Bass edits", "Guitar", "Guitar edits", "Keys", "Solos", "Vocals", "Vocal edits"] },
    { id: "post", name: "Post", stages: ["Mix", "Stereo masters", "Atmos mixes"] }
  ];

  const VOX = new Set(["Vocals", "Vocal edits"]);

  /* Lyrics: bodies were pasted in the Discoteca chat for 13 songs but were not
     saved to a file, and this build could not recover the full text. Status
     "chat" means they exist off-site; "missing" means never provided. */
  const CHAT = "Lyrics were pasted in the band chat. The full text is not in this file yet — paste them here when you can.";

  const songs = [
    { id: "when-the-love-runs-out", title: "When The Love Runs Out", suno: "done",
      demo: keep("When The Love Runs Out.wav"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEZfSmjEITaFmvWsLQ5zm0Y/When%20The%20Love%20Runs%20Out%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", file: "/EMO/PRE PRODUCTION/When The Love Runs Out Inst.mp3", label: "When The Love Runs Out Inst.mp3" },
      lyricsStatus: "chat", lyrics: "" },
    { id: "edges-of-earth", title: "Edges of Earth", suno: "done",
      demo: keep("Edges of Earth.mp3"), lyricsStatus: "chat", lyrics: "" },
    { id: "opposite-day", title: "Opposite Day", suno: "done",
      demo: keep("Opposite Day.mp3"), lyricsStatus: "chat", lyrics: "" },
    { id: "find-yourself", title: "Find Yourself", suno: "done",
      demo: keep("Find Yourself.mp3"), lyricsStatus: "chat", lyrics: "" },
    { id: "the-alone", title: "The Alone", suno: "done",
      demo: keep("The Alone.mp3"), lyricsStatus: "missing", lyrics: "" },
    { id: "living-again", title: "Living Again", suno: "done",
      demo: keep("Living Again.mp3"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJKB32vXWHfbNuI3ToMXjVY/Living%20Again%20inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", file: "/EMO/PRE PRODUCTION/Living Again inst.mp3", label: "Living Again inst.mp3" },
      lyricsStatus: "chat", lyrics: "" },
    { id: "why-should-i-be-surprised", title: "Why Should I Be Surprised", suno: "done",
      demo: keep("Why Should I Be Surprised.mp3"), lyricsStatus: "missing", lyrics: "" },
    { id: "the-getaway-theme", title: "The Getaway Theme", suno: "done",
      demo: keep("The Getaway Theme.wav"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/69pgw4086od35smdadhft/AIo04TUib7WtizrNkKoymcQ/THE%20GETAWAY%20THEME%20inst.wav?dl=0&rlkey=8gee2im37j604z6l722ynw5hd", file: "/EMO/PRE PRODUCTION/THE GETAWAY THEME 175 BPM/THE GETAWAY THEME inst.wav", label: "THE GETAWAY THEME inst.wav" },
      lyricsStatus: "chat", lyrics: "" },
    { id: "wild-heart", title: "Wild Heart", dropboxTitle: "Wild", suno: "done",
      demo: keep("Wild.wav"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJGRStPrdzZ_ERHnPtLUTio/Wild%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", file: "/EMO/PRE PRODUCTION/Wild Inst.mp3", label: "Wild Inst.mp3" },
      lyricsStatus: "chat", lyrics: "" },
    { id: "moon", title: "Moon", suno: "done",
      demo: keep("Moon.mp3"), lyricsStatus: "chat", lyrics: "" },
    { id: "sweet-sweet-love", title: "Sweet Sweet Love", suno: "done",
      demo: keep("Sweet Sweet Love.mp3"), lyricsStatus: "chat", lyrics: "" },
    { id: "dirty-talk", title: "Dirty Talk", suno: "done",
      demo: keep("Dirty Talk.mp3"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/k48qzw2dxs30cis27pg25/AMd7YeUuNfM516g8j-t2JW0/DIRTY%20TALK%20inst.wav?dl=0&rlkey=y6a4clxpgektix3r5s00rbgm7", file: "/EMO/PRE PRODUCTION/DIRTY TALK 125 BPM/DIRTY TALK inst.wav", label: "DIRTY TALK inst.wav" },
      lyricsStatus: "chat", lyrics: "" },
    { id: "orion", title: "Orion", suno: "done",
      demo: keep("Orion.mp3"), lyricsStatus: "chat", lyrics: "" },
    { id: "talk-in-my-sleep", title: "Talk in My Sleep (Edit)", suno: "done",
      demo: keep("Talk in My Sleep (Edit).mp3"), lyricsStatus: "chat", lyrics: "" },
    { id: "future-tripper", title: "Future Tripper", suno: "done",
      demo: keep("Future Tripper.mp3"), lyricsStatus: "chat", lyrics: "" },
    { id: "move-me", title: "Move Me", suno: "done",
      demo: keep("Move Me.mp3"), lyricsStatus: "missing", lyrics: "" },
    /* Five added Nov 10, 2026. Demos found at Dropbox root, not in the public Keepers folder, so no public link yet. Suno unconfirmed. */
    { id: "analog-exe", title: "Analog.exe", suno: "unknown",
      demoFound: { file: "/ANALOG EXE.wav", note: "Found at Dropbox root. Not in the shared Keepers folder, so no public link yet." },
      lyricsStatus: "missing", lyrics: "" },
    { id: "stuffed-animal", title: "Stuffed Animal", suno: "unknown",
      demoFound: { file: "/Stuffed Animal.wav", note: "Found at Dropbox root. Not in the shared Keepers folder, so no public link yet." },
      lyricsStatus: "missing", lyrics: "" },
    { id: "ticket-to-hell", title: "Ticket to Hell", suno: "unknown",
      demoFound: { file: "/TICKET TO HELL.wav", note: "Found at Dropbox root. Not in the shared Keepers folder, so no public link yet." },
      lyricsStatus: "missing", lyrics: "" },
    { id: "big-bang", title: "Big Bang", suno: "unknown",
      demoFound: { file: "/Big Bang.wav", note: "Found at Dropbox root. Not in the shared Keepers folder, so no public link yet." },
      lyricsStatus: "missing", lyrics: "" },
    { id: "meteorites", title: "Meteorites", suno: "unknown",
      demoFound: { file: "/Meteorites.wav", note: "Found at Dropbox root. Not in the shared Keepers folder, so no public link yet." },
      lyricsStatus: "missing", lyrics: "" },
    { id: "out", title: "Out", suno: "unknown",
      lyricsStatus: "missing", lyrics: "" }
  ];

  songs.forEach((s, i) => {
    s.n = i + 1;
    s.year = "TBD";
    s.tuning = "TBD";
    if (!s.instrumental) s.instrumental = null;
    if (!s.drumDemo) s.drumDemo = null;
  });

  return { MEMBERS, PHASES, VOX, SONGS: songs, CHAT_LYRICS_NOTE: CHAT };
})();
