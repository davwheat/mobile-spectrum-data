import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Telia FI",
      startFreq: 791,
      endFreq: 806,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 832,
        endFreq: 847,
      },
      earfcns: [],
    },
    {
      owner: "Ålcom",
      startFreq: 806,
      endFreq: 821,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 847,
        endFreq: 862,
      },
      earfcns: [],
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
