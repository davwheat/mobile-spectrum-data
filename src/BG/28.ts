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
    details: ["Restricted in some areas until the end of 2025"],
    sourceInfo: {
      type: "url",
      url: "https://crc.bg/files/%D0%92%D0%9E%D0%9F/01-1_%D0%90%201%20%D0%91%D0%AA%D0%9B%D0%93%D0%90%D0%A0%D0%98%D0%AF%20%D0%95%D0%90%D0%94.-%D0%98%D0%97%D0%94%D0%90%D0%92%D0%90%D0%9D%D0%95%20%D0%9D%D0%90%20%D0%A0%D0%90%D0%97%D0%A0%D0%95%D0%A8%D0%95%D0%9D%D0%98%D0%95%20%D0%92%20%D0%9E%D0%91%D0%A5%D0%92%D0%90%D0%A2%D0%98%20700%20%D0%98%20800-%D0%BD%D0%BE%D0%B5%D0%BC%D0%B2%D1%80%D0%B8%202023%20(2).pdf",
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
      url: "https://crc.bg/files/%D0%92%D0%9E%D0%9F/01-2_%D0%92%D0%98%D0%92%D0%90%D0%9A%D0%9E%D0%9C-%D0%98%D0%97%D0%94%D0%90%D0%92%D0%90%D0%9D%D0%95%20%D0%9D%D0%90%20%D0%A0%D0%90%D0%97%D0%A0%D0%95%D0%A8%D0%95%D0%9D%D0%98%D0%95%20%D0%92%20%D0%9E%D0%91%D0%A5%D0%92%D0%90%D0%A2%D0%98%20700%20%D0%98%20800-%D0%BD%D0%BE%D0%B5%D0%BC%D0%B2%D1%80%D0%B8%202023%20(2).pdf",
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
      url: "https://crc.bg/files/%D0%92%D0%9E%D0%9F/01-3_%D0%99%D0%95%D0%A2%D0%A2%D0%95%D0%9B%20%20%D0%98%D0%97%D0%94%D0%90%D0%92%D0%90%D0%9D%D0%95%20%D0%9D%D0%90%20%D0%A0%D0%90%D0%97%D0%A0%D0%95%D0%A8%D0%95%D0%9D%D0%98%D0%95%20%D0%92%20%D0%9E%D0%91%D0%A5%D0%92%D0%90%D0%A2%D0%98%20700%20%D0%98%20800-%D0%BD%D0%BE%D0%B5%D0%BC%D0%B2%D1%80%D0%B8%202023%20(1).pdf",
    },
  },
];

export default data;
