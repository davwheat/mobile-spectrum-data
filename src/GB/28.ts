import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "Limited LTE use, primarily in central London and in Northern Ireland",
      "Mainly being used for new suburban and rural 5G NR deployments",
    ],
    earfcns: [9260],
    endFreq: 768,
    nrarfcns: [152210, 152690],
    owner: "O2",
    ownerLongName: "O2 UK",
    pairedWith: {
      endFreq: 713,
      startFreq: 703,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0028/221959/SA-700-LICENCE-Telefonica-1248094.pdf",
    },
    startFreq: 758,
    type: "fddDown",
  },
  {
    details: ["Limited n28 DSS deployment"],
    earfcns: [9360],
    endFreq: 778,
    nrarfcns: [154570],
    owner: "Three",
    pairedWith: {
      endFreq: 723,
      startFreq: 713,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0031/221899/SA-700-LICENCE-H3G-1248067-18-05-21.pdf",
    },
    startFreq: 768,
    type: "fddDown",
  },
  {
    details: [
      "Limited 4G LTE use in rural areas, spotted in Caerphilly and in Shropshire",
    ],
    earfcns: [9460],
    endFreq: 788,
    nrarfcns: [156510],
    owner: "EE",
    pairedWith: {
      endFreq: 733,
      startFreq: 723,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0025/221965/SA-700-LICENCE-EE-1248065.pdf",
    },
    startFreq: 778,
    type: "fddDown",
  },
];

export default data;
