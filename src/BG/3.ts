import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1",
    ownerLongName: "A1 Bulgaria",
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
    owner: "Unallocated",
    startFreq: 1820,
    endFreq: 1830,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1725,
      endFreq: 1735,
    },
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Bulgaria",
    startFreq: 1830,
    endFreq: 1850,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1735,
      endFreq: 1755,
    },
    earfcns: [1550],
  },
  {
    owner: "Unallocated",
    startFreq: 1850,
    endFreq: 1855,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1755,
      endFreq: 1760,
    },
  },
  {
    owner: "Vivacom",
    ownerLongName: "Vivacom Bulgaria",
    startFreq: 1855,
    endFreq: 1875,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1760,
      endFreq: 1780,
    },
    earfcns: [1800],
    nrarfcns: [372730],
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
  },
];

export default data;
