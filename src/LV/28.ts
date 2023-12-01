import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 768,
    owner: "Tele2 LV",
    ownerLongName: "Tele2 Latvija",
    pairedWith: {
      endFreq: 713,
      startFreq: 703,
      type: "fddUp",
    },
    startFreq: 758,
    type: "fddDown",
  },
  {
    earfcns: [9360],
    endFreq: 778,
    owner: "LMT",
    ownerLongName: "Latvijas Mobilais Telefons",
    pairedWith: {
      endFreq: 723,
      startFreq: 713,
      type: "fddUp",
    },
    startFreq: 768,
    type: "fddDown",
  },
  {
    endFreq: 788,
    owner: "Bite LV",
    ownerLongName: "Bite Latvija",
    pairedWith: {
      endFreq: 733,
      startFreq: 723,
      type: "fddUp",
    },
    startFreq: 778,
    type: "fddDown",
  },
];

export default data;
