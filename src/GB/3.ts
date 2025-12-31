import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 1805.1,
    endFreq: 1810.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1710.1,
      endFreq: 1715.9,
    },
    earfcns: [1226, 1228],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0021/84045/Cellular-LICENCE-Telefonica-UK-0249663.pdf",
    },
  },
  {
    owner: "VF-3",
    ownerLongName: "Vodafone-Three",
    startFreq: 1810.9,
    endFreq: 1811.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1715.9,
      endFreq: 1716.3,
    },
    details: ["Unused"],
  },
  {
    owner: "VF-3",
    ownerLongName: "Vodafone-Three",
    startFreq: 1811.3,
    endFreq: 1831.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1716.3,
      endFreq: 1736.3,
    },
    earfcns: [1363],
    details: [
      "Post-merger 20 MHz deployment for 234-20 (3 UK).",
      "Some trial sites use MOCN, with both Vodafone and 3 UK broadcasting B3 on this spectrum.",
    ],
  },
  {
    owner: "VF-3",
    ownerLongName: "Vodafone-Three",
    startFreq: 1831.3,
    endFreq: 1831.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1736.3,
      endFreq: 1736.7,
    },
    details: ["Unused"],
  },
  {
    owner: "EE",
    startFreq: 1831.7,
    endFreq: 1836.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1736.7,
      endFreq: 1741.7,
    },
    arfcns: "ARFCNs 645-669",
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0019/249130/Cellular-LICENCE-EE-0249666-09-11-22.pdf",
    },
  },
  {
    owner: "EE",
    startFreq: 1836.7,
    endFreq: 1856.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1741.7,
      endFreq: 1761.7,
    },
    earfcns: [1617],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0019/249130/Cellular-LICENCE-EE-0249666-09-11-22.pdf",
    },
  },
  {
    owner: "EE",
    startFreq: 1856.7,
    endFreq: 1866.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1761.7,
      endFreq: 1771.7,
    },
    earfcns: [1761, 1791, 1815],
    nrarfcns: [],
    details: [
      "EARFCN 1791 (small cell deployment) and 1788 utilises this block, and half of next block.",
      "EARFCN 1815 split across this and next block.",
      "Used in conjuction with the next spectrum block for rural n3 20 MHz deployment.",
    ],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0019/249130/Cellular-LICENCE-EE-0249666-09-11-22.pdf",
    },
  },
  {
    owner: "EE",
    startFreq: 1866.7,
    endFreq: 1876.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1771.7,
      endFreq: 1781.7,
    },
    earfcns: [1788, 1791, 1815],
    nrarfcns: [374190, 374210, 374280],
    details: [
      "EARFCN 1791 (small cell deployment) and 1788 utilises first half of this block, and all of previous block.",
      "EARFCN 1815 split across this and previous block.",
      "Used on its own for EE's n3 10 MHz deployment, or in conjuction with the previous block for rural n3 20 MHz deployment.",
    ],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0019/249130/Cellular-LICENCE-EE-0249666-09-11-22.pdf",
    },
  },
  {
    owner: "SAL",
    ownerLongName: "Shared Access Licence",
    startFreq: 1876.7,
    endFreq: 1880,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1781.7,
      endFreq: 1785,
    },
    earfcns: [],
    nrarfcns: [],
    details: [
      "Available for licensing by private operators through Ofcom's Shared Access License programme.",
      "Suitable for private 3 MHz FDD LTE/NR deployments (like my own!).",
      "Used by Telet Research for private LTE and multi-operator neutral host deployments.",
    ],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/manage-your-licence/radiocommunication-licences/shared-access",
    },
  },
];

export default data;
