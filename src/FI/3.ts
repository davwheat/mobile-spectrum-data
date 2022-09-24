import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Telia FI",
      startFreq: 1805.1,
      endFreq: 1829.9,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1710.1,
        endFreq: 1734.9,
      },
      arfcns: [],
      uarfcns: [],
      earfcns: [],
    },
    {
      owner: "DNA",
      startFreq: 1830.1,
      endFreq: 1854.9,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1735.1,
        endFreq: 1759.9,
      },
      arfcns: [],
      uarfcns: [],
      earfcns: [],
    },
    {
      owner: "Elisa",
      startFreq: 1855.1,
      endFreq: 1879.9,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1760.1,
        endFreq: 1784.9,
      },
      arfcns: [],
      uarfcns: [],
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
