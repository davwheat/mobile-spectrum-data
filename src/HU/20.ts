import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Hungary",
    startFreq: 791,
    endFreq: 801,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 832,
      endFreq: 842,
    },
    earfcns: [6200],
  },
  {
    owner: "Telekom",
    ownerLongName: "Magyar Telekom",
    startFreq: 801,
    endFreq: 811,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 842,
      endFreq: 852,
    },
    earfcns: [6300, 6350],
    details: [
      "LTE B20 10 MHz on EARFCN 6300 in Budapest",
      "LTE B20 20 MHz on EARFCN 6350 in the rest of Hungary via MOCN with Yettel",
      "Telekom hosts B20 MOCN in Eastern Hungary",
    ],
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Hungary",
    startFreq: 811,
    endFreq: 821,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 852,
      endFreq: 862,
    },
    earfcns: [6350, 6400],
    details: [
      "LTE B20 10 MHz on EARFCN 6400 in Budapest",
      "LTE B20 20 MHz on EARFCN 6350 in the rest of Hungary via MOCN with Telekom",
      "Yettel hosts B20 MOCN in Western Hungary",
    ],
  },
];

export default data;
