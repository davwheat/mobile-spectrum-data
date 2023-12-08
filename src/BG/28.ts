import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1",
    ownerLongName: "A1 Bulgaria",
    startFreq: 758,
    endFreq: 768,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 703,
      endFreq: 713,
    },
    nrarfcns: [152690],
    details: ["NR only", "Restricted in some areas until the end of 2025"],
    sourceInfo: {
      type: "url",
      url: "https://crc.bg/files/ВОП/01-1_А%201%20БЪЛГАРИЯ%20ЕАД.-ИЗДАВАНЕ%20НА%20РАЗРЕШЕНИЕ%20В%20ОБХВАТИ%20700%20И%20800-ноември%202023%20(2).pdf",
    },
  },
  {
    owner: "Vivacom",
    ownerLongName: "Vivacom Bulgaria",
    startFreq: 768,
    endFreq: 778,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 713,
      endFreq: 723,
    },
    details: ["Restricted in some areas until the end of 2025"],
    sourceInfo: {
      type: "url",
      url: "https://crc.bg/files/ВОП/01-2_ВИВАКОМ-ИЗДАВАНЕ%20НА%20РАЗРЕШЕНИЕ%20В%20ОБХВАТИ%20700%20И%20800-ноември%202023%20(2).pdf",
    },
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Bulgaria",
    startFreq: 778,
    endFreq: 788,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 723,
      endFreq: 733,
    },
    nrarfcns: [156510],
    details: ["NR only", "Restricted in some areas until the end of 2025"],
    sourceInfo: {
      type: "url",
      url: "https://crc.bg/files/ВОП/01-3_ЙЕТТЕЛ%20%20ИЗДАВАНЕ%20НА%20РАЗРЕШЕНИЕ%20В%20ОБХВАТИ%20700%20И%20800-ноември%202023%20(1).pdf",
    },
  },
];

export default data;
