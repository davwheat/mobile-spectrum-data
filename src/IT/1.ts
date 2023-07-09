import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 2115,
    owner: "WindTre",
    ownerLongName: "WindTre",
    pairedWith: {
      endFreq: 1925,
      startFreq: 1920,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 2110,
    type: "fddDown",
    uarfcns: [10563],
  },
  {
    earfcns: [125],
    endFreq: 2130,
    owner: "WindTre",
    ownerLongName: "WindTre",
    pairedWith: {
      endFreq: 1940,
      startFreq: 1925,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 2115,
    type: "fddDown",
  },
  {
    details: [
      "EARFCN 275 is used for 10 or 15 MHz of LTE",
      "EARFCN 300 is used for 10 MHz of LTE",
    ],
    earfcns: [275, 300],
    endFreq: 2145,
    owner: "Tim",
    ownerLongName: "Tim IT",
    pairedWith: {
      endFreq: 1955,
      startFreq: 1940,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 2130,
    type: "fddDown",
  },
  {
    earfcns: [400],
    endFreq: 2155,
    owner: "Iliad",
    ownerLongName: "Iliad IT",
    pairedWith: {
      endFreq: 1965,
      startFreq: 1955,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 2145,
    type: "fddDown",
  },
  {
    details: ["5G NR operating as DSS n1"],
    earfcns: [525],
    endFreq: 2170,
    nrarfcns: [432050, 433010],
    owner: "Vodafone",
    ownerLongName: "Vodafone IT",
    pairedWith: {
      endFreq: 1980,
      startFreq: 1965,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 2155,
    type: "fddDown",
  },
];

export default data;
