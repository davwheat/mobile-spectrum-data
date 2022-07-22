import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Cibicom",
    startFreq: 453,
    endFreq: 457.5,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 463,
      endFreq: 467.5,
    },
    details: ["Used for IoT communications"],
  },
];

export default data;
