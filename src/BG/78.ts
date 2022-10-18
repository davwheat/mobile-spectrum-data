import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unavailable",
    startFreq: 3400,
    endFreq: 3430,
    type: "generic",
  },
  {
    owner: "Unallocated",
    startFreq: 3430,
    endFreq: 3440,
    type: "generic",
  },
  {
    owner: "Yettel BG",
    startFreq: 3440,
    endFreq: 3460,
    type: "tdd",
  },
  {
    owner: "A1 BG",
    startFreq: 3460,
    endFreq: 3480,
    type: "tdd",
  },
  {
    owner: "Vivacom BG",
    startFreq: 3480,
    endFreq: 3500,
    type: "tdd",
  },
  {
    owner: "Yettel BG",
    startFreq: 3500,
    endFreq: 3600,
    type: "tdd",
    nrarfcns: [636576],
  },
  {
    owner: "A1 BG",
    startFreq: 3600,
    endFreq: 3700,
    type: "tdd",
    nrarfcns: [643296],
  },
  {
    owner: "Vivacom BG",
    startFreq: 3700,
    endFreq: 3800,
    type: "tdd",
    nrarfcns: [649920],
  },
];

export default data;
