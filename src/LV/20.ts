import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [6200],
    endFreq: 801,
    owner: "Bite LV",
    ownerLongName: "Bite Latvija",
    pairedWith: {
      endFreq: 842,
      startFreq: 832,
      type: "fddUp",
    },
    startFreq: 791,
    type: "fddDown",
  },
  {
    earfcns: [6300],
    endFreq: 811,
    owner: "LMT",
    ownerLongName: "Latvijas Mobilais Telefons",
    pairedWith: {
      endFreq: 852,
      startFreq: 842,
      type: "fddUp",
    },
    startFreq: 801,
    type: "fddDown",
  },
  {
    earfcns: [6400],
    endFreq: 821,
    owner: "Tele2 LV",
    ownerLongName: "Tele2 Latvija",
    pairedWith: {
      endFreq: 862,
      startFreq: 852,
      type: "fddUp",
    },
    startFreq: 811,
    type: "fddDown",
  },
];

export default data;
