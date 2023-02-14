import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Yettel",
    ownerLongName: "Yettel Srbija",
    startFreq: 1805,
    endFreq: 1825,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1730,
    },
    earfcns: [1300],
  },
  {
    owner: "mts",
    ownerLongName: "Telekom Srbija",
    startFreq: 1825,
    endFreq: 1845,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1730,
      endFreq: 1750,
    },
    earfcns: [1500],
  },
  {
    owner: "A1",
    ownerLongName: "A1 Srbija",
    startFreq: 1845,
    endFreq: 1875,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1750,
      endFreq: 1780,
    },
    earfcns: [1651, 1795],
  },
  {
    owner: "Unallocated",
    startFreq: 1875,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1780,
      endFreq: 1785,
    },
  },
];

export default data;
