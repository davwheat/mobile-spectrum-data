import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Telekom",
    ownerLongName: "Telekom Deutschland GmbH",
    startFreq: 1452,
    endFreq: 1472,
    type: "sdl",
    details: ["L-Band B32"],
    earfcns: [10020],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone DE",
    startFreq: 1472,
    endFreq: 1492,
    type: "sdl",
    details: ["L-Band B32"],
    earfcns: [10220],
  },
];

export default data;
