import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    startFreq: 3300,
    endFreq: 3390,
    type: "tdd",
    nrarfcns: [628800, 629952, 631968],
  },
  {
    owner: "1&1",
    startFreq: 3390,
    endFreq: 3440,
    type: "tdd",
    nrarfcns: [633312],
  },
  {
    owner: "O2",
    startFreq: 3440,
    endFreq: 3510,
    type: "tdd",
    nrarfcns: [638304],
  },
  {
    owner: "Telekom",
    startFreq: 3510,
    endFreq: 3600,
    type: "tdd",
    nrarfcns: [641760],
  },
  {
    owner: "Regional licenses",
    startFreq: 3600,
    endFreq: 3700,
    type: "tdd",
  },
];

export default data;
