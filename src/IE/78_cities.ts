import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Guard band",
    startFreq: 3400,
    endFreq: 3410,
    type: "generic",
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/3-6-ghz-band-transition/",
    },
  },
  {
    owner: "Airspan",
    ownerLongName: "Airspan Networks Ireland",
    startFreq: 3410,
    endFreq: 3435,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/3-6-ghz-band-transition/",
    },
  },
  {
    owner: "State services",
    startFreq: 3435,
    endFreq: 3475,
    type: "generic",
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/3-6-ghz-band-transition/",
    },
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ireland",
    startFreq: 3475,
    endFreq: 3580,
    type: "tdd",
    nrarfcns: [631968],
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/3-6-ghz-band-transition/",
    },
  },
  {
    owner: "Airspan",
    ownerLongName: "Airspan Networks Ireland",
    startFreq: 3580,
    endFreq: 3615,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/3-6-ghz-band-transition/",
    },
  },
  {
    owner: "Eir",
    ownerLongName: "Eircom Limited",
    startFreq: 3615,
    endFreq: 3700,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/3-6-ghz-band-transition/",
    },
  },
  {
    owner: "Three",
    ownerLongName: "Three Ireland",
    startFreq: 3700,
    endFreq: 3800,
    type: "tdd",
    nrarfcns: [647424],
    sourceInfo: {
      type: "url",
      url: "https://www.comreg.ie/industry/radio-spectrum/spectrum-awards/3-6-ghz-band-transition/",
    },
  },
];

export default data;
