import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    pairedWith: {
      startFreq: 1920,
      endFreq: 1920.3,
      type: "fddUp",
    },
    startFreq: 2110,
    endFreq: 2110.3,
    type: "fddDown",
  },
  {
    details: ["15 MHz Deployed"],
    owner: "Bite LT",
    ownerLongName: "UAB Bite Lietuva",
    pairedWith: {
      type: "fddUp",
      endFreq: 1940.1,
      startFreq: 1920.3,
    },
    endFreq: 2130.1,
    startFreq: 2110.3,
    type: "fddDown",
  },
  {
    details: ["20 MHz Nationwide"],
    earfcns: [300],
    owner: "Telia LT",
    ownerLongName: "AB Telia Lietuva",
    pairedWith: {
      endFreq: 1959.9,
      startFreq: 1940.1,
      type: "fddUp",
    },
    endFreq: 2149.9,
    startFreq: 2130.1,
    type: "fddDown",
  },
  {
    owner: "Tele2 LT",
    ownerLongName: "UAB Tele2 Lietuva",
    pairedWith: {
      endFreq: 1979.7,
      startFreq: 1959.9,
      type: "fddUp",
    },
    endFreq: 2169.7,
    startFreq: 2149.9,
    type: "fddDown",
  },
  {
    owner: "Unallocated",
    pairedWith: {
      startFreq: 1979.7,
      endFreq: 1980,
      type: "fddUp",
    },
    startFreq: 2169.7,
    endFreq: 2170,
    type: "fddDown",
  },
];

export default data;
