import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["15 MHz Deployed"],
    endFreq: 1940.1,
    owner: "Bite LT",
    ownerLongName: "UAB Bite Lietuva",
    pairedWith: {
      endFreq: 2130.1,
      startFreq: 2110.3,
      type: "fddUp",
    },
    startFreq: 1920.3,
    type: "fddDown",
  },
  {
    details: ["20 MHz Nationwide"],
    earfcns: [300],
    endFreq: 1959.9,
    owner: "Telia LT",
    ownerLongName: "AB Telia Lietuva",
    pairedWith: {
      endFreq: 2149.9,
      startFreq: 2130.1,
      type: "fddUp",
    },
    startFreq: 1940.1,
    type: "fddDown",
  },
  {
    endFreq: 1979.7,
    owner: "Tele2 LT",
    ownerLongName: "UAB Tele2 Lietuva",
    pairedWith: {
      endFreq: 2169.7,
      startFreq: 2149.9,
      type: "fddUp",
    },
    startFreq: 1959.9,
    type: "fddDown",
  },
];

export default data;
