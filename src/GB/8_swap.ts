import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Vodafone",
    ownerLongName: "Vodafone UK",
    startFreq: 925.1,
    endFreq: 942.5,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 880.1,
      endFreq: 897.5,
    },
    earfcns: [3500],
    arfcns: "ARFCNs 1-12",
    details: ["Post-900 MHz defragmentation spectrum"],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/siteassets/resources/documents/manage-your-licence/mobile-wireless-and-broadband/cellular/licences/cellular-licence---telefonica---vodafone-1351815.pdf",
    },
  },
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 942.5,
    endFreq: 959.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 897.5,
      endFreq: 914.9,
    },
    arfcns: "ARFCNs 113-124",
    uarfcns: [3025],
    earfcns: [3725],
    details: ["Post-900 MHz defragmentation spectrum"],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/siteassets/resources/documents/manage-your-licence/mobile-wireless-and-broadband/cellular/licences/cellular-licence---telefonica---vodafone-1351815.pdf",
    },
  },
];

export default data;
