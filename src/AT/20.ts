import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [],
    endFreq: 811,
    owner: "A1 AT",
    ownerLongName: "A1 Telekom Austria AG",
    pairedWith: {
      endFreq: 852,
      startFreq: 832,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/800MHz/Spektrum800MHz.en.html",
    },
    startFreq: 791,
    type: "fddDown",
  },
  {
    details: [
      "Entire licence is used for pure 4G",
      "Can be used by Drei customers as part of regional roaming",
    ],
    earfcns: [6400],
    endFreq: 821,
    owner: "Magenta",
    pairedWith: {
      endFreq: 862,
      startFreq: 852,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/800MHz/Spektrum800MHz.en.html",
    },
    startFreq: 811,
    type: "fddDown",
  },
];

export default data;
