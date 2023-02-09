import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [100],
    endFreq: 2130,
    owner: "LG U+",
    pairedWith: {
      endFreq: 1940,
      startFreq: 1920,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioUseConditionDiagramView.do?menuNo=20601",
    },
    startFreq: 2110,
    type: "fddDown",
  },
  {
    earfcns: [275],
    endFreq: 2145,
    owner: "SKT",
    ownerLongName: "SK Telecom",
    pairedWith: {
      endFreq: 1955,
      startFreq: 1940,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioUseConditionDiagramView.do?menuNo=20601",
    },
    startFreq: 2130,
    type: "fddDown",
  },
  {
    details: [],
    endFreq: 2150,
    owner: "SKT",
    ownerLongName: "SK Telecom",
    pairedWith: {
      endFreq: 1960,
      startFreq: 1955,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioUseConditionDiagramView.do?menuNo=20601",
    },
    startFreq: 2145,
    type: "fddDown",
    uarfcns: [10737],
  },
  {
    earfcns: [450, 475],
    endFreq: 2165,
    owner: "KT",
    pairedWith: {
      endFreq: 1975,
      startFreq: 1960,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioUseConditionDiagramView.do?menuNo=20601",
    },
    startFreq: 2150,
    type: "fddDown",
  },
  {
    endFreq: 2170,
    owner: "KT",
    pairedWith: {
      endFreq: 1980,
      startFreq: 1975,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioUseConditionDiagramView.do?menuNo=20601",
    },
    startFreq: 2165,
    type: "fddDown",
    uarfcns: [10836],
  },
];

export default data;
