import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 874,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 829,
      startFreq: 824,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 869,
    type: "fddDown",
  },
  {
    earfcns: [2500],
    endFreq: 884,
    owner: "SKT",
    ownerLongName: "SK Telecom",
    pairedWith: {
      endFreq: 839,
      startFreq: 829,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 874,
    type: "fddDown",
  },
  {
    earfcns: [2600],
    endFreq: 894,
    owner: "LG U+",
    pairedWith: {
      endFreq: 849,
      startFreq: 839,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 884,
    type: "fddDown",
  },
];

export default data;
