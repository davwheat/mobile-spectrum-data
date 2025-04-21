import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1",
    ownerLongName: "A1 Bulgaria",
    startFreq: 925.1,
    endFreq: 936.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880.1,
      endFreq: 891.7,
    },
    earfcns: [3515, 3536],
    uarfcns: [2945],
    arfcns: [6, 7, 975, 976, 977, 978, 979, 980, 981, 982, 983],
    details: [
      "Nationwide B8 LTE 4.6 MHz (EARFCN 3536), B8 3G and B8 2G deployment",
      "B8 LTE up to 10 MHz (EARFCN 3515) in areas without 3G, B8 2G deployment",
    ],
  },
  {
    owner: "Vivacom",
    ownerLongName: "Vivacom Bulgaria",
    startFreq: 936.7,
    endFreq: 948.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 891.7,
      endFreq: 903.3,
    },
    earfcns: [3636],
    uarfcns: [2995],
    arfcns: [69, 70, 71, 72, 73, 74, 75, 76, 77, 78],
    details: "Nationwide B8 LTE 4.6 MHz, B8 3G and B8 2G deployment",
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Bulgaria",
    startFreq: 948.3,
    endFreq: 959.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 903.3,
      endFreq: 914.9,
    },
    earfcns: [3774],
    uarfcns: [3065],
    arfcns: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
    details: ["Nationwide B8 LTE 4.6 MHz, B8 3G and B8 2G deployment"],
  },
];

export default data;
