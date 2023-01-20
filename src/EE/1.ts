import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [103],
    endFreq: 2140,
    owner: "Tele2",
    ownerLongName: "Tele2 Eesti AS",
    pairedWith: {
      endFreq: 1950,
      startFreq: 1920,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/2706",
    },
    startFreq: 2110,
    type: "fddDown",
  },
  {
    details: ["NR DSS"],
    earfcns: [399],
    endFreq: 2155,
    nrarfcns: [430370],
    owner: "Telia",
    ownerLongName: "Telia Eesti AS",
    pairedWith: {
      endFreq: 1965,
      startFreq: 1950,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/1988",
    },
    startFreq: 2140,
    type: "fddDown",
  },
  {
    earfcns: [523],
    endFreq: 2170,
    owner: "Elisa",
    ownerLongName: "Elisa Eesti AS",
    pairedWith: {
      endFreq: 1980,
      startFreq: 1965,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/2685",
    },
    startFreq: 2155,
    type: "fddDown",
  },
];

export default data;
