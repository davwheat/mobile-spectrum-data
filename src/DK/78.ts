import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "TDC",
    startFreq: 3410,
    endFreq: 3440,
    type: "tdd",
    nrarfcns: [628032, 628704],
    details: ["20/30 MHz NR CA carrier, deployed on top of 100 MHz layer"],
  },
  {
    owner: "TDC",
    startFreq: 3440,
    endFreq: 3540,
    type: "tdd",
    nrarfcns: [630048],
  },
  {
    owner: "3 DK",
    startFreq: 3540,
    endFreq: 3660,
    type: "tdd",
    nrarfcns: [636768],
  },
  {
    owner: "TT",
    startFreq: 3660,
    endFreq: 3800,
    type: "tdd",
    nrarfcns: [647328],
  },
];

export default data;
