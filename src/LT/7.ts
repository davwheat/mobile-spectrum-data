import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 2640,
    owner: "Tele2 LT",
    ownerLongName: "UAB Tele2 Lietuva",
    pairedWith: {
      endFreq: 2520,
      startFreq: 2500,
      type: "fddUp",
    },
    startFreq: 2620,
    type: "fddDown",
  },
  {
    endFreq: 2660,
    owner: "Telia LT",
    ownerLongName: "AB Telia LT",
    pairedWith: {
      endFreq: 2540,
      startFreq: 2520,
      type: "fddUp",
    },
    startFreq: 2640,
    type: "fddDown",
  },
  {
    endFreq: 2690,
    owner: "Bite LT",
    ownerLongName: "UAB Bite Lietuva",
    pairedWith: {
      endFreq: 2570,
      startFreq: 2540,
      type: "fddUp",
    },
    startFreq: 2660,
    type: "fddDown",
  },
];

export default data;
