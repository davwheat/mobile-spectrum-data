import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [
      "From September 2020 to March 2022 this block was used by Iliad in some regions",
    ],
    earfcns: [2800],
    endFreq: 2630,
    owner: "Public Safety",
    ownerLongName: "Public Safety",
    pairedWith: {
      endFreq: 2510,
      startFreq: 2500,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 2620,
    type: "fddDown",
  },
  {
    earfcns: [2900],
    endFreq: 2640,
    owner: "Iliad",
    ownerLongName: "Iliad IT",
    pairedWith: {
      endFreq: 2520,
      startFreq: 2510,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 2630,
    type: "fddDown",
  },
  {
    earfcns: [3025],
    endFreq: 2655,
    owner: "Vodafone",
    ownerLongName: "Vodafone IT",
    pairedWith: {
      endFreq: 2535,
      startFreq: 2520,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 2640,
    type: "fddDown",
  },
  {
    earfcns: [3175],
    endFreq: 2670,
    owner: "Tim",
    ownerLongName: "Tim IT",
    pairedWith: {
      endFreq: 2550,
      startFreq: 2535,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 2655,
    type: "fddDown",
  },
  {
    details: ["5G NR operating as DSS n7 when DCS is deployed"],
    earfcns: [3350],
    endFreq: 2690,
    nrarfcns: [535010, 537410],
    owner: "WindTre",
    ownerLongName: "WindTre",
    pairedWith: {
      endFreq: 2570,
      startFreq: 2550,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 2670,
    type: "fddDown",
  },
];

export default data;
