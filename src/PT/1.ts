import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [],
    earfcns: [103],
    endFreq: 2130,
    owner: "VDF",
    ownerLongName: "Vodafone",
    pairedWith: {
      endFreq: 1940,
      startFreq: 1920,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 2110,
    type: "fddDown",
  },
  {
    details: [],
    earfcns: [300],
    endFreq: 2150,
    owner: "NOS",
    ownerLongName: "NOS",
    pairedWith: {
      endFreq: 1960,
      startFreq: 1940,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 2130,
    type: "fddDown",
  },
  {
    details: [],
    earfcns: [500],
    endFreq: 2170,
    owner: "MEO",
    ownerLongName: "MEO",
    pairedWith: {
      endFreq: 1980,
      startFreq: 1960,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 2150,
    type: "fddDown",
  },
];

export default data;
