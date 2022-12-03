import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1",
    startFreq: 1805,
    endFreq: 1840,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1745,
    },
    earfcns: [1279, 1450],
    details: ["LTE 15 MHz + LTE 20 MHz"],
  },
  {
    owner: "Telekom",
    startFreq: 1840,
    endFreq: 1865,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1745,
      endFreq: 1770,
    },
    earfcns: [1700],
  },
  {
    owner: "Unallocated",
    startFreq: 1865,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1770,
      endFreq: 1785,
    },
  },
];

export default data;
