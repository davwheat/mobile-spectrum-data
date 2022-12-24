import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Eir",
    ownerLongName: "Eircom Limited",
    startFreq: 791,
    endFreq: 801,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 832,
      endFreq: 842,
    },
    earfcns: [6200],
  },
  {
    owner: "Three",
    ownerLongName: "Three Ireland",
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
    owner: "Vodafone",
    ownerLongName: "Vodafone Ireland",
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
