import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "Only in regions A01u/r. Other areas have various regional licenses.",
    ],
    endFreq: 3470,
    nrarfcns: [],
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/3400-3800MHz/Spectrum3400MHz.en.html",
    },
    startFreq: 3450,
    type: "tdd",
  },
  {
    details: [
      "Only in regions A01u/r, AU04u/r, AU05u/r and A06u. Other areas have various regional licenses.",
    ],
    endFreq: 3490,
    nrarfcns: [],
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/3400-3800MHz/Spectrum3400MHz.en.html",
    },
    startFreq: 3470,
    type: "tdd",
  },
  {
    endFreq: 3590,
    nrarfcns: [],
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/3400-3800MHz/Spectrum3400MHz.en.html",
    },
    startFreq: 3490,
    type: "tdd",
  },
  {
    details: ["5G 3590-3690 MHz", "5G SA/NSA"],
    endFreq: 3690,
    nrarfcns: ["SSB ARFCN 639936"],
    owner: "3 AT",
    ownerLongName: "Hutchison Drei Austria GmbH",
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/3400-3800MHz/Spectrum3400MHz.en.html",
    },
    startFreq: 3590,
    type: "tdd",
  },
  {
    endFreq: 3800,
    nrarfcns: [],
    owner: "Magenta",
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/3400-3800MHz/Spectrum3400MHz.en.html",
    },
    startFreq: 3690,
    type: "tdd",
  },
];

export default data;
