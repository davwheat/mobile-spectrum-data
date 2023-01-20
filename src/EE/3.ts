import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [1344],
    endFreq: 1830.1,
    owner: "Telia",
    ownerLongName: "Telia Eesti AS",
    pairedWith: {
      endFreq: 1735.1,
      startFreq: 1710.1,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/4162",
    },
    startFreq: 1805.1,
    type: "fddDown",
  },
  {
    earfcns: [1574],
    endFreq: 1855.1,
    owner: "Tele2",
    ownerLongName: "Tele2 Eesti AS",
    pairedWith: {
      endFreq: 1760.1,
      startFreq: 1735.1,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/4160",
    },
    startFreq: 1830.1,
    type: "fddDown",
  },
  {
    earfcns: [1849],
    endFreq: 1879.9,
    owner: "Elisa",
    ownerLongName: "Elisa Eesti AS",
    pairedWith: {
      endFreq: 1784.9,
      startFreq: 1760.1,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/4163",
    },
    startFreq: 1855.1,
    type: "fddDown",
  },
];

export default data;
