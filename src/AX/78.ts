import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Telia FI",
      startFreq: 3410,
      endFreq: 3510,
      type: "tdd",
      nrarfcns: [],
    },
    {
      owner: "?",
      startFreq: 3510,
      endFreq: 3540,
      type: "tdd",
      details: "Unallocated spectrum",
    },
    {
      owner: "Elisa",
      startFreq: 3540,
      endFreq: 3640,
      type: "tdd",
      nrarfcns: [],
    },
    {
      owner: "?",
      startFreq: 3640,
      endFreq: 3700,
      type: "tdd",
      details: "Unallocated spectrum",
    },
    {
      owner: "Ålcom",
      startFreq: 3700,
      endFreq: 3800,
      type: "tdd",
      nrarfcns: [],
    },
  ] as SpectrumBlock[]
).map((x) => {
  x.sourceInfo = {
    type: "url",
    url: "https://www.traficom.fi/en/communications/communications-networks/frequencies-and-license-holders-public-mobile-networks",
  };
  return x;
});

export default data;
