import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 3400,
    endFreq: 3410,
    type: "tdd",
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Hungary",
    startFreq: 3410,
    endFreq: 3520,
    type: "tdd",
  },
  {
    owner: "Digi",
    ownerLongName: "Digi Hungary",
    startFreq: 3520,
    endFreq: 3540,
    type: "tdd",
    details: ["Network to be shut down in June 2023"],
  },
  {
    owner: "Telekom",
    ownerLongName: "Magyar Telekom",
    startFreq: 3540,
    endFreq: 3660,
    type: "tdd",
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Hungary",
    startFreq: 3660,
    endFreq: 3800,
    type: "tdd",
    nrarfcns: [],
  },
];

export default data;
