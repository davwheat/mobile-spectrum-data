import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "Split into 4 different carriers",
      "n40 40 MHz for 5G; sometimes 20 MHz",
      "B40 20+20+15 for 4G",
    ],
    earfcns: [39139, 38770, 38968],
    endFreq: 2400,
    nrarfcns: [473290, 470170],
    owner: "Optus",
    ownerLongName: "Singtel Optus",
    sourceInfo: {
      type: "url",
      url: "https://web.acma.gov.au",
    },
    startFreq: 2302,
    type: "tdd",
  },
];

export default data;
