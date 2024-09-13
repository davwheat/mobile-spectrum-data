import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Yettel",
    ownerLongName: "Yettel Bulgaria",
    startFreq: 2110,
    endFreq: 2130,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920,
      endFreq: 1940,
    },
    uarfcns: [10638],
    earfcns: [100],
    details: [
      "LTE B1 20 MHz nationwide deployment",
      "Indoor and metro deployments use LTE B1 10 MHz (EARFCN 100) + UMTS B1 5 MHz",
    ],
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
    uarfcns: [10737],
    earfcns: [275, 300],
    details: [
      "LTE B1 20 MHz nationwide deployment",
      "Indoor and metro deployments use LTE B1 15 MHz (EARFCN 275) + UMTS B1 5 MHz",
    ],
  },
  {
    owner: "Vivacom",
    ownerLongName: "Vivacom Bulgaria",
    startFreq: 2150,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1960,
      endFreq: 1970,
    },
    uarfcns: [10762],
    earfcns: [500, 525],
    details: [
      "LTE B1 20 MHz nationwide deployment",
      "Indoor and metro deployments use LTE B1 15 MHz (EARFCN 525) + UMTS B1 5 MHz",
    ],
  },
];

export default data;
