import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "MoD",
    ownerLongName: "Ministry of Defence",
    startFreq: 2300,
    endFreq: 2350,
    type: "generic",
  },
  {
    owner: "O2",
    startFreq: 2350,
    endFreq: 2390,
    type: "tdd",
    details: "Split into two 20 MHz carriers.",
    earfcns: [39250, 39448],
  },
  {
    owner: "MoD",
    ownerLongName: "Ministry of Defence",
    startFreq: 2390,
    endFreq: 2400,
    type: "generic",
  },
];

export default data;
