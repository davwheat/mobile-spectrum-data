import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Yettel",
    ownerLongName: "Yettel Hungary",
    startFreq: 925,
    endFreq: 940,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880,
      endFreq: 895,
    },
    earfcns: [3550],
    details: ["Used for 5 MHz GSM and 10 MHz LTE."],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Hungary",
    startFreq: 940,
    endFreq: 950,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 895,
      endFreq: 905,
    },
    uarfcns: [3027],
    details: [
      "Used mainly for 2G",
      "3G being phased out",
      "Test LTE deployments",
    ],
  },
  {
    owner: "Telekom",
    ownerLongName: "Magyar Telekom",
    startFreq: 950,
    endFreq: 960,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 905,
      endFreq: 915,
    },
    details: ["Used for 2G"],
  },
];

export default data;
