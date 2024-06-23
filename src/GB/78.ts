import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 3410,
    owner: "MoD",
    ownerLongName: "Ministry of Defence",
    startFreq: 3400,
    type: "generic",
  },
  {
    endFreq: 3460,
    nrarfcns: [627648, 627932, 628032, 628320, 628588, 629332],
    owner: "VF",
    ownerLongName: "Vodafone UK",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0016/114271/SA-3.4-GHz-LICENCE-Vodafone-1151573-16-11-22.pdf",
    },
    startFreq: 3410,
    type: "tdd",
  },
  {
    details: [
      "Second half inherited from UK Broadband aquisition",
      "This 40 MHz now being used for NR CA alongside Three's 100 MHz spectrum",
    ],
    endFreq: 3500,
    nrarfcns: [631392, 632666],
    owner: "Three",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/manage-your-licence/radiocommunication-licences/mobile-wireless-broadband/below-5ghz",
    },
    startFreq: 3460,
    type: "tdd",
  },
  {
    endFreq: 3540,
    nrarfcns: [633696, 634080, 634366, 634656, 634666],
    owner: "O2",
    ownerLongName: "O2 UK",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0015/114270/SA-3.4-GHz-LICENCE-Telefonica-1257246.pdf",
    },
    startFreq: 3500,
    type: "tdd",
  },
  {
    endFreq: 3580,
    nrarfcns: [636334, 636344, 636384, 636960, 637334],
    owner: "EE",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0022/114268/SA-3.4-GHz-LICENCE-EE-1151563.pdf",
    },
    startFreq: 3540,
    type: "tdd",
  },
  {
    endFreq: 3680,
    nrarfcns: [640548, 641376],
    owner: "Three",
    ownerLongName: "Three (license inherited from UK Broadband)",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/manage-your-licence/radiocommunication-licences/mobile-wireless-broadband/below-5ghz#table62973",
    },
    startFreq: 3580,
    type: "tdd",
  },
  {
    endFreq: 3720,
    nrarfcns: [646272, 646656],
    owner: "EE",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0026/221966/SA-3.6-GHz-LICENCE-EE-1248066.pdf",
    },
    startFreq: 3680,
    type: "tdd",
  },
  {
    details: ["Unused pending spectrum swap"],
    endFreq: 3760,
    owner: "VF",
    ownerLongName: "Vodafone UK",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0022/221755/SA-3.6-GHz-LICENCE-Vodafone-1257250.pdf",
    },
    startFreq: 3720,
    type: "tdd",
  },
  {
    details: ["Unused pending spectrum swap"],
    endFreq: 3800,
    owner: "O2",
    ownerLongName: "O2 UK",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0020/221960/SA-3.6-GHz-LICENCE-Telefonica-1248095.pdf",
    },
    startFreq: 3760,
    type: "tdd",
  },
];

export default data;
