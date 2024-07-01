import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "Split into three different carriers, with 2 MHz overlap.",
      "n40 60 MHz for 5G",
      "B40 20+20 for 4G",
    ],
    earfcns: [38770, 38968],
    endFreq: 2400,
    nrarfcns: [473290],
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
