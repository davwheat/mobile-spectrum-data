import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "2950 carrier currently in the process of being refarmed from LTE to pure n7 20/30 with same 527070 NRARFCN depending on RRU model.",
      "532590 was the 3148 DSS carrier, should rarely see it nowadays it was converted back to pure LTE.",
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
