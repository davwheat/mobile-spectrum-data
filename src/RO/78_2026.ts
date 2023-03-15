import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Digi",
    ownerLongName: "RCS & RDS",
    startFreq: 3400,
    endFreq: 3450,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.ancom.ro/uploads/links_files/Pozitionare_blocuri_procedura_selectie_2022_(002).pdf",
    },
  },
  {
    owner: "VF",
    ownerLongName: "Vodafone Romania",
    startFreq: 3450,
    endFreq: 3550,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.ancom.ro/uploads/links_files/Pozitionare_blocuri_procedura_selectie_2022_(002).pdf",
    },
  },
  {
    owner: "Orange",
    ownerLongName: "Orange Romania",
    startFreq: 3550,
    endFreq: 3710,
    type: "tdd",
    sourceInfo: {
      type: "url",
      url: "https://www.ancom.ro/uploads/links_files/Pozitionare_blocuri_procedura_selectie_2022_(002).pdf",
    },
  },
  {
    owner: "Unallocated",
    startFreq: 3710,
    endFreq: 3800,
    type: "generic",
    sourceInfo: {
      type: "url",
      url: "https://www.ancom.ro/uploads/links_files/Pozitionare_blocuri_procedura_selectie_2022_(002).pdf",
    },
  },
];

export default data;
