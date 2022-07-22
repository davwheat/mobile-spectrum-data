import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "O2",
    startFreq: 925,
    endFreq: 935,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880,
      endFreq: 890,
    },
    earfcns: [3500],
    details: ["Used for 5 MHz LTE and GSM."],
  },
  {
    owner: "Vodafone",
    startFreq: 935,
    endFreq: 945,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 890,
      endFreq: 900,
    },
    earfcns: [3600],
    details: ["Used for 5 MHz LTE and GSM."],
  },
  {
    owner: "Telekom",
    startFreq: 945,
    endFreq: 960,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 900,
      endFreq: 915,
    },
    earfcns: [3749],
    details: ["Used for 5 MHz LTE and 10 MHz GSM."],
  },
];

export default data;
