import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "MoD",
    ownerLongName: "Ministry of Defence",
    startFreq: 3400,
    endFreq: 3410,
    type: "generic",
  },
  {
    owner: "VF",
    startFreq: 3410,
    endFreq: 3460,
    type: "tdd",
    nrarfcns: [627648, 627932, 628032, 628320, 628588, 629332],
  },
  {
    owner: "Three",
    startFreq: 3460,
    endFreq: 3500,
    type: "tdd",
    nrarfcns: [631392, 632666],
    details: [
      "Second half inherited from UK Broadband aquisition",
      "This 40 MHz now being used for NR CA trials alongside Three's 100 MHz spectrum",
    ],
  },
  {
    owner: "O2",
    startFreq: 3500,
    endFreq: 3540,
    type: "tdd",
    nrarfcns: [633696, 634366, 634656, 634666],
  },
  {
    owner: "EE",
    startFreq: 3540,
    endFreq: 3580,
    type: "tdd",
    nrarfcns: [636334, 636344, 636384, 636960],
  },
  {
    owner: "Three",
    ownerLongName: "Three (license inherited from UK Broadband)",
    startFreq: 3580,
    endFreq: 3680,
    type: "tdd",
    nrarfcns: [640548, 641376],
  },
  {
    owner: "EE",
    startFreq: 3680,
    endFreq: 3720,
    type: "tdd",
    nrarfcns: [646272, 646656],
  },
  {
    owner: "VF",
    startFreq: 3720,
    endFreq: 3760,
    type: "tdd",
    details: ["Unused pending spectrum swap"],
  },
  {
    owner: "O2",
    startFreq: 3760,
    endFreq: 3800,
    type: "tdd",
    details: ["Unused pending spectrum swap"],
  },
];

export default data;
