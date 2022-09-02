import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "ArgoNET",
      startFreq: 461.3,
      endFreq: 465.74,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 451.3,
        endFreq: 455.74,
      },
      details: ["Used for IoT communications"],
    },
  ] as SpectrumBlock[]
).map((x) => {
  x.sourceInfo = {
    type: "url",
    url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/700MHz/Spectrum700MHz.en.html",
  };
  return x;
});

export default data;
