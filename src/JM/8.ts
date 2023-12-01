import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    pairedWith: {
      endFreq: 897,
      startFreq: 880,
      type: "fddUp",
    },
    startFreq: 925,
    endFreq: 942,
    type: "fddDown",
  },
  {
    arfcns: ["35-60"],
    endFreq: 947,
    owner: "Digicel",
    ownerLongName: "Digicel Jamaica Ltd.",
    pairedWith: {
      endFreq: 902,
      startFreq: 897,
      type: "fddUp",
    },
    startFreq: 942,
    type: "fddDown",
  },
  {
    owner: "Unallocated",
    pairedWith: {
      endFreq: 915,
      startFreq: 902,
      type: "fddUp",
    },
    startFreq: 947,
    endFreq: 960,
    type: "fddDown",
  },
];

export default data;
