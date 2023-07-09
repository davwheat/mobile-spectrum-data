import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 3500,
    owner: "FWA",
    ownerLongName: "FWA",
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 3440,
    type: "generic",
  },
  {
    endFreq: 3540,
    owner: "Public Safety",
    ownerLongName: "Public Safety",
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 3500,
    type: "generic",
  },
  {
    details: [
      "In Valle d'Aosta and Provincia Autonoma di Bolzano this block is from 3460 MHz to 3480 MHz",
    ],
    endFreq: 3560,
    nrarfcns: [636768],
    owner: "Tim",
    ownerLongName: "Tim IT",
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 3540,
    type: "tdd",
  },
  {
    details: [
      "In Valle d'Aosta and Provincia Autonoma di Bolzano this block is divided into two block: one of 40 MHz (NRARFCN 636480 and 636576) and one of 20 MHz (NRARFCN 640320 and 640704)",
    ],
    endFreq: 3620,
    nrarfcns: [638016],
    owner: "WindTre",
    ownerLongName: "WindTre",
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 3560,
    type: "tdd",
  },
  {
    endFreq: 3640,
    nrarfcns: [641664],
    owner: "Iliad",
    ownerLongName: "Iliad IT",
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 3620,
    type: "tdd",
  },
  {
    endFreq: 3720,
    nrarfcns: [643296, 645312],
    owner: "Vodafone",
    ownerLongName: "Vodafone IT",
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 3640,
    type: "tdd",
  },
  {
    endFreq: 3800,
    nrarfcns: [648768, 650688],
    owner: "Tim",
    ownerLongName: "Tim IT",
    sourceInfo: {
      type: "url",
      url: "https://lteitaly.it/it/spectrum.php",
    },
    startFreq: 3720,
    type: "tdd",
  },
];

export default data;
