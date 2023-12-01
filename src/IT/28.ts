import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["5G NR operating as DSS n28"],
    earfcns: [9260],
    endFreq: 768,
    nrarfcns: [152690],
    owner: "Iliad",
    ownerLongName: "Iliad IT",
    pairedWith: {
      endFreq: 713,
      startFreq: 703,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 758,
    type: "fddDown",
  },
  {
    details: ["Usually is NR only, on some sites is operating as DSS n28"],
    earfcns: [9360],
    endFreq: 778,
    nrarfcns: [154570],
    owner: "Tim",
    ownerLongName: "Tim IT",
    pairedWith: {
      endFreq: 723,
      startFreq: 713,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 768,
    type: "fddDown",
  },
  {
    details: [
      "Started as LTE only, most sites have enabled 5G NR operating as DSS n28, some sites are NR only",
    ],
    earfcns: [9460],
    endFreq: 788,
    nrarfcns: [156510],
    owner: "Vodafone",
    ownerLongName: "Vodafone IT",
    pairedWith: {
      endFreq: 733,
      startFreq: 723,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 778,
    type: "fddDown",
  },
];

export default data;
