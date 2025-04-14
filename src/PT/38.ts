import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["4G EARFCN 37900(20MHz)"],
    earfcns: [37900],
    endFreq: 2595,
    owner: "VDF",
    ownerLongName: "Vodafone",
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 2570,
    type: "tdd",
  },
  {
    details: ["5G NRARFCN 521000(20MHz)"],
    endFreq: 2620,
    nrarfcns: [521000],
    owner: "DIGI",
    ownerLongName: "DIGI",
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 2595,
    type: "tdd",
  },
];

export default data;
