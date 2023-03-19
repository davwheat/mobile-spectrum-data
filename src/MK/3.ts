import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1",
    startFreq: 1805,
    endFreq: 1840,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1745,
    },
    earfcns: [1279, 1450],
    details: ["LTE 15 MHz + LTE 20 MHz"],
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
  {
    owner: "Telekom",
    startFreq: 1840,
    endFreq: 1865,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1745,
      endFreq: 1770,
    },
    earfcns: [1700],
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
  {
    owner: "A1",
    startFreq: 1865,
    endFreq: 1870,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1770,
      endFreq: 1775,
    },
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
  {
    owner: "Unallocated",
    startFreq: 1870,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1775,
      endFreq: 1785,
    },
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
];

export default data;
