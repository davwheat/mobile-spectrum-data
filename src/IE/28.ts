import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Eir",
    ownerLongName: "Eircom Limited",
    startFreq: 758,
    endFreq: 768,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 703,
      endFreq: 713,
    },
    earfcns: [9260],
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
  {
    owner: "Three",
    ownerLongName: "Three Ireland",
    startFreq: 768,
    endFreq: 778,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 713,
      endFreq: 723,
    },
    earfcns: [9360],
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ireland",
    startFreq: 778,
    endFreq: 788,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 723,
      endFreq: 733,
    },
    earfcns: [9460],
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/proposed-multi-band-spectrum-award/",
    },
  },
];

export default data;
