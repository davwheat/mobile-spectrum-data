import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "VF",
    startFreq: 2570,
    endFreq: 2575,
    type: "tdd",
    details: ["Unused TDD spectrum"],
  },
  {
    owner: "Vodafone",
    startFreq: 2575,
    endFreq: 2595,
    type: "tdd",
    earfcns: [37900],
  },
  {
    owner: "O2",
    startFreq: 2595,
    endFreq: 2615,
    type: "tdd",
    earfcns: [38100, 38125],
    details: [
      "38100 uses full 20 MHz spectrum and is used for very new B38 small cells in London",
      "38125 is 15 MHz, skipping the first 5 MHz of this block, primarily used for initial deployments in Northern Ireland",
    ],
  },
  {
    owner: "O2",
    startFreq: 2615,
    endFreq: 2620,
    type: "tdd",
    details: ["Unused TDD spectrum"],
  },
];

export default data;
