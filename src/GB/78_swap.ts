import type { SpectrumBlock } from "../@types";

import n78 from "./78";

const data: SpectrumBlock[] = [
  // Base list from main n78 dataset
  ...n78.filter(({ startFreq }) => {
    // Exclude blocks where swap is occurring
    return ![3500, 3720, 3760].includes(startFreq);
  }),
  {
    owner: "VF",
    startFreq: 3500,
    endFreq: 3540,
    type: "tdd",
    nrarfcns: [634080],
    details: ["Swapped spectrum with O2"],
  },
  {
    owner: "O2",
    startFreq: 3720,
    endFreq: 3800,
    type: "tdd",
    nrarfcns: [650592],
    details: [
      "New 80 MHz contiguous spectrum after spectrum swap with Vodafone",
      "For live deployment find, see: https://twitter.com/davwheat_/status/1545377169286860806",
    ],
  },
];

export default data;
