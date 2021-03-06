import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    startFreq: 925.1,
    endFreq: 930.1,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880.1,
      endFreq: 885.1,
    },
    arfcns: "uncommon - ARFCNs 975, 976, ...",
    uarfcns: [2938],
  },
  {
    owner: "O2",
    startFreq: 930.1,
    endFreq: 935.1,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 885.1,
      endFreq: 890.1,
    },
    arfcns: "uncommon",
    uarfcns: [2963],
    details: ["Standard 3G 900 MHz band"],
  },
  {
    owner: "VF",
    startFreq: 935.1,
    endFreq: 937.5,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 890.1,
      endFreq: 892.5,
    },
    arfcns: "ARFCNs 1-12",
    details: [
      "Standard 2G 900 MHz band",
      "Some 4G deployments overlap into this spectrum, such as EARFCN 3610",
    ],
  },
  {
    owner: "Vodafone",
    startFreq: 937.5,
    endFreq: 947.5,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 892.5,
      endFreq: 902.5,
    },
    arfcns: "uncommon - ARFCNs around 60",
    uarfcns: [3012],
    earfcns: [3610, 3620, 3623, 3624, 3625],
    nrarfcns: [188450],
    details: [
      "2G/3G is being refarmed into 4G, with 3G moving to the lower 5 MHz block and 2G to the 2.4 MHz block",
      "Many different 4G EARFCNs to cover the same spectrum",
      "Also now being used for Vodafone's private 5G SA network",
    ],
  },
  {
    owner: "O2",
    startFreq: 947.5,
    endFreq: 957.5,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 902.5,
      endFreq: 912.5,
    },
    uarfcns: [3050],
    earfcns: [3725],
    details: [
      "3G is being refarmed into 4G, with 3G moving to the lower 5 MHz block",
      "Many different 4G EARFCNs to cover the same spectrum",
    ],
  },
  {
    owner: "O2",
    startFreq: 957.5,
    endFreq: 959.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 912.5,
      endFreq: 914.9,
    },
    arfcns: "ARFCNs 113-124",
    details: ["Standard 2G 900 MHz band"],
  },
];

export default data;
