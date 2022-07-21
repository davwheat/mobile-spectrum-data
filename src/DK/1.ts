import { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "3 DK",
    startFreq: 2110,
    endFreq: 2125,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920,
      endFreq: 1935,
    },
    uarfcns: [10562, 10587, 10612],
    earfcns: [75],
    nrarfcns: [423170],
    details: ["LTE B1/NR n1 DSS 15 MHz deployment"],
  },
  {
    owner: "3 DK",
    startFreq: 2125,
    endFreq: 2130,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1935,
      endFreq: 1940,
    },
    uarfcns: [10637],
  },
  {
    owner: "TDC",
    startFreq: 2130,
    endFreq: 2150,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1940,
      endFreq: 1960,
    },
    earfcns: [300],
  },
  {
    owner: "TT",
    startFreq: 2150,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1960,
      endFreq: 1980,
    },
    earfcns: [500],
  },
];

export default data;
