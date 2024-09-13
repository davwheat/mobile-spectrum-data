import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [],
    endFreq: 2135,
    nrarfcns: [],
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    pairedWith: {
      endFreq: 1945,
      startFreq: 1920,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/2100MHz/Spectrum2100MHz.en.html",
    },
    startFreq: 2110,
    type: "fddDown",
    uarfcns: [],
  },
  {
    earfcns: [],
    endFreq: 2150,
    nrarfcns: [],
    owner: "Magenta",
    pairedWith: {
      endFreq: 1960,
      startFreq: 1945,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/2100MHz/Spectrum2100MHz.en.html",
    },
    startFreq: 2135,
    type: "fddDown",
    uarfcns: [],
  },
  {
    details: [
      "4G 2150-2175 MHz",
      "3G HSPA+ 2175-2180 MHz",
      'According to Drei, the 3G network will be "gradually shut down and replaced by 4G and 5G starting Q1 2024" but as of late July 2024, no 3G shutdowns were made yet',
    ],
    earfcns: [525],
    endFreq: 2170,
    nrarfcns: [],
    owner: "3 AT",
    ownerLongName: "Hutchison Drei Austria GmbH",
    pairedWith: {
      endFreq: 1980,
      startFreq: 1960,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/2100MHz/Spectrum2100MHz.en.html",
    },
    startFreq: 2150,
    type: "fddDown",
    uarfcns: [10763],
  },
];

export default data;
