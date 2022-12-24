import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Three",
    ownerLongName: "Three Ireland",
    startFreq: 2110,
    endFreq: 2130,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920,
      endFreq: 1940,
    },
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ireland",
    startFreq: 2130,
    endFreq: 2150,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1940,
      endFreq: 1960,
    },
    details: ["LTE/NR DSS"],
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
  {
    owner: "Eir",
    ownerLongName: "Eircom Limited",
    startFreq: 2150,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1960,
      endFreq: 1980,
    },
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
];

export default data;
