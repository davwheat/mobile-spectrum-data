import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["5G standalone only", "CA enabled with n75, but not with n78"],
    endFreq: 768,
    nrarfcns: [],
    owner: "3 AT",
    ownerLongName: "Hutchison Drei Austria GmbH",
    pairedWith: {
      endFreq: 713,
      startFreq: 703,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/700MHz/Spectrum700MHz.en.html",
    },
    startFreq: 758,
    type: "fddDown",
  },
  {
    details: ["Used as pure 5G"],
    endFreq: 788,
    nrarfcns: [],
    owner: "Magenta",
    pairedWith: {
      endFreq: 733,
      startFreq: 713,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/700MHz/Spectrum700MHz.en.html",
    },
    startFreq: 768,
    type: "fddDown",
  },
];

export default data;
