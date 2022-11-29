import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "lifecell",
    startFreq: 1805,
    endFreq: 1820,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1725,
    },
    arfcns: ["ARFCNs 512-585"],
    earfcns: [1275, 1300],
    details: [
      "LTE B3 10 MHz on EARFCN 1300",
      "LTE B3 15 MHz on EARFCN 1275",
      "Some 2G deployments",
    ],
  },
  {
    owner: "Kyivstar",
    startFreq: 1820,
    endFreq: 1845,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1725,
      endFreq: 1750,
    },
    arfcns: ["ARFCNs 587-610"],
    earfcns: [1374, 1500],
    details: ["First 5 MHz as 2G or LTE 5 MHz", "Standard LTE B3 20 MHz"],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ukraine",
    startFreq: 1845,
    endFreq: 1865,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1750,
      endFreq: 1770,
    },
    arfcns: ["ARFCNs 712-810"],
    earfcns: [1700],
    details: ["LTE B3 20 MHz DSS with 2G", "LTE B3 15 MHz in some areas"],
  },
  {
    owner: "Kyivstar",
    startFreq: 1865,
    endFreq: 1875,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1770,
      endFreq: 1780,
    },
    arfcns: ["ARFCNs 812-860"],
    earfcns: [1850],
    details: ["2G 10 MHz or LTE B3 10 MHz"],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Urkaine",
    startFreq: 1875,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1780,
      endFreq: 1785,
    },
    arfcns: ["ARFCNs 862-885"],
    details: ["2G 5 MHz"],
  },
];

export default data;
