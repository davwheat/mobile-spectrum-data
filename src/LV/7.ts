import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [2850],
    endFreq: 2640,
    owner: "LMT",
    ownerLongName: "Latvijas Mobilais Telefons",
    pairedWith: {
      endFreq: 2520,
      startFreq: 2500,
      type: "fddUp",
    },
    startFreq: 2620,
    type: "fddDown",
  },
  {
    earfcns: [3050],
    endFreq: 2660,
    owner: "Tele2 LV",
    ownerLongName: "Tele2 Latvija",
    pairedWith: {
      endFreq: 2540,
      startFreq: 2520,
      type: "fddUp",
    },
    startFreq: 2640,
    type: "fddDown",
  },
  {
    earfcns: [3250],
    endFreq: 2680,
    owner: "Bite LV",
    ownerLongName: "Bite Latvija",
    pairedWith: {
      endFreq: 2560,
      startFreq: 2540,
      type: "fddUp",
    },
    startFreq: 2660,
    type: "fddDown",
  },
];

export default data;
