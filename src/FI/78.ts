import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Telia FI",
      startFreq: 3410,
      endFreq: 3540,
      type: "tdd",
      nrarfcns: [],
    },
    {
      owner: "Elisa",
      startFreq: 3540,
      endFreq: 3670,
      type: "tdd",
      nrarfcns: [],
    },
    {
      owner: "DNA",
      startFreq: 3670,
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
