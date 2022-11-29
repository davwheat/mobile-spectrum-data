import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone DE",
    startFreq: 3400,
    endFreq: 3490,
    type: "tdd",
    nrarfcns: [628800, 629952, 631968],
    details: "3400-3410 MHz only for indoor use",
  },
  {
    owner: "1&1",
    startFreq: 3490,
    endFreq: 3540,
    type: "tdd",
    nrarfcns: [633312],
  },
  {
    owner: "O2",
    ownerLongName: "O2 DE",
    startFreq: 3540,
    endFreq: 3610,
    type: "tdd",
    nrarfcns: [638304],
  },
  {
    owner: "Telekom",
    ownerLongName: "Telekom DE",
    startFreq: 3610,
    endFreq: 3700,
    type: "tdd",
    nrarfcns: [641760],
  },
  {
    owner: "Regional licenses",
    startFreq: 3700,
    endFreq: 3800,
    type: "tdd",
  },
];

export default data;
