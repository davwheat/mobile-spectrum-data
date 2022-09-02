import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "DNA",
      startFreq: 2620,
      endFreq: 2640,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2500,
        endFreq: 2520,
      },
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "Telia FI",
      startFreq: 2640,
      endFreq: 2665,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2520,
        endFreq: 2545,
      },
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "Elisa",
      startFreq: 2665,
      endFreq: 2690,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2545,
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
