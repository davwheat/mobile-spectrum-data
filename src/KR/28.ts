import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
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
      url: "https://spectrummap.kr/radioInfo/radioUseConditionDiagramView.do?menuNo=20601",
    },
    startFreq: 773,
    type: "fddDown",
  },
];

export default data;
