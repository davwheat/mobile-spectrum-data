import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1",
    ownerLongName: "A1 Bulgaria",
    startFreq: 791,
    endFreq: 801,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 832,
      endFreq: 842,
    },
    earfcns: [6200],
    details: ["Restricted in some areas until the end of 2025"],
    sourceInfo: {
      type: "url",
      url: "https://crc.bg/files/ВОП/01-1_А%201%20БЪЛГАРИЯ%20ЕАД.-ИЗДАВАНЕ%20НА%20РАЗРЕШЕНИЕ%20В%20ОБХВАТИ%20700%20И%20800-ноември%202023%20(2).pdf",
    },
  },
  {
    owner: "Vivacom",
    ownerLongName: "Vivacom Bulgaria",
    startFreq: 801,
    endFreq: 811,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 842,
      endFreq: 852,
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
    startFreq: 811,
    endFreq: 821,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 852,
      endFreq: 862,
    },
    earfcns: [6400],
    details: ["Restricted in some areas until the end of 2025"],
    sourceInfo: {
      type: "url",
      url: "https://crc.bg/files/ВОП/01-3_ЙЕТТЕЛ%20%20ИЗДАВАНЕ%20НА%20РАЗРЕШЕНИЕ%20В%20ОБХВАТИ%20700%20И%20800-ноември%202023%20(1).pdf",
    },
  },
];

export default data;
