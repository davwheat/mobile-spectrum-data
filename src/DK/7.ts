import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "TDC",
    startFreq: 2620,
    endFreq: 2640,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2500,
      endFreq: 2520,
    },
    earfcns: [2850],
  },
  {
    owner: "3 DK",
    startFreq: 2640,
    endFreq: 2650,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2520,
      endFreq: 2530,
    },
    earfcns: [3000],
  },
  {
    owner: "TT",
    ownerLongName: "TT (Telia)",
    startFreq: 2650,
    endFreq: 2670,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2530,
      endFreq: 2550,
    },
    earfcns: [3150],
    details: ["Telia-Telenor B7C1"],
  },
  {
    owner: "TT",
    ownerLongName: "TT (Telenor)",
    startFreq: 2670,
    endFreq: 2690,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2550,
      endFreq: 2570,
    },
    earfcns: [3348],
    details: ["Telia-Telenor B7C2"],
  },
];

export default data;
