import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    startFreq: 2110,
    endFreq: 2125,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920,
      endFreq: 1935,
    },
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "mts",
    ownerLongName: "Telekom Srbija",
    startFreq: 2125,
    endFreq: 2130,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1935,
      endFreq: 1940,
    },
    uarfcns: [10638],
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "mts",
    ownerLongName: "Telekom Srbija",
    startFreq: 2130,
    endFreq: 2140,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1940,
      endFreq: 1950,
    },
    earfcns: [250],
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "A1",
    ownerLongName: "A1 Srbija",
    startFreq: 2140,
    endFreq: 2150,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1950,
      endFreq: 1960,
    },
    earfcns: [350],
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "A1",
    ownerLongName: "A1 Srbija",
    startFreq: 2150,
    endFreq: 2155,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1960,
      endFreq: 1965,
    },
    uarfcns: [10762],
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Srbija",
    startFreq: 2155,
    endFreq: 2170,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1965,
      endFreq: 1980,
    },
    earfcns: [525],
    details: ["Spectrum for temporary use"],
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/en/page/public-communications-networks",
    },
  },
];

export default data;
