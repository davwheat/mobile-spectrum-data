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
    endFreq: 2615,
    type: "tdd",
    earfcns: [37900, 38098],
    details: [
      "2575-2610 MHz owned by Vodafone Ukraine",
      "2610-2615 MHz operated without a license",
      "Operated as 20+20 MHz contiguous carriers in all of Ukriane",
    ],
  },
  {
    owner: "Unallocated",
    startFreq: 2615,
    endFreq: 2620,
    type: "generic",
  },
];

export default data;
