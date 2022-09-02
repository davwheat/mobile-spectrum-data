import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "A1 AT",
      startFreq: 791,
      endFreq: 811,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 832,
        endFreq: 852,
      },
      earfcns: [],
    },
    {
      owner: "Magenta",
      startFreq: 811,
      endFreq: 821,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 852,
        endFreq: 862,
      },
      earfcns: [],
    },
  ] as SpectrumBlock[]
).map((x) => {
  x.sourceInfo = {
    type: "url",
    url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/800MHz/Spektrum800MHz.en.html",
  };
  return x;
});

export default data;
