import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1",
    startFreq: 925.1,
    endFreq: 926.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880.1,
      endFreq: 881.9,
    },
    arfcns: "ARFCNs 975-983",
  },
  {
    owner: "?",
    ownerLongName: "Unallocated",
    startFreq: 926.9,
    endFreq: 927.1,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 881.9,
      endFreq: 882.1,
    },
  },
  {
    owner: "Yettel",
    startFreq: 927.1,
    endFreq: 928.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 882.1,
      endFreq: 883.9,
    },
    arfcns: "ARFCNs 985-993",
  },
  {
    owner: "?",
    ownerLongName: "Unallocated",
    startFreq: 928.9,
    endFreq: 929.1,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 883.9,
      endFreq: 884.1,
    },
  },
  {
    owner: "Vivacom",
    startFreq: 929.1,
    endFreq: 934.1,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 884.1,
      endFreq: 889.1,
    },
    earfcns: [3516],
  },
  {
    owner: "Vivacom",
    startFreq: 934.1,
    endFreq: 938.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 889.1,
      endFreq: 893.7,
    },
    uarfcns: [2981],
  },
  {
    owner: "Vivacom",
    startFreq: 938.7,
    endFreq: 940.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 893.7,
      endFreq: 895.3,
    },
    arfcns: "ARFCNs 19-26",
  },
  {
    owner: "?",
    ownerLongName: "Unallocated",
    startFreq: 940.3,
    endFreq: 940.7,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 895.3,
      endFreq: 895.7,
    },
  },
  {
    owner: "A1 BG",
    startFreq: 940.7,
    endFreq: 945.5,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 895.7,
      endFreq: 900.5,
    },
    uarfcns: [3016],
  },
  {
    owner: "A1 BG",
    startFreq: 945.5,
    endFreq: 950.1,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 900.5,
      endFreq: 905.1,
    },
    earfcns: [3678],
  },
  {
    owner: "?",
    ownerLongName: "Unallocated",
    startFreq: 950.1,
    endFreq: 950.5,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 905.1,
      endFreq: 905.5,
    },
  },
  {
    owner: "Yettel BG",
    startFreq: 950.5,
    endFreq: 955.5,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 905.5,
      endFreq: 910.5,
    },
    uarfcns: [3065],
  },
  {
    owner: "Yettel BG",
    startFreq: 955.5,
    endFreq: 959.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 910.5,
      endFreq: 914.9,
    },
    earfcns: [3774, 3780],
    arfcns: "ARFCNs 103-124",
    details: [
      "No B8 LTE in Sofia, most of the country has 3780 3 MHz, Varna has 3774 3 MHz. The rest of the spectrum is used for 2G.",
    ],
  },
];

export default data;
