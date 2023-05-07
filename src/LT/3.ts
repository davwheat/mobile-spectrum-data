import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["20 MHz Nationwide"],
    earfcns: [1348],
    endFreq: 1830,
    owner: "Telia LT",
    ownerLongName: "AB Telia Lietuva",
    pairedWith: {
      endFreq: 1735,
      startFreq: 1710,
      type: "fddUp",
    },
    startFreq: 1805,
    type: "fddDown",
  },
  {
    endFreq: 1855,
    owner: "Tele2 LT",
    ownerLongName: "UAB Tele2 Lietuva",
    pairedWith: {
      endFreq: 1760,
      startFreq: 1735,
      type: "fddUp",
    },
    startFreq: 1830,
    type: "fddDown",
  },
  {
    endFreq: 1880,
    owner: "Bite LT",
    ownerLongName: "UAB Bite Lietuva",
    pairedWith: {
      endFreq: 1785,
      startFreq: 1760,
      type: "fddUp",
    },
    startFreq: 1855,
    type: "fddDown",
  },
];

export default data;
