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
    owner: "Yettel",
    ownerLongName: "Yettel Bulgaria",
    startFreq: 3440,
    endFreq: 3460,
    type: "tdd",
    nrarfcns: [629988],
  },
  {
    owner: "A1",
    ownerLongName: "A1 Bulgaria",
    startFreq: 3460,
    endFreq: 3480,
    type: "tdd",
    nrarfcns: [631392],
  },
  {
    owner: "Vivacom",
    ownerLongName: "Vivacom Bulgaria",
    startFreq: 3480,
    endFreq: 3500,
    type: "tdd",
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Bulgaria",
    startFreq: 3500,
    endFreq: 3600,
    type: "tdd",
    nrarfcns: [636576],
  },
  {
    owner: "A1",
    ownerLongName: "A1 Bulgaria",
    startFreq: 3600,
    endFreq: 3700,
    type: "tdd",
    nrarfcns: [643296],
  },
  {
    owner: "Vivacom",
    ownerLongName: "Vivacom Bulgaria",
    startFreq: 3700,
    endFreq: 3800,
    type: "tdd",
    nrarfcns: [649920],
  },
];

export default data;
