import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Magenta",
      startFreq: 925,
      endFreq: 940,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 880,
        endFreq: 905,
      },
      arfcns: [],
      uarfcns: [],
      earfcns: [],
    },
    {
      owner: "3 AT",
      startFreq: 940,
      endFreq: 945,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 905,
        endFreq: 910,
      },
      arfcns: [],
      uarfcns: [],
      earfcns: [],
    },
    {
      owner: "A1 AT",
      startFreq: 945,
      endFreq: 960,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 910,
        endFreq: 925,
      },
      arfcns: [],
      uarfcns: [],
      earfcns: [],
    },
  ] as SpectrumBlock[]
).map((x) => {
  x.sourceInfo = {
    type: "url",
    url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/900MHz/Spectrum900MHz.en.html",
  };
  return x;
});

export default data;
