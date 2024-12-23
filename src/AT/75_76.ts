import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      'Lower 10MHz of this licence is "regionally limited". There is no further information on this limitation.',
    ],
    endFreq: 1457,
    owner: "Magenta",
    ownerLongName: "T-Mobile Austria GmbH",
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/1500MHz/Spectrum1500MHz.en.html",
    },
    startFreq: 1427,
    type: "sdl",
  },
  {
    details: ["5G standalone only", "CA enabled with n28, but not with n78"],
    endFreq: 1487,
    nrarfcns: ["SSB-ARFCN 292330"],
    owner: "3 AT",
    ownerLongName: "Hutchison Drei Austria GmbH",
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/1500MHz/Spectrum1500MHz.en.html",
    },
    startFreq: 1457,
    type: "sdl",
  },
  {
    endFreq: 1517,
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/1500MHz/Spectrum1500MHz.en.html",
    },
    startFreq: 1487,
    type: "sdl",
  },
];

export default data;
