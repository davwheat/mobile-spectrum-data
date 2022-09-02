import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "DNA",
      startFreq: 925.1,
      endFreq: 936.7,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 880.1,
        endFreq: 891.7,
      },
      arfcns: [],
      uarfcns: [],
      earfcns: [],
    },
    {
      owner: "?",
      startFreq: 936.7,
      endFreq: 936.9,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 891.7,
        endFreq: 891.9,
      },
      details: "Unallocated spectrum",
    },
    {
      owner: "Telia FI",
      startFreq: 936.9,
      endFreq: 948.3,
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
      startFreq: 948.3,
      endFreq: 948.5,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 903.3,
        endFreq: 903.5,
      },
      details: "Unallocated spectrum",
    },
    {
      owner: "Elisa",
      startFreq: 948.5,
      endFreq: 959.9,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 903.5,
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
