import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [6200],
    endFreq: 801,
    owner: "MEO",
    ownerLongName: "MEO",
    pairedWith: {
      endFreq: 842,
      startFreq: 832,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 791,
    type: "fddDown",
  },
  {
    earfcns: [6300],
    endFreq: 811,
    owner: "VDF",
    ownerLongName: "Vodafone",
    pairedWith: {
      endFreq: 852,
      startFreq: 842,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 801,
    type: "fddDown",
  },
  {
    earfcns: [6400],
    endFreq: 821,
    owner: "NOS",
    ownerLongName: "NOS",
    pairedWith: {
      endFreq: 862,
      startFreq: 852,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?categoryId=383094&languageId=1",
    },
    startFreq: 811,
    type: "fddDown",
  },
];

export default data;
