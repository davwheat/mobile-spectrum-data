import Band8 from "./8";
import Band25 from "./25";
import Band26 from "./26";
import Band66 from "./66";
import Bands12and17 from "./12-17";
import Bands13and14 from "./13-14";

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
    names: ["B8"],
    spectrumData: Band8,
  },
  {
    names: ["B12", "B17"],
    spectrumData: Bands12and17,
  },
  {
    names: ["B13", "B14"],
    spectrumData: Bands13and14,
  },
];

export default data;
