import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Three",
    startFreq: 2110.3,
    endFreq: 2114.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920.3,
      endFreq: 1924.9,
    },
    uarfcns: [10564],
  },
  {
    owner: "Three",
    startFreq: 2114.9,
    endFreq: 2124.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1924.9,
      endFreq: 1934.9,
    },
    earfcns: [99, 98],
    uarfcns: [10588],
    details: [
      "UARFCN 10588 is being refarmed for B1 LTE.",
      "EARFCN 98 is used in areas where low-band priorities have been adjusted",
    ],
  },
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 2124.9,
    endFreq: 2134.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1934.9,
      endFreq: 1944.9,
    },
    earfcns: [199],
    uarfcns: [10637, 10661],
    nrarfcns: [425980],
    details: [
      "B1 3G UMTS is being removed in favour of B1 LTE. 5G NR operating as DSS n1.",
    ],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone UK",
    startFreq: 2134.9,
    endFreq: 2149.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1944.9,
      endFreq: 1959.7,
    },
    uarfcns: [10687, 10712, 10736],
    earfcns: [323],
    nrarfcns: [427470, 428190],
    details: [
      "5G NR operating as DSS n1.",
      "For 3G: -687 means max 10 MHz B1 LTE; -712 means max 5 MHz; -736 means no LTE B1.",
      "15 MHz LTE B1 is in use due to LTE's 0.5 MHz guard on either side of the carrier, meaning that there is only 0.3 MHz of guard spectrum between Vodafone and EE's spectrum.",
    ],
  },
  {
    owner: "EE",
    startFreq: 2149.7,
    endFreq: 2154.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1959.7,
      endFreq: 1964.7,
    },
    uarfcns: [10761],
  },
  {
    owner: "EE",
    startFreq: 2154.7,
    endFreq: 2169.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1964.7,
      endFreq: 1979.7,
    },
    earfcns: [522],
    nrarfcns: [431810, 433250, 432530],
    details: [
      "5G NR operating primarily as DSS n1, with some deployments as pure NR.",
      "Was used for B1 3G UMTS, but this has been refarmed to B1 LTE.",
    ],
  },
];

export default data;
