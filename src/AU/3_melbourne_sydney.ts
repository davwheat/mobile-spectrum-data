import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [1275],
    endFreq: 1820,
    owner: "Telstra",
    ownerLongName: "Telstra",
    pairedWith: {
      endFreq: 1725,
      startFreq: 1710,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 1805,
    type: "fddDown",
  },
  {
    details: ["Split into 20 MHz and 10 MHz carriers."],
    earfcns: [1406, 1550],
    endFreq: 1850,
    owner: "TPG",
    ownerLongName: "Vodafone Hutchison Australia + TPG Telecom Merger",
    pairedWith: {
      endFreq: 1755,
      startFreq: 1725,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 1820,
    type: "fddDown",
  },
  {
    earfcns: [1725],
    endFreq: 1865,
    owner: "Optus",
    ownerLongName: "Singtel Optus",
    pairedWith: {
      endFreq: 1770,
      startFreq: 1755,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 1850,
    type: "fddDown",
  },
  {
    details: [
      "Used for Melbourne and Sydney's train cellular network.",
      "Melbourne uses proprietary 3G. Sydney uses 2G GSM.",
    ],
    endFreq: 1880,
    owner: "Train Network",
    ownerLongName: "Various Train Networks",
    pairedWith: {
      endFreq: 1785,
      startFreq: 1770,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 1865,
    type: "fddDown",
  },
];

export default data;
