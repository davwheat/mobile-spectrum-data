import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Romania",
    startFreq: 1805,
    endFreq: 1835,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1740,
    },
    arfcns: "very uncommon - ARFCNs 512 to 535",
    earfcns: [1256, 1283, 1400],
    details: [
      "Primary B3 carrier 20 MHz - 1400",
      "Secondary B3 carrier in a contiguous configuration - usually 10 MHz on 1256, rarely 5 MHz on 1283 with 5 MHz 2G",
    ],
  },
  {
    owner: "Orange",
    ownerLongName: "Orange Romania",
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
    ownerLongName: "Telekom Romania",
    startFreq: 1855,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1760,
      endFreq: 1785,
    },
    arfcns: ["ARFCNs 761, 762, 763 and 859 to 885"],
    earfcns: [1798],
    details: [
      "LTE presents as 20 MHz but uses less resource blocks (about 19 MHz in use as 4G)",
      "2G with no BCCH except on metro lines and cells with no low-band",
    ],
  },
];

export default data;
