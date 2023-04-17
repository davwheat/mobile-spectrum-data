import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "Most common use is 4G EARFCN 103(20MHz)",
      "Very few areas use 3G UARFCN 10638(5MHz) + 4G EARFCN 78(15MHz)",
    ],
    earfcns: [78, 103],
    endFreq: 2130.1,
    owner: "Vodafone",
    pairedWith: {
      endFreq: 1940.1,
      startFreq: 1920.3,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 2110.3,
    type: "fddDown",
    uarfcns: [10638],
  },
  {
    details: [
      "Most common use is 4G EARFCN 300(20MHz)",
      "Few areas use 3G UARFCN 10663(5MHz) + 4G EARFCN 325(15MHz)",
    ],
    earfcns: [300, 325],
    endFreq: 2149.9,
    owner: "NOS",
    pairedWith: {
      endFreq: 1959.9,
      startFreq: 1940.1,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 2130.1,
    type: "fddDown",
    uarfcns: [10663],
  },
  {
    details: [
      "Most common use is 3G UARFCN 10762(5MHz) + 4G EARFCN 525(15MHz)",
      "Few areas use 4G EARFCN 500(20MHz)",
      "Sometimes used for DSS 4G/5G",
    ],
    earfcns: [500, 525],
    endFreq: 2169.7,
    nrarfcns: [432500],
    owner: "MEO",
    pairedWith: {
      endFreq: 1979.7,
      startFreq: 1959.9,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 2149.9,
    type: "fddDown",
    uarfcns: [10762],
  },
];

export default data;
