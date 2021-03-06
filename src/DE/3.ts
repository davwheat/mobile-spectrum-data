import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Telekom",
    startFreq: 1805,
    endFreq: 1835,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1740,
    },
    earfcns: [1300, 1444],
  },
  {
    owner: "O2",
    startFreq: 1835,
    endFreq: 1855,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1740,
      endFreq: 1760,
    },
    earfcns: [1600],
  },
  {
    owner: "Vodafone",
    startFreq: 1855,
    endFreq: 1875,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1760,
      endFreq: 1780,
    },
    earfcns: [1801],
  },
  {
    owner: "Vodafone",
    startFreq: 1875,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1780,
      endFreq: 1785,
    },
  },
];

export default data;
