import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: [],
    endFreq: 768,
    nrarfcns: [152690],
    owner: "Tele2",
    ownerLongName: "Tele2 Eesti AS",
    pairedWith: {
      endFreq: 713,
      startFreq: 703,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/13564",
    },
    startFreq: 758,
    type: "fddDown",
  },
  {
    endFreq: 778,
    nrarfcns: [154570],
    owner: "Elisa",
    ownerLongName: "Elisa Eesti AS",
    pairedWith: {
      endFreq: 723,
      startFreq: 713,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/13562",
    },
    startFreq: 768,
    type: "fddDown",
  },
  {
    details: ["NR DSS"],
    earfcns: [9460],
    endFreq: 788,
    nrarfcns: [156990, 156600],
    owner: "Telia",
    ownerLongName: "Telia Eesti AS",
    pairedWith: {
      endFreq: 733,
      startFreq: 723,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/13566",
    },
    startFreq: 778,
    type: "fddDown",
  },
];

export default data;
