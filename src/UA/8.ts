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
    endFreq: 940,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 888.1,
      endFreq: 895,
    },
    arfcns: "ARFCNs 1015-1023, 0-24",
    earfcns: [3575],
    details: ["Nationwide LTE B8 5 MHz, 2G deployments"],
  },
  {
    owner: "lifecell",
    startFreq: 940,
    endFreq: 945,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 895,
      endFreq: 900,
    },
    arfcns: "ARFCNs 26-49",
    earfcns: [3615, 3625],
    details: [
      "LTE B8 3 MHz on 3615 with 2G deployments",
      "LTE B8 5 MHz on 3625",
    ],
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Ukraine",
    startFreq: 945,
    endFreq: 951.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 900,
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
