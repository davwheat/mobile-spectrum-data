import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Hungary",
    startFreq: 1805,
    endFreq: 1825,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1730,
    },
    earfcns: [1276, 1300],
    details: ["Used for 2G in some areas"],
  },
  {
    owner: "Telekom",
    ownerLongName: "Magyar Telekom",
    startFreq: 1825,
    endFreq: 1855.05,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1730,
      endFreq: 1760.05,
    },
    earfcns: [1500],
    details: ["20 MHz LTE + 10 MHz 2G"],
  },
  {
    owner: "Digi",
    ownerLongName: "Digi Hungary",
    startFreq: 1855.05,
    endFreq: 1860,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1760.05,
      endFreq: 1765,
    },
    earfcns: [1724],
    details: ["3 MHz LTE + 2 MHz 2G", "Network to be shut down in June 2023"],
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Hungary",
    startFreq: 1860,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1765,
      endFreq: 1785,
    },
    earfcns: [1850],
    details: [
      "Standard LTE 20 MHz deployment",
      "In areas with G18, LTE is 15 MHz",
    ],
  },
];

export default data;
