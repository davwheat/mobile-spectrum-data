import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["Used for IoT communications"],
    endFreq: 465.74,
    owner: "ArgoNET",
    pairedWith: {
      endFreq: 455.74,
      startFreq: 451.3,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/700MHz/Spectrum700MHz.en.html",
    },
    startFreq: 461.3,
    type: "fddDown",
  },
] as SpectrumBlock[];

export default data;
