import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "mts",
      ownerLongName: "Telekom Srbija",
      startFreq: 2620,
      endFreq: 2640,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2500,
        endFreq: 2520,
      },
    },
    {
      owner: "A1",
      ownerLongName: "A1 Srbija",
      startFreq: 2640,
      endFreq: 2660,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2520,
        endFreq: 2540,
      },
    },
    {
      owner: "Yettel",
      ownerLongName: "Yettel Srbija",
      startFreq: 2660,
      endFreq: 2680,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2540,
        endFreq: 2560,
      },
    },
    {
      owner: "Unallocated",
      startFreq: 2680,
      endFreq: 2690,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 2560,
        endFreq: 2570,
      },
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
