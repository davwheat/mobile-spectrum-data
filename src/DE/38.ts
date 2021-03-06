import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "O2",
    startFreq: 2570,
    endFreq: 2580,
    type: "tdd",
    details: ["Unused"],
  },
  {
    owner: "Vodafone",
    startFreq: 2580,
    endFreq: 2605,
    type: "tdd",
    earfcns: [37975],
    details: ["Used for FWA, not actively deployed anymore."],
  },
  {
    owner: "Telekom",
    startFreq: 2605,
    endFreq: 2610,
    type: "tdd",
    details: [
      "Unused, bought to prevent Vodafone from having full 30 MHz for 38C.",
    ],
  },
  {
    owner: "O2",
    startFreq: 2610,
    endFreq: 2620,
    type: "tdd",
    details: ["Unused"],
  },
];

export default data;
