import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
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
    owner: "Telekom",
    ownerLongName: "Telekom Deutschland GmbH",
    startFreq: 2640,
    endFreq: 2660,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2520,
      endFreq: 2540,
    },
    earfcns: [3050],
  },
  {
    owner: "1&1",
    startFreq: 2660,
    endFreq: 2670,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2540,
      endFreq: 2550,
    },
    earfcns: [3200],
  },
  {
    owner: "O2",
    ownerLongName: "O2 DE",
    startFreq: 2670,
    endFreq: 2690,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2560,
      endFreq: 2550,
    },
    earfcns: [3350],
  },
];

export default data;
