import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 1452,
    endFreq: 1472,
    type: "sdl",
    earfcns: [],
    details: [
      "Supplemental downlink (must be aggregated with another carrier)",
    ],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/spectrum/frequencies/trades",
    },
  },
  {
    owner: "VF-3",
    ownerLongName: "Vodafone/Three UK",
    startFreq: 1472,
    endFreq: 1492,
    type: "sdl",
    earfcns: [10170, 10195, 10220],
    details: [
      "Supplemental downlink (must be aggregated with another carrier)",
    ],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0028/84826/SA-1472-1492-LICENCE-H3G-1053624-18-05-18.pdf",
    },
  },
];

export default data;
