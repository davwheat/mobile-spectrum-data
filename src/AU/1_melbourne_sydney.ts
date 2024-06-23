import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [75],
    endFreq: 2125,
    owner: "TPG",
    ownerLongName: "Vodafone Hutchison Australia + TPG Telecom Merger",
    pairedWith: {
      endFreq: 1935,
      startFreq: 1920,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 2110,
    type: "fddDown",
  },
  {
    details: ["Not used anymore, was used for 3G."],
    endFreq: 2130,
    owner: "Telstra",
    ownerLongName: "Telstra",
    pairedWith: {
      endFreq: 1940,
      startFreq: 1935,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 2125,
    type: "fddDown",
  },
  {
    details: ["Will be most likely refarmed to real 5G. DSS n1 at the moment."],
    earfcns: [299],
    endFreq: 2150,
    nrarfcns: [427950],
    owner: "Optus",
    ownerLongName: "Singtel Optus",
    pairedWith: {
      endFreq: 1960,
      startFreq: 1940,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 2130,
    type: "fddDown",
  },
  {
    earfcns: [450],
    endFreq: 2160,
    owner: "Telstra",
    ownerLongName: "Telstra",
    pairedWith: {
      endFreq: 1970,
      startFreq: 1960,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 2150,
    type: "fddDown",
  },
  {
    earfcns: [550],
    endFreq: 2170,
    owner: "TPG",
    ownerLongName: "Vodafone Hutchison Australia + TPG Telecom Merger",
    pairedWith: {
      endFreq: 1980,
      startFreq: 1970,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 2160,
    type: "fddDown",
  },
];

export default data;
