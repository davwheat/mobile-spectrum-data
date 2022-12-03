import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 925,
    endFreq: 935,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880,
      endFreq: 890,
    },
  },
  {
    owner: "Telekom",
    startFreq: 935,
    endFreq: 947.5,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 890,
      endFreq: 902.5,
    },
    arfcns: ["ARFCNs 1-22 and others"],
    uarfcns: [3017],
  },
  {
    owner: "A1",
    startFreq: 947.5,
    endFreq: 960,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 902.5,
      endFreq: 915,
    },
    arfcns: ["ARFCNs 63-79 and 110-124"],
    uarfcns: [3059, 3079],
  },
];

export default data;
