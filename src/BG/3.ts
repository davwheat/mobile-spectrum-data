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
    owner: "Vivacom",
    startFreq: 1835,
    endFreq: 1850,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1740,
      endFreq: 1755,
    },
    earfcns: [1575],
    nrarfcns: [368410],
    details: ["LTE B3 15 MHz, n3 DSS in urban areas and on highways"],
  },
  {
    owner: "Unallocated",
    startFreq: 1850,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1755,
      endFreq: 1785,
    },
    earfcns: "Unallocated",
  },
];

export default data;
