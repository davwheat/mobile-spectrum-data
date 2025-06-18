import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "VF/O2",
    ownerLongName: "Vodafone UK / O2 UK",
    startFreq: 2570,
    endFreq: 2595,
    type: "tdd",
    details: [],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/spectrum/frequencies/trades",
    },
  },
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 2595,
    endFreq: 2615,
    type: "tdd",
    earfcns: [38100, 38125],
    nrarfcns: [521090],
    details: [
      "LTE on 38100/NR on 521090 uses full 20 MHz spectrum and is used for B38 small cells",
      "38125 is 15 MHz, skipping the first 5 MHz of this block, primarily used for initial deployments in Northern Ireland",
    ],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0019/206920/SA-2.6-LICENCE-Telefonica-1238565.pdf",
    },
  },
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 2615,
    endFreq: 2620,
    type: "tdd",
    details: ["Unused TDD spectrum"],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0019/206920/SA-2.6-LICENCE-Telefonica-1238565.pdf",
    },
  },
];

export default data;
