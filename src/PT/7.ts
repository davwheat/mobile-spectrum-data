import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 2625,
    owner: "DIGI",
    pairedWith: {
      endFreq: 2505,
      startFreq: 2500,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 2620,
    type: "fddDown",
  },
  {
    endFreq: 2630,
    owner: "NOWO",
    pairedWith: {
      endFreq: 2510,
      startFreq: 2505,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 2625,
    type: "fddDown",
  },
  {
    earfcns: [2950],
    endFreq: 2650,
    owner: "Vodafone",
    pairedWith: {
      endFreq: 2530,
      startFreq: 2510,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 2630,
    type: "fddDown",
  },
  {
    earfcns: [3150],
    endFreq: 2670,
    owner: "NOS",
    pairedWith: {
      endFreq: 2550,
      startFreq: 2530,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 2650,
    type: "fddDown",
  },
  {
    earfcns: [3350],
    endFreq: 2690,
    owner: "MEO",
    pairedWith: {
      endFreq: 2570,
      startFreq: 2550,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 2670,
    type: "fddDown",
  },
];

export default data;
