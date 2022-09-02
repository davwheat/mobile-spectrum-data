import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Elisa",
      startFreq: 2570,
      endFreq: 2620,
      type: "tdd",
      earfcns: [],
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
