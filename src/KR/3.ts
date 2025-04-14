import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 1810,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 1715,
      startFreq: 1710,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 1805,
    type: "fddDown",
  },
  {
    details: ["1725 – 1730 MHz reserved"],
    earfcns: [1350],
    endFreq: 1830,
    owner: "SKT",
    ownerLongName: "SK Telecom",
    pairedWith: {
      endFreq: 1735,
      startFreq: 1715,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 1810,
    type: "fddDown",
  },
  {
    details: ["1740 – 1745 MHz reserved"],
    earfcns: [1550, 1650, 1694],
    endFreq: 1860,
    owner: "KT",
    ownerLongName: "KT",
    pairedWith: {
      endFreq: 1765,
      startFreq: 1735,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 1830,
    type: "fddDown",
  },
  {
    endFreq: 1880,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 1785,
      startFreq: 1765,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 1860,
    type: "fddDown",
  },
];

export default data;
