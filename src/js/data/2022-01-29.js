dataSetVersion = "2022-01-29"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Kerfuffle For A Neat Prize", key: "kfanp" },
      { name: "Duck Clash", tooltip: "First season of Duck Clash", key: "duck1" },
      { name: "Duck Clash DX", tooltip: "Second season of Duck Clash", key: "duck2" },
      { name: "BFAMOOS", tooltip: "Old show", key: "bf" },
      { name: "Battle For Oat Isle", tooltip: "REALLY old show", key: "bfoi" },
      { name: "The Mildud Super Show", tooltip: "", key: "TMSS" },
    ]
  },
  {
    name: "Filter by Character Type",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [
      { name: "Booksona", key: "book" },
      { name: "Duck", key: "dk" },
      { name: "Dew Planeter", key: "dew" },
      { name: "Object", key: "obj" },
      { name: "Creatures", tooltip: "Non-objects basically.", key: "cr" },
    ]
  },
  {
    name: "Remove Character Duplicates",
    key: "dup",
    tooltip: "Check this to remove characters that have multiple forms but are still the same person"
  },

];

dataSet[dataSetVersion].characterData = [
  {
    name: "7_Segment Display",
    img: "7-Segment Display.png",
    opts: {
      series: [],
      stage: ["obj"]
    }
  },
  {
    name: "8 Bit Duck",
    img: "8-Bit Duck.png",
    opts: {
      series: ["duck1", "duck2"],
      stage: ["dk"]
    }
  },
  {
    name: "16-Bit Duck",
    img: "16-Bit Duck.png",
     opts: {
      series: ["duck1", "duck2"],
      stage: ["dk"]
  },
  {
    name: "Almond",
    img: "Almond.png",
    opts: { series: [], stage: ["book"] }
  },
  {
    name: "Amazok Jr",
    img: "Amazok Jr.png",
    opts: {
      series: [ "kfanp"
      ],
      stage: ["st2"]
    }
  },
  {
    name: "Amazok",
    img: "Amazok.pngg",
    opts: { series: ["kfanp"], stage: ["obj"] }
  },
  {
    name: "Amber",
    img: "Amber.png",
    opts: { series: [], stage: ["book"] }
  },
  {
    name: "Patchouli Knowledge",
    img: "A7ZnuHo.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Izayoi Sakuya",
    img: "sgZPf11.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "Soku", "HM", "DDC", "ISC"
      ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Remilia Scarlet",
    img: "8UX7hKE.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "IN", "StB", "MoF", "Soku", "HM", "ISC"],
      stage: ["st6"]
    }
  },
  {
    name: "Flandre Scarlet",
    img: "OhaDcnc.png",
    opts: { series: ["book", "EoSD", "StB"], stage: ["ex"] }
  },
  {
    name: "Letty Whiterock",
    img: "MgzqjFK.png",
    opts: { series: ["book", "PCB", "StB", "HM"], stage: ["st1"] }
  },
  {
    name: "Chen",
    img: "ohmetZh.png",
    opts: {
      series: ["book", "PCB", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Alice Margatroid",
    img: "aDIf0pN.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM"],
      stage: ["st3"]
    }
  },
  {
    name: "Lily White",
    img: "2Pr8b2N.png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4", "ex"] }
  },
  {
    name: "Lunasa Prismriver",
    img: "htOMdDQ.png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4"] }
  },
  {
    name: "Merlin Prismriver",
    img: "PrRPujP.png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4"] }
  },
  {
    name: "Lyrica Prismriver",
    img: "ze79bFC.png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4"] }
  },
  {
    name: "Konpaku Youmu",
    img: "WMjyRLJ.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "Soku", "TD", "HM", "ISC"
      ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Saigyouji Yuyuko",
    img: "VT9mTGb.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "TD", "HM", "ISC"
      ],
      stage: ["st1", "st6"]
    }
  },
  {
    name: "Yakumo Ran",
    img: "rshnJPV.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM"],
      stage: ["ex"]
    }
  },
  {
    name: "Yakumo Yukari",
    img: "qsceD4I.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM", "ISC"],
      stage: ["ex"]
    }
  },
  {
    name: "Ibuki Suika",
    img: "pLdMjQ3.png",
    opts: {
      series: ["book", "IaMP", "StB", "MoF", "Soku", "DS", "HM", "ISC"],
      stage: ["st6"]
    }
  },
  {
    name: "Wriggle Nightbug",
    img: "8DLUAPf.png",
    opts: { series: ["book", "IN", "StB", "HM"], stage: ["st1"] }
  },
  {
    name: "Mystia Lorelei",
    img: "6KyhLqE.png",
    opts: { series: ["book", "IN", "PoFV", "StB", "HM"], stage: ["st2"] }
  },
  {
    name: "Kamishirasawa Keine",
    img: "99w0Chm.png",
    opts: { series: ["book", "IN", "StB", "HM", "ISC"], stage: ["st3", "ex"] }
  },
  {
    name: "Inaba Tewi",
    img: "yqNfNje.png",
    opts: { series: ["book", "IN", "PoFV", "StB", "HM"], stage: ["st5"] }
  },
  {
    name: "Reisen Udongein Inaba",
    img: "PrYzRcC.png",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "Soku", "HM", "LoLK"],
      stage: ["st5"]
    }
  },
  {
    name: "Yagokoro Eirin",
    img: "ceo4DhK.png",
    opts: { series: ["book", "IN", "StB", "HM"], stage: ["st6"] }
  },
  {
    name: "Houraisan Kaguya",
    img: "2YDuTk3.png",
    opts: { series: ["book", "IN", "StB", "HM"], stage: ["st6"] }
  },
  {
    name: "Fujiwara no Mokou",
    img: "3zo4VKV.png",
    opts: { series: ["book", "IN", "StB", "HM", "ISC", "ULiL"], stage: ["ex"] }
  },
  {
    name: "Shameimaru Aya",
    img: "8TLXMST.png",
    opts: {
      series: ["book", "PoFV", "StB", "MoF", "SWR", "Soku", "HM", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "Medicine Melancholy",
    img: "IImsp7K.png",
    opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st4"] }
  },
  {
    name: "Kazami Yuuka",
    img: "MZXJQq5.png",
    opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st5"] }
  },
  {
    name: "Onozuka Komachi",
    img: "aX4WIH8.png",
    opts: {
      series: ["book", "PoFV", "StB", "MoF", "Soku", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Shiki Eiki, Yamaxanadu",
    img: "nPBvatH.png",
    opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st6"] }
  },
  {
    name: "Aki Shizuha",
    img: "3pDRgvR.png",
    opts: { series: ["SWR", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "Aki Minoriko",
    img: "bV0DaN7.png",
    opts: { series: ["SWR", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "Kagiyama Hina",
    img: "J11NjNj.png",
    opts: { series: ["SWR", "DS", "HM"], stage: ["st2"] }
  },
  {
    name: "Kawashiro Nitori",
    img: "4Ufced2.png",
    opts: { series: ["SWR", "DS", "HM", "ISC", "ULiL"], stage: ["st3"] }
  },
  {
    name: "Inubashiri Momiji",
    img: "qGMjnYk.png",
    opts: { series: ["SWR", "DS", "ISC"], stage: ["st4"] }
  },
  {
    name: "Kochiya Sanae",
    img: "ATTRSWU.png",
    opts: {
      series: ["SWR", "SA", "UFO", "Soku", "DS", "TD", "HM", "ISC", "LoLK"],
      stage: ["st5", "ex"]
    }
  },
  {
    name: "Yasaka Kanako",
    img: "nQ78Lz7.png",
    opts: { series: ["SWR", "Soku", "DS", "HM", "ISC"], stage: ["st6", "ex"] }
  },
  {
    name: "Moriya Suwako",
    img: "yJaD5ZV.png",
    opts: { series: ["SWR", "SA", "Soku", "DS", "HM", "ISC"], stage: ["ex"] }
  },
  {
    name: "Nagae Iku",
    img: "xgAlECj.png",
    opts: { series: ["MoF", "Soku", "DS", "HM"], stage: ["st5"] }
  },
  {
    name: "Hinanawi Tenshi",
    img: "tZLYivt.png",
    opts: { series: ["MoF", "Soku", "DS", "HM", "ISC"], stage: ["st6"] }
  },
  {
    name: "Kisume",
    img: "VgJgaEf.png",
    opts: { series: ["SA", "DS"], stage: ["st1"] }
  },
  {
    name: "Kurodani Yamame",
    img: "sqgJ2St.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "Mizuhashi Parsee",
    img: "lkoAJod.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st2"] }
  },
  {
    name: "Hoshiguma Yuugi",
    img: "tDO653L.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st3"] }
  },
  {
    name: "Komeiji Satori",
    img: "dup7Nt6.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st4"] }
  },
  {
    name: "Kaenbyou Rin (Orin)",
    img: "uQjbw1W.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st4", "st5", "st6"] }
  },
  {
    name: "Reiuji Utsuho (Okuu)",
    img: "DfdaXPW.png",
    opts: { series: ["SA", "Soku", "DS", "HM"], stage: ["st6"] }
  },
  {
    name: "Komeiji Koishi",
    img: "wVCcens.png",
    opts: { series: ["SA", "DS", "HM", "ULiL"], stage: ["ex"] }
  },
  {
    name: "Nazrin",
    img: "EpHQbiY.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st1", "st5"] }
  },
  {
    name: "Tatara Kogasa",
    img: "kJbv4dc.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st2", "ex"] }
  },
  {
    name: "Kumoi Ichirin",
    img: "Fyn5yVx.png",
    opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"] }
  },
  {
    name: "Murasa Minamitsu",
    img: "39KYpvW.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st4"] }
  },
  {
    name: "Toramaru Shou",
    img: "8bMDDAo.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st5"] }
  },
  {
    name: "Hijiri Byakuren",
    img: "2ppPxny.png",
    opts: { series: ["UFO", "DS", "HM", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Houjuu Nue",
    img: "zL4S8Mj.png",
    opts: { series: ["UFO", "DS", "TD", "HM"], stage: ["st4", "st6", "ex"] }
  },
  {
    name: "Himekaidou Hatate",
    img: "LgvoTaJ.png",
    opts: { series: ["DS", "HM", "ISC"], stage: ["ex"] }
  },
  {
    name: "Sunny Milk",
    img: "VbqXiB6.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Luna Child",
    img: "OBqgP48.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Star Sapphire",
    img: "sNw61ap.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Kasodani Kyouko",
    img: "sLiqEBA.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st2"] }
  },
  {
    name: "Miyako Yoshika",
    img: "6jq6eh6.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st3", "st4"] }
  },
  {
    name: "Kaku Seiga",
    img: "090hLPL.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st4"] }
  },
  {
    name: "Soga no Tojiko",
    img: "y0UXwFO.png",
    opts: { series: ["TD", "HM"], stage: ["st5"] }
  },
  {
    name: "Mononobe no Futo",
    img: "WTZ97LE.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st5"] }
  },
  {
    name: "Toyosatomimi no Miko",
    img: "3Xiqd22.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Futatsuiwa Mamizou",
    img: "gMpWdmA.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["ex"] }
  },
  {
    name: "Hata no Kokoro",
    img: "fxCGmUk.png",
    opts: { series: ["book", "HM", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Wakasagihime",
    img: "brWCLVx.png",
    opts: { series: ["DDC", "ISC"], stage: ["st1"] }
  },
  {
    name: "Sekibanki",
    img: "VAMLiJD.png",
    opts: { series: ["DDC", "ISC"], stage: ["st2"] }
  },
  {
    name: "Imaizumi Kagerou",
    img: "b5UMjD8.png",
    opts: { series: ["DDC", "ISC"], stage: ["st3"] }
  },
  {
    name: "Tsukumo Benben",
    img: "vWNeMaH.png",
    opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
  },
  {
    name: "Tsukumo Yatsuhashi",
    img: "EJFQHQN.png",
    opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
  },
  {
    name: "Kijin Seija",
    img: "16RUacj.png",
    opts: { series: ["DDC", "ISC"], stage: ["st5", "st6"] }
  },
  {
    name: "Sukuna Shinmyoumaru",
    img: "Zl2tN7W.png",
    opts: { series: ["DDC", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Horikawa Raiko",
    img: "SLLEccR.png",
    opts: { series: ["DDC", "ISC"], stage: ["ex"] }
  },
  {
    name: "Usami Sumireko",
    img: "mc7ICW6.png",
    opts: { series: ["ULiL"], stage: ["st6"] }
  },
  {
    name: "Seiran",
    img: "0ra00WG.png",
    opts: { series: ["LoLK"], stage: ["st1"] }
  },
  {
    name: "Ringo",
    img: "xQOsFlZ.png",
    opts: { series: ["LoLK"], stage: ["st2"] }
  },
  {
    name: "Doremy Sweet",
    img: "rGS7dyn.png",
    opts: { series: ["LoLK"], stage: ["st3", "ex"] }
  },
  {
    name: "Kishin Sagume",
    img: "HLT338X.png",
    opts: { series: ["LoLK"], stage: ["st4"] }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: { series: ["LoLK"], stage: ["st5"] }
  },
  {
    name: "Junko",
    img: "NsfLZjY.jpg",
    opts: { series: ["LoLK"], stage: ["st6", "ex"] }
  },
  {
    name: "Hecatia Lapislazuli",
    img: "EH3Ulol.png",
    opts: { series: ["LoLK"], stage: ["ex"] }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: { series: ["book"], stage: [] }
  },
  { name: "Tokiko", img: "Y4maOc8.png", opts: { series: ["book"], stage: [] } },
  {
    name: "Rei'sen (Manga)",
    img: "cWjCo2j.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: { series: ["book", "ULiL"], stage: ["st5"] }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: { series: ["book"], stage: [] }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: { series: ["HRtP"], stage: ["st1"] }
  },
  {
    name: "Mima",
    img: "odH03t2.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: { series: ["HRtP"], stage: ["st5"] }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: { series: ["HRtP"], stage: ["st5"] }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: { series: ["HRtP"], stage: ["st6"] }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: { series: ["HRtP"], stage: ["st6"] }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: { series: ["SoEW"], stage: ["st1", "ex"] }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: { series: ["SoEW"], stage: ["st2"] }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: { series: ["SoEW", "PoDD", "LLS", "MS"], stage: ["st4"], pc98: true }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: { series: ["PoDD"], stage: [] } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: { series: ["PoDD"], stage: ["st5"] }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: { series: ["PoDD"], stage: ["st6"] }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: { series: ["PoDD"], stage: [] }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: { series: ["LLS"], stage: ["st1"] }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: { series: ["LLS"], stage: ["st2"] }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: { series: ["LLS"], stage: ["st3"] }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: { series: ["LLS", "MS"], stage: ["st5", "st6"], pc98: true }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: { series: ["LLS"], stage: ["ex"] }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: { series: ["LLS"], stage: ["ex"] }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: { series: ["MS"], stage: ["st1"] }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: { series: ["MS"], stage: ["st2", "st4"] }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: { series: ["MS"], stage: ["st3", "ex"], pc98: true }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: { series: ["MS"], stage: ["st4"] }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: { series: ["MS"], stage: ["st4"] } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: { series: ["MS"], stage: ["st5"] }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: { series: ["MS"], stage: ["st6"] }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: { series: ["PoDD"], stage: [], notgirl: true }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"], notgirl: true }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: { series: ["SoEW", "PoDD", "LLS", "MS"], stage: [], notgirl: true }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: { series: ["HRtP"], stage: ["st1"], notgirl: true }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: { series: ["HRtP"], stage: ["st3"], notgirl: true }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: { series: ["SoEW"], stage: ["ex"], notgirl: true }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: { series: ["Soku"], stage: ["st6"], notgirl: true }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: { series: ["book", "HM"], stage: [], notgirl: true }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: { series: ["book"], stage: [], notgirl: true }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: { series: ["Soku"], stage: [], notgirl: true }
  }
];
