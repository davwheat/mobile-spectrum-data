import Band1 from "./1.json";
import Band3 from "./3.json";
import Band7 from "./7.json";
import Band8 from "./8.json";
import Band78 from "./78.json";

import type { SpectrumData } from "../@types";

const data: SpectrumData[] = [
  {
    names: ["B1"],
    spectrumData: Band1 as any,
  },
  {
    names: ["B3"],
    spectrumData: Band3 as any,
  },
  {
    names: ["B7"],
    spectrumData: Band7 as any,
  },
  {
    names: ["B8"],
    spectrumData: Band8 as any,
  },
  {
    names: ["n78"],
    spectrumData: Band78 as any,
  },
];

export default data;
