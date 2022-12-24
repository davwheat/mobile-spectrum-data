import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Three",
    ownerLongName: "Three Ireland",
    startFreq: 2620,
    endFreq: 2655,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2500,
      endFreq: 2535,
    },
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ireland",
    startFreq: 2655,
    endFreq: 2690,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2535,
      endFreq: 2570,
    },
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
];

export default data;
