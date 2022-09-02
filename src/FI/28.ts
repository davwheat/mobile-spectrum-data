import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "DNA",
      startFreq: 758,
      endFreq: 768,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 703,
        endFreq: 713,
      },
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "Elisa",
      startFreq: 768,
      endFreq: 778,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 713,
        endFreq: 723,
      },
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "Telia FI",
      startFreq: 778,
      endFreq: 788,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 723,
        endFreq: 733,
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
