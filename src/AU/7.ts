import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "10 MHz unused at the moment, planned for n7 50 for upload carrier aggregation in Standalone 5G.",
      "The 2950 and 3148 carriers are also used for DSS in Standalone 5G trial.",
    ],
    earfcns: [3148, 2950],
    endFreq: 2670,
    nrarfcns: [532590, 527070],
    owner: "Telstra",
    ownerLongName: "Telstra",
    pairedWith: {
      endFreq: 2550,
      startFreq: 2500,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 2620,
    type: "fddDown",
  },
  {
    earfcns: [3350],
    endFreq: 2690,
    owner: "Optus",
    ownerLongName: "Singtel Optus",
    pairedWith: {
      endFreq: 2570,
      startFreq: 2550,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 2670,
    type: "fddDown",
  },
];

export default data;
