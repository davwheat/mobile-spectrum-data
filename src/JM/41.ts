import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 2555,
    owner: "Unallocated",
    startFreq: 2496,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    endFreq: 2635,
    owner: "Digicel",
    ownerLongName: "Digicel Jamaica Ltd.",
    startFreq: 2555,
    type: "tdd",
    earfcns: [40540, 40740, 40938, 40940],
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
  {
    endFreq: 2690,
    owner: "Unallocated",
    startFreq: 2635,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.sma.gov.jm/wp-content/uploads/2023/03/Mobile-and-Fixed-Wireless-Band-Plans_March-2023.pdf",
    },
  },
];

export default data;
