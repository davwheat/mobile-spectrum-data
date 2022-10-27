import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 2620,
    endFreq: 2630,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2500,
      endFreq: 2510,
    },
  },
  {
    owner: "A1",
    startFreq: 2630,
    endFreq: 2650,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2510,
      endFreq: 2530,
    },
    earfcns: [2950],
  },
  {
    owner: "Yettel",
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
    owner: "Vivacom",
    startFreq: 2670,
    endFreq: 2690,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2550,
      endFreq: 2570,
    },
    earfcns: [3350],
  },
];

export default data;
