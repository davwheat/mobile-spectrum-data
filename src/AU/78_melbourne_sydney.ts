import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 3635,
    nrarfcns: [638976],
    owner: "Telstra",
    ownerLongName: "Telstra",
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 3575,
    type: "tdd",
  },
  {
    endFreq: 3575,
    nrarfcns: [633312],
    owner: "Optus",
    ownerLongName: "Singtel Optus",
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 3475,
    type: "tdd",
  },
  {
    endFreq: 3700,
    nrarfcns: [643392],
    owner: "TPG",
    ownerLongName: "Vodafone Hutchison Australia + TPG Telecom Merger",
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 3635,
    type: "tdd",
  },
  {
    details: [
      "Deployed in some spots now, AAUs will need a refresh to take full advantage of it across the network.",
      "First used at the Taylor Swift concert in Sydney for extra capacity.",
    ],
    endFreq: 3780,
    nrarfcns: [649334],
    owner: "Telstra",
    ownerLongName: "Telstra",
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 3700,
    type: "tdd",
  },
  {
    endFreq: 3800,
    owner: "TPG",
    ownerLongName: "Vodafone Hutchison Australia + TPG Telecom Merger",
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 3780,
    type: "tdd",
  },
  {
    details: [
      "Used for Fixed Wireless internet in rural parts of the Metro area.",
    ],
    endFreq: 3475,
    owner: "NBN",
    ownerLongName: "National Broadband Network",
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 3400,
    type: "tdd",
  },
];

export default data;
