import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [100],
    endFreq: 2130,
    owner: "LMT",
    ownerLongName: "Latvijas Mobilais Telefons",
    pairedWith: {
      endFreq: 1940,
      startFreq: 1920,
      type: "fddUp",
    },
    startFreq: 2110,
    type: "fddDown",
  },
  {
    earfcns: [350],
    endFreq: 2150,
    owner: "Bite LV",
    ownerLongName: "Bite Latvija",
    pairedWith: {
      endFreq: 1960,
      startFreq: 1940,
      type: "fddUp",
    },
    startFreq: 2130,
    type: "fddDown",
  },
  {
    earfcns: [500],
    endFreq: 2170,
    owner: "Tele2 LV",
    ownerLongName: "Tele2 Latvija",
    pairedWith: {
      endFreq: 1980,
      startFreq: 1960,
      type: "fddUp",
    },
    startFreq: 2150,
    type: "fddDown",
  },
];

export default data;
