import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 934.9,
    owner: "Bite LV",
    ownerLongName: "Bite Latvija",
    pairedWith: {
      endFreq: 889.9,
      startFreq: 880.2,
      type: "fddUp",
    },
    startFreq: 925.2,
    type: "fddDown",
  },
  {
    endFreq: 948.25,
    owner: "LMT",
    ownerLongName: "Latvijas Mobilais Telefons",
    pairedWith: {
      endFreq: 903.25,
      startFreq: 889.9,
      type: "fddUp",
    },
    startFreq: 934.9,
    type: "fddDown",
    uarfcns: [2988],
  },
  {
    endFreq: 960,
    owner: "Tele2 LV",
    ownerLongName: "Tele2 Latvija",
    pairedWith: {
      endFreq: 915,
      startFreq: 903.25,
      type: "fddUp",
    },
    startFreq: 948.25,
    type: "fddDown",
  },
];

export default data;
