import { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "O2",
    startFreq: 1805.1,
    endFreq: 1810.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1704.3,
      endFreq: 1710.1,
    },
    earfcns: [1226, 1228],
  },
  {
    owner: "VF",
    startFreq: 1810.9,
    endFreq: 1816.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710.1,
      endFreq: 1715.9,
    },
    arfcns: "very uncommon - ARFCNs 541 to 569",
    earfcns: [1288],
  },
  {
    owner: "Three",
    startFreq: 1816.7,
    endFreq: 1831.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1715.9,
      endFreq: 1730.9,
    },
    earfcns: [1392],
  },
  {
    owner: "EE",
    startFreq: 1831.7,
    endFreq: 1836.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1730.9,
      endFreq: 1735.9,
    },
    arfcns: "ARFCNs 645-669",
  },
  {
    owner: "EE",
    startFreq: 1836.7,
    endFreq: 1856.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1735.9,
      endFreq: 1755.9,
    },
    earfcns: [1617],
  },
  {
    owner: "EE",
    startFreq: 1856.7,
    endFreq: 1866.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1755.9,
      endFreq: 1765.9,
    },
    earfcns: [1761, 1815],
    nrarfcns: [],
    details: [
      "EARFCN 1815 split across this and next block.",
      "Used in conjuction with the next spectrum block for rural n3 20 MHz deployment.",
    ],
  },
  {
    owner: "EE",
    startFreq: 1866.7,
    endFreq: 1876.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1765.9,
      endFreq: 1775.9,
    },
    earfcns: [1815],
    nrarfcns: [374190, 374210, 374280],
    details: [
      "EARFCN 1815 split across this and previous block.",
      "Used on its own for EE's n3 10 MHz deployment, or in conjuction with the previous block for rural n3 20 MHz deployment.",
    ],
  },
];

export default data;
