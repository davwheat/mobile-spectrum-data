import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1",
    ownerLongName: "A1 Bulgaria",
    startFreq: 1805,
    endFreq: 1830,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1735,
    },
    earfcns: [1300],
    arfcns: [514, 608, 623, 625],
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Bulgaria",
    startFreq: 1830,
    endFreq: 1855,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1735,
      endFreq: 1760,
    },
    earfcns: [1550],
  },
  {
    owner: "Vivacom",
    ownerLongName: "Vivacom Bulgaria",
    startFreq: 1855,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1760,
      endFreq: 1785,
    },
    earfcns: [1800],
    nrarfcns: [372730],
    details: ["LTE B3 20 MHz, n3 DSS"],
  },
];

export default data;
