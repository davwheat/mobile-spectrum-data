import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [2850],
    endFreq: 2640,
    owner: "Elisa",
    ownerLongName: "Elisa Eesti AS",
    pairedWith: {
      endFreq: 2520,
      startFreq: 2500,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/3882",
    },
    startFreq: 2620,
    type: "fddDown",
  },
  {
    earfcns: [3050],
    endFreq: 2680,
    owner: "Telia",
    ownerLongName: "Telia Eesti AS",
    pairedWith: {
      endFreq: 2560,
      startFreq: 2520,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/3880",
    },
    startFreq: 2640,
    type: "fddDown",
  },
  {
    endFreq: 2690,
    owner: "Elisa",
    ownerLongName: "Elisa Eesti AS",
    pairedWith: {
      endFreq: 2570,
      startFreq: 2560,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/9129",
    },
    startFreq: 2680,
    type: "fddDown",
  },
];

export default data;
