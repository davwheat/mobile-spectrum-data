import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 729,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 699,
      startFreq: 698,
      type: "fddUp",
    },
    startFreq: 728,
    type: "fddDown",
  },
  {
    earfcns: [5035],
    endFreq: 734,
    owner: "FLOW",
    ownerLongName: "Cable and Wireless Jamaica Ltd.",
    pairedWith: {
      endFreq: 704,
      startFreq: 699,
      type: "fddUp",
    },
    startFreq: 729,
    type: "fddDown",
  },
  {
    earfcns: [5120, 5790],
    endFreq: 744,
    owner: "Digicel",
    ownerLongName: "Digicel Jamaica Ltd.",
    pairedWith: {
      endFreq: 714,
      startFreq: 704,
      type: "fddUp",
    },
    startFreq: 734,
    type: "fddDown",
  },
  {
    endFreq: 746,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 716,
      startFreq: 714,
      type: "fddUp",
    },
    startFreq: 744,
    type: "fddDown",
  },
];

export default data;
