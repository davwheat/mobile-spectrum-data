import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "Uplink overlaps with B5 downlink, not allocated for mobile network",
    ],
    endFreq: 949.3,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 904.3,
      startFreq: 880,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 925,
    type: "fddDown",
  },
  {
    earfcns: [3743],
    endFreq: 959.3,
    owner: "KT",
    ownerLongName: "KT",
    pairedWith: {
      endFreq: 914.3,
      startFreq: 904.3,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 949.3,
    type: "fddDown",
  },
];

export default data;
