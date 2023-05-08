import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Telekom",
    ownerLongName: "Magyar Telekom",
    startFreq: 2620,
    endFreq: 2650,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2500,
      endFreq: 2530,
    },
    earfcns: [2850, 2994],
    details: ["LTE 20 MHz + 10 MHz in a contiguous configuration"],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Hungary",
    startFreq: 2650,
    endFreq: 2670,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2530,
      endFreq: 2550,
    },
    earfcns: [3150],
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Hungary",
    startFreq: 2670,
    endFreq: 2690,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2560,
      endFreq: 2550,
    },
    earfcns: [3350],
  },
];

export default data;
