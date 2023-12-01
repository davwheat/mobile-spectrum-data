import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    pairedWith: {
      startFreq: 880,
      endFreq: 880.1,
      type: "fddUp",
    },
    startFreq: 925,
    endFreq: 925.1,
    type: "fddDown",
  },
  {
    endFreq: 936.7,
    owner: "Bite LT",
    ownerLongName: "UAB Bite Lietuva",
    pairedWith: {
      endFreq: 891.7,
      startFreq: 880.1,
      type: "fddUp",
    },
    startFreq: 925.1,
    type: "fddDown",
  },
  {
    details: ["5 MHz Deployment Nationwide"],
    earfcns: [3616],
    endFreq: 948.3,
    owner: "Telia LT",
    ownerLongName: "AB Telia Lietuva",
    pairedWith: {
      endFreq: 903.3,
      startFreq: 891.7,
      type: "fddUp",
    },
    startFreq: 936.7,
    type: "fddDown",
  },
  {
    endFreq: 959.9,
    owner: "Tele2 LT",
    ownerLongName: "UAB Tele2 Lietuva",
    pairedWith: {
      endFreq: 914.9,
      startFreq: 903.3,
      type: "fddUp",
    },
    startFreq: 948.3,
    type: "fddDown",
  },
  {
    owner: "Unallocated",
    pairedWith: {
      startFreq: 914.9,
      endFreq: 915,
      type: "fddUp",
    },
    startFreq: 959.9,
    endFreq: 960,
    type: "fddDown",
  },
];

export default data;
