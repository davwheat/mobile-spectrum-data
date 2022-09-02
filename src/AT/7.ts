import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "A1 AT",
      startFreq: 2620,
      endFreq: 2640,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2500,
        endFreq: 2520,
      },
      earfcns: [],
    },
    {
      owner: "Magenta",
      startFreq: 2640,
      endFreq: 2660,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2520,
        endFreq: 2540,
      },
      earfcns: [],
    },
    {
      owner: "A1 AT",
      startFreq: 2660,
      endFreq: 2665,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2540,
        endFreq: 2545,
      },
      earfcns: [],
    },
    {
      owner: "3 AT",
      startFreq: 2665,
      endFreq: 2690,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2545,
        endFreq: 2570,
      },
      earfcns: [],
    },
  ] as SpectrumBlock[]
).map((x) => {
  x.sourceInfo = {
    type: "url",
    url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/1800MHz/Spectrum1800MHz.en.html",
  };
  return x;
});

export default data;
