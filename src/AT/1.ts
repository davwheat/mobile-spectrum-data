import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "A1 AT",
      startFreq: 2110,
      endFreq: 2135,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1920,
        endFreq: 1945,
      },
      uarfcns: [],
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "Magenta",
      startFreq: 2135,
      endFreq: 2150,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1945,
        endFreq: 1960,
      },
      uarfcns: [],
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "3 AT",
      startFreq: 2150,
      endFreq: 2170,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1960,
        endFreq: 1980,
      },
      uarfcns: [],
      earfcns: [],
      nrarfcns: [],
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
