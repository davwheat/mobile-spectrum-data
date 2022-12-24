import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Eir",
    ownerLongName: "Eircom Limited",
    startFreq: 925,
    endFreq: 935,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880,
      endFreq: 890,
    },
    arfcns: "ARFCNs 975 - 998",
    uarfcns: [2962],
  },
  {
    owner: "Three",
    ownerLongName: "Three Ireland",
    startFreq: 935,
    endFreq: 945,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 890,
      endFreq: 900,
    },
    arfcns: "ARFCNs 26 - 49",
    uarfcns: [2988],
    details: "2G operates only on O2 IE's PLMN (272 02)",
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ireland",
    startFreq: 945,
    endFreq: 955,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 900,
      endFreq: 910,
    },
    arfcns: "ARFCNs 51 - 74",
    uarfcns: [3063],
  },
  {
    owner: "Three",
    ownerLongName: "Three Ireland",
    startFreq: 955,
    endFreq: 960,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 910,
      endFreq: 915,
    },
    arfcns: "ARFCNs 101 - 124",
    uarfcns: [3088],
    details: "2G operates only on O2 IE's PLMN (272 02)",
  },
];

export default data;
