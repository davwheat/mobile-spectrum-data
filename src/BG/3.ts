import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1 BG",
    startFreq: 1805,
    endFreq: 1820,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1725,
    },
    earfcns: [1275],
  },
  {
    owner: "Yettel BG",
    startFreq: 1820,
    endFreq: 1835,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1725,
      endFreq: 1740,
    },
    earfcns: [1425],
  },
  {
    owner: "Unallocated",
    startFreq: 1835,
    endFreq: 1855,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1740,
      endFreq: 1760,
    },
    earfcns: "Unallocated",
  },
  {
    owner: "Vivacom BG",
    startFreq: 1855,
    endFreq: 1875,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1760,
      endFreq: 1780,
    },
    earfcns: [1800],
    details: ["LTE B3 20 MHz, n3 DSS in urban areas and on highways"],
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
    earfcns: "Unallocated",
  },
];

export default data;
