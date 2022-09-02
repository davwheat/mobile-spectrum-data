import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Telia FI",
      startFreq: 1805.1,
      endFreq: 1842.4,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1710.1,
        endFreq: 1747.4,
      },
      arfcns: [],
      uarfcns: [],
      earfcns: [],
    },
    {
      owner: "?",
      startFreq: 1842.4,
      endFreq: 1842.5,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1747.4,
        endFreq: 1747.5,
      },
      details: "Unallocated spectrum",
    },
    {
      owner: "Ålcom",
      startFreq: 1842.5,
      endFreq: 1880,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 1747.5,
        endFreq: 1785,
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
