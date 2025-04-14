import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    arfcns: [975, 976, 977, 978, 979, 980, 981, 982, 983],
    details: ["4G EARFCN 3485(3MHz) + 2G ARFCN 975-983(2 MHz)"],
    earfcns: [3485],
    endFreq: 930,
    owner: "DIGI",
    ownerLongName: "DIGI",
    pairedWith: {
      endFreq: 885,
      startFreq: 880,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/streaming/Dec14012022Espectro900MHz_traducao.pdf?contentId=1714909&field=ATTACHED_FILE",
    },
    startFreq: 925,
    type: "fddDown",
  },
  {
    arfcns: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
    details: ["4G EARFCN 3525(5MHz) + 2G ARFCN 1-25(5MHz)"],
    earfcns: [3525],
    endFreq: 940,
    owner: "VDF",
    ownerLongName: "Vodafone",
    pairedWith: {
      endFreq: 895,
      startFreq: 885,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/streaming/Dec14012022Espectro900MHz_traducao.pdf?contentId=1714909&field=ATTACHED_FILE",
    },
    startFreq: 930,
    type: "fddDown",
  },
  {
    arfcns: [
      50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
      68, 69, 70, 71, 72, 73, 74,
    ],
    details: ["4G EARFCN 3625(5MHz) + 2G ARFCN 50-74(5 MHz)"],
    earfcns: [3625],
    endFreq: 950,
    owner: "NOS",
    ownerLongName: "NOS",
    pairedWith: {
      endFreq: 905,
      startFreq: 895,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/streaming/Dec14012022Espectro900MHz_traducao.pdf?contentId=1714909&field=ATTACHED_FILE",
    },
    startFreq: 940,
    type: "fddDown",
  },
  {
    arfcns: [
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 113, 114, 115, 116, 117,
      118, 119, 120, 121, 122, 123, 124,
    ],
    details: ["4G EARFCN 3749(5MHz) + 2G ARFCN 76-87, 113-124(5 MHz)"],
    earfcns: [3749],
    endFreq: 960,
    owner: "MEO",
    ownerLongName: "MEO",
    pairedWith: {
      endFreq: 915,
      startFreq: 905,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.anacom.pt/streaming/Dec14012022Espectro900MHz_traducao.pdf?contentId=1714909&field=ATTACHED_FILE",
    },
    startFreq: 950,
    type: "fddDown",
  },
];

export default data;
