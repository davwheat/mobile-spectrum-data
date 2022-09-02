import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "3 AT",
      startFreq: 758,
      endFreq: 768,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 703,
        endFreq: 713,
      },
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "Magenta",
      startFreq: 768,
      endFreq: 788,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 713,
        endFreq: 733,
      },
      earfcns: [],
      nrarfcns: [],
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
