import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = (
  [
    {
      owner: "Elisa",
      startFreq: 462.425,
      endFreq: 466.925,
      type: "fddDown",
      pairedWith: {
        type: "fddUp",
        startFreq: 452.425,
        endFreq: 456.925,
      },
      details: [
        "Used for private LTE networks",
        "Inherited through takeover of Digiset Oy",
        "See https://450alliance.org/finnish-450-mhz-license-to-be-taken-over-by-elisa",
      ],
    },
  ] as SpectrumBlock[]
).map((x) => {
  x.sourceInfo = {
    type: "url",
    url: "https://www.traficom.fi/en/communications/communications-networks/frequencies-and-license-holders-public-mobile-networks",
  };
  return x;
});

export default data;
