import Bands2and25 from "./2-25";
import Bands4and66 from "./4-66";
import Band8 from "./8";
import Bands12and17 from "./12-17";
import Bands13and14 from "./13-14";
import Band26 from "./26";
import Band41 from "./41";

import type { SpectrumData } from "../@types";

const data: SpectrumData[] = [
  {
    names: ["B2", "B25"],
    spectrumData: Bands2and25,
  },
  {
    names: ["B4", "B66"],
    spectrumData: Bands4and66,
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
  {
    names: ["B41"],
    spectrumData: Band41,
  },
];

export default data;
