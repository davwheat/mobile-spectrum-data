import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    earfcns: [730],
    endFreq: 1950,
    owner: "bmobile",
    ownerLongName:
      "Telecommunication Services of Trinidad and Tobago (bmobile)",
    pairedWith: {
      endFreq: 1870,
      startFreq: 1850,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://tatt.org.tt/DesktopModules/Bring2mind/DMX/API/Entries/Download?Command=Core_Download&EntryId=1028&PortalId=0&TabId=222",
    },
    startFreq: 1930,
    type: "fddDown",
    uarfcns: [412],
  },
  {
    endFreq: 1970,
    owner: "Unallocated",
    ownerLongName: "Unallocated",
    pairedWith: {
      endFreq: 1890,
      startFreq: 1870,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://tatt.org.tt/DesktopModules/Bring2mind/DMX/API/Entries/Download?Command=Core_Download&EntryId=1028&PortalId=0&TabId=222",
    },
    startFreq: 1950,
    type: "fddDown",
  },
  {
    details: [],
    earfcns: [1049],
    endFreq: 1990,
    owner: "Digicel",
    ownerLongName: "Digicel Trinidad and Tobago Ltd.",
    pairedWith: {
      endFreq: 1910,
      startFreq: 1890,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://tatt.org.tt/DesktopModules/Bring2mind/DMX/API/Entries/Download?Command=Core_Download&EntryId=1028&PortalId=0&TabId=222",
    },
    startFreq: 1970,
    type: "fddDown",
    uarfcns: [9937, 9912],
  },
  {
    endFreq: 1995,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 1915,
      startFreq: 1910,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://tatt.org.tt/DesktopModules/Bring2mind/DMX/API/Entries/Download?Command=Core_Download&EntryId=1028&PortalId=0&TabId=222",
    },
    startFreq: 1990,
    type: "fddDown",
  },
];

export default data;
