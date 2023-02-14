import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "?",
    ownerLongName: "Unallocated",
    startFreq: 925,
    endFreq: 935.1,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 880,
      endFreq: 890.1,
    },
  },
  {
    owner: "A1",
    ownerLongName: "A1 Srbija",
    startFreq: 935.1,
    endFreq: 939.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 890.1,
      endFreq: 894.3,
    },
    arfcns: "ARFCNs 1-21",
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "?",
    ownerLongName: "Unallocated",
    startFreq: 939.3,
    endFreq: 939.5,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 894.3,
      endFreq: 894.5,
    },
  },
  {
    owner: "mts",
    ownerLongName: "Telekom Srbija",
    startFreq: 939.5,
    endFreq: 944.5,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 894.5,
      endFreq: 899.5,
    },
    arfcns: "ARFCNs 23-47",
    uarfcns: [3010],
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "mts",
    ownerLongName: "Telekom Srbija",
    startFreq: 944.5,
    endFreq: 949.1,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 899.5,
      endFreq: 904.1,
    },
    arfcns: "ARFCNs 48-70",
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "?",
    ownerLongName: "Unallocated",
    startFreq: 949.1,
    endFreq: 949.3,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 904.1,
      endFreq: 904.3,
    },
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Srbija",
    startFreq: 949.3,
    endFreq: 951.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 904.3,
      endFreq: 906.3,
    },
    arfcns: "ARFCNs 72-81",
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Srbija",
    startFreq: 951.3,
    endFreq: 956.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 906.3,
      endFreq: 911.3,
    },
    uarfcns: [3069],
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Srbija",
    startFreq: 956.3,
    endFreq: 958.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 911.3,
      endFreq: 913.9,
    },
    arfcns: "ARFCNs 107-119",
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "?",
    ownerLongName: "Unallocated",
    startFreq: 958.9,
    endFreq: 960,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 913.9,
      endFreq: 915,
    },
  },
];

export default data;
