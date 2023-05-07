import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [6200],
    endFreq: 801,
    owner: "Bite LT",
    ownerLongName: "UAB Bite Lietuva",
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
    owner: "Telia LT",
    ownerLongName: "AB Telia Lietuva",
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
    owner: "Tele2 LT",
    ownerLongName: "UAB Tele2 Lietuva",
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
