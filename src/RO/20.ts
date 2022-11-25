import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Digi",
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
    owner: "Vodafone",
    startFreq: 796,
    endFreq: 806,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 837,
      endFreq: 847,
    },
    earfcns: [6250],
  },
  {
    owner: "Orange",
    startFreq: 806,
    endFreq: 816,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 847,
      endFreq: 857,
    },
    earfcns: [6350],
  },
  {
    owner: "Telekom",
    startFreq: 816,
    endFreq: 821,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 857,
      endFreq: 862,
    },
    earfcns: [6425],
  },
];

export default data;
