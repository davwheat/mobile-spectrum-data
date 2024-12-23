import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["Pure n1/20MHz, which is actively being widened to 25MHz. "],
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
    details: ["Mainly 4G. Very few 5G DSS sites"],
    earfcns: [],
    endFreq: 2150,
    nrarfcns: [],
    owner: "Magenta",
    ownerLongName: "T-Mobile Austria GmbH",
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
      "4G 2155-2170 MHz",
      "3G HSPA+ 2150-2155 MHz",
      'According to Drei, the 3G network will be "gradually shut down and replaced by 4G and 5G starting Q1 2024". As of late November 2024, only very few 3G sites were disabled and the spectrum wasn\'t refarmed yet',
      "11.2024: 5G n1 is already configured in the SIB4 signal block on NR ARFCN 432050, which falls into this spectrum block. It is unknown how wide the config is or when it will go online.",
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
