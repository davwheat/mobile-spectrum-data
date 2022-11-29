import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Three",
    startFreq: 791,
    endFreq: 796,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 832,
      endFreq: 837,
    },
    earfcns: [6175],
  },
  {
    owner: "EE",
    startFreq: 796,
    endFreq: 801,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 837,
      endFreq: 842,
    },
    earfcns: [6225],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone UK",
    startFreq: 801,
    endFreq: 811,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 842,
      endFreq: 852,
    },
    earfcns: [6300],
  },
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 811,
    endFreq: 821,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 852,
      endFreq: 862,
    },
    earfcns: [6400],
  },
];

export default data;
