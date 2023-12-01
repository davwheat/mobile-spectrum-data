import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [2060],
    endFreq: 2130,
    owner: "Digicel",
    ownerLongName: "Digicel Jamaica Ltd.",
    pairedWith: {
      endFreq: 1730,
      startFreq: 1710,
      type: "fddUp",
    },
    startFreq: 2110,
    type: "fddDown",
  },
  {
    endFreq: 2135,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 1735,
      startFreq: 1730,
      type: "fddUp",
    },
    startFreq: 2130,
    type: "fddDown",
  },
  {
    earfcns: [2300],
    endFreq: 2155,
    owner: "FLOW",
    ownerLongName: "Cable and Wireless Jamaica Ltd.",
    pairedWith: {
      endFreq: 1755,
      startFreq: 1735,
      type: "fddUp",
    },
    startFreq: 2135,
    type: "fddDown",
  },
  {
    endFreq: 2180,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 1780,
      startFreq: 1755,
      type: "fddUp",
    },
    startFreq: 2155,
    type: "fddDown",
  },
];

export default data;
