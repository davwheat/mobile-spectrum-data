import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Three",
    ownerLongName: "Three Ireland",
    startFreq: 1805,
    endFreq: 1820,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710,
      endFreq: 1725,
    },
    earfcns: [1275],
    nrarfcns: [362170],
    details: "LTE or NR, no DSS",
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ireland",
    startFreq: 1820,
    endFreq: 1845,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1725,
      endFreq: 1750,
    },
    arfcns: "ARFCNs 687 - 710",
    earfcns: [1450, 1575],
  },
  {
    owner: "Three",
    ownerLongName: "Three Ireland",
    startFreq: 1845,
    endFreq: 1865,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1750,
      endFreq: 1770,
    },
    earfcns: [1700],
  },
  {
    owner: "Eir",
    ownerLongName: "Eircom Limited",
    startFreq: 1865,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1770,
      endFreq: 1785,
    },
    details: "LTE/NR DSS",
    earfcns: [1875],
  },
];

export default data;
