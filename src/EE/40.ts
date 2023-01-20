import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [38750],
    endFreq: 2360,
    nrarfcns: [465850],
    owner: "Tele2",
    ownerLongName: "Tele2 Eesti AS",
    sourceInfo: {
      type: "url",
      url: "https://mtr.ttja.ee/taotluse_tulemus/416486#loa_andmed",
    },
    startFreq: 2300,
    type: "tdd",
  },
  {
    details: ["License for non-commercial use on Bite"],
    endFreq: 2390,
    owner: "Bite",
    ownerLongName: "UAB Bite Lietuva",
    sourceInfo: {
      type: "url",
      url: "https://jvis.ttja.ee/modules/sideluba/avalik/view/13402",
    },
    startFreq: 2360,
    type: "tdd",
  },
];

export default data;
