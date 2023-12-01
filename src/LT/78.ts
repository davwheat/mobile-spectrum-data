import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 3300,
    endFreq: 3400,
    type: "tdd",
  },
  {
    endFreq: 3500,
    owner: "Tele2 LT",
    ownerLongName: "UAB Tele2 Lietuva",
    startFreq: 3400,
    type: "tdd",
  },
  {
    endFreq: 3600,
    nrarfcns: [634080],
    owner: "Telia LT",
    ownerLongName: "AB Telia Lietuva",
    startFreq: 3500,
    type: "tdd",
  },
  {
    endFreq: 3700,
    owner: "Bite LT",
    ownerLongName: "UAB Bite Lietuva",
    startFreq: 3600,
    type: "tdd",
  },
  {
    endFreq: 3800,
    owner: "Ministry of Defence",
    ownerLongName: "Radijo Rysio Tarnyba",
    startFreq: 3700,
    type: "tdd",
  },
];

export default data;
