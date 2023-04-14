import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Orange",
    ownerLongName: "Orange Romania",
    startFreq: 1452,
    endFreq: 1492,
    type: "sdl",
    details: [
      "Supplemental downlink (must be aggregated with another carrier)",
      "Deployed as two 20 MHz carriers in a non-contiguous configuration",
    ],
    earfcns: [10020, 10220],
    sourceInfo: {
      type: "url",
      url: "https://www.ancom.ro/uploads/links_files/Pozitionare_blocuri_procedura_selectie_2022_(002).pdf",
    },
  },
];

export default data;
