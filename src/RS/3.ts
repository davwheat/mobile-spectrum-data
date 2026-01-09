import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Yettel",
    ownerLongName: "Yettel Srbija",
    startFreq: 1805,
    endFreq: 1830,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1735,
    },
  },
  {
    owner: "mts",
    ownerLongName: "Telekom Srbija",
    startFreq: 1830,
    endFreq: 1855,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1735,
      endFreq: 1760,
    },
  },
  {
    owner: "A1",
    ownerLongName: "A1 Srbija",
    startFreq: 1855,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1760,
      endFreq: 1785,
    },
  },
];

export default data;
