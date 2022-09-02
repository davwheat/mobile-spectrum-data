import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Telia FI",
      startFreq: 2620,
      endFreq: 2625,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2500,
        endFreq: 2505,
      },
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "Ålcom",
      startFreq: 2625,
      endFreq: 2630,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2505,
        endFreq: 2510,
      },
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "Telia FI",
      startFreq: 2630,
      endFreq: 2660,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2510,
        endFreq: 2540,
      },
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "Ålcom",
      startFreq: 2660,
      endFreq: 2690,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2540,
        endFreq: 2570,
      },
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
