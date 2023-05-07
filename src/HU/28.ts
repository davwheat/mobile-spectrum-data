import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 758,
    endFreq: 763,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 703,
      endFreq: 708,
    },
  },
  {
    owner: "Telekom",
    ownerLongName: "Magyar Telekom",
    startFreq: 763,
    endFreq: 773,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 708,
      endFreq: 718,
    },
    earfcns: [9310],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Hungary",
    startFreq: 773,
    endFreq: 783,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 718,
      endFreq: 728,
    },
    earfcns: [9410],
    nrarfcns: [155600],
    details: ["LTE/NR DSS"],
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Hungary",
    startFreq: 783,
    endFreq: 788,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 728,
      endFreq: 733,
    },
    earfcns: [9485],
  },
];

export default data;
