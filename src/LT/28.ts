import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    details: ["Russian TV interference"],
    endFreq: 768,
    owner: "Ministry of Defence",
    ownerLongName: "Ministry of Defence",
    pairedWith: {
      endFreq: 713,
      startFreq: 703,
      type: "fddUp",
    },
    startFreq: 758,
    type: "fddDown",
  },
  {
    details: ["4G/5G (LTE/NR)", "Nationwide"],
    earfcns: [9360],
    endFreq: 778,
    nrarfcns: [154570],
    owner: "Telia LT",
    ownerLongName: "AB Telia Lietuva",
    pairedWith: {
      endFreq: 723,
      startFreq: 713,
      type: "fddUp",
    },
    startFreq: 768,
    type: "fddDown",
  },
  {
    endFreq: 783,
    owner: "Bite LT",
    ownerLongName: "UAB Bite Lietuva",
    pairedWith: {
      endFreq: 728,
      startFreq: 723,
      type: "fddUp",
    },
    startFreq: 778,
    type: "fddDown",
  },
  {
    endFreq: 788,
    owner: "Tele2 LT",
    ownerLongName: "UAB Tele2 Lietuva",
    pairedWith: {
      endFreq: 733,
      startFreq: 728,
      type: "fddUp",
    },
    startFreq: 783,
    type: "fddDown",
  },
];

export default data;
