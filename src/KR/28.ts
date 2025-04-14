import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["698 – 710, 758 – 771 MHz used for TV broadcast"],
    endFreq: 773,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 718,
      startFreq: 703,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 758,
    type: "fddDown",
  },
  {
    details: ["PS-LTE network: https://www.safenet.go.kr/"],
    earfcns: [9410],
    endFreq: 783,
    owner: "MOIS",
    ownerLongName: "Ministry of the Interior and Safety",
    pairedWith: {
      endFreq: 728,
      startFreq: 718,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 773,
    type: "fddDown",
  },
  {
    endFreq: 803,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 748,
      startFreq: 728,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://spectrummap.kr/radioInfo/radioDivideUsingCondition.do?menuNo=300640",
    },
    startFreq: 783,
    type: "fddDown",
  },
];

export default data;
