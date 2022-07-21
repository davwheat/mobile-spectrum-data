import { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "TDC",
    startFreq: 2300,
    endFreq: 2300.2,
    type: "tdd",
    details: "Unused spectrum",
  },
  {
    owner: "TDC",
    startFreq: 2300.2,
    endFreq: 2359.8,
    type: "tdd",
    details: [
      "Three 20 MHz B40 carriers running as contiguous (collapsed guard bands)",
    ],
    earfcns: [38752, 38950, 39148],
  },
  {
    owner: "TDC",
    startFreq: 2359.8,
    endFreq: 2400,
    type: "tdd",
    details: "Unused spectrum gained in 2021",
  },
];

export default data;
