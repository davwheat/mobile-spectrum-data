import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 2300,
    endFreq: 2305,
    type: "generic",
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ukraine",
    startFreq: 2305,
    endFreq: 2320,
    type: "tdd",
    details: [
      "Licence inherited from Vega Communications and not allowed for LTE use",
      "Only owned in Kyiv; Dnipropetrovsk region; Donetsk region; Odesa region; Kharkiv region; Zaporizhzhia region",
    ],
  },
  {
    owner: "Unallocated",
    startFreq: 2320,
    endFreq: 2355,
    type: "generic",
  },
  {
    owner: "Kyivstar",
    startFreq: 2355,
    endFreq: 2395,
    type: "tdd",
    details: "Split into two 20 MHz carriers in a contiguous configuration",
    earfcns: [39300, 39498],
  },
  {
    owner: "Unallocated",
    startFreq: 2395,
    endFreq: 2400,
    type: "generic",
  },
];

export default data;
