import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "We aren't sure how it will be utilised post 3G shutdown.",
      "At the moment 4.2 MHz is used for 3G, 5-10 MHz is used for DSS LTE and NR",
      "It is suspected we will see either B8 10+n8 10 or n8 20.",
      "3659 is 5 MHz carrier, 3623 is the 10 MHz carrier, 188450 is 10 MHz NR carrier.",
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
