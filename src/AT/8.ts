import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    arfcns: [],
    details: [
      "4G 925-935 MHz",
      "2G 935-940 MHz",
      "4G carrier can be used by Drei customers as part of regional roaming",
      "3G refarmed in July 2024",
    ],
    earfcns: [3500],
    endFreq: 940,
    owner: "Magenta",
    pairedWith: {
      endFreq: 895,
      startFreq: 880,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/900MHz/Spectrum900MHz.en.html",
    },
    startFreq: 925,
    type: "fddDown",
    uarfcns: [],
  },
  {
    arfcns: [],
    details: [
      "4G: 941.7-944.7 MHz",
      "On new sites, G900 was deployed until around 2021. Since then, new deployments only have G1800. 4G still isn't widened to 5MHz on new sites without G900",
    ],
    earfcns: [3632],
    endFreq: 945,
    owner: "3 AT",
    ownerLongName: "Hutchison Drei Austria GmbH",
    pairedWith: {
      endFreq: 900,
      startFreq: 895,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/900MHz/Spectrum900MHz.en.html",
    },
    startFreq: 940,
    type: "fddDown",
    uarfcns: [],
  },
  {
    arfcns: [],
    earfcns: [],
    endFreq: 960,
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    pairedWith: {
      endFreq: 915,
      startFreq: 900,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/900MHz/Spectrum900MHz.en.html",
    },
    startFreq: 945,
    type: "fddDown",
    uarfcns: [],
  },
];

export default data;
