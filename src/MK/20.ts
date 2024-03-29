import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1",
    startFreq: 791,
    endFreq: 801,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 832,
      endFreq: 842,
    },
    earfcns: [6200],
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
  {
    owner: "Telekom",
    startFreq: 801,
    endFreq: 811,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 842,
      endFreq: 852,
    },
    earfcns: [6300],
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
  {
    owner: "A1",
    startFreq: 811,
    endFreq: 821,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 852,
      endFreq: 862,
    },
    earfcns: [6400],
    sourceInfo: {
      type: "url",
      url: "https://aek.mk/wp-content/uploads/2022/05/2.-20220517-Jane-Jakimovski-5G-Auction-in-Macedonia.pptx",
    },
  },
];

export default data;
