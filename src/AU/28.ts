import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [9260],
    endFreq: 768,
    owner: "Optus",
    ownerLongName: "Singtel Optus",
    pairedWith: {
      endFreq: 713,
      startFreq: 703,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 758,
    type: "fddDown",
  },
  {
    earfcns: [9410],
    endFreq: 788,
    owner: "Telstra",
    ownerLongName: "Telstra",
    pairedWith: {
      endFreq: 733,
      startFreq: 713,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 768,
    type: "fddDown",
  },
  {
    details: ["Used for 5G. RARELY 4G."],
    earfcns: [9585],
    endFreq: 803,
    nrarfcns: [159130],
    owner: "TPG",
    ownerLongName: "Vodafone Hutchison Australia + TPG Telecom Merger",
    pairedWith: {
      endFreq: 748,
      startFreq: 733,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 788,
    type: "fddDown",
  },
];

export default data;
