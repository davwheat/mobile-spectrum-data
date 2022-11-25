import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    startFreq: 1805,
    endFreq: 1815,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1720,
    },
    arfcns: "very uncommon - ARFCNs 512 to 535",
    earfcns: [1256, 1283],
    details: [
      "Secondary B3 carrier in a contiguous configuration.",
      "Usually 10 MHz, rarely 5 MHz with 5 MHz 2G."
    ]
    },
  {
    owner: "Vodafone",
    startFreq: 1815,
    endFreq: 1835,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1720,
      endFreq: 1740,
    },
    earfcns: [1400],
    details: "Primary B3 carrier"
  },
  {
    owner: "Orange",
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
    owner: "Telekom",
    startFreq: 1855,
    endFreq: 1855.6,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1760,
      endFreq: 1760.6,
    },
    arfcns: [761, 762, 763],
    details: [
      "2G with no BCCH except on metro lines and some indoor cells",
    ]
  },
  {
    owner: "Telekom",
    startFreq: 1855.6,
    endFreq: 1874.6,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1760.6,
      endFreq: 1779.6,
    },
    earfcns: [1798],
    details: [
      "LTE presents as 20 MHz but uses less resource blocks",
    ]
  },
  {
    owner: "Telekom",
    startFreq: 1874.6,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1779.6,
      endFreq: 1785,
    },
    arfcns: "ARFCNs 859 to 885",
    details: "2G with no BCCH except on metro lines and some indoor cells",
  },
];

export default data;
