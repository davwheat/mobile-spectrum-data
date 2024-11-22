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
    uarfcns: [10564, 10588, 10612, 10637],
    earfcns: [150, 175],
    details: [
      "UMTS B1 10 MHz, LTE B1 10 MHz on EARFCN 150",
      "UMTS B1 15 MHz, LTE B1 5 MHz on EARFCN 175",
    ],
  },
  {
    owner: "3Mob",
    startFreq: 2130,
    endFreq: 2135,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1940,
      endFreq: 1945,
    },
    uarfcns: [10662],
    details: ["UMTS B1 5 MHz in Kyiv"],
  },
  {
    owner: "Kyivstar",
    startFreq: 2135,
    endFreq: 2140,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1945,
      endFreq: 1950,
    },
    uarfcns: [10687],
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
    earfcns: [374, 399, 400],
    details: [
      "LTE B1 15 MHz on EARFCN 374",
      "UMTS B1 5 MHz, LTE B1 10 MHz on EARFCN 399",
    ],
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
    earfcns: [524, 550],
    details: ["UMTS B1 5 MHz, LTE B1 10 MHz on EARFCN 550"],
  },
];

export default data;
