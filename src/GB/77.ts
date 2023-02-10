import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Private",
    startFreq: 3800,
    endFreq: 3925,
    type: "generic",
  },
  {
    owner: "Three",
    ownerLongName: "Three (license inherited from UK Broadband)",
    startFreq: 3925,
    endFreq: 4009,
    type: "tdd",
    details: ["Spectrum is not yet used for commerical n77 5G NR."],
  },
  {
    owner: "Private",
    startFreq: 4009,
    endFreq: 4200,
    type: "generic",
  },
];

export default data;
