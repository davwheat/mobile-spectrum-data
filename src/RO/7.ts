import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Telekom",
    ownerLongName: "Telekom Romania",
    startFreq: 2620,
    endFreq: 2630,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2500,
      endFreq: 2510,
    },
    details: "Not deployed anywhere",
  },
  {
    owner: "Orange",
    ownerLongName: "Orange Romania",
    startFreq: 2630,
    endFreq: 2650,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2510,
      endFreq: 2530,
    },
    earfcns: [2950],
  },
  {
    owner: "Digi",
    ownerLongName: "RCS & RDS",
    startFreq: 2650,
    endFreq: 2670,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2530,
      endFreq: 2550,
    },
    earfcns: [3150],
    details: "Primary B7 carrier",
  },
  {
    owner: "Digi",
    ownerLongName: "RCS & RDS",
    startFreq: 2670,
    endFreq: 2690,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 2550,
      endFreq: 2570,
    },
    earfcns: [3348],
    details: "Secondary B7 carrier",
  },
];

export default data;
