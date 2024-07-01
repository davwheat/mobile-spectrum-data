import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["n26 10 5G in metro areas, B26 10 LTE in rural areas."],
    endFreq: 869,
    owner: "Telstra",
    ownerLongName: "Telstra",
    pairedWith: {
      endFreq: 824,
      startFreq: 814,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 859,
    type: "fddDown",
  },
  {
    details: [
      "I don't know why they get to have this for free, but whatever I guess",
      "Will never be used for cellular.",
    ],
    endFreq: 870,
    owner: "Optus",
    ownerLongName: "Singtel Optus",
    pairedWith: {
      endFreq: 825,
      startFreq: 824,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 869,
    type: "fddDown",
  },
  {
    details: [],
    earfcns: [2460],
    endFreq: 880,
    owner: "TPG",
    ownerLongName: "Vodafone Hutchison Australia + TPG Telecom Merger",
    pairedWith: {
      endFreq: 835,
      startFreq: 825,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 870,
    type: "fddDown",
  },
  {
    details: [
      "At the moment 5 MHz is used for 3G. 5 MHz is used for n5.",
      "Refarmed to n5 10 in metro areas post 3G shutdown",
    ],
    endFreq: 890,
    nrarfcns: [176410],
    owner: "Telstra",
    ownerLongName: "Telstra",
    pairedWith: {
      endFreq: 845,
      startFreq: 835,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 880,
    type: "fddDown",
    uarfcns: [4436],
  },
];

export default data;
