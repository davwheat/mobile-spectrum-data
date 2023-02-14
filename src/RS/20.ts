import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "mts",
      ownerLongName: "Telekom Srbija",
      startFreq: 791,
      endFreq: 801,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 832,
        endFreq: 842,
      },
      earfcns: [6200],
    },
    {
      owner: "Yettel.",
      ownerLongName: "Yettel Srbija",
      startFreq: 801,
      endFreq: 811,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 842,
        endFreq: 852,
      },
      earfcns: [6300],
    },
    {
      owner: "A1",
      ownerLongName: "A1 Srbija",
      startFreq: 811,
      endFreq: 821,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 852,
        endFreq: 862,
      },
      earfcns: [6400],
    },
  ] as SpectrumBlock[]
).map((x) => {
  x.sourceInfo = {
    type: "url",
    url: "https://www.ratel.rs/en/page/public-communications-networks",
  };
  return x;
});

export default data;
