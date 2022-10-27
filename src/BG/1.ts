import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Yettel",
    startFreq: 2110,
    endFreq: 2125,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920,
      endFreq: 1935,
    },
    earfcns: [75],
    details: ["LTE B1 15 MHz nationwide deployment"],
  },
  {
    owner: "Yettel",
    startFreq: 2125,
    endFreq: 2130,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1935,
      endFreq: 1940,
    },
    uarfcns: [10638],
    details: ["UMTS B1 5 MHz nationwide deployment"],
  },
  {
    owner: "A1",
    startFreq: 2130,
    endFreq: 2150,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1940,
      endFreq: 1960,
    },
    uarfcns: [10737],
    earfcns: [275, 300],
    details: [
      "LTE B1 20 MHz nationwide deployment, some areas have UMTS B1 5 MHz with LTE B1 15 MHz",
    ],
  },
  {
    owner: "Vivacom",
    startFreq: 2150,
    endFreq: 2155,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1960,
      endFreq: 1965,
    },
    uarfcns: [10762],
    details: ["UMTS B1 5 MHz nationwide deployment"],
  },
  {
    owner: "Vivacom",
    startFreq: 2155,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1965,
      endFreq: 1980,
    },
    earfcns: [525],
    details: ["LTE B1 15 MHz nationwide deployment"],
  },
];

export default data;
