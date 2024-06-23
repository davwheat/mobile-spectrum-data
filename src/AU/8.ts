import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "We aren't sure how it will be utilised post 3G shutdown.",
      "At the moment 3.4 MHz is used for 3G. 5 or 10 MHz is used for DSS LTE and NR",
    ],
    earfcns: [3659, 3623],
    endFreq: 960,
    nrarfcns: [188450],
    owner: "Optus",
    ownerLongName: "Singtel Optus",
    pairedWith: {
      endFreq: 915,
      startFreq: 890,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 935,
    type: "fddDown",
    uarfcns: [3046],
  },
];

export default data;
