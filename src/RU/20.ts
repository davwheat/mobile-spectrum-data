import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [6200, 6175],
    endFreq: 798.5,
    owner: "Tele2",
    pairedWith: {
      endFreq: 839.5,
      startFreq: 832,
      type: "fddUp",
    },
    startFreq: 791,
    type: "fddDown",
  },
  {
    earfcns: [6275, 6262],
    endFreq: 806,
    owner: "MTS",
    pairedWith: {
      endFreq: 847,
      startFreq: 839.5,
      type: "fddUp",
    },
    startFreq: 798.5,
    type: "fddDown",
  },
  {
    earfcns: [6338, 6350],
    endFreq: 813.5,
    owner: "MegaFon",
    pairedWith: {
      endFreq: 854.5,
      startFreq: 847,
      type: "fddUp",
    },
    startFreq: 806,
    type: "fddDown",
  },
  {
    earfcns: [6413],
    endFreq: 821,
    owner: "Beeline",
    pairedWith: {
      endFreq: 862,
      startFreq: 854.5,
      type: "fddUp",
    },
    startFreq: 813.5,
    type: "fddDown",
  },
];

export default data;
