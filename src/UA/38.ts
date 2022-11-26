import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 2570,
    endFreq: 2575,
    type: "generic",
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ukraine",
    startFreq: 2575,
    endFreq: 2580,
    type: "tdd",
    details: ["Spectrum owned by Vega Telecommunications Ukraine"],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ukraine",
    startFreq: 2580,
    endFreq: 2595,
    type: "tdd",
    earfcns: [37925],
    details: [
      "Spectrum owned by Vega Telecommunications Ukraine",
      "Deployed as a 15 MHz carrier on Vodafone",
    ],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ukraine",
    startFreq: 2595,
    endFreq: 2610,
    type: "tdd",
    earfcns: [38075],
    details: [
      "Spectrum owned by Vega Telecommunications Ukraine",
      "Deployed as a 15 MHz carrier on Vodafone",
    ],
  },
  {
    owner: "Unallocated",
    startFreq: 2610,
    endFreq: 2620,
    type: "generic",
  },
];

export default data;
