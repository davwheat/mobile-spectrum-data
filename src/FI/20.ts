import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "DNA",
      startFreq: 791,
      endFreq: 801,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 832,
        endFreq: 842,
      },
      earfcns: [],
    },
    {
      owner: "Telia FI",
      startFreq: 801,
      endFreq: 811,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 842,
        endFreq: 852,
      },
      earfcns: [],
    },
    {
      owner: "Elisa",
      startFreq: 811,
      endFreq: 821,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 852,
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
