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
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
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
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
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
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
];

export default data;
