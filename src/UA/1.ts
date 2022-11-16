import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "lifecell",
    startFreq: 2110,
    endFreq: 2130,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920,
      endFreq: 1940,
    },
    uarfcns: [10564, 10588, 10612],
    earfcns: [150, 175],
    details: ["UMTS B1 10-15 MHz, LTE B1 0-10 MHz"],
  },
  {
    owner: "Unallocated",
    startFreq: 2130,
    endFreq: 2135,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1940,
      endFreq: 1945,
    },
  },
  {
    owner: "3Mob",
    startFreq: 2135,
    endFreq: 2140,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1945,
      endFreq: 1950,
    },
    uarfcns: [10662],
    details: ["UMTS B1 5 MHz"],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ukraine",
    startFreq: 2140,
    endFreq: 2155,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1950,
      endFreq: 1965,
    },
    uarfcns: [10712, 10737, 10762],
    earfcns: [374, 399],
    details: ["UMTS B1 5-15 MHz, LTE B1 0-10 MHz"],
  },
  {
    owner: "Kyivstar",
    startFreq: 2155,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1965,
      endFreq: 1980,
    },
    uarfcns: [10787, 10812, 10836],
    earfcns: [550],
    details: ["UMTS B1 5-15 MHz, LTE B1 0-10 MHz"],
  },
];

export default data;
