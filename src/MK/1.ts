import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 2110,
    endFreq: 2120,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1910,
      endFreq: 1920,
    },
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
  {
    owner: "A1",
    startFreq: 2120,
    endFreq: 2140,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1930,
      endFreq: 1950,
    },
    earfcns: [150, 200],
    details: ["LTE 20 MHz"],
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
  {
    owner: "Telekom",
    startFreq: 2140,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1950,
      endFreq: 1980,
    },
    earfcns: [356, 500],
    nrarfcns: [430830],
    details: [
      "10 MHz on EARFCN 356 - LTE",
      "20 MHz on EARFCN 500 - LTE/NR DSS",
    ],
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
];

export default data;
