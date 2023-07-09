import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["5G NR operating as DSS n28"],
    earfcns: [9260],
    endFreq: 768,
    nrarfcns: [152690],
    owner: "Iliad",
    ownerLongName: "Iliad",
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
    details: [
      "Still no deploy of 700 MHz (except for some trial sites), unsure if is DSS or NR only, NRARFCN unknown",
    ],
    earfcns: [9360],
    endFreq: 778,
    nrarfcns: ["unknown"],
    owner: "Tim",
    ownerLongName: "Tim",
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
      "Started as LTE only, some sites have enabled 5G NR operating as DSS n28",
    ],
    earfcns: [9460],
    endFreq: 788,
    nrarfcns: [156510],
    owner: "Vodafone",
    ownerLongName: "Vodafone",
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
