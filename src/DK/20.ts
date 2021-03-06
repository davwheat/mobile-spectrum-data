import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "TT",
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
    owner: "TDC",
    startFreq: 801,
    endFreq: 821,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 842,
      endFreq: 862,
    },
    earfcns: [6350],
  },
];

export default data;
