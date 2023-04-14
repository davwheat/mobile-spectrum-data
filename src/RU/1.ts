import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [],
    earfcns: [75, 100, 125],
    endFreq: 2125,
    owner: "Tele2",
    pairedWith: {
      endFreq: 1935,
      startFreq: 1920,
      type: "fddUp",
    },
    startFreq: 2110,
    type: "fddDown",
    uarfcns: [10563, 10587, 10612],
  },
  {
    details: [],
    earfcns: [200, 225],
    endFreq: 2140,
    owner: "MegaFon",
    pairedWith: {
      endFreq: 1950,
      startFreq: 1935,
      type: "fddUp",
    },
    startFreq: 2125,
    type: "fddDown",
    uarfcns: [10638, 10662, 10687],
  },
  {
    earfcns: [350, 375, 400],
    endFreq: 2155,
    owner: "MTS",
    pairedWith: {
      endFreq: 1965,
      startFreq: 1950,
      type: "fddUp",
    },
    startFreq: 2140,
    type: "fddDown",
    uarfcns: [10713, 10714, 10738, 10762],
  },
  {
    details: [],
    earfcns: [550, 525],
    endFreq: 2170,
    owner: "Beeline",
    pairedWith: {
      endFreq: 1980,
      startFreq: 1965,
      type: "fddUp",
    },
    startFreq: 2155,
    type: "fddDown",
    uarfcns: [10788, 10813, 10836],
  },
];

export default data;
