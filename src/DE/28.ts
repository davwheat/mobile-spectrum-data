import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "O2",
    ownerLongName: "O2 DE",
    startFreq: 758,
    endFreq: 768,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 703,
      endFreq: 713,
    },
    earfcns: [9260],
    nrarfcns: [152690],
    details: ["LTE or NR, no DSS"],
  },
  {
    owner: "Telekom",
    ownerLongName: "Telekom DE",
    startFreq: 768,
    endFreq: 778,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 713,
      endFreq: 723,
    },
    nrarfcns: [154570],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone DE",
    startFreq: 778,
    endFreq: 788,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 723,
      endFreq: 733,
    },
    earfcns: [9460],
    nrarfcns: [156510],
    details: ["LTE/NR DSS"],
  },
];

export default data;
