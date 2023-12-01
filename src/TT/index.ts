import Band25 from "./25";
import Band26 from "./26";
import Band28 from "./28";
import Band66 from "./66";

import type { SpectrumData } from "../@types";

const data: SpectrumData[] = [
  {
    names: ["B2", "B25"],
    spectrumData: Band25,
  },
  {
    names: ["B4", "B66"],
    spectrumData: Band66,
  },
  {
    names: ["B5", "B26"],
    spectrumData: Band26,
  },
  {
    names: ["B28"],
    spectrumData: Band28,
  },
];

export default data;
