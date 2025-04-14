import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 3440,
    owner: "DIGI",
    ownerLongName: "DIGI",
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1802215&languageId=1",
    },
    startFreq: 3400,
    type: "tdd",
  },
  {
    endFreq: 3480,
    owner: "-",
    ownerLongName: "Unallocated",
    sourceInfo: {
      type: "url",
      url: "",
    },
    startFreq: 3440,
    type: "tdd",
  },
  {
    endFreq: 3520,
    owner: "DIGI",
    ownerLongName: "DIGI",
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1802215&languageId=1",
    },
    startFreq: 3480,
    type: "tdd",
  },
  {
    endFreq: 3610,
    nrarfcns: [637667],
    owner: "VDF",
    ownerLongName: "Vodafone",
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 3520,
    type: "tdd",
  },
  {
    endFreq: 3710,
    nrarfcns: [644000],
    owner: "NOS",
    ownerLongName: "NOS",
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 3610,
    type: "tdd",
  },
  {
    endFreq: 3800,
    nrarfcns: [650333],
    owner: "MEO",
    ownerLongName: "MEO",
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 3710,
    type: "tdd",
  },
];

export default data;
