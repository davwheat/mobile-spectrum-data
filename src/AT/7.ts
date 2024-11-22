import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [],
    endFreq: 2640,
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    pairedWith: {
      endFreq: 2520,
      startFreq: 2500,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/2600MHz_FDD/Spectrum2600MHzFDD.en.html",
    },
    startFreq: 2620,
    type: "fddDown",
  },
  {
    earfcns: [],
    endFreq: 2660,
    owner: "Magenta",
    pairedWith: {
      endFreq: 2540,
      startFreq: 2520,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/2600MHz_FDD/Spectrum2600MHzFDD.en.html",
    },
    startFreq: 2640,
    type: "fddDown",
  },
  {
    earfcns: [],
    endFreq: 2665,
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    pairedWith: {
      endFreq: 2545,
      startFreq: 2540,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/2600MHz_FDD/Spectrum2600MHzFDD.en.html",
    },
    startFreq: 2660,
    type: "fddDown",
  },
  {
    details: [
      "4G 2650-2670 MHz",
      "4G 2645-2650 MHz",
      "20MHz 4G carrier is used for ULCA with B3",
    ],
    earfcns: [3225, 3350],
    endFreq: 2690,
    owner: "3 AT",
    ownerLongName: "Hutchison Drei Austria GmbH",
    pairedWith: {
      endFreq: 2570,
      startFreq: 2545,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/2600MHz_FDD/Spectrum2600MHzFDD.en.html",
    },
    startFreq: 2665,
    type: "fddDown",
  },
];

export default data;
