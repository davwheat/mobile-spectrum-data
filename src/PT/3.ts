import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [1300],
    endFreq: 1825,
    owner: "Vodafone",
    pairedWith: {
      endFreq: 1730,
      startFreq: 1710,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 1805,
    type: "fddDown",
  },
  {
    earfcns: [1500],
    endFreq: 1845,
    owner: "NOS",
    pairedWith: {
      endFreq: 1750,
      startFreq: 1730,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 1825,
    type: "fddDown",
  },
  {
    details: ["Sometimes used for DSS 4G/5G"],
    earfcns: [1700],
    endFreq: 1865,
    nrarfcns: [371000],
    owner: "MEO",
    pairedWith: {
      endFreq: 1770,
      startFreq: 1750,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 1845,
    type: "fddDown",
  },
  {
    endFreq: 1875,
    owner: "NOWO",
    pairedWith: {
      endFreq: 1780,
      startFreq: 1770,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 1865,
    type: "fddDown",
  },
  {
    endFreq: 1880,
    owner: "DIGI",
    pairedWith: {
      endFreq: 1785,
      startFreq: 1780,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 1875,
    type: "fddDown",
  },
];

export default data;
