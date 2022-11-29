import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone UK",
    startFreq: 1452,
    endFreq: 1472,
    type: "sdl",
    earfcns: [10020],
    details: [
      "Supplemental downlink (must be aggregated with another carrier)",
    ],
  },
  {
    owner: "Three",
    startFreq: 1472,
    endFreq: 1492,
    type: "sdl",
    earfcns: [10195, 10220],
    details: [
      "Supplemental downlink (must be aggregated with another carrier)",
    ],
  },
];

export default data;
