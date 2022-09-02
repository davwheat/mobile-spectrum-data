import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Elisa",
      startFreq: 2110.3,
      endFreq: 2130.1,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1920.3,
        endFreq: 1940.1,
      },
      uarfcns: [],
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "DNA",
      startFreq: 2130.1,
      endFreq: 2149.9,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1940.1,
        endFreq: 1959.9,
      },
      uarfcns: [],
      earfcns: [],
      nrarfcns: [],
    },
    {
      owner: "Telia FI",
      startFreq: 2149.9,
      endFreq: 2169.7,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1959.9,
        endFreq: 1979.7,
      },
      uarfcns: [],
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
