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
    owner: "VF",
    ownerLongName: "Vodafone UK",
    startFreq: 3500,
    endFreq: 3520,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/spectrum/frequencies/trades",
    },
  },
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 3520,
    endFreq: 3540,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/spectrum/frequencies/trades",
    },
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
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 3720,
    endFreq: 3800,
    type: "tdd",
    nrarfcns: [650592, 650976, 651360],
    details: [
      "New 80 MHz contiguous spectrum after spectrum swap with Vodafone",
      "For live deployment find, see: https://twitter.com/davwheat_/status/1545377169286860806",
    ],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/manage-your-licence/radiocommunication-licences/mobile-wireless-broadband/below-5ghz",
    },
  },
];

export default data;
