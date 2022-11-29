import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 758,
    endFreq: 768,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 703,
      endFreq: 713,
    },
    earfcns: [9260],
    nrarfcns: [152210, 152690],
    details: [
      "Limited LTE use, primarily in central London",
      "Mainly being used for new suburban 5G NR deployments",
    ],
  },
  {
    owner: "Three",
    startFreq: 768,
    endFreq: 778,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 713,
      endFreq: 723,
    },
    earfcns: [9360],
    nrarfcns: [154570],
    details: ["Limited n28 DSS deployment"],
  },
  {
    owner: "EE",
    startFreq: 778,
    endFreq: 788,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 723,
      endFreq: 733,
    },
    nrarfcns: [156510],
  },
];

export default data;
