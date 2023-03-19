import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 758,
    endFreq: 768,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 703,
      endFreq: 713,
    },
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
  {
    owner: "Telekom",
    startFreq: 768,
    endFreq: 778,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 713,
      endFreq: 723,
    },
    earfcns: [9360],
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
  {
    owner: "A1",
    startFreq: 778,
    endFreq: 788,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 723,
      endFreq: 733,
    },
    earfcns: [9460],
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
];

export default data;
