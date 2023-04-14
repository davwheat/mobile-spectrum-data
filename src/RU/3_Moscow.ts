import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [],
    earfcns: [1301],
    endFreq: 1825.2,
    owner: "Beeline",
    pairedWith: {
      endFreq: 1730.2,
      startFreq: 1710,
      type: "fddUp",
    },
    startFreq: 1805,
    type: "fddDown",
  },
  {
    details: [],
    earfcns: [1602, 1458],
    endFreq: 1855.2,
    owner: "MegaFon",
    pairedWith: {
      endFreq: 1760.2,
      startFreq: 1730.2,
      type: "fddUp",
    },
    startFreq: 1825.2,
    type: "fddDown",
  },
  {
    details: [],
    earfcns: [1802, 1919],
    endFreq: 1880,
    owner: "MTS",
    pairedWith: {
      endFreq: 1785,
      startFreq: 1760.2,
      type: "fddUp",
    },
    startFreq: 1855.2,
    type: "fddDown",
  },
];

export default data;
