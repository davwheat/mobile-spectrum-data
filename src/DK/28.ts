import { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "3 DK",
    startFreq: 758,
    endFreq: 768,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 703,
      endFreq: 713,
    },
    earfcns: [9260],
  },
  {
    owner: "TT",
    startFreq: 768,
    endFreq: 773,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 713,
      endFreq: 718,
    },
    earfcns: [9335],
  },
  {
    owner: "TDC",
    startFreq: 773,
    endFreq: 788,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 718,
      endFreq: 733,
    },
    nrarfcns: [155050],
    details: ["Used for nationwide 5G NR deployment."],
  },
];

export default data;
