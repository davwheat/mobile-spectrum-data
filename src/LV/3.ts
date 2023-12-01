import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["1st Carrier at 20Mhz", "2nd Carrier at 5Mhz"],
    earfcns: [1300, 1417],
    endFreq: 1829.8,
    owner: "LMT",
    ownerLongName: "Latvijas Mobilais Telefons",
    pairedWith: {
      endFreq: 1734.8,
      startFreq: 1710,
      type: "fddUp",
    },
    startFreq: 1805,
    type: "fddDown",
  },
  {
    earfcns: [1574],
    endFreq: 1854.9,
    owner: "Tele2 LV",
    ownerLongName: "Tele2 Latvija",
    pairedWith: {
      endFreq: 1759.9,
      startFreq: 1734.8,
      type: "fddUp",
    },
    startFreq: 1829.8,
    type: "fddDown",
  },
  {
    earfcns: [1820],
    endFreq: 1880,
    owner: "Bite LV",
    ownerLongName: "Bite Latvija",
    pairedWith: {
      endFreq: 1785,
      startFreq: 1759.9,
      type: "fddUp",
    },
    startFreq: 1854.9,
    type: "fddDown",
  },
];

export default data;
