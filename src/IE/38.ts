import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Imagine",
    ownerLongName: "Imagine Communications Ireland",
    startFreq: 2570,
    endFreq: 2585,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ireland",
    startFreq: 2585,
    endFreq: 2615,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
  {
    owner: "Unallocated",
    startFreq: 2615,
    endFreq: 2620,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
];

export default data;
