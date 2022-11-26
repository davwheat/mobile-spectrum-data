import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Digi",
    ownerLongName: "RCS & RDS",
    startFreq: 2570,
    endFreq: 2615,
    type: "tdd",
    earfcns: [37800, 37902, 37950, 38100],
    details: [
      "37800 10 MHz and 37950 20 MHz in Huawei areas",
      "37902 20 MHz and 38100 20 MHz in Nokia and Ericsson areas",
    ]
  },
  {
    owner: "Unallocated",
    startFreq: 2615,
    endFreq: 2620,
    type: "tdd",
  },
];

export default data;
