import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 758,
    endFreq: 773,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 703,
      endFreq: 718,
    },
    sourceInfo: {
      type: "url",
      url: "https://www.ancom.ro/uploads/links_files/Pozitionare_blocuri_procedura_selectie_2022_(002).pdf",
    },
  },
  {
    owner: "Orange",
    ownerLongName: "Orange Romania",
    startFreq: 773,
    endFreq: 783,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 718,
      endFreq: 728,
    },
    earfcns: [9410],
    sourceInfo: {
      type: "url",
      url: "https://www.ancom.ro/uploads/links_files/Pozitionare_blocuri_procedura_selectie_2022_(002).pdf",
    },
  },
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone Romania",
    startFreq: 783,
    endFreq: 788,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 728,
      endFreq: 733,
    },
    sourceInfo: {
      type: "url",
      url: "https://www.ancom.ro/uploads/links_files/Pozitionare_blocuri_procedura_selectie_2022_(002).pdf",
    },
  },
];

export default data;
