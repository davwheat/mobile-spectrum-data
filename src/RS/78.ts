import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 3400,
    endFreq: 3410,
    type: "generic",
  },
  {
    owner: "A1",
    ownerLongName: "A1 Srbija",
    startFreq: 3410,
    endFreq: 3540,
    type: "tdd",
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Srbija",
    startFreq: 3540,
    endFreq: 3670,
    type: "tdd",
  },
  {
    owner: "mts",
    ownerLongName: "Telekom Srbija",
    startFreq: 3670,
    endFreq: 3800,
    type: "tdd",
  },
];

export default data;
