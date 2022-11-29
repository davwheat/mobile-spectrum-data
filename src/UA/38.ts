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
    earfcns: [37902, 37925, 38075, 38100],
    details: [
      "Spectrum owned by Vega Telecommunications Ukraine",
      "Deployed as two 15 MHz carriers or two 20 MHz carriers on Vodafone",
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
