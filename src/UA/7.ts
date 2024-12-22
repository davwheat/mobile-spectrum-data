import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 2620,
    endFreq: 2630,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2500,
      endFreq: 2510,
    },
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ukraine",
    startFreq: 2630,
    endFreq: 2640,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2510,
      endFreq: 2520,
    },
    earfcns: [2900, 2950],
    details: [
      "Standard B7 10 MHz deployment on EARFCN 2900",
      "Some areas have B7 20 MHz on EARFCN 2950",
    ],
  },
  {
    owner: "Kyivstar",
    startFreq: 2640,
    endFreq: 2655,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2520,
      endFreq: 2535,
    },
    earfcns: [3000, 3025],
    details: [
      "Standard B7 15 MHz deployment on EARFCN 3025",
      "Some areas have B7 20 MHz on EARFCN 3000",
    ],
  },
  {
    owner: "lifecell",
    startFreq: 2655,
    endFreq: 2665,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2535,
      endFreq: 2545,
    },
    earfcns: [3150],
    details: ["Standard B7 10 MHz - carrier 1"],
  },
  {
    owner: "Unallocated",
    startFreq: 2665,
    endFreq: 2685,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2545,
      endFreq: 2565,
    },
  },
  {
    owner: "lifecell",
    startFreq: 2685,
    endFreq: 2690,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2565,
      endFreq: 2570,
    },
    earfcns: [3425],
    details: ["Standard B7 5 MHz - carrier 2"],
  },
];

export default data;
