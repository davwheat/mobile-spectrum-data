import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone DE",
    startFreq: 2110,
    endFreq: 2130,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920,
      endFreq: 1940,
    },
    earfcns: [100],
  },
  {
    owner: "O2",
    ownerLongName: "O2 DE",
    startFreq: 2130,
    endFreq: 2150,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1940,
      endFreq: 1960,
    },
    earfcns: [300],
  },
  {
    owner: "Telekom",
    ownerLongName: "Telekom DE",
    startFreq: 2150,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1960,
      endFreq: 1980,
    },
    earfcns: [500],
    nrarfcns: [431070],
    details: ["LTE/NR DSS"],
  },
];

export default data;
