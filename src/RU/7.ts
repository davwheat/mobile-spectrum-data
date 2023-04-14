import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [2850, 3048],
    endFreq: 2660,
    owner: "MegaFon",
    pairedWith: {
      endFreq: 2540,
      startFreq: 2500,
      type: "fddUp",
    },
    startFreq: 2620,
    type: "fddDown",
  },
  {
    details: [],
    earfcns: [3200],
    endFreq: 2670,
    owner: "MTS",
    pairedWith: {
      endFreq: 2550,
      startFreq: 2540,
      type: "fddUp",
    },
    startFreq: 2660,
    type: "fddDown",
  },
  {
    details: [],
    earfcns: [3300],
    endFreq: 2680,
    owner: "Beeline",
    pairedWith: {
      endFreq: 2560,
      startFreq: 2550,
      type: "fddUp",
    },
    startFreq: 2670,
    type: "fddDown",
  },
  {
    earfcns: [3400],
    endFreq: 2690,
    owner: "Tele2",
    pairedWith: {
      endFreq: 2570,
      startFreq: 2560,
      type: "fddUp",
    },
    startFreq: 2680,
    type: "fddDown",
  },
];

export default data;
