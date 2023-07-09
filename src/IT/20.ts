import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [6200],
    endFreq: 801,
    owner: "WindTre",
    ownerLongName: "WindTre",
    pairedWith: {
      endFreq: 842,
      startFreq: 832,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 791,
    type: "fddDown",
  },
  {
    earfcns: [6300],
    endFreq: 811,
    owner: "Tim",
    ownerLongName: "Tim",
    pairedWith: {
      endFreq: 852,
      startFreq: 842,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 801,
    type: "fddDown",
  },
  {
    earfcns: [6400],
    endFreq: 821,
    owner: "Vodafone",
    ownerLongName: "Vodafone",
    pairedWith: {
      endFreq: 862,
      startFreq: 852,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 811,
    type: "fddDown",
  },
];

export default data;
