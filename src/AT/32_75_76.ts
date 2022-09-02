import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Magenta",
      startFreq: 1427,
      endFreq: 1457,
      type: "sdl",
    },
    {
      owner: "3 AT",
      startFreq: 1457,
      endFreq: 1487,
      type: "sdl",
    },
    {
      owner: "A1 AT",
      startFreq: 1487,
      endFreq: 1517,
      type: "sdl",
    },
  ] as SpectrumBlock[]
).map((x) => {
  x.sourceInfo = {
    type: "url",
    url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/1500MHz/Spectrum1500MHz.en.html",
  };
  return x;
});

export default data;
