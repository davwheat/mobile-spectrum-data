import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Digi",
    startFreq: 2110.3,
    endFreq: 2125.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920.3,
      endFreq: 1935.3,
    },
    earfcns: [78],
    details: [
      "B1 3G UMTS was removed in favour of B1 LTE.",
    ],
  },
  {
    owner: "Telekom",
    startFreq: 2125.3,
    endFreq: 2140.1,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1935.3,
      endFreq: 1950.1,
    },
    earfcns: [251],
    uarfcns: [10639, 10664, 10689],
    details: [
      "LTE B1 is 10 MHz where available.",
    ],
  },
  {
    owner: "Orange",
    startFreq: 2140.1,
    endFreq: 2154.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1950.1,
      endFreq: 1964.9,
    },
    earfcns: [400],
    uarfcns: [10713, 10738, 10763],
    nrarfcns: [430000],
    details: [
      "LTE B1 is 10 MHz where available. 5G NR operating as DSS n1.",
    ],
  },
  {
    owner: "Vodafone",
    startFreq: 2154.9,
    endFreq: 2164.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1964.9,
      endFreq: 1974.9,
    },
    earfcns: [498],
    nrarfcns: [431960],
    details: [
      "LTE B1 is always 10 MHz. 5G NR operating as DSS n1.",
    ],
  },
  {
    owner: "Vodafone",
    startFreq: 2164.9,
    endFreq: 2169.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1974.9,
      endFreq: 1979.7,
    },
    uarfcns: [10836],
  },
];

export default data;
