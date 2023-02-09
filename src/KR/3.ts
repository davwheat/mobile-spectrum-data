import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["1725–1730 MHz reserved"],
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
      url: "https://spectrummap.kr/radioInfo/radioUseConditionDiagramView.do?menuNo=20601",
    },
    startFreq: 1810,
    type: "fddDown",
  },
  {
    details: ["1740–1745 MHz reserved"],
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
      url: "https://spectrummap.kr/radioInfo/radioUseConditionDiagramView.do?menuNo=20601",
    },
    startFreq: 1830,
    type: "fddDown",
  },
];

export default data;
