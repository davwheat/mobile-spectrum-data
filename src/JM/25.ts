import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 1945,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 1865,
      startFreq: 1850,
      type: "fddUp",
    },
    startFreq: 1930,
    type: "fddDown",
  },
  {
    earfcns: [900],
    endFreq: 1970,
    owner: "FLOW",
    ownerLongName: "Cable and Wireless Jamaica Ltd.",
    pairedWith: {
      endFreq: 1890,
      startFreq: 1865,
      type: "fddUp",
    },
    startFreq: 1945,
    type: "fddDown",
    uarfcns: [487],
  },
  {
    earfcns: [1100],
    endFreq: 1990,
    owner: "Digicel",
    ownerLongName: "Digicel Jamaica Ltd.",
    pairedWith: {
      endFreq: 1910,
      startFreq: 1890,
      type: "fddUp",
    },
    sourceInfo: {
      details: "",
      type: "other",
    },
    startFreq: 1970,
    type: "fddDown",
  },
  {
    endFreq: 1995,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 1915,
      startFreq: 1910,
      type: "fddUp",
    },
    startFreq: 1990,
    type: "fddDown",
  },
];

export default data;
