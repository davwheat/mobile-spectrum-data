import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 729,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 699,
      startFreq: 698,
      type: "fddUp",
    },
    startFreq: 728,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    earfcns: [5035],
    endFreq: 734,
    owner: "FLOW",
    ownerLongName: "Cable and Wireless Jamaica Ltd.",
    pairedWith: {
      endFreq: 704,
      startFreq: 699,
      type: "fddUp",
    },
    startFreq: 729,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    earfcns: [5120, 5790],
    endFreq: 744,
    owner: "Digicel",
    ownerLongName: "Digicel Jamaica Ltd.",
    pairedWith: {
      endFreq: 714,
      startFreq: 704,
      type: "fddUp",
    },
    startFreq: 734,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    endFreq: 746,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 716,
      startFreq: 714,
      type: "fddUp",
    },
    startFreq: 744,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
];

export default data;
