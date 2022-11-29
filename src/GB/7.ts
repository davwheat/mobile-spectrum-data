import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone UK",
    startFreq: 2620,
    endFreq: 2640,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2500,
      endFreq: 2520,
    },
    earfcns: [2850],
  },
  {
    owner: "EE",
    startFreq: 2640,
    endFreq: 2655,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2520,
      endFreq: 2535,
    },
    earfcns: [3029, 3026],
    nrarfcns: [529490],
    details: [
      "Tertiary B7 carrier, accessed via BT's ownership of EE",
      "3026 used for EE B7 on small cells.",
      "In use for initial EE n7 deployment at 15 MHz, to increase to 30 MHz then 50 MHz in the future.",
    ],
  },
  {
    owner: "EE",
    startFreq: 2655,
    endFreq: 2670,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2535,
      endFreq: 2550,
    },
    earfcns: [3179],
    details: "Secondary B7 carrier",
  },
  {
    owner: "EE",
    startFreq: 2670,
    endFreq: 2690,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2550,
      endFreq: 2570,
    },
    earfcns: [3350],
    details: "Primary B7 carrier",
  },
];

export default data;
