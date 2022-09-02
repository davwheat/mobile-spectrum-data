import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Magenta",
      startFreq: 1805,
      endFreq: 1825,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1710,
        endFreq: 1730,
      },
      arfcns: [],
      earfcns: [],
    },
    {
      owner: "3 AT",
      startFreq: 1825,
      endFreq: 1845,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1730,
        endFreq: 1750,
      },
      arfcns: [],
      earfcns: [],
    },
    {
      owner: "A1 AT",
      startFreq: 1845,
      endFreq: 1880,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1750,
        endFreq: 1765,
      },
      arfcns: [],
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
