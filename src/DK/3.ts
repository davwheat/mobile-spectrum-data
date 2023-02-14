import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "TDC",
    startFreq: 1805,
    endFreq: 1825,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1730,
    },
    earfcns: [1300],
  },
  {
    owner: "3 DK",
    startFreq: 1825,
    endFreq: 1855,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1730,
      endFreq: 1760,
    },
    earfcns: [1500, 1644],
  },
  {
    owner: "TT",
    startFreq: 1855,
    endFreq: 1860,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1760,
      endFreq: 1765,
    },
    arfcns: "ARFCNs 762 - 773",
    nrarfcns: [371570],
  },
  {
    owner: "TT",
    startFreq: 1860,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1765,
      endFreq: 1785,
    },
    earfcns: [1850],
  },
];

export default data;
