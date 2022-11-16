import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "MoD/Regional",
    ownerLongName: "Ministry of Defense or regional allocation",
    startFreq: 925,
    endFreq: 933.1,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880,
      endFreq: 888.1,
    },
    arfcns: "ARFCNs 975-1014",
    details: ["Regional licences owned only by Kyivstar"],
  },
  {
    owner: "Kyivstar",
    startFreq: 933.1,
    endFreq: 939.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 888.1,
      endFreq: 894.9,
    },
    arfcns: "ARFCNs 1015-1023, 0-24",
    earfcns: [3575],
    details: ["Nationwide LTE B8 5 MHz, 2G deployments"],
  },
  {
    owner: "?",
    ownerLongName: "Unallocated",
    startFreq: 939.9,
    endFreq: 940.1,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 894.9,
      endFreq: 895.1,
    },
  },
  {
    owner: "lifecell",
    startFreq: 940.1,
    endFreq: 944.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 895.1,
      endFreq: 899.9,
    },
    arfcns: "ARFCNs 26-49",
    earfcns: [3615, 3625],
    details: ["LTE B8 3 MHz on 3615, LTE B8 5 MHz on 3625, 2G deployments"],
  },
  {
    owner: "?",
    ownerLongName: "Unallocated",
    startFreq: 944.9,
    endFreq: 945.1,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 899.9,
      endFreq: 900.1,
    },
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ukraine",
    startFreq: 945.1,
    endFreq: 951.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 900.1,
      endFreq: 906.3,
    },
    arfcns: "ARFCNs 51-81",
    earfcns: [3676],
    details: ["LTE B8 3 or 5 MHz, 2G deployments"],
  },
  {
    owner: "MoD/Regional",
    ownerLongName: "Ministry of Defense or regional allocation",
    startFreq: 951.3,
    endFreq: 960,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 906.3,
      endFreq: 915,
    },
    arfcns: "ARFCNs 82-124",
    details: [
      "Regional licences owned only by Vodafone, lifecell and Kyivstar",
    ],
  },
];

export default data;
