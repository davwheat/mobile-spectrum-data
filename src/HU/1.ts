import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Telekom",
    ownerLongName: "Magyar Telekom",
    startFreq: 2110,
    endFreq: 2135,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920,
      endFreq: 1945,
    },
    earfcns: [75, 100, 200],
    details: [
      "LTE 20 MHz on EARFCN 100",
      "LTE 15 MHz on EARFCN 75",
      "LTE 10 MHz on EARFCN 200",
      "Some NR DSS and NR non-DSS deployments",
    ],
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Hungary",
    startFreq: 2135,
    endFreq: 2150,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1945,
      endFreq: 1960,
    },
    uarfcns: [10738],
    earfcns: [300],
    nrarfcns: [427970],
    details: ["3G being phased out", "NR/LTE DSS 10 MHz"],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Hungary",
    startFreq: 2150,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1960,
      endFreq: 1980,
    },
    uarfcns: [10838],
    earfcns: [476, 500],
    nrarfcns: [431520],
    details: [
      "3G being phased out",
      "LTE/NR 15 MHz DSS",
      "Single sites with 20 MHz LTE on EARFCN 500",
    ],
  },
];

export default data;
