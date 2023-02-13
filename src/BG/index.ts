import Band1 from "./1";
import Band3 from "./3";
import Band7 from "./7";
import Band8 from "./8";
import Band78 from "./78";
import Band258 from "./258";

import type { SpectrumData } from "../@types";

const data: SpectrumData[] = [
  {
    names: ["B1"],
    spectrumData: Band1,
  },
  {
    names: ["B3", "n3"],
    spectrumData: Band3,
  },
  {
    names: ["B7", "n7"],
    spectrumData: Band7,
  },
  {
    names: ["B8"],
    spectrumData: Band8,
  },
  {
    names: ["n78"],
    spectrumData: Band78,
  },
  {
    names: ["n258"],
    spectrumData: Band258,
  },
];

export default data;
