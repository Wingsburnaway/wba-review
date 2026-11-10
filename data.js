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

  /* Lyrics: verbatim words from Rob's pastes in the Discoteca chat (t4u–t7u,
     Nov 6, 2026). lyricsStatus "present" means the body is in this file;
     "missing" means never provided. Line breaks were reconstructed from
     typography because the searchable transcript index had collapsed newlines. */
  const CHAT = "Lyrics were pasted in the band chat. The full text is not in this file yet — paste them here when you can.";

  const songs = [
    { id: "when-the-love-runs-out", title: "When The Love Runs Out", suno: "done",
      demo: keep("When The Love Runs Out.wav"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEZfSmjEITaFmvWsLQ5zm0Y/When%20The%20Love%20Runs%20Out%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", file: "/EMO/PRE PRODUCTION/When The Love Runs Out Inst.mp3", label: "When The Love Runs Out Inst.mp3" },
      lyricsStatus: "present", lyrics: "You don’t know the half of it\nSo much pain all you can do is laugh at it\nEnough untruth\nYou could re-write the past with it\nWhen the love runs out\nAll you have are memories on a drive\nDigitally keep them alive\nWhen the love runs out\nAll you have are ghosts in a bed\nWondering what could have been\nWhile they’re living it\nYou can’t tell me this ain’t real\nBut today\nA fantasy is all I feel\nNo simulation\nIf you take love what’s left to steal?\nWhen the love runs out\nAll you have are memories on a drive\nDigitally keep them alive\nWhen the love runs out\nAll you have are ghosts in a bed\nWondering what could have been\nWhile they’re living it, now\nLiving it now, til the love runs out\nLiving it now (two ghosts in a bed)\nTil the love runs out\nLiving it now (it’s all in your head)\nTil the love runs out" },
    { id: "edges-of-earth", title: "Edges of Earth", suno: "done",
      demo: keep("Edges of Earth.mp3"), lyricsStatus: "present", lyrics: "I can't hold on just to help you\nwe don't have long\nyou won't get this time back\nyou can't have it back\nthis line is about you\nbut not cuz I love you, no\nI don't want to, I'm writing this right now\nright under your eyebrow\nCause I can't see the way to my way out\nI've paid my dues without a fair shake\nno you're stable just like an earthquake\nYou were my dream but now I'm awake\nyou drive me to the edges of the earth...ride with me" },
    { id: "opposite-day", title: "Opposite Day", suno: "done",
      demo: keep("Opposite Day.mp3"), lyricsStatus: "present", lyrics: "It's a fake, fade away, temporary you\nRewind the tape, years replay, now you're the enemy too\nEveryone is so afraid\nWords like violence in the fray\nSinging bitching all the way\nThey're laughing in your face\nSlow down, grow up, find your place\nBreathe out, sit down, listen, shut your face\nTie to lies to the ram, force it through the wall\nThere behind the ruins lie the greatest monsters of them all\nBattery against your head, repetition all is red\nCrushing burning tolerance\nThey're laughing in your face\nSlow down, grow up, find your place\nBreathe out, sit down, listen, shut your face\nYou become what you create but still unsatisfied\nDiscovering the easy way, the hardest path to walk in life\nMarching forward mania, fetish for sensational\nEat yourself you cannibal, how does your shit taste?\nHeroes cursed and put to shame\nInfants riot, dominate\nForfeit losers win the game\nFree as long as we don't stay\nValor stolen shift the blame\nBroadcast virtue all the same\nWake up the alarm rang\nSurprise fuckface, open your eyes\nIt's opposite day" },
    { id: "find-yourself", title: "Find Yourself", suno: "done",
      demo: keep("Find Yourself.mp3"), lyricsStatus: "present", lyrics: "There's nowhere to go\nThere's nowhere to hide\nThere's nothing left to feel when you're not by my side\nGive it up, find yourself inside this heart of mine\nWhen will you let yourself be loved?\nA question asked from moments past\nTore down a wall you built back up\nConscience patient, waiting\nPast and future commiserating\nThere's nowhere to go\nThere's nowhere to hide\nThere's nothing left to feel when you're not by my side\nGive it up, find yourself inside this heart of mine\nInside this heart of mine\nThere's nowhere to go\nThere's nowhere to hide\nThere's nothing left to feel when you're not by my side\nThere's nowhere to go\nThere's nowhere to hide\nThere's nothing left to feel when you're not by my side\nI've laid it out upon the line\nI've bled it out now you decide\nGive it up or find yourself inside this heart of mine" },
    { id: "the-alone", title: "The Alone", suno: "done",
      demo: keep("The Alone.mp3"), lyricsStatus: "missing", lyrics: "" },
    { id: "living-again", title: "Living Again", suno: "done",
      demo: keep("Living Again.mp3"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJKB32vXWHfbNuI3ToMXjVY/Living%20Again%20inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", file: "/EMO/PRE PRODUCTION/Living Again inst.mp3", label: "Living Again inst.mp3" },
      lyricsStatus: "present", lyrics: "She said I’m already over it\nAnd life will still move on\nI’m dead sooner or later\nI got mistakes to learn from\nThis is somebody’s daughter\nRipped off like bong water\nRobbed of the time we got\nThat she did not, that she did not\nHey, what’s the time?\nWhen, is it right to start again?\nLa la la la la living again\nShe left without a reason\nThat ever needs explaining\nIt meant all of the world, yet\nWouldn’t you do the same thing?" },
    { id: "why-should-i-be-surprised", title: "Why Should I Be Surprised", suno: "done",
      demo: keep("Why Should I Be Surprised.mp3"), lyricsStatus: "missing", lyrics: "" },
    { id: "the-getaway-theme", title: "The Getaway Theme", suno: "done",
      demo: keep("The Getaway Theme.wav"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/69pgw4086od35smdadhft/AIo04TUib7WtizrNkKoymcQ/THE%20GETAWAY%20THEME%20inst.wav?dl=0&rlkey=8gee2im37j604z6l722ynw5hd", file: "/EMO/PRE PRODUCTION/THE GETAWAY THEME 175 BPM/THE GETAWAY THEME inst.wav", label: "THE GETAWAY THEME inst.wav" },
      lyricsStatus: "present", lyrics: "I’ve got the ticket\nTo any party in town\nA car to drive\nMy friends around\nIt wasn’t mine\nIt wasn’t cool\nIt’s what I had to make do\nI’ve got a plan\nTo turn it all around\nA car to escape\nWhat brought me down\nIt wasn’t mine\nIt wasn’t cool\nIt’s what I had to make do\n[chorus]\nThe plans were made\nThe map was drawn\nI had it all figured out\nHow to run and survive\nMake it on my own this time\nYears in the making\nMy hands are shaking\nAnd for some reason I can’t put it in drive\nIt wasn’t mine\nIt wasn’t cool\nIt’s what I had to make do\nThe runaway\nThe great escape\nIt’s what I had to make do\nIf I can’t go I guess I’ll stay\nAnd drive friends to a party\nIt’s what I had to make do\n[chorus]\nThe plans were made\nThe map was drawn\nI had it all figured out\nHow to run and survive\nMake it on my own this time\nYears in the making\nMy hands are shaking\nAnd for some reason I can’t put it in drive" },
    { id: "wild-heart", title: "Wild Heart", dropboxTitle: "Wild", suno: "done",
      demo: keep("Wild.wav"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJGRStPrdzZ_ERHnPtLUTio/Wild%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", file: "/EMO/PRE PRODUCTION/Wild Inst.mp3", label: "Wild Inst.mp3" },
      lyricsStatus: "present", lyrics: "Under cover of a smoke screen, burning\nYou forgot your life\nAnd the lovers of your past and future\nThey remind you why\nSo young, in love the mystery that she supplied\nLegs up, in front kickin a crater in your head tonight\nUnder cover of a wild heart beating\nShe’s more than meets the eye\nBut right now it don’t matter, lookin bloodshot\nStaring into lights\nWhatcha got under the front seat, baby\nCould you step outside and walk the line?\nWoooah\nIt’s the one thing you can’t hide\nWoooah\nWhen your wild heart comes alive" },
    { id: "moon", title: "Moon", suno: "done",
      demo: keep("Moon.mp3"), lyricsStatus: "present", lyrics: "There’s no time to waste\nRunning away\nRisking it on another chance\nSix feet down\nCan’t love me now\nFate won’t wait long for your plans\nSo the world doesn’t change\nEveryone wants the same thing\nJust to know what it feels like to be loved?\nAre we really in pain\nOr paying the price of living\nJust to know what it feels like to be loved?\nLike a wedding gown\nIt’s going down\nThe world can wait for you to come back\nBeauty fades\nBut it’s here today\nStaring me naked in the face\nMan, the world doesn’t change\nEveryone wants the same thing\nJust to know what it feels like to be loved\nAre we really in pain\nOr paying the price of living\nJust to know what it feels like to be loved" },
    { id: "sweet-sweet-love", title: "Sweet Sweet Love", suno: "done",
      demo: keep("Sweet Sweet Love.mp3"), lyricsStatus: "present", lyrics: "I feel that we’re syncing up together\nI know that we’re gonna rock forever\nForever, forever\nIs it so wrong to say it’s right\nThe way I feel with you here tonight\nWithin the darkness there is light\nPeeking in, bringing hope to life\nNow you know what you are\nWhat you are to me\nAnd what I want, what I want\nIs everything that I see\nOh sweet sweet love\nYou are the one I’m dreaming of\nOh sweet sweet love\nTogether sing the anthem\nYou’ll never be abandoned\nI feel that our gears grind well in motion\nThis won’t be some one night long emotion\nI’d give the world to make things right\nAnd now’s my chance with you here tonight\nIf you’re the prize it’s worth the fight\nInfinite colors but we see black and white\nNow you know what there is, what there is to see\nAnd what I you want, what you want, is everything you find in me\nOh sweet sweet love\nYou are the one I’m dreaming of\nOh sweet sweet love\nTogether sing the anthem\nYou’ll never be abandoned now" },
    { id: "dirty-talk", title: "Dirty Talk", suno: "done",
      demo: keep("Dirty Talk.mp3"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/k48qzw2dxs30cis27pg25/AMd7YeUuNfM516g8j-t2JW0/DIRTY%20TALK%20inst.wav?dl=0&rlkey=y6a4clxpgektix3r5s00rbgm7", file: "/EMO/PRE PRODUCTION/DIRTY TALK 125 BPM/DIRTY TALK inst.wav", label: "DIRTY TALK inst.wav" },
      lyricsStatus: "present", lyrics: "[verse]\nAre you waiting for the night\nWhere your stars align\nNow your astronaut arrives\nTo take you far away\nDo you know the way back\nFrom where you’re going?\nAre you ready to be left behind?\n“You should have known me…”\n[chorus]\nWant you to show me\nYou’re also lonely\nYou can behold me\nUntil you loathe me\nConnecting slowly\nAs if you know me\nIt’s just like you told me\nAnything is better than nothing\n[post-chorus]\nAnything is better than nothing\nAnything is better than nothing\n[verse2]\nHave you fought your whole life\nAgainst this gravity?\nDid you wanna take this flight\nLike you were planning me\nYou’re a poison pill, dagger, six-shooter with a sugar side\nYou’re the illusion, misdirecting til my world tastes like cyanide" },
    { id: "orion", title: "Orion", suno: "done",
      demo: keep("Orion.mp3"), lyricsStatus: "present", lyrics: "The smoke is a blowin’\nThey better know that you’re a rising star\nThe proof’s in the puddin’\nShades indoors, cocaine and fancy cars\n(Then It all. Comes. Down.)\nPack your bags we’re heading down below\nBetter grab what you can, it’ll be a while, nobody knows\nYou gotta Hold on tight, the floor is about to drop\nWhen it all comes down (it all comes down) it all comes down, you don’t wanna be on top\nWhen it all comes down (it all comes down) it all comes down, you don’t wanna be on top\nThe makin’s in the fakin’\nBig contracts, Cadillacs, all gone in a day\nBetter get with the gettin’\nAnd sell your soul if you got one to give away\n(Then It all. Comes. Down.)\nPack your bags we’re heading down below\nBetter grab what you can, it’ll be a while, nobody knows\nYou gotta Hold on tight, the floor is about to drop\nWhen it all comes down (it all comes down) it all comes down, you don’t wanna be on top\n(Then It all. Comes. Down.)\nPack your bags we’re heading down below\nBetter grab what you can, it’ll be a while, nobody knows\nYou gotta Hold on tight, the floor is about to drop\nWhen it all comes down (it all comes down) it all comes down, you don’t wanna be on top" },
    { id: "talk-in-my-sleep", title: "Talk in My Sleep (Edit)", suno: "done",
      demo: keep("Talk in My Sleep (Edit).mp3"), lyricsStatus: "present", lyrics: "We write our stories with\nOur hands in the present\nAnd right now, they’re shaking\nCan’t undo it, Gotta get through it\nThere’s a marker in your grip\nThat you’re drawing on my page\nAnd right now, it’s bleeding\nEven liars tell the truth by accident\nIn the battle of the moment, I don’t know where it went\nBut somewhere back there\nYou took my future\nAnd I want it fucking back.\nWho knows what it takes\nTo permanently erase\nWhat can’t be undone\nExcept those who know\nExactly where this goes\nWho knows what it costs\nTo return what is lost\nBut cannot be found\nExcept those who know\nExactly where this goes\n…still you take another one?\nWhen does it end?\nYou’ll do this again\nUntil you finally love yourself\nPage after page is covered in your ink\nReady or not, it’s not what you think\nYou didn’t commit a crime\nJust sentenced us for life\nEven liars tell the truth by accident\nIn the battle of the moment, I don’t know where it went\nBut somewhere back there\nYou took my future\nAnd I want it fucking back.\nWe write our stories with\nOur hands in the present\nAnd yours is a disgrace\nIn an apartment alone\nForever an unknown\nSave for those who still see your face\nCan’t undo it, Gotta get through it….\nCan’t undo it, Gotta get through it…\nCan’t undo it, Gotta get through it…." },
    { id: "future-tripper", title: "Future Tripper", suno: "done",
      demo: keep("Future Tripper.mp3"), lyricsStatus: "present", lyrics: "You can find me dreaming\nYou can see me far away\nYou can hear me calling\nAnd listen to me say\nI’m tripping on the future\nI forgot about today\nI’m tripping on the future\nI forgot about today" },
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
