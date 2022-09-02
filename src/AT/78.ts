import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "A1 AT",
      startFreq: 3450,
      endFreq: 3470,
      type: "tdd",
      details: [
        "Only in regions A01u/r. Other areas have various regional licenses.",
      ],
      nrarfcns: [],
    },
    {
      owner: "A1 AT",
      startFreq: 3470,
      endFreq: 3490,
      type: "tdd",
      details: [
        "Only in regions A01u/r, AU04u/r, AU05u/r and A06u. Other areas have various regional licenses.",
      ],
      nrarfcns: [],
    },
    {
      owner: "A1 AT",
      startFreq: 3490,
      endFreq: 3590,
      type: "tdd",
      nrarfcns: [],
    },
    {
      owner: "3 AT",
      startFreq: 3590,
      endFreq: 3690,
      type: "tdd",
      nrarfcns: [],
    },
    {
      owner: "3 AT",
      startFreq: 3690,
      endFreq: 3880,
      type: "tdd",
      nrarfcns: [],
    },
  ] as SpectrumBlock[]
).map((x) => {
  x.sourceInfo = {
    type: "url",
    url: "https://www.rtr.at/TKP/was_wir_tun/telekommunikation/spectrum/bands/3400-3800MHz/Spectrum3400MHz.en.html",
  };
  return x;
});

export default data;
