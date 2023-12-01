import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 869,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 824,
      startFreq: 814,
      type: "fddUp",
    },
    startFreq: 859,
    type: "fddDown",
  },
  {
    arfcns: ["128-151"],
    endFreq: 879,
    owner: "FLOW",
    ownerLongName: "Cable and Wireless Jamaica Ltd.",
    pairedWith: {
      endFreq: 834,
      startFreq: 824,
      type: "fddUp",
    },
    startFreq: 869,
    type: "fddDown",
    uarfcns: [4373],
  },
  {
    earfcns: [2600],
    endFreq: 894,
    owner: "Digicel",
    ownerLongName: "Digicel Jamaica Ltd.",
    pairedWith: {
      endFreq: 849,
      startFreq: 834,
      type: "fddUp",
    },
    startFreq: 879,
    type: "fddDown",
    uarfcns: [4408],
  },
];

export default data;
