import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    pairedWith: {
      endFreq: 897,
      startFreq: 880,
      type: "fddUp",
    },
    startFreq: 925,
    endFreq: 942,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    arfcns: ["35-60"],
    endFreq: 947,
    owner: "Digicel",
    ownerLongName: "Digicel Jamaica Ltd.",
    pairedWith: {
      endFreq: 902,
      startFreq: 897,
      type: "fddUp",
    },
    startFreq: 942,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    owner: "Unallocated",
    pairedWith: {
      endFreq: 915,
      startFreq: 902,
      type: "fddUp",
    },
    startFreq: 947,
    endFreq: 960,
    type: "fddDown",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
];

export default data;
