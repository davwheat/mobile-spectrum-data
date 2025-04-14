import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 763,
    nrarfcns: [152100],
    owner: "MEO",
    ownerLongName: "MEO",
    pairedWith: {
      endFreq: 708,
      startFreq: 703,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 758,
    type: "fddDown",
  },
  {
    endFreq: 768,
    owner: "-",
    ownerLongName: "Unallocated",
    pairedWith: {
      endFreq: 713,
      startFreq: 708,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 763,
    type: "fddDown",
  },
  {
    details: [
      "Most common use is 5G NRARFCN 154570(10MHz)",
      "Very few cells use 4G EARFCN 9360(10MHz)",
    ],
    earfcns: [9360],
    endFreq: 778,
    nrarfcns: [154600],
    owner: "VDF",
    ownerLongName: "Vodafone",
    pairedWith: {
      endFreq: 723,
      startFreq: 713,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 768,
    type: "fddDown",
  },
  {
    endFreq: 788,
    nrarfcns: [156600],
    owner: "NOS",
    ownerLongName: "NOS",
    pairedWith: {
      endFreq: 733,
      startFreq: 723,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/render.jsp?contentId=1712329&languageId=1",
    },
    startFreq: 778,
    type: "fddDown",
  },
];

export default data;
