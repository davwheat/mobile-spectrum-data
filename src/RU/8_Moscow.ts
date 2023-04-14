import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [],
    earfcns: [3500],
    endFreq: 935,
    owner: "MegaFon",
    pairedWith: {
      endFreq: 890,
      startFreq: 880,
      type: "fddUp",
    },
    startFreq: 925,
    type: "fddDown",
  },
  {
    endFreq: 939.8,
    owner: "MTS",
    pairedWith: {
      endFreq: 894.8,
      startFreq: 890,
      type: "fddUp",
    },
    startFreq: 935,
    type: "fddDown",
  },
  {
    earfcns: [3621, 3648],
    endFreq: 949.8,
    owner: "Beeline",
    pairedWith: {
      endFreq: 904.8,
      startFreq: 894.8,
      type: "fddUp",
    },
    startFreq: 939.8,
    type: "fddDown",
  },
  {
    earfcns: [3724],
    endFreq: 955,
    owner: "MTS",
    pairedWith: {
      endFreq: 910,
      startFreq: 904.8,
      type: "fddUp",
    },
    startFreq: 949.8,
    type: "fddDown",
  },
  {
    endFreq: 958,
    owner: "MegaFon",
    pairedWith: {
      endFreq: 913,
      startFreq: 910,
      type: "fddUp",
    },
    startFreq: 955,
    type: "fddDown",
  },
  {
    endFreq: 960,
    owner: "MTS",
    pairedWith: {
      endFreq: 915,
      startFreq: 913,
      type: "fddUp",
    },
    startFreq: 958,
    type: "fddDown",
  },
];

export default data;
