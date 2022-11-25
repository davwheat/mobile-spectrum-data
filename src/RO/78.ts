import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 3400,
    endFreq: 3490,
    type: "generic",
  },
  {
    owner: "VF",
    startFreq: 3490,
    endFreq: 3530,
    type: "tdd",
    nrarfcns: [634000],
  },
  {
    owner: "Orange",
    ownerLongName: "Orange Romania",
    startFreq: 3530,
    endFreq: 3645,
    type: "tdd",
    nrarfcns: [636096, 639648, 639660],
    details: [
      "Huawei n78 100MHz on 639660 or 639648",
      "Ericsson n78 both 100MHz and 80MHz on 636096",
    ],
  },
  {
    owner: "Unallocated",
    startFreq: 3645,
    endFreq: 3700,
    type: "generic",
  },
  {
    owner: "Digi",
    ownerLongName: "RCS & RDS",
    startFreq: 3700,
    endFreq: 3750,
    type: "tdd",
    nrarfcns: [648334],
  },
  {
    owner: "SNR Radiocom",
    startFreq: 3750,
    endFreq: 3800,
    type: "generic",
  },
];

export default data;
