import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "A1",
    startFreq: 2110,
    endFreq: 2140,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920,
      endFreq: 1950,
    },
    earfcns: [150, 200],
    details: ["LTE 20 MHz"],
  },
  {
    owner: "Telekom",
    startFreq: 2140,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1950,
      endFreq: 1980,
    },
    earfcns: [356, 500],
    nrarfcns: [430830],
    details: [
      "10 MHz on EARFCN 356 - LTE",
      "20 MHz on EARFCN 500 - LTE/NR DSS",
    ],
  },
];

export default data;
