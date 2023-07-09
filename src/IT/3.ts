import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [1225],
    endFreq: 1810,
    owner: "Public Safety",
    ownerLongName: "Public Safety",
    pairedWith: {
      endFreq: 1715,
      startFreq: 1710,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 1805,
    type: "fddDown",
  },
  {
    details: [
      "5G NR is operating as DSS n3 in some trial sites",
      "Rarely used for DCS",
    ],
    earfcns: [1350],
    endFreq: 1830,
    nrarfcns: [365530],
    owner: "Tim",
    ownerLongName: "Tim",
    pairedWith: {
      endFreq: 1735,
      startFreq: 1715,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 1810,
    type: "fddDown",
  },
  {
    earfcns: [1500],
    endFreq: 1840,
    owner: "Iliad",
    ownerLongName: "Iliad",
    pairedWith: {
      endFreq: 1745,
      startFreq: 1735,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 1830,
    type: "fddDown",
  },
  {
    details: ["5G NR operating as DSS n3", "Rarely used for DCS"],
    earfcns: [1650],
    endFreq: 1860,
    nrarfcns: [368890, 371530],
    owner: "WindTre",
    ownerLongName: "WindTre",
    pairedWith: {
      endFreq: 1765,
      startFreq: 1745,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 1840,
    type: "fddDown",
  },
  {
    details: ["Rarely used for DCS"],
    earfcns: [1850],
    endFreq: 1880,
    owner: "Vodafone",
    ownerLongName: "Vodafone",
    pairedWith: {
      endFreq: 1785,
      startFreq: 1765,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 1860,
    type: "fddDown",
  },
];

export default data;
