import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Romania",
    startFreq: 925,
    endFreq: 935,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880,
      endFreq: 890,
    },
    arfcns: "ARFCNs 975-1023",
    uarfcns: [2938],
  },
  {
    owner: "Digi",
    ownerLongName: "RCS & RDS",
    startFreq: 935,
    endFreq: 940,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 890,
      endFreq: 895,
    },
    arfcns: "ARFCNs 0-24",
    earfcns: [3578],
    details: ["B8 3 MHz LTE in the process of being decommissioned in favour of B20 LTE and B8 2G"],
  },
  {
    owner: "Telekom",
    ownerLongName: "Telekom Romania",
    startFreq: 940,
    endFreq: 950,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 895,
      endFreq: 905,
    },
    arfcns: "ARFCNs 25-74",
    uarfcns: [3025],
    earfcns: [3650],
    details: [
      "2G 5 MHz",
      "3G in the process of being decommissioned in favour of B8 LTE 5 MHz",
    ],
  },
  {
    owner: "Orange",
    ownerLongName: "Orange Romania",
    startFreq: 950,
    endFreq: 960,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 905,
      endFreq: 915,
    },
    arfcns: "ARFCNs 75-124",
    uarfcns: [3083],
    details: [
      "B8 3G not always deployed in urban areas",
    ],
  },
];

export default data;
