import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 1945,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 1865,
      startFreq: 1850,
      type: "fddUp",
    },
    startFreq: 1930,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    earfcns: [900, 925],
    endFreq: 1970,
    owner: "FLOW",
    ownerLongName: "Cable and Wireless Jamaica Ltd.",
    pairedWith: {
      endFreq: 1890,
      startFreq: 1865,
      type: "fddUp",
    },
    startFreq: 1945,
    type: "fddDown",
    uarfcns: [487],
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    earfcns: [1070, 1100],
    endFreq: 1990,
    owner: "Digicel",
    ownerLongName: "Digicel Jamaica Ltd.",
    pairedWith: {
      endFreq: 1910,
      startFreq: 1890,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
    startFreq: 1970,
    type: "fddDown",
  },
  {
    endFreq: 1995,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 1915,
      startFreq: 1910,
      type: "fddUp",
    },
    startFreq: 1990,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
];

export default data;
