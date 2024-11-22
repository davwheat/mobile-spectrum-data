import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 2570,
    endFreq: 2575,
    type: "generic",
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ukraine",
    startFreq: 2575,
    endFreq: 2610,
    type: "tdd",
    earfcns: [37900, 37902, 38098, 38100],
  },
  {
    owner: "Unallocated",
    startFreq: 2615,
    endFreq: 2620,
    type: "generic",
  },
];

export default data;
