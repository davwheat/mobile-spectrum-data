import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Yettel",
    ownerLongName: "Yettel Bulgaria",
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
    ownerLongName: "Yettel Bulgaria",
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
    ownerLongName: "A1 Bulgaria",
    startFreq: 2130,
    endFreq: 2150,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1940,
      endFreq: 1960,
    },
    uarfcns: [10712, 10737],
    earfcns: [250, 275, 300],
    details: [
      "LTE B1 20 MHz nationwide deployment",
      "Indoor deployments use LTE B1 15 MHz (EARFCN 275) + UMTS B1 5 MHz",
      "Sofia metro lines 1, 2 and 4 have LTE B1 10 MHz (EARFCN 250) + UMTS B1 10 MHz",
    ],
  },
  {
    owner: "Vivacom",
    ownerLongName: "Vivacom Bulgaria",
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
    ownerLongName: "Vivacom Bulgaria",
    startFreq: 2155,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1965,
      endFreq: 1980,
    },
    earfcns: [525, 550],
    details: [
      "LTE B1 15 MHz nationwide deployment",
      "Sofia metro lines 1, 2 and 4 have LTE B1 10 MHz (EARFCN 550) + UMTS B1 10 MHz",
    ],
  },
];

export default data;
