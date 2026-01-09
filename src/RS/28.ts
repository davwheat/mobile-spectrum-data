import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "mts",
      ownerLongName: "Telekom Srbija",
      startFreq: 768,
      endFreq: 778,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 713,
        endFreq: 723,
      },
    },
    {
      owner: "Yettel",
      ownerLongName: "Yettel Srbija",
      startFreq: 758,
      endFreq: 768,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 703,
        endFreq: 713,
      },
    },
    {
      owner: "A1",
      ownerLongName: "A1 Srbija",
      startFreq: 778,
      endFreq: 788,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 723,
        endFreq: 733,
      },
    },
  ] as SpectrumBlock[]
).map((x) => {
  x.sourceInfo = {
    type: "url",
    url: "https://www.ratel.rs/cyr/blog-posts-view-all/uspesno-okoncano-javno-nadmetanje-za-izdavanje-pojedinacnix-dozvola-za-koriscenje-radiofrekvencijskog-spektra-u-radiofrekvencijskim-opsezima-694-790-mhz-880-915925-960-mhz-1710-17851805-1880-mhz-1920-19802110-2170-mhz-2500-2690-mhz-i-3400-3800-mhz",
  };
  return x;
});

export default data;
