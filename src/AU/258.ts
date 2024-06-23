import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["Split into 10x100 MHz carriers"],
    endFreq: 26700,
    owner: "Telstra",
    ownerLongName: "Telstra",
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 25700,
    type: "tdd",
  },
  {
    details: ["Split into 6x100 MHz carriers"],
    endFreq: 25700,
    owner: "TPG",
    ownerLongName: "Vodafone Hutchison Australia + TPG Telecom Merger",
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 25100,
    type: "tdd",
  },
  {
    details: ["Split into 8x100 MHz carriers"],
    endFreq: 27500,
    owner: "Optus",
    ownerLongName: "Singtel Optus",
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 26700,
    type: "tdd",
  },
];

export default data;
