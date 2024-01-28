import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 756,
    owner: "Rock Connect",
    ownerLongName: "Rock Connect Ltd.",
    pairedWith: {
      endFreq: 786,
      startFreq: 776,
      type: "fddUp",
    },
    startFreq: 746,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    endFreq: 758,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 788,
      startFreq: 786,
      type: "fddUp",
    },
    startFreq: 756,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    details: ["Spectrum earmarked for a Public Safety Network."],
    endFreq: 768,
    owner: "MONS",
    ownerLongName: "Ministry of National Security",
    pairedWith: {
      endFreq: 798,
      startFreq: 788,
      type: "fddUp",
    },
    startFreq: 758,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    endFreq: 776,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 806,
      startFreq: 798,
      type: "fddUp",
    },
    startFreq: 768,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
];

export default data;
