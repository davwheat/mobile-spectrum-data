import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Ålcom",
      startFreq: 925.1,
      endFreq: 929.9,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 880.1,
        endFreq: 884.9,
      },
      arfcns: [],
      uarfcns: [],
      earfcns: [],
    },
    {
      owner: "?",
      startFreq: 929.9,
      endFreq: 930.1,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 884.9,
        endFreq: 885.1,
      },
      details: "Unallocated spectrum",
    },
    {
      owner: "Telia FI",
      startFreq: 930.1,
      endFreq: 947.3,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 891.9,
        endFreq: 903.3,
      },
      arfcns: [],
      uarfcns: [],
      earfcns: [],
    },
    {
      owner: "?",
      startFreq: 947.3,
      endFreq: 947.5,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 902.3,
        endFreq: 902.5,
      },
      details: "Unallocated spectrum",
    },
    {
      owner: "Ålcom",
      startFreq: 947.5,
      endFreq: 959.9,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 902.5,
        endFreq: 914.9,
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
