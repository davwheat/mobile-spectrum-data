import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 930.1,
    owner: "Iliad",
    ownerLongName: "Iliad",
    pairedWith: {
      endFreq: 885.1,
      startFreq: 880.1,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 925.1,
    type: "fddDown",
    uarfcns: [2938],
  },
  {
    arfcns: ["1-25", "1000-1023"],
    details: ["LTE is operating only on some trial sites"],
    earfcns: [3526],
    endFreq: 940,
    owner: "Tim",
    ownerLongName: "Tim",
    pairedWith: {
      endFreq: 895,
      startFreq: 885.2,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 930.2,
    type: "fddDown",
  },
  {
    arfcns: ["27-75"],
    details: ["LTE is operating only on some trial sites"],
    earfcns: [3676],
    endFreq: 950,
    owner: "Vodafone",
    ownerLongName: "Vodafone",
    pairedWith: {
      endFreq: 905,
      startFreq: 895.4,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 940.4,
    type: "fddDown",
  },
  {
    arfcns: ["77-124"],
    endFreq: 959.8,
    owner: "WindTre",
    ownerLongName: "WindTre",
    pairedWith: {
      endFreq: 914.8,
      startFreq: 905.2,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 950.2,
    type: "fddDown",
    uarfcns: [3063],
  },
];

export default data;
