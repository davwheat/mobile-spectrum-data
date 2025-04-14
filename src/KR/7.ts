import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [2850],
    endFreq: 2640,
    owner: "SKT",
    ownerLongName: "SK Telecom",
    pairedWith: {
      endFreq: 2520,
      startFreq: 2500,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 2620,
    type: "fddDown",
  },
  {
    earfcns: [3050],
    endFreq: 2660,
    owner: "LG U+",
    pairedWith: {
      endFreq: 2540,
      startFreq: 2520,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 2640,
    type: "fddDown",
  },
  {
    earfcns: [3200],
    endFreq: 2670,
    owner: "SKT",
    ownerLongName: "SK Telecom",
    pairedWith: {
      endFreq: 2550,
      startFreq: 2540,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 2660,
    type: "fddDown",
  },
  {
    endFreq: 2690,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 2570,
      startFreq: 2550,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 2670,
    type: "fddDown",
  },
];

export default data;
