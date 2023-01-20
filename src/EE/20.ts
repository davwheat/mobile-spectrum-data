import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [6200],
    endFreq: 801,
    owner: "Elisa",
    ownerLongName: "Elisa Eesti AS",
    pairedWith: {
      endFreq: 842,
      startFreq: 832,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/4513",
    },
    startFreq: 791,
    type: "fddDown",
  },
  {
    earfcns: [6300],
    endFreq: 811,
    owner: "Telia",
    ownerLongName: "Telia Eesti AS",
    pairedWith: {
      endFreq: 852,
      startFreq: 842,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/4487",
    },
    startFreq: 801,
    type: "fddDown",
  },
  {
    earfcns: [6400],
    endFreq: 821,
    owner: "Tele2",
    ownerLongName: "Tele2 Eesti AS",
    pairedWith: {
      endFreq: 862,
      startFreq: 852,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/4599",
    },
    startFreq: 811,
    type: "fddDown",
  },
];

export default data;
