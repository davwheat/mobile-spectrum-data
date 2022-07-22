import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "TT",
    startFreq: 925,
    endFreq: 935,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880,
      endFreq: 890,
    },
    earfcns: [3500],
    uarfcns: [2940],
    arfcns: "ARFCNs 1011-1023, 0",
    details: [
      "Primarily being used as LTE in some areas, such as southern Sjaeland.",
    ],
  },
  {
    owner: "TDC",
    startFreq: 935,
    endFreq: 945,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 890,
      endFreq: 900,
    },
    arfcns: "ARFCNs 2-7, 30-50",
    uarfcns: [2993, 2997],
  },
  {
    owner: "3 DK",
    startFreq: 945,
    endFreq: 960,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 900,
      endFreq: 915,
    },
    earfcns: [3700],
    uarfcns: [3087],
  },
];

export default data;
