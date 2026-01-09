import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Unallocated",
    ownerLongName: "Unallocated",
    startFreq: 925,
    endFreq: 930,
    type: "genericPaired",
    pairedWith: {
      type: "genericPaired",
      startFreq: 880,
      endFreq: 885,
    },
  },
  {
    owner: "A1",
    ownerLongName: "A1 Srbija",
    startFreq: 930,
    endFreq: 940,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 885,
      endFreq: 895,
    },
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/cyr/blog-posts-view-all/uspesno-okoncano-javno-nadmetanje-za-izdavanje-pojedinacnix-dozvola-za-koriscenje-radiofrekvencijskog-spektra-u-radiofrekvencijskim-opsezima-694-790-mhz-880-915925-960-mhz-1710-17851805-1880-mhz-1920-19802110-2170-mhz-2500-2690-mhz-i-3400-3800-mhz",
    },
  },
  {
    owner: "mts",
    ownerLongName: "Telekom Srbija",
    startFreq: 940,
    endFreq: 950,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 895,
      endFreq: 905,
    },
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/cyr/blog-posts-view-all/uspesno-okoncano-javno-nadmetanje-za-izdavanje-pojedinacnix-dozvola-za-koriscenje-radiofrekvencijskog-spektra-u-radiofrekvencijskim-opsezima-694-790-mhz-880-915925-960-mhz-1710-17851805-1880-mhz-1920-19802110-2170-mhz-2500-2690-mhz-i-3400-3800-mhz",
    },
  },
  {
    owner: "Yettel",
    ownerLongName: "Yettel Srbija",
    startFreq: 950,
    endFreq: 960,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 905,
      endFreq: 915,
    },
    sourceInfo: {
      type: "url",
      url: "https://www.ratel.rs/cyr/blog-posts-view-all/uspesno-okoncano-javno-nadmetanje-za-izdavanje-pojedinacnix-dozvola-za-koriscenje-radiofrekvencijskog-spektra-u-radiofrekvencijskim-opsezima-694-790-mhz-880-915925-960-mhz-1710-17851805-1880-mhz-1920-19802110-2170-mhz-2500-2690-mhz-i-3400-3800-mhz",
    },
  },
];

export default data;
