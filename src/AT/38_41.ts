import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "4G 2575-2595 MHz",
      "CA is not allowed with B38 in the Drei network. It acts as a load balancing deployment.",
      "The carrier is broadcast on both B38 and B41 EARFCNs to support a wider audience of devices",
    ],
    earfcns: [37900, 40540],
    endFreq: 2595,
    owner: "3 AT",
    ownerLongName: "Hutchison Drei Austria GmbH",
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/2600MHz_TDD/Spectrum2600MHzTDD.en.html",
    },
    startFreq: 2570,
    type: "tdd",
  },
  {
    details: ["Currently not deployed"],
    earfcns: [],
    endFreq: 2620,
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/2600MHz_TDD/Spectrum2600MHzTDD.en.html",
    },
    startFreq: 2595,
    type: "tdd",
  },
];

export default data;
