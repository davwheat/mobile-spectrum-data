import Band1 from "./1";
import Band3 from "./3";
import Band5 from "./5";
import Band7 from "./7";
import Band8 from "./8";
import Band28 from "./28";
import Band78 from "./78";

import type { SpectrumData } from "../@types";

const data: SpectrumData[] = [
  {
    names: ["B1", "n1"],
    spectrumData: Band1,
  },
  {
    names: ["B3"],
    spectrumData: Band3,
  },
  {
    names: ["B5"],
    spectrumData: Band5,
  },
  {
    names: ["B7"],
    spectrumData: Band7,
  },
  {
    names: ["B8"],
    spectrumData: Band8,
  },
  {
    names: ["B28"],
    spectrumData: Band28,
  },
  {
    names: ["n78"],
    spectrumData: Band78,
  },
];

export default data;
