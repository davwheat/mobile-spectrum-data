import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "3 AT",
      startFreq: 2570,
      endFreq: 2595,
      type: "tdd",
      earfcns: [],
    },
    {
      owner: "A1 AT",
      startFreq: 2595,
      endFreq: 2620,
      type: "tdd",
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
