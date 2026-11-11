/* WBA Exit Us catalog. Edit this file to add lyrics, years, tunings, or links. */
window.WBA_DATA = (() => {
  const KEEP = "https://www.dropbox.com/scl/fo/qnbhzu8cy86km14gehvbc/AFzGM4yrVWhb9vDIiC1Si48?rlkey=f4awu5k1kg42pwq18k8ccigjr&dl=0&preview=";
  const keep = (filename) => ({
    url: KEEP + encodeURIComponent(filename),
    file: "/EMO/Keepers/" + filename,
    label: filename
  });

  /* Pre-production media (Nov 10, 2026), from the public PRE PRODUCTION folder link (and its Getaway Theme / Dirty Talk subfolder links; Moon from Keepers).
     main = original/full version (streams on cards + Playlist). inst / click / logic = downloads. Missing kinds are simply absent. */
  const MEDIA = {
   "when-the-love-runs-out": {
    "main": {
     "name": "When The Love Runs Out.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANhwNkXfn6a5v5aaQpYLsrY/When%20The%20Love%20Runs%20Out.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANhwNkXfn6a5v5aaQpYLsrY/When%20The%20Love%20Runs%20Out.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANhwNkXfn6a5v5aaQpYLsrY/When%20The%20Love%20Runs%20Out.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "When The Love Runs Out Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEZfSmjEITaFmvWsLQ5zm0Y/When%20The%20Love%20Runs%20Out%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEZfSmjEITaFmvWsLQ5zm0Y/When%20The%20Love%20Runs%20Out%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "When The Love Runs Out Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ALz2X1_XylbUmxaWvZqgq6I/When%20The%20Love%20Runs%20Out%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ALz2X1_XylbUmxaWvZqgq6I/When%20The%20Love%20Runs%20Out%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "When The Love Runs Out.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFxe3RD70SivDyqfGgWiZ5w/When%20The%20Love%20Runs%20Out.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFxe3RD70SivDyqfGgWiZ5w/When%20The%20Love%20Runs%20Out.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 220
    }
   },
   "edges-of-earth": {
    "main": {
     "name": "Edges of Earth.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANLZwZ9beE87wp0scQjf_c0/Edges%20of%20Earth.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANLZwZ9beE87wp0scQjf_c0/Edges%20of%20Earth.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANLZwZ9beE87wp0scQjf_c0/Edges%20of%20Earth.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Edges of Earth Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AOtSDV-pMOX8wVZ1upmicp4/Edges%20of%20Earth%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AOtSDV-pMOX8wVZ1upmicp4/Edges%20of%20Earth%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Edges of Earth Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGNzJ-qyRIIKlClcG0GCVNA/Edges%20of%20Earth%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGNzJ-qyRIIKlClcG0GCVNA/Edges%20of%20Earth%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Edges of Earth.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ACyjogLtIywW2WxflPZJvE4/Edges%20of%20Earth.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ACyjogLtIywW2WxflPZJvE4/Edges%20of%20Earth.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 430
    }
   },
   "opposite-day": {
    "main": {
     "name": "Opposite Day.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AA3AQm0f-XtSiomYOp52lJ8/Opposite%20Day.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AA3AQm0f-XtSiomYOp52lJ8/Opposite%20Day.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AA3AQm0f-XtSiomYOp52lJ8/Opposite%20Day.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Opposite Day Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ABW1syt8ehfmgnA-1uMoarM/Opposite%20Day%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ABW1syt8ehfmgnA-1uMoarM/Opposite%20Day%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Opposite Day Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ABuXmBOu8YLo-YH6vmokKUo/Opposite%20Day%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ABuXmBOu8YLo-YH6vmokKUo/Opposite%20Day%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Opposite Day.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFG9iVzBgL3c9Hgbc5iWc_o/Opposite%20Day.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFG9iVzBgL3c9Hgbc5iWc_o/Opposite%20Day.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 226
    }
   },
   "find-yourself": {
    "main": {
     "name": "Find Yourself.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHwJjT3thcgJbU2Xe6Jugao/Find%20Yourself.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHwJjT3thcgJbU2Xe6Jugao/Find%20Yourself.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHwJjT3thcgJbU2Xe6Jugao/Find%20Yourself.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Find Yourself Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AD0Fl6Mv7dUfSy3NgG4-Leo/Find%20Yourself%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AD0Fl6Mv7dUfSy3NgG4-Leo/Find%20Yourself%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Find Yourself Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/APNGpfRN8ts30GPmOOoJEng/Find%20Yourself%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/APNGpfRN8ts30GPmOOoJEng/Find%20Yourself%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Find Yourself.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/APgUCrBI4E50LRs3cwo5XBM/Find%20Yourself.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/APgUCrBI4E50LRs3cwo5XBM/Find%20Yourself.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 280
    }
   },
   "the-alone": {
    "main": {
     "name": "The Alone.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANFcV0a1w5bRbWakK4Y8va8/The%20Alone.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANFcV0a1w5bRbWakK4Y8va8/The%20Alone.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANFcV0a1w5bRbWakK4Y8va8/The%20Alone.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "The Alone Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGnSIzaMhkBDhmAcyIDxxCw/The%20Alone%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGnSIzaMhkBDhmAcyIDxxCw/The%20Alone%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "The Alone Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEsqgnKnwO9tOnXO8_311ak/The%20Alone%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEsqgnKnwO9tOnXO8_311ak/The%20Alone%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "The Alone.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AMy-jXJBFC7aoxiP02sHBaM/The%20Alone.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AMy-jXJBFC7aoxiP02sHBaM/The%20Alone.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 330
    }
   },
   "living-again": {
    "main": {
     "name": "Living Again.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFAoRvlplTc5I4Pfr5wv_fg/Living%20Again.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFAoRvlplTc5I4Pfr5wv_fg/Living%20Again.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFAoRvlplTc5I4Pfr5wv_fg/Living%20Again.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Living Again inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJKB32vXWHfbNuI3ToMXjVY/Living%20Again%20inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJKB32vXWHfbNuI3ToMXjVY/Living%20Again%20inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Living Again click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AMqCJmYv2RPMa6YptvFV9FA/Living%20Again%20click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AMqCJmYv2RPMa6YptvFV9FA/Living%20Again%20click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Living Again.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEr3zo6IZW8aaeuyQyeZAH8/Living%20Again.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEr3zo6IZW8aaeuyQyeZAH8/Living%20Again.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 203
    }
   },
   "wild-heart": {
    "main": {
     "name": "Wild.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AAMX5OrkhSWdaTIsBq0b3Ew/Wild.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AAMX5OrkhSWdaTIsBq0b3Ew/Wild.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AAMX5OrkhSWdaTIsBq0b3Ew/Wild.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Wild Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJGRStPrdzZ_ERHnPtLUTio/Wild%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJGRStPrdzZ_ERHnPtLUTio/Wild%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Wild Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AES6Zjbh9xM_AwxXEVU6Fqk/Wild%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AES6Zjbh9xM_AwxXEVU6Fqk/Wild%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Wild.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AMfbLKj9uS23QrKoQ-VZepM/Wild.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AMfbLKj9uS23QrKoQ-VZepM/Wild.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 427
    }
   },
   "sweet-sweet-love": {
    "main": {
     "name": "Sweet Sweet Love.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ABNtjVXKCzQhbLS9pVd787U/Sweet%20Sweet%20Love.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ABNtjVXKCzQhbLS9pVd787U/Sweet%20Sweet%20Love.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ABNtjVXKCzQhbLS9pVd787U/Sweet%20Sweet%20Love.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Sweet Sweet Love Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AIg86mxK3-V5vaQySuzcyME/Sweet%20Sweet%20Love%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AIg86mxK3-V5vaQySuzcyME/Sweet%20Sweet%20Love%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Sweet Sweet Love Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AOLZXwIuFQAkubyaHYsdAXY/Sweet%20Sweet%20Love%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AOLZXwIuFQAkubyaHYsdAXY/Sweet%20Sweet%20Love%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Sweet Sweet Love.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AAv0HgyoTwbCFjGYxxsz8CQ/Sweet%20Sweet%20Love.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AAv0HgyoTwbCFjGYxxsz8CQ/Sweet%20Sweet%20Love.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 359
    }
   },
   "talk-in-my-sleep": {
    "main": {
     "name": "Talk In My Sleep.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AING7zt6h9nQICK5XAB5RNg/Talk%20In%20My%20Sleep.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AING7zt6h9nQICK5XAB5RNg/Talk%20In%20My%20Sleep.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AING7zt6h9nQICK5XAB5RNg/Talk%20In%20My%20Sleep.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Talk In My Sleep Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHlE1A6H_VK8ih_DXAU878s/Talk%20In%20My%20Sleep%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHlE1A6H_VK8ih_DXAU878s/Talk%20In%20My%20Sleep%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Talk In My Sleep Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEYvCZmvg2Pw6YBLHs61Ato/Talk%20In%20My%20Sleep%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEYvCZmvg2Pw6YBLHs61Ato/Talk%20In%20My%20Sleep%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Talk In My Sleep.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEOb3mDoM5ZXeLd0IqXoyFc/Talk%20In%20My%20Sleep.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEOb3mDoM5ZXeLd0IqXoyFc/Talk%20In%20My%20Sleep.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 328
    }
   },
   "future-tripper": {
    "main": {
     "name": "Future Tripper.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AI0bUtEECMXP0WaYSMStcVk/Future%20Tripper.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AI0bUtEECMXP0WaYSMStcVk/Future%20Tripper.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AI0bUtEECMXP0WaYSMStcVk/Future%20Tripper.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Future Tripper Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ALUYaFQOWvHZf7fA8wpE-gc/Future%20Tripper%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ALUYaFQOWvHZf7fA8wpE-gc/Future%20Tripper%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Future Tripper Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ACPdJ8IfBWv3BaPbT33vTwg/Future%20Tripper%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ACPdJ8IfBWv3BaPbT33vTwg/Future%20Tripper%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Future Tripper.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEGNpJ--4u01l5fewZmv5YQ/Future%20Tripper.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEGNpJ--4u01l5fewZmv5YQ/Future%20Tripper.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 472
    }
   },
   "analog-exe": {
    "main": {
     "name": "Analog EXE.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ALnMpB8UPAhPlJ8gudPHg9A/Analog%20EXE.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ALnMpB8UPAhPlJ8gudPHg9A/Analog%20EXE.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ALnMpB8UPAhPlJ8gudPHg9A/Analog%20EXE.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Analog EXE Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AN65y397uwV20Zq6Jkp5hH8/Analog%20EXE%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AN65y397uwV20Zq6Jkp5hH8/Analog%20EXE%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Analog EXE Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AOfsLsr49QOXOnNqRn8ONkM/Analog%20EXE%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AOfsLsr49QOXOnNqRn8ONkM/Analog%20EXE%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Analog EXE.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEmRynjh3Y_e6MQRP4Zf72Y/Analog%20EXE.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEmRynjh3Y_e6MQRP4Zf72Y/Analog%20EXE.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 287
    }
   },
   "stuffed-animal": {
    "main": {
     "name": "Stuffed Animal.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AB4LluRdmKnR0oY9Eq9zPTg/Stuffed%20Animal.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AB4LluRdmKnR0oY9Eq9zPTg/Stuffed%20Animal.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AB4LluRdmKnR0oY9Eq9zPTg/Stuffed%20Animal.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Stuffed Animal Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFMFS0fX3nA9Y1K_tH0M0UQ/Stuffed%20Animal%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFMFS0fX3nA9Y1K_tH0M0UQ/Stuffed%20Animal%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Stuffed Animal Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AAnlB2Gsp31fmXfOCHXjQOQ/Stuffed%20Animal%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AAnlB2Gsp31fmXfOCHXjQOQ/Stuffed%20Animal%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Stuffed Animal.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHFriI5KnqbHyk-TLW33hOY/Stuffed%20Animal.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHFriI5KnqbHyk-TLW33hOY/Stuffed%20Animal.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 242
    }
   },
   "ticket-to-hell": {
    "main": {
     "name": "Ticket To Hell.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AL1QODDhEOGfh0Lq96wI-28/Ticket%20To%20Hell.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AL1QODDhEOGfh0Lq96wI-28/Ticket%20To%20Hell.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AL1QODDhEOGfh0Lq96wI-28/Ticket%20To%20Hell.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Ticket To Hell Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AO8PbERA1hgvLo7v976_b6g/Ticket%20To%20Hell%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AO8PbERA1hgvLo7v976_b6g/Ticket%20To%20Hell%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Ticket To Hell click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEeB3ZwRb-WanTt6BArJa_Q/Ticket%20To%20Hell%20click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEeB3ZwRb-WanTt6BArJa_Q/Ticket%20To%20Hell%20click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Ticket To Hell.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AA_Qo8I73xC-5Jd9bGUXHZA/Ticket%20To%20Hell.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AA_Qo8I73xC-5Jd9bGUXHZA/Ticket%20To%20Hell.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 280
    }
   },
   "out": {
    "main": {
     "name": "Out In The Silence.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ACW8rSIBlAm2YBn1jhZDN3c/Out%20In%20The%20Silence.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ACW8rSIBlAm2YBn1jhZDN3c/Out%20In%20The%20Silence.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ACW8rSIBlAm2YBn1jhZDN3c/Out%20In%20The%20Silence.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Out In The Silence Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGNPUh48NFl7eOXOvhKusJ4/Out%20In%20The%20Silence%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGNPUh48NFl7eOXOvhKusJ4/Out%20In%20The%20Silence%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Out In The Silence Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AI6PBF-oiWVEWSLRbFBiCqY/Out%20In%20The%20Silence%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AI6PBF-oiWVEWSLRbFBiCqY/Out%20In%20The%20Silence%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Out In The Silence.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ALFX0cKcdEuv1nsu_Zj4KGQ/Out%20In%20The%20Silence.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ALFX0cKcdEuv1nsu_Zj4KGQ/Out%20In%20The%20Silence.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 303
    }
   },
   "solarace": {
    "main": {
     "name": "Solarace.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGDNNgfb6Rn5SHMwOHqo0fk/Solarace.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGDNNgfb6Rn5SHMwOHqo0fk/Solarace.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGDNNgfb6Rn5SHMwOHqo0fk/Solarace.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Solarace Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANjiXprk71_RFG71YjeOx2A/Solarace%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANjiXprk71_RFG71YjeOx2A/Solarace%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Solarace Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANZ64bUiUZv__KIoqIDxJoc/Solarace%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANZ64bUiUZv__KIoqIDxJoc/Solarace%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Solarace.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/APpJZkBa71UV2CCwVs5I1NE/Solarace.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/APpJZkBa71UV2CCwVs5I1NE/Solarace.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 249
    }
   },
   "down": {
    "main": {
     "name": "Down.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AIOgQWwt5CI2e9o9Y7sX9bg/Down.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AIOgQWwt5CI2e9o9Y7sX9bg/Down.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AIOgQWwt5CI2e9o9Y7sX9bg/Down.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "Down Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ADN-zl_YY07eq3m2tOvvy5E/Down%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ADN-zl_YY07eq3m2tOvvy5E/Down%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "Down Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFg7S7GA_wRgwQKbYBCc5z4/Down%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFg7S7GA_wRgwQKbYBCc5z4/Down%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "Down.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AL5bBP3SCbTa7bq6dY3QPXk/Down.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AL5bBP3SCbTa7bq6dY3QPXk/Down.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 392
    }
   },
   "on-the-rocks": {
    "main": {
     "name": "On the Rocks.mp3",
     "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AF0OLY8OPsF-gugj8ih2VeU/On%20the%20Rocks.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AF0OLY8OPsF-gugj8ih2VeU/On%20the%20Rocks.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AF0OLY8OPsF-gugj8ih2VeU/On%20the%20Rocks.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "inst": {
     "name": "On the Rocks Inst.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AIKTiq_EeW41rcAbo_QQ8sk/On%20the%20Rocks%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AIKTiq_EeW41rcAbo_QQ8sk/On%20the%20Rocks%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "click": {
     "name": "On the Rocks Click.mp3",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AK_8pPlg7MNPgGbBPB3wvOE/On%20the%20Rocks%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AK_8pPlg7MNPgGbBPB3wvOE/On%20the%20Rocks%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"
    },
    "logic": {
     "name": "On the Rocks.logicx",
     "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/APYeWAJXMthX5dmfTsOcT1s/On%20the%20Rocks.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/APYeWAJXMthX5dmfTsOcT1s/On%20the%20Rocks.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t",
     "mb": 1451
    }
   },
   "the-getaway-theme": {
    "main": {
     "name": "THE GETAWAY THEME vox.wav",
     "stream": "https://www.dropbox.com/scl/fo/69pgw4086od35smdadhft/AEPhMI0kB4_DxdHrP2ZS7dw/THE%20GETAWAY%20THEME%20vox.wav?raw=1&rlkey=8gee2im37j604z6l722ynw5hd",
     "url": "https://www.dropbox.com/scl/fo/69pgw4086od35smdadhft/AEPhMI0kB4_DxdHrP2ZS7dw/THE%20GETAWAY%20THEME%20vox.wav?dl=1&rlkey=8gee2im37j604z6l722ynw5hd",
     "view": "https://www.dropbox.com/scl/fo/69pgw4086od35smdadhft/AEPhMI0kB4_DxdHrP2ZS7dw/THE%20GETAWAY%20THEME%20vox.wav?dl=0&rlkey=8gee2im37j604z6l722ynw5hd"
    },
    "inst": {
     "name": "THE GETAWAY THEME inst.wav",
     "url": "https://www.dropbox.com/scl/fo/69pgw4086od35smdadhft/AIo04TUib7WtizrNkKoymcQ/THE%20GETAWAY%20THEME%20inst.wav?dl=1&rlkey=8gee2im37j604z6l722ynw5hd",
     "view": "https://www.dropbox.com/scl/fo/69pgw4086od35smdadhft/AIo04TUib7WtizrNkKoymcQ/THE%20GETAWAY%20THEME%20inst.wav?dl=0&rlkey=8gee2im37j604z6l722ynw5hd"
    },
    "click": {
     "name": "THE GETAWAY THEME w click.wav",
     "url": "https://www.dropbox.com/scl/fo/69pgw4086od35smdadhft/AImSmh6jLGZ9tbrNYXhen5E/THE%20GETAWAY%20THEME%20w%20click.wav?dl=1&rlkey=8gee2im37j604z6l722ynw5hd",
     "view": "https://www.dropbox.com/scl/fo/69pgw4086od35smdadhft/AImSmh6jLGZ9tbrNYXhen5E/THE%20GETAWAY%20THEME%20w%20click.wav?dl=0&rlkey=8gee2im37j604z6l722ynw5hd"
    }
   },
   "dirty-talk": {
    "main": {
     "name": "DIRTY TALK w vox.wav",
     "stream": "https://www.dropbox.com/scl/fo/k48qzw2dxs30cis27pg25/AM2gzCDXvXhPoDx7P5rlNA8/DIRTY%20TALK%20w%20vox.wav?raw=1&rlkey=y6a4clxpgektix3r5s00rbgm7",
     "url": "https://www.dropbox.com/scl/fo/k48qzw2dxs30cis27pg25/AM2gzCDXvXhPoDx7P5rlNA8/DIRTY%20TALK%20w%20vox.wav?dl=1&rlkey=y6a4clxpgektix3r5s00rbgm7",
     "view": "https://www.dropbox.com/scl/fo/k48qzw2dxs30cis27pg25/AM2gzCDXvXhPoDx7P5rlNA8/DIRTY%20TALK%20w%20vox.wav?dl=0&rlkey=y6a4clxpgektix3r5s00rbgm7"
    },
    "inst": {
     "name": "DIRTY TALK inst.wav",
     "url": "https://www.dropbox.com/scl/fo/k48qzw2dxs30cis27pg25/AMd7YeUuNfM516g8j-t2JW0/DIRTY%20TALK%20inst.wav?dl=1&rlkey=y6a4clxpgektix3r5s00rbgm7",
     "view": "https://www.dropbox.com/scl/fo/k48qzw2dxs30cis27pg25/AMd7YeUuNfM516g8j-t2JW0/DIRTY%20TALK%20inst.wav?dl=0&rlkey=y6a4clxpgektix3r5s00rbgm7"
    },
    "click": {
     "name": "DIRTY TALK click.wav",
     "url": "https://www.dropbox.com/scl/fo/k48qzw2dxs30cis27pg25/AFSK043XxwI7_zLAMk-LZfY/DIRTY%20TALK%20click.wav?dl=1&rlkey=y6a4clxpgektix3r5s00rbgm7",
     "view": "https://www.dropbox.com/scl/fo/k48qzw2dxs30cis27pg25/AFSK043XxwI7_zLAMk-LZfY/DIRTY%20TALK%20click.wav?dl=0&rlkey=y6a4clxpgektix3r5s00rbgm7"
    }
   },
   "moon": {
    "main": {
     "name": "Moon.mp3",
     "stream": "https://www.dropbox.com/scl/fo/qnbhzu8cy86km14gehvbc/AHKrCYNjqGN17U7CV8nOErA/Moon.mp3?raw=1&rlkey=f4awu5k1kg42pwq18k8ccigjr",
     "url": "https://www.dropbox.com/scl/fo/qnbhzu8cy86km14gehvbc/AHKrCYNjqGN17U7CV8nOErA/Moon.mp3?dl=1&rlkey=f4awu5k1kg42pwq18k8ccigjr",
     "view": "https://www.dropbox.com/scl/fo/qnbhzu8cy86km14gehvbc/AHKrCYNjqGN17U7CV8nOErA/Moon.mp3?dl=0&rlkey=f4awu5k1kg42pwq18k8ccigjr"
    }
   }
  };
  /* Big Bang original = band demo Rob linked Nov 10, 2026 (t113u). Not a Suno demo, so suno stays "unknown". */
  MEDIA["big-bang"] = {"main": {"name": "Big Bang.wav", "stream": "https://www.dropbox.com/scl/fi/rjhbpt5ug3njp4nuttm0j/Big-Bang.wav?rlkey=mfz8iyqezb03wrbedinsu39a5&raw=1", "url": "https://www.dropbox.com/scl/fi/rjhbpt5ug3njp4nuttm0j/Big-Bang.wav?rlkey=mfz8iyqezb03wrbedinsu39a5&dl=1", "view": "https://www.dropbox.com/scl/fi/rjhbpt5ug3njp4nuttm0j/Big-Bang.wav?rlkey=mfz8iyqezb03wrbedinsu39a5&dl=0"}};
  MEDIA["just-a-beautiful-mess"] = {"main": {"name": "Just A Beautiful Mess.wav", "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AL7UDr2luZ24VUDMQIAusy8/Just%20A%20Beautiful%20Mess.wav?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AL7UDr2luZ24VUDMQIAusy8/Just%20A%20Beautiful%20Mess.wav?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AL7UDr2luZ24VUDMQIAusy8/Just%20A%20Beautiful%20Mess.wav?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "inst": {"name": "Just A Beautiful Mess Inst.wav", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AMFjz94DyT0kqR_ith4sP98/Just%20A%20Beautiful%20Mess%20Inst.wav?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AMFjz94DyT0kqR_ith4sP98/Just%20A%20Beautiful%20Mess%20Inst.wav?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "click": {"name": "Just A Beautiful Mess Click.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANM5Mt11s-vn8bOvzYjK4Ug/Just%20A%20Beautiful%20Mess%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/ANM5Mt11s-vn8bOvzYjK4Ug/Just%20A%20Beautiful%20Mess%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "logic": {"name": "Just A Beautiful Mess.logicx", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFpZC-1bJDWAb-k9pHaZiik/Just%20A%20Beautiful%20Mess.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AFpZC-1bJDWAb-k9pHaZiik/Just%20A%20Beautiful%20Mess.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "mb": 341}};

  /* Nov 11, 2026 (Rob t115u): new pre-production bounces in /EMO/PRE PRODUCTION replace older media.
     Getaway Theme + Dirty Talk = new versions ("Dirty Talk2" files; no Dirty Talk Logic session yet). Moon + Big Bang now bounced (Big Bang.mp3 replaces the band demo WAV). */
  MEDIA["the-getaway-theme"] = {"main": {"name": "The Getaway Theme.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHRp-ipSbTk9mUinO_wVLIc/The%20Getaway%20Theme.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHRp-ipSbTk9mUinO_wVLIc/The%20Getaway%20Theme.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHRp-ipSbTk9mUinO_wVLIc/The%20Getaway%20Theme.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "inst": {"name": "The Getaway Theme Inst.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AH9lpo9ULO_PanjWHj0Yb8k/The%20Getaway%20Theme%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AH9lpo9ULO_PanjWHj0Yb8k/The%20Getaway%20Theme%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "click": {"name": "The Getaway Theme Click.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AOBy6IHTMfnlEq5IM3R9Dko/The%20Getaway%20Theme%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AOBy6IHTMfnlEq5IM3R9Dko/The%20Getaway%20Theme%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "logic": {"name": "The Getaway Theme.logicx", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AIzzfbQg6N_E0M0BlbRWfd0/The%20Getaway%20Theme.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AIzzfbQg6N_E0M0BlbRWfd0/The%20Getaway%20Theme.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "mb": 281}};
  MEDIA["dirty-talk"] = {"main": {"name": "Dirty Talk2.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AO0hmmRhvXLI3S6Hzpunb0M/Dirty%20Talk2.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AO0hmmRhvXLI3S6Hzpunb0M/Dirty%20Talk2.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AO0hmmRhvXLI3S6Hzpunb0M/Dirty%20Talk2.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "inst": {"name": "Dirty Talk2 Inst.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AD1Ts60bbIsFpSWSgkQgJcA/Dirty%20Talk2%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AD1Ts60bbIsFpSWSgkQgJcA/Dirty%20Talk2%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "click": {"name": "Dirty Talk2 Click.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHlIFZnXVYuLhVHpvHaoxJM/Dirty%20Talk2%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHlIFZnXVYuLhVHpvHaoxJM/Dirty%20Talk2%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}};
  /* Dirty Talk Logic session uploaded Nov 11, 2026 ~2:52 AM CT (size stable at 1,336,510,723 bytes across 3 checks); dl=1 zips the .logicx folder */
  MEDIA["dirty-talk"].logic = {"name": "Dirty Talk.logicx", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AN86NJBDBc2DJWpHmKOyoZc/Dirty%20Talk.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AN86NJBDBc2DJWpHmKOyoZc/Dirty%20Talk.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "mb": 1337};
  MEDIA["moon"] = {"main": {"name": "Moon.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHda2aLKlmbFo2pngcE0Qmo/Moon.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHda2aLKlmbFo2pngcE0Qmo/Moon.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHda2aLKlmbFo2pngcE0Qmo/Moon.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "inst": {"name": "Moon Inst.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AN3vKK4ZLMz8DxMo7VClaUs/Moon%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AN3vKK4ZLMz8DxMo7VClaUs/Moon%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "click": {"name": "Moon Click.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AK3f2nxQpIjiNMvr0D-tiuU/Moon%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AK3f2nxQpIjiNMvr0D-tiuU/Moon%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "logic": {"name": "Moon.logicx", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AK1pjPMERofFA9fvF-dFDbU/Moon.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AK1pjPMERofFA9fvF-dFDbU/Moon.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "mb": 442}};
  MEDIA["big-bang"] = {"main": {"name": "Big Bang.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJCJuAS61XIyRBdTp-7sVC0/Big%20Bang.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJCJuAS61XIyRBdTp-7sVC0/Big%20Bang.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJCJuAS61XIyRBdTp-7sVC0/Big%20Bang.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "inst": {"name": "Big Bang Inst.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AMlUDy8BTPc9Mh-BRszrVtY/Big%20Bang%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AMlUDy8BTPc9Mh-BRszrVtY/Big%20Bang%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "click": {"name": "Big Bang Click.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AAJeyuwEYkhcdfoIJDwaaJ8/Big%20Bang%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AAJeyuwEYkhcdfoIJDwaaJ8/Big%20Bang%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "logic": {"name": "Big Bang.logicx", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJmER4R3lAhBxccL3n9hdQk/Big%20Bang.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJmER4R3lAhBxccL3n9hdQk/Big%20Bang.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "mb": 672}};
  /* Nov 11, 2026 (Rob t118u): new song Hollywood Has Fallen in /EMO/PRE PRODUCTION. */
  MEDIA["hollywood-has-fallen"] = {"main": {"name": "Hollywood Has Fallen.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHaHRTFgE-haTvnwbvKj6QA/Hollywood%20Has%20Fallen.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHaHRTFgE-haTvnwbvKj6QA/Hollywood%20Has%20Fallen.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "stream": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AHaHRTFgE-haTvnwbvKj6QA/Hollywood%20Has%20Fallen.mp3?raw=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "inst": {"name": "Hollywood Has Fallen Inst.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJATss_UN4q6biKwvkUZ594/Hollywood%20Has%20Fallen%20Inst.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJATss_UN4q6biKwvkUZ594/Hollywood%20Has%20Fallen%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "click": {"name": "Hollywood Has Fallen Click.mp3", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGVnZZUI24-7yD5Lulagd2Y/Hollywood%20Has%20Fallen%20Click.mp3?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AGVnZZUI24-7yD5Lulagd2Y/Hollywood%20Has%20Fallen%20Click.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t"}, "logic": {"name": "Hollywood Has Fallen.logicx", "url": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AO8T1_U9pwPnK-rKECmlRn8/Hollywood%20Has%20Fallen.logicx?dl=1&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "view": "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AO8T1_U9pwPnK-rKECmlRn8/Hollywood%20Has%20Fallen.logicx?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", "mb": 309}};


  const MEMBERS = ["Rob", "Gary", "Eddie", "Daniel", "Tony"];

  const PHASES = [
    { id: "pre", name: "Pre-production", stages: ["Suno demo", "Logic import", "Drum demo", "Click / guide"] }, /* Nov 11, 2026 (Rob): Vocal demo + Keys demo scratched; drums are the only demo before drum tracking. */
    { id: "prod", name: "Production", stages: ["Drums", "Drum edits", "Bass", "Bass edits", "Guitar", "Guitar edits", "Keys", "Solos", "Vocals", "Vocal edits"] },
    { id: "post", name: "Post", stages: ["Mix", "Stereo masters", "Atmos mixes"] }
  ];

  const VOX = new Set(["Vocals", "Vocal edits"]);

  /* Lyrics: "present" means the body is in this file; "missing" means never provided.
     t51u (Nov 10, 2026) is the line-break source for The Getaway Theme, Edges of Earth,
     Sweet Sweet Love, Dirty Talk, When The Love Runs Out, Living Again, Future Tripper,
     Wild Heart, Talk in My Sleep (Edit), and Find Yourself. Opposite Day, Moon, and
     Orion are unchanged from the earlier chat pastes. Solarace and Down cards were
     added Nov 10; verbatim lyrics from t52u / t55u were not available to the updater. */
  const CHAT = "Lyrics were pasted in the band chat. The full text is not in this file yet — paste them here when you can.";

  const songs = [
    { id: "when-the-love-runs-out", title: "When The Love Runs Out", suno: "done",
      demo: keep("When The Love Runs Out.wav"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEZfSmjEITaFmvWsLQ5zm0Y/When%20The%20Love%20Runs%20Out%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", file: "/EMO/PRE PRODUCTION/When The Love Runs Out Inst.mp3", label: "When The Love Runs Out Inst.mp3" },
      lyricsStatus: "present", lyrics: "You don’t know the half of it\nSo much pain\nall you can do is laugh at it\nEnough untruth\nYou could re-write the past with it\n\nWhen the love runs out\nAll you have are memories on a drive\nDigitally keep them alive\nWhen the love runs out\nAll you have are ghosts in a bed\nWondering what could have been\nWhile they’re living it\n\nYou can’t tell me this ain’t real\nBut today\nA fantasy is all I feel\nNo simulation\nIf you take love what’s left to steal?\n\nWhen the love runs out\nAll you have are memories on a drive\nDigitally keep them alive\nWhen the love runs out\nAll you have are ghosts in a bed\nWondering what could have been\nWhile they’re living it, now\n\nLiving it now, til the love runs out\nLiving it now (two ghosts in a bed)\nTil the love runs out\nLiving it now (it’s all in your head)\nTil the love runs out" },
    { id: "edges-of-earth", title: "Edges of Earth", suno: "done",
      demo: keep("Edges of Earth.mp3"), lyricsStatus: "present", lyrics: "I can't hold on just to help you\nwe don't have long you\nwon't get this time back\nyou can't have it back\n\nthis line is about you but not cuz I love you,\nno I don't want to,\nI'm writing this right now right under your eyebrow\nCause I can't see the way to my way out\n\nI've paid my dues without a fair shake no you're stable just like an earthquake\nYou were my dream but now I'm awake\n\nyou drive me to the edges of the earth...ride with me" },
    { id: "opposite-day", title: "Opposite Day", suno: "done",
      demo: keep("Opposite Day.mp3"), lyricsStatus: "present", lyrics: "It's a fake, fade away, temporary you\nRewind the tape, years replay, now you're the enemy too\nEveryone is so afraid\nWords like violence in the fray\nSinging bitching all the way\nThey're laughing in your face\nSlow down, grow up, find your place\nBreathe out, sit down, listen, shut your face\nTie to lies to the ram, force it through the wall\nThere behind the ruins lie the greatest monsters of them all\nBattery against your head, repetition all is red\nCrushing burning tolerance\nThey're laughing in your face\nSlow down, grow up, find your place\nBreathe out, sit down, listen, shut your face\nYou become what you create but still unsatisfied\nDiscovering the easy way, the hardest path to walk in life\nMarching forward mania, fetish for sensational\nEat yourself you cannibal, how does your shit taste?\nHeroes cursed and put to shame\nInfants riot, dominate\nForfeit losers win the game\nFree as long as we don't stay\nValor stolen shift the blame\nBroadcast virtue all the same\nWake up the alarm rang\nSurprise fuckface, open your eyes\nIt's opposite day" },
    { id: "find-yourself", title: "Find Yourself", suno: "done",
      demo: keep("Find Yourself.mp3"), lyricsStatus: "present", lyrics: "There's nowhere to go\nThere's nowhere to hide\nThere's nothing left to feel when you're not by my side\nGive it up, find yourself inside this heart of mine\n\nWhen will you let yourself be loved?\nA question asked from moments past\nTore down a wall you built back up\nConscience patient, waiting\nPast and future commiserating\n\nThere's nowhere to go\nThere's nowhere to hide\nThere's nothing left to feel when you're not by my side\nGive it up, find yourself inside this heart of mine\nInside this heart of mine\n\nThere's nowhere to go\nThere's nowhere to hide\nThere's nothing left to feel when you're not by my side\nThere's nowhere to go\nThere's nowhere to hide\nThere's nothing left to feel when you're not by my side\nI've laid it out upon the line\nI've bled it out now you decide\nGive it up or find yourself inside this heart of mine" },
    { id: "the-alone", title: "The Alone", suno: "done",
      demo: keep("The Alone.mp3"), lyricsStatus: "present", lyrics: "Tires kicking gravel\nDust is choking the air\nShe’s got a one way ticket to anywhere\nI never looked so good\nThan in her rear view mirror\nShows my back turned with no desire to see her\nYou’d have to knock me down and drag me out\nTo leave that scene\nBut now the times have changed\nYou might hate what’s to see\nYour guilty pleasure was to be proven right\nMinus me the guilt’s yours to enjoy tonight\nI’ll hide you where I can’t find you\nAnd seek you to no avail\nI want to fail\nIf you could hear me now\nI would have no more words to say\nIf you were here somehow\nThen you could watch me walk away\nAnd if you got the nerve \nYou would be talking to a stone\nAnd if you’d just return\nIt’d be your turn as the one alone\nOur skin’s evolved but with hearts primate\nI can’t make your world bloom inside this climate\nInvited yourself inside and promised to never leave\nSo Adam takes his bite and spits it back at Eve\nThese are the days where solutions embrace their problems\nComplicate equations until you just can’t solve em\nTry to add it up with no numbers but the sum\nTwo is a crowd when the answer’s one\nIf you could hear me now\nI would have no more words to say\nIf you were here somehow\nThen you could watch me walk away\nAnd if you got the nerve \nYou would be talking to a stone\nAnd if you’d just return\nIt’d be your turn as the one alone\nI’ll hide you where I can’t find you\nAnd seek you never again\nAt least that’s the plan\nI’ll seek you never again (never again) \nIf you could hear me now\nI would have no more words to say\nIf you were here somehow\nThen you could watch me walk away\nAnd if you got the nerve \nYou would be talking to a stone\nAnd if you’d just return\nIt’d be your turn as the one alone" },
    { id: "living-again", title: "Living Again", suno: "done",
      demo: keep("Living Again.mp3"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJKB32vXWHfbNuI3ToMXjVY/Living%20Again%20inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", file: "/EMO/PRE PRODUCTION/Living Again inst.mp3", label: "Living Again inst.mp3" },
      lyricsStatus: "present", lyrics: "She said I’m already over it\nAnd life will still move on\nI’m dead sooner or later\nI got mistakes to learn from\n\nThis is somebody’s daughter\nRipped off like bong water\nRobbed of the time we got\nThat she did not, that she did not\n\nHey, what’s the time?\nWhen, is it right to start again?\nLa la la la la living again\n\nShe left without a reason\nThat ever needs explaining\nIt meant all of the world, yet\nWouldn’t you do the same thing?" },
    { id: "why-should-i-be-surprised", title: "Why Should I Be Surprised", suno: "done",
      demo: keep("Why Should I Be Surprised.mp3"), lyricsStatus: "present", lyrics: "Vile fortune, don't you trick me again\nThought it was all mine, but that came to an end\n\nI know that it's hard to find you\nThe kind of chance that can bind you\nIn excess, find some new vice\nIf you're lucky, she'll find you twice\n\nI'm getting angry, don't you leave me again\nThought you were all mine, but you ran out in the end\n\nWho took it all away?\nA different demon, the same way\n\nChange may come, don't know when\nUntil then I catch myself saying\n\nI never saw it coming\nAll over again\nI never dreamed it'd be\nThe way it's always been\nCan't say it's gotten old\nPraying that this wasn't so\nWhy should I be surprised\nWhen I wind up here again tomorrow?\n\nWhen I have nothing, I'll remember today\nAnd what it felt like to have enough to give away\nTomorrow is coming, who knows what's going down\nThe tide may come in and sweep your feet off the ground" },
    { id: "the-getaway-theme", title: "The Getaway Theme", suno: "done",
      demo: keep("The Getaway Theme.wav"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/69pgw4086od35smdadhft/AIo04TUib7WtizrNkKoymcQ/THE%20GETAWAY%20THEME%20inst.wav?dl=0&rlkey=8gee2im37j604z6l722ynw5hd", file: "/EMO/PRE PRODUCTION/THE GETAWAY THEME 175 BPM/THE GETAWAY THEME inst.wav", label: "THE GETAWAY THEME inst.wav" },
      lyricsStatus: "present", lyrics: "I’ve got the ticket\nTo any party in town\nA car to drive\nMy friends around\n\nIt wasn’t mine\nIt wasn’t cool\nIt’s what I had to make do\n\nI’ve got a plan\nTo turn it all around\nA car to escape\nWhat brought me down\n\nIt wasn’t mine\nIt wasn’t cool\nIt’s what I had to make do\n\n[chorus]\nThe plans were made\nThe map was drawn\nI had it all figured out\nHow to run and survive\nMake it on my own this time\nYears in the making\nMy hands are shaking\nAnd for some reason\nI can’t put it in drive\n\nIt wasn’t mine\nIt wasn’t cool\nIt’s what I had to make do\nThe runaway\nThe great escape\nIt’s what I had to make do\n\nIf I can’t go\nI guess I’ll stay\nAnd drive friends to a party\nIt’s what I had to make do\n\n[chorus]\nThe plans were made\nThe map was drawn\nI had it all figured out\nHow to run and survive\nMake it on my own this time\nYears in the making\nMy hands are shaking\nAnd for some reason\nI can’t put it in drive" },
    { id: "wild-heart", title: "Wild Heart", dropboxTitle: "Wild", suno: "done",
      demo: keep("Wild.wav"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AJGRStPrdzZ_ERHnPtLUTio/Wild%20Inst.mp3?dl=0&rlkey=uknwsbj7gwhoqbh3m6d43fu6t", file: "/EMO/PRE PRODUCTION/Wild Inst.mp3", label: "Wild Inst.mp3" },
      lyricsStatus: "present", lyrics: "Under cover of a smoke screen, burning\nYou forgot your life\nAnd the lovers of your past and future\nThey remind you why\n\nSo young, in love\nthe mystery that she supplied\nLegs up, in front\nkickin a crater in your head tonight\n\nUnder cover of a wild heart beating\nShe’s more than meets the eye\nBut right now it don’t matter, lookin bloodshot\nStaring into lights\n\nWhatcha got under the front seat, baby\nCould you step outside and walk the line?\n\nWoooah\nIt’s the one thing you can’t hide\nWoooah\nWhen your wild heart comes alive" },
    { id: "moon", title: "Moon", suno: "done",
      demo: keep("Moon.mp3"), lyricsStatus: "present", lyrics: "There’s no time to waste\nRunning away\nRisking it on another chance\nSix feet down\nCan’t love me now\nFate won’t wait long for your plans\nSo the world doesn’t change\nEveryone wants the same thing\nJust to know what it feels like to be loved?\nAre we really in pain\nOr paying the price of living\nJust to know what it feels like to be loved?\nLike a wedding gown\nIt’s going down\nThe world can wait for you to come back\nBeauty fades\nBut it’s here today\nStaring me naked in the face\nMan, the world doesn’t change\nEveryone wants the same thing\nJust to know what it feels like to be loved\nAre we really in pain\nOr paying the price of living\nJust to know what it feels like to be loved" },
    { id: "sweet-sweet-love", title: "Sweet Sweet Love", suno: "done",
      demo: keep("Sweet Sweet Love.mp3"), lyricsStatus: "present", lyrics: "I feel that we’re syncing up together\nI know that we’re gonna rock forever\nForever, forever\n\nIs it so wrong to say it’s right\nThe way I feel with you here tonight\nWithin the darkness there is light\nPeeking in, bringing hope to life\n\nNow you know what you are\nWhat you are to me\nAnd what I want, what I want\nIs everything that I see\n\nOh sweet sweet love\nYou are the one I’m dreaming of\nOh sweet sweet love\nTogether sing the anthem\nYou’ll never be abandoned\n\nI feel that our gears grind well in motion\nThis won’t be some one night long emotion\n\nI’d give the world to make things right\nAnd now’s my chance with you here tonight\nIf you’re the prize it’s worth the fight\nInfinite colors but we see black and white\n\nNow you know what there is, what there is to see\nAnd what I you want, what you want, is everything you find in me\n\nOh sweet sweet love\nYou are the one I’m dreaming of\nOh sweet sweet love\nTogether sing the anthem\nYou’ll never be abandoned now" },
    { id: "dirty-talk", title: "Dirty Talk", suno: "done",
      demo: keep("Dirty Talk.mp3"),
      instrumental: { url: "https://www.dropbox.com/scl/fo/k48qzw2dxs30cis27pg25/AMd7YeUuNfM516g8j-t2JW0/DIRTY%20TALK%20inst.wav?dl=0&rlkey=y6a4clxpgektix3r5s00rbgm7", file: "/EMO/PRE PRODUCTION/DIRTY TALK 125 BPM/DIRTY TALK inst.wav", label: "DIRTY TALK inst.wav" },
      lyricsStatus: "present", lyrics: "[verse]\nAre you waiting for the night\nWhere your stars align\nNow your astronaut arrives\nTo take you far away\nDo you know the way back\nFrom where you’re going?\nAre you ready to be left behind?\n“You should have known me…”\n\n[chorus]\nWant you to show me\nYou’re also lonely\nYou can behold me\nUntil you loathe me\nConnecting slowly\nAs if you know me\nIt’s just like you told me\nAnything is better than nothing\n\n[post-chorus]\nAnything is better than nothing\nAnything is better than nothing\n\n[verse2]\nHave you fought your whole life\nAgainst this gravity?\nDid you wanna take this flight\nLike you were planning me\nYou’re a poison pill, dagger, six-shooter with a sugar side\nYou’re the illusion, misdirecting til my world tastes like cyanide" },
    { id: "orion", title: "Orion", suno: "done",
      demo: keep("Orion.mp3"), lyricsStatus: "present", lyrics: "The smoke is a blowin’\nThey better know that you’re a rising star\nThe proof’s in the puddin’\nShades indoors, cocaine and fancy cars\n(Then It all. Comes. Down.)\nPack your bags we’re heading down below\nBetter grab what you can, it’ll be a while, nobody knows\nYou gotta Hold on tight, the floor is about to drop\nWhen it all comes down (it all comes down) it all comes down, you don’t wanna be on top\nWhen it all comes down (it all comes down) it all comes down, you don’t wanna be on top\nThe makin’s in the fakin’\nBig contracts, Cadillacs, all gone in a day\nBetter get with the gettin’\nAnd sell your soul if you got one to give away\n(Then It all. Comes. Down.)\nPack your bags we’re heading down below\nBetter grab what you can, it’ll be a while, nobody knows\nYou gotta Hold on tight, the floor is about to drop\nWhen it all comes down (it all comes down) it all comes down, you don’t wanna be on top\n(Then It all. Comes. Down.)\nPack your bags we’re heading down below\nBetter grab what you can, it’ll be a while, nobody knows\nYou gotta Hold on tight, the floor is about to drop\nWhen it all comes down (it all comes down) it all comes down, you don’t wanna be on top" },
    { id: "talk-in-my-sleep", title: "Talk in My Sleep", suno: "done",
      demo: keep("Talk in My Sleep (Edit).mp3"), lyricsStatus: "present", lyrics: "We write our stories with\nOur hands in the present\nAnd right now, they’re shaking\n\nCan’t undo it, Gotta get through it\n\nThere’s a marker in your grip\nThat you’re drawing on my page\nAnd right now, it’s bleeding\n\nEven liars tell the truth by accident\nIn the battle of the moment, I don’t know where it went\nBut somewhere back there\nYou took my future\nAnd I want it fucking back.\n\nWho knows what it takes\nTo permanently erase\nWhat can’t be undone\nExcept those who know\nExactly where this goes\n\nWho knows what it costs\nTo return what is lost\nBut cannot be found\nExcept those who know\nExactly where this goes\n\n…still you take another one?\nWhen does it end? You’ll do this again\nUntil you finally love yourself\n\nPage after page is covered in your ink\nReady or not, it’s not what you think\nYou didn’t commit a crime\nJust sentenced us for life\nEven liars tell the truth by accident\nIn the battle of the moment, I don’t know where it went\nBut somewhere back there\nYou took my future\nAnd I want it fucking back.\n\nWe write our stories with\nOur hands in the present\nAnd yours is a disgrace\nIn an apartment alone\nForever an unknown\nSave for those who still see your face\n\nCan’t undo it, Gotta get through it….\nCan’t undo it, Gotta get through it…\nCan’t undo it, Gotta get through it…." },
    { id: "future-tripper", title: "Future Tripper", suno: "done",
      demo: keep("Future Tripper.mp3"), lyricsStatus: "present", lyrics: "You can find me dreaming\nYou can see me far away\nYou can hear me calling\nAnd listen to me say\n\nI’m tripping on the future\nI forgot about today\nI’m tripping on the future\nI forgot about today" },
    { id: "move-me", title: "Move Me", suno: "done",
      demo: keep("Move Me.mp3"), lyricsStatus: "missing", lyrics: "" },
    /* Five added Nov 10, 2026. Demos found at Dropbox root, not in the public Keepers folder, so no public link yet. */
    { id: "analog-exe", title: "Analog.exe", suno: "done",
      demoFound: { file: "/ANALOG EXE.wav", note: "Found at Dropbox root. Not in the shared Keepers folder, so no public link yet." },
      lyricsStatus: "present", lyrics: "We lost our way\nThe simulation has broken containment\nWe’ve gone astray\nNow come back to beginning again \nVoice: “sorry, you have lost the game\nWould you like to play again?”\nIt is how you make it…\nNothing’s real anymore  \nIt will not connect with me \nNothing’s cool anymore if\nI can’t feel you next to me \nRewind the tape\nLet’s show the world what it means to be reel  \nAnd print the take \nTo prove we are now still very human\nVoice: “You have lost the game”\nI just wanna play again\nThis ain’t real\nNothing’s cool\nThis ain’t real anymore  \nIt will not connect with me\nNothing’s cool anymore \nIf I can’t feel you next to me \nVoice: “Would you like to play again?”" },
    { id: "stuffed-animal", title: "Stuffed Animal", suno: "done",
      demoFound: { file: "/Stuffed Animal.wav", note: "Found at Dropbox root. Not in the shared Keepers folder, so no public link yet." },
      lyricsStatus: "present", lyrics: "I am the empty vessel of your ongoing projection\nA moment of misery, awaiting me, your stimulation\nI am the glitching pixels you’ve picked out from far away\nNow you help me stand out, come stick your hand out and stuff your face, you animal\n\nAnimal, animal, animal, animal\n\nIt’s hard to leave, hard to breathe, it’s getting hard to be me\nLookin at an ass like that\nLike fine wine, Lord help me by, it’s hard to stay in line\nLookin at an ass like that\n\nAnimal, animal, animal, animal\n\nI am the empty vessel of your ongoing projection…\nI am the glitching pixels you’ve picked out from far away\nYou help me stand out, come stick your hand out and stuff your face, you animal\n\nIt’s hard to leave, hard to breathe, it’s getting hard to be me\nLookin at an ass like that\nLike fine wine, Lord help me by, it’s hard to stay in line\nLookin at an ass like that" },
    { id: "ticket-to-hell", title: "Ticket to Hell", suno: "done",
      demoFound: { file: "/TICKET TO HELL.wav", note: "Found at Dropbox root. Not in the shared Keepers folder, so no public link yet." },
      lyricsStatus: "present", lyrics: "Oh, you wanna wake up to your real life?\nWhat you take for granted\ncouldn’t wait to realize  \nIt cannot wait\nYou can’t sedate \nOr lean on the usual crutches \nYou’re so lucky \nthe suffering \nGot to be a little too much that…\nYou’ll take this bitter ride \nTo cut out your insides \nYou want your conscience clean?\nIt takes a ticket to hell\nAnd now you’re next in line \nCan’t fake it \nCan’t face it \nThe way you drain me out \nCan’t take it \nThe way it\nAll comes crashing down on me \nOh, you wanna see things as they really are?\nHope you’re prepared to take it \njust a little too far \nYou’ll take this bitter ride…\nHold on tight to your own ticket to hell\nI cannot numb my senses\nAnd only death can end this\nWhat is the price of a conscience?\nYou only pay when you’re conscious\nCan’t fake it \nCan’t face it \nThe way you drain me out \nCan’t take it \nThe way it\nAll comes crashing down on me " },
    { id: "big-bang", title: "Big Bang", suno: "done",
      demoFound: { file: "/Big Bang.wav", note: "Found at Dropbox root. Not in the shared Keepers folder, so no public link yet." },
      lyricsStatus: "present", lyrics: "Wakey wakey again \nAre the birds still circling your head? \nIt’s 3 AM 3 days from when \nYou were last online \nVERSE 2:\nYou gotta scar by your eye \nAnd you barely know why it missed you then \nAfter all it kissed you \nDid it really miss you?\nPRE-CHORUS\nBang, bang Bang\nBang, bang Bang\nCHORUS:\nWhen the train leaves the station \nI’m patient but I don’t see it coming back \nWhen the bottle is poured \nYou can call for one more\nI don’t see it coming back again \nPOST-CHORUS\nBang, bang Bang\nBang, bang Bang\nVERSE 3:\nLife takes you seriously \nEnough to tear you away from me \nAfter that, who’ll miss you? \nDid it really miss you? \nCHORUS:\nWhen the train leaves the station \nI’m patient but I don’t see it coming back \nWhen the bottle is poured \nYou can call for one more\nI don’t see it coming back again \nLAST CHORUS:\nWhen the life in your eyes \nFlickers out like a light   \nI don’t see it coming back \nWhen you wait for amends \nOn just one more chance \nI don’t see it coming back again \nOUTTRO\nBang, bang Bang\nBang, bang Bang\nBang, bang Bang" },
    { id: "meteorites", title: "Meteorites", suno: "done",
      demoFound: { file: "/Meteorites.wav", note: "Found at Dropbox root. Not in the shared Keepers folder, so no public link yet." },
      lyricsStatus: "present", lyrics: "Strange destination \nFamiliar signs \nI feel like I’ve been here  \nbut don’t know why \nStill meditation\nNo prying eyes \nIt’s either a dream or \nI’m not alive \nThis fate that you want\nThis place in your heart \nThis face of your love \nIt’s made who you are \nIt’s fading away\nIt’s fading away\nIt’s fading away\nIt’s fading away \nThis fate that you want\nThis place in your heart \nThis face of your love \nIt’s made who you are \nIt’s fading away\nIt’s fading away\nIt’s fading away\nI’m fading away " },
    { id: "out", title: "Out In The Silence", dropboxTitle: "Out In The Silence", suno: "done",
      lyricsStatus: "present", lyrics: "Somewhere in the striving \nNo, this pace has to change\nwhat if my chance was missed? \nThis parking lot is solace \nJust a moment to think \nHow did it come to this?\nThere’s nowhere to go, nowhere to go \nNowhere to go anymore\nThere’s nowhere to go, nowhere to go \nNowhere to go anymore\nOut in the silence \nYou’re safe at home\nyou’re catching dreams while I fight to stay awake all over the road  \nOut in the silence \nYou’re all just fine\nI’m racing over trying not to be one the you leave behind \nForced into in the darkness \nWith no place or a name \nWould I even be missed? \nThere’s nowhere to go, nowhere to go \nNowhere to go anymore\nNo matter whose side you’re on\nA pawn is a pawn is a pawn  \nYou ain’t nothing til you wear that crown \nthe only piece they won’t let go down \nOut in the silence \nYou’re safe at home\nyou’re catching dreams while I fight to stay awake all over the road  \nOut in the silence \nYou’re all just fine\nI’m racing over trying not to be one the you leave behind " },
    { id: "solarace", title: "What It Meant", dropboxTitle: "Solarace", suno: "done", /* renamed Nov 11, 2026 (Rob); Dropbox files keep the Solarace name */
      lyricsStatus: "present", lyrics: "Sometimes someone\nYou vaguely know\nIs the friend you need\nWhen feeling low\n\nYou missed the good times\nWhen things got better\nAnd you were gone too soon\nBut I’ll never forget what it meant to know you\n\nAnyway, anyone\nCould have been the one\nThe angel who was there\nWhen I was done\nBut it was you\n\nYou missed the good times\nWhen things got better\nAnd you were gone too soon\nBut I’ll never forget what it meant to know you\n\nGuardian, you never knew\nThe angel, it was you\nEvery day in despair\nSomehow, someway, you were there\n\nYou missed the good times\nWhen things got better\nAnd you were gone too soon\nBut I’ll never forget what it meant to know you" },
    { id: "down", title: "Down", suno: "done",
      instrumental: { url: "https://www.dropbox.com/scl/fo/dqya7gic678zvxo85vznd/AEqF_n_UdwmERNZT_IfKMwc?rlkey=uknwsbj7gwhoqbh3m6d43fu6t&dl=0&preview=Down%20Inst.mp3", file: "/EMO/PRE PRODUCTION/Down Inst.mp3", label: "Down Inst.mp3" },
      lyricsStatus: "present", lyrics: "The smoke is a blowin’\nThey better know that you’re a rising star\n\nThe proof’s in the puddin’\nShades indoors, cocaine and fancy cars\n\n(Then It all. Comes. Down.)\n\nPack your bags we’re heading down below\nBetter grab what you can, it’ll be a while, nobody knows\nYou gotta Hold on tight, the floor is about to drop\nWhen it all comes down (it all comes down)\nit all comes down, you don’t wanna be on top\n\nWhen it all comes down (it all comes down)\nit all comes down, you don’t wanna be on top\n\nThe makin’s in the fakin’\nBig contracts, Cadillacs, all gone in a day\nBetter get with the gettin’\nAnd sell your soul if you got one to give away\n\n(Then It all. Comes. Down.)\n\nPack your bags we’re heading down below\nBetter grab what you can, it’ll be a while, nobody knows\nYou gotta Hold on tight, the floor is about to drop\nWhen it all comes down (it all comes down)\nit all comes down, you don’t wanna be on top\n\n(Then It all. Comes. Down.)\n\nPack your bags we’re heading down below\nBetter grab what you can, it’ll be a while, nobody knows\nYou gotta Hold on tight, the floor is about to drop\nWhen it all comes down (it all comes down)\nit all comes down, you don’t wanna be on top" },
    { id: "on-the-rocks", title: "On the Rocks", suno: "done",
      lyricsStatus: "present", lyrics: "There are no more words to say\nAnd don't think you can crawl away\nThis aint what you came for\nBut now its what you're paying for\n\nCan't see it from our view\nTo paint a picture we'll be erasing you\nReplacing you with a broken stick man\n\nYou can't hide\nWe're gonna find you\nDon't you forget\nOr we'll come remind you\n\nIt aint a secret\nCuz money talks\n\nTake us on the rocks\nAnd you will wake up shaken and stirred\nOn the rocks\nYou're gonna get yourself served\nEvery last drop kick you deserve\n\nYou're kissing the ground, you've got\nOne more round\n\nFarewell from us today\nAnd don't think you can crawl away\nBounced twice and a third'd be nice\nHave your eyes been betrayed?\nNo this is very real\nYour sleight of hand can't beat what we deal\nYou're out line you're out of time\nAnd you're out of luck\n\nYou cant run\nWe'll set the hounds on you\nDare you to try\nWe'll throw it down on you\nSo take us on the rocks\nAnd crush it cold to your face\n\nSomeone comes chasing\nWhen money walks\n\nTake us on the rocks\nAnd you will wake up shaken and stirred\nOn the rocks\nYou're gonna get yourself served\nEvery last drop kick you deserve\n\nAnd I, I really really hope this is getting through\nCause I don't know what you want from me\nBut now I know what I want from you\nKiss the ground, kiss your change on the ground\nKiss the cold dirt and don't come back around\nUnless you're ready to take all of us down\n\nI don't know what you want from me\nBut now I know what I want from you\n\nTake us on the rocks\nAnd you will wake up shaken and stirred\nOn the rocks\nYou're gonna get yourself served\nEvery last drop kick you deserve" },
    /* Added Nov 10, 2026 (Rob t109u). Files in /EMO/PRE PRODUCTION. Lyrics sent by Rob Nov 10, 2026 (bracketed labels stripped). */
    { id: "just-a-beautiful-mess", title: "Just A Beautiful Mess", suno: "done",
      demoFound: { file: "/EMO/Just a Beautiful Mess.mp3", note: "Older demo at /EMO root, not in a shared folder." },
      lyricsStatus: "present", lyrics: "It's always the same, babe\nI wake up next to you to another useless day\nIt never changes, dear\nI can't help the fact that we will fall apart if you stay here\n\nI cannot be held by your charm, not anymore\nYou're out of my head\nI cannot hold you in my arms, cause I need more\nThan Just a beautiful mess\n\nIt's always a chase, love\nI fought for you when I was not the one you're thinking of\nNow it is all said and done\nWhen the words fell from my lips I knew you're not the one\n\nI cannot be held by your charm, not anymore\nYou're out of my head\nI cannot hold you in my arms, cause I need more\nThan Just a beautiful mess\n\nSo what if we try if it's not meant to be (meant to be)\nthis mess of a life won't become part of me\n\nI cannot be held by your charm, not anymore\nYou're out of my head\nI cannot hold you in my arms, cause I need more\nThan Just a beautiful mess" },
    /* Added Nov 11, 2026 (Rob t118u). Lyrics verbatim from Rob. Suno status not stated, so unknown. */
    { id: "hollywood-has-fallen", title: "Hollywood Has Fallen", suno: "done",
      lyricsStatus: "present", lyrics: "Fading slowly\nYou won’t show me\nWho you really are\n(Left in the dark)\n\nOut of nowhere\nYea, I’ve been there\nAnd I can tell when I’m bein\n(Left in the dark)\n\nMind your manners\nWhen your mansion’s\nleft in the dark\nMind your manners\nWhen your mansion’s\nleft in the dark\nJust like the tents in the park\nWhen you’re left in the dark\nJust like the tents in the park\n\nThink I can’t see you? (It’s true)\nCan’t trust a silhouette (that’s you)\nI’m done defining (defining)\nWhat my eyes see through you\nIt’s nothing\n\nSole provider\nHides the lighter\nWhen it’s needed most\n\nMind your manners\nWhen your mansion\nIs left in the dark\nJust like the tents in the park, left in the dark\nlike the tents in the park, left in the dark\nlike the tents in the park, left in the dark" },
  ];


  const THEMES = {
    "love-lost": {
      name: "Love wanted and lost",
      blurb: "These songs sit with love as something wanted, taken, or already gone — a heart left open, ghosts in a bed, an angel who left too soon."
    },
    "leaving": {
      name: "Leaving and being left",
      blurb: "Someone is always walking away, driving off, or watching the other go. Tickets, rear-view mirrors, and trains that don't come back keep score."
    },
    "cycles": {
      name: "Cycles and repetition",
      blurb: "The same day arrives again. Patterns repeat — a demon in a new face, a game that asks if you'd like to play again, a tomorrow you should have seen coming."
    },
    "illusion": {
      name: "Illusion vs. real",
      blurb: "Fantasy, simulation, projection, and the nagging sense that nothing's real anymore. The record keeps asking what you're actually looking at."
    },
    "time-memory": {
      name: "Time and memory",
      blurb: "Time gets stolen, stored, or spent in the wrong tense — memories on a drive, a future taken back, a present forgotten while someone trips on what's next."
    },
    "the-road": {
      name: "The road",
      blurb: "Cars, tires, parking lots, maps, and rides that can't quite get started. Motion is a promise these songs don't always keep."
    },
    "descent": {
      name: "Collapse and descent",
      blurb: "Floors drop, tides come in, lights flicker out, and tickets lead downward. When it all comes down, being on top is the last place you want to be."
    },
    "fate": {
      name: "Fate and chance",
      blurb: "Fortune, missed chances, stars that may or may not align, and a fate that won't wait for your plans."
    },
    "isolation": {
      name: "Isolation",
      blurb: "Nowhere to go, nowhere to hide. Parking-lot solace, an apartment alone, the quiet of being the one left behind."
    },
    "the-self": {
      name: "The self",
      blurb: "Finding yourself, loving yourself, hiding a wild heart, or becoming what you create. The question underneath is who you are when no one else is in the room."
    },
    "signal": {
      name: "Signal and tape",
      blurb: "Tapes rewind, drives keep the dead alive, pixels glitch, and stories get written in ink that bleeds. The record itself is a medium the songs don't quite trust."
    }
  };

  const ALBUM_SUMMARY = "Exit Us is a record about what remains after love, luck, and plans fall apart. People keep leaving or getting left — in cars that won't go into drive, on trains that don't come back, in parking lots and rear-view mirrors — while the same tomorrow keeps arriving. Memory lives on drives and tapes; futures get taken; the line between what's real and what's simulated keeps slipping. Underneath is a downward pull (tides, tickets to hell, fading light, a floor about to drop) and a stubborn question of whether you can still find yourself, or be loved, before it all comes down.";

  const ANNO = {
    "hollywood-has-fallen": {
      themes: ["illusion", "isolation", "descent"],
      motifs: ["mansion in the dark", "tents in the park", "silhouette", "the lighter"],
      keyLine: "Just like the tents in the park"
    },
    "on-the-rocks": {
      themes: ["illusion", "fate", "leaving"],
      motifs: ["the rocks", "money", "hounds", "cold dirt", "one more round"],
      keyLine: "And you will wake up shaken and stirred"
    },
    "when-the-love-runs-out": {
      themes: ["love-lost", "time-memory", "illusion", "signal"],
      motifs: ["ghosts", "memories on a drive", "simulation"],
      keyLine: "All you have are memories on a drive"
    },
    "edges-of-earth": {
      themes: ["leaving", "time-memory", "the-road"],
      motifs: ["edges of the earth", "earthquake", "the road"],
      keyLine: "you drive me to the edges of the earth"
    },
    "opposite-day": {
      themes: ["illusion", "cycles", "the-self", "signal"],
      motifs: ["tape", "monsters", "the alarm"],
      keyLine: "You become what you create but still unsatisfied"
    },
    "find-yourself": {
      themes: ["love-lost", "isolation", "the-self"],
      motifs: ["nowhere to go", "walls", "the heart"],
      keyLine: "When will you let yourself be loved?"
    },
    "the-alone": {
      themes: ["leaving", "isolation", "the-road", "love-lost"],
      motifs: ["tires", "rear-view mirror", "tickets"],
      keyLine: "It’d be your turn as the one alone"
    },
    "living-again": {
      themes: ["love-lost", "time-memory", "cycles"],
      motifs: ["living again", "time robbed"],
      keyLine: "When, is it right to start again?"
    },
    "why-should-i-be-surprised": {
      themes: ["cycles", "fate", "love-lost", "descent"],
      motifs: ["demons", "the tide", "tomorrow"],
      keyLine: "The tide may come in and sweep your feet off the ground"
    },
    "the-getaway-theme": {
      themes: ["leaving", "the-road", "isolation"],
      motifs: ["tickets", "cars", "maps"],
      keyLine: "I can’t put it in drive"
    },
    "wild-heart": {
      themes: ["the-self", "the-road", "love-lost"],
      motifs: ["smoke", "craters", "lights"],
      keyLine: "When your wild heart comes alive"
    },
    "moon": {
      themes: ["love-lost", "fate", "leaving", "descent"],
      motifs: ["six feet down", "wedding gown", "fate"],
      keyLine: "Just to know what it feels like to be loved?"
    },
    "sweet-sweet-love": {
      themes: ["love-lost", "the-self"],
      motifs: ["darkness and light", "black and white", "gears"],
      keyLine: "Within the darkness there is light"
    },
    "dirty-talk": {
      themes: ["isolation", "illusion", "fate", "leaving"],
      motifs: ["stars", "astronauts", "gravity", "poison"],
      keyLine: "Where your stars align"
    },
    "talk-in-my-sleep": {
      themes: ["time-memory", "the-self", "cycles", "signal"],
      motifs: ["ink", "pages", "shaking hands"],
      keyLine: "And I want it fucking back."
    },
    "future-tripper": {
      themes: ["time-memory", "isolation", "the-self"],
      motifs: ["the future", "dreaming"],
      keyLine: "I’m tripping on the future"
    },
    "analog-exe": {
      themes: ["illusion", "signal", "cycles"],
      motifs: ["simulation", "tape", "the game"],
      keyLine: "Nothing’s real anymore"
    },
    "stuffed-animal": {
      themes: ["illusion", "the-self", "signal"],
      motifs: ["pixels", "empty vessel", "animals"],
      keyLine: "I am the glitching pixels you’ve picked out from far away"
    },
    "ticket-to-hell": {
      themes: ["descent", "illusion", "the-road"],
      motifs: ["tickets", "bitter ride", "conscience"],
      keyLine: "It takes a ticket to hell"
    },
    "big-bang": {
      themes: ["descent", "leaving", "cycles"],
      motifs: ["trains", "bottles", "birds circling", "flickering light"],
      keyLine: "Flickers out like a light"
    },
    "meteorites": {
      themes: ["fate", "love-lost", "descent", "illusion"],
      motifs: ["strange destinations", "fading", "fate"],
      keyLine: "It’s fading away"
    },
    "out": {
      themes: ["isolation", "leaving", "the-road", "fate"],
      motifs: ["parking lots", "nowhere to go", "the road", "pawns"],
      keyLine: "This parking lot is solace"
    },
    "solarace": {
      themes: ["love-lost", "time-memory", "isolation"],
      motifs: ["angels", "guardians"],
      keyLine: "And you were gone too soon"
    },
    "down": {
      themes: ["descent", "illusion", "fate"],
      motifs: ["smoke", "rising star", "the floor dropping", "Cadillacs"],
      keyLine: "it all comes down, you don’t wanna be on top"
    },
    "just-a-beautiful-mess": {
      themes: ["love-lost", "leaving", "cycles"],
      motifs: ["the same useless day", "charm", "the chase", "a beautiful mess"],
      keyLine: "I need more than just a beautiful mess"
    }
  };

  const HERO_LINES = [
    { id: "when-the-love-runs-out", line: "When the love runs out" },
    { id: "edges-of-earth", line: "you drive me to the edges of the earth" },
    { id: "opposite-day", line: "Rewind the tape" },
    { id: "the-alone", line: "Tires kicking gravel" },
    { id: "why-should-i-be-surprised", line: "The tide may come in" },
    { id: "the-getaway-theme", line: "I can’t put it in drive" },
    { id: "dirty-talk", line: "Where your stars align" },
    { id: "future-tripper", line: "I’m tripping on the future" },
    { id: "analog-exe", line: "Nothing’s real anymore" },
    { id: "big-bang", line: "Flickers out like a light" },
    { id: "down", line: "When it all comes down" },
    { id: "on-the-rocks", line: "Take us on the rocks" }
  ];

  const STRUCK = new Set(["orion", "move-me", "why-should-i-be-surprised", "meteorites"]);
  const META = {"when-the-love-runs-out": ["2009", "Drop C", "Moving Forward"], "edges-of-earth": ["2011", "Drop C", "Edges of Earth"], "opposite-day": ["2014", "E", "Opposite Day"], "find-yourself": ["2017", "E", "Find Yourself"], "the-alone": ["2010", "E", "The Alone"], "living-again": ["2020", "E", "Living Again"], "why-should-i-be-surprised": ["2013", "7-String B", "Why Should I Be Surprised"], "the-getaway-theme": ["2009", "Drop C", "City of Distant Sirens"], "wild-heart": ["2019", "E", "Wild"], "moon": ["2021", "E", "Moon"], "sweet-sweet-love": ["2011", "Drop C", "Sweet Sweet Love"], "dirty-talk": ["2021", "Drop C", "Dirty Talk"], "talk-in-my-sleep": ["2011", "7-String Bb", "Talk in My Sleep"], "future-tripper": ["2020", "E", "Future Tripper"], "analog-exe": ["2025", "E", "Analog.EXE"], "stuffed-animal": ["2021", "E", "Stuffed Animal"], "ticket-to-hell": ["2023", "Drop C", "Sour"], "big-bang": ["2021", "Drop C", "EggNog"], "meteorites": ["2022", "E", "Meteorites"], "out": ["2023", "E", "Out"], "solarace": ["2009", "Drop C", "Solarace"], "down": ["2022", "D", "Orion"], "on-the-rocks": ["2010", "7-String Bb", "On the Rocks"], "just-a-beautiful-mess": ["2008", "Drop D", "Angel"], "hollywood-has-fallen": ["2020", "7-String Bb", "Hollywood Has Fallen"]};
  for (let i = songs.length - 1; i >= 0; i--) if (STRUCK.has(songs[i].id)) songs.splice(i, 1);
  songs.forEach((s, i) => {
    s.n = i + 1;
    const m = META[s.id] || [];
    s.year = m[0] || "TBD";
    s.tuning = m[1] || "TBD";
    s.demoTitle = m[2] || "TBD";
    if (!s.instrumental) s.instrumental = null;
    if (!s.drumDemo) s.drumDemo = null;
    s.media = MEDIA[s.id] || {};
    const a = ANNO[s.id] || { themes: [], motifs: [], keyLine: "" };
    s.themes = a.themes;
    s.motifs = a.motifs;
    s.keyLine = a.keyLine;
  });

  return { MEMBERS, PHASES, VOX, SONGS: songs, THEMES, ALBUM_SUMMARY, HERO_LINES, CHAT_LYRICS_NOTE: CHAT };
})();
