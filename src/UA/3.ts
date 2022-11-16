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
    earfcns: [1275, 1300],
    details: ["LTE B3 10-15 MHz, 2G"],
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
    earfcns: [1500],
    details: ["2G 5 MHz, LTE B3 20 MHz"],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Urkaine",
    startFreq: 1845,
    endFreq: 1865,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1750,
      endFreq: 1770,
    },
    earfcns: [1800],
    details: ["LTE B3 20 MHz DSS with 2G"],
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
    details: ["2G 10 MHz"],
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
    details: ["2G 5 MHz"],
  },
];

export default data;
