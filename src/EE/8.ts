import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [3472],
    endFreq: 936.7,
    owner: "Elisa",
    ownerLongName: "Elisa Eesti AS",
    pairedWith: {
      endFreq: 891.7,
      startFreq: 880.1,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/1990",
    },
    startFreq: 925.1,
    type: "fddDown",
    uarfcns: [2958],
  },
  {
    endFreq: 948.3,
    owner: "Tele2",
    ownerLongName: "Tele2 Eesti AS",
    pairedWith: {
      endFreq: 903.3,
      startFreq: 891.7,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/1984",
    },
    startFreq: 936.7,
    type: "fddDown",
    uarfcns: [3010],
  },
  {
    endFreq: 959.7,
    owner: "Telia",
    ownerLongName: "Telia Eesti AS",
    pairedWith: {
      endFreq: 914.7,
      startFreq: 903.3,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/1986",
    },
    startFreq: 948.3,
    type: "fddDown",
    uarfcns: [3086],
  },
];

export default data;
