import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    arfcns: [],
    details: [
      "4G 1805-1825 MHz",
      "4G carrier can be used by Drei customers regionally as part of regional roaming",
      "For Drei roaming customers, carrier aggregation with Drei's B3 carrier is enabled if a native cell is within reach of Magenta's roaming cell. As such, B3C/35MHz is possible",
    ],
    earfcns: [1300],
    endFreq: 1825,
    owner: "Magenta",
    pairedWith: {
      endFreq: 1730,
      startFreq: 1710,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/1800MHz/Spectrum1800MHz.en.html",
    },
    startFreq: 1805,
    type: "fddDown",
  },
  {
    arfcns: [],
    details: [
      "4G 1830-1845 MHz",
      "2G 1825-1830 MHz",
      "4G Band 3+7 are used in ULCA",
    ],
    earfcns: [1525],
    endFreq: 1845,
    owner: "3 AT",
    ownerLongName: "Hutchison Drei Austria GmbH",
    pairedWith: {
      endFreq: 1750,
      startFreq: 1730,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/1800MHz/Spectrum1800MHz.en.html",
    },
    startFreq: 1825,
    type: "fddDown",
  },
  {
    arfcns: [],
    details: ["4G 1845-1880 MHz"],
    earfcns: [],
    endFreq: 1880,
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    pairedWith: {
      endFreq: 1785,
      startFreq: 1750,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/1800MHz/Spectrum1800MHz.en.html",
    },
    startFreq: 1845,
    type: "fddDown",
  },
];

export default data;
