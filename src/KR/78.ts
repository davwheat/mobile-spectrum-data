import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 3500,
    owner: "LG U+",
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 3400,
    type: "tdd",
  },
  {
    endFreq: 3600,
    nrarfcns: [636672],
    owner: "KT",
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 3500,
    type: "tdd",
  },
  {
    endFreq: 3700,
    nrarfcns: [643392],
    owner: "SKT",
    ownerLongName: "SK Telecom",
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 3600,
    type: "tdd",
  },
];

export default data;
