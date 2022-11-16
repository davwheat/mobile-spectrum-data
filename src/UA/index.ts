import Band1 from "./1";
import Band3 from "./3";
import Band7 from "./7";
import Band8 from "./8";
import Band40 from "./40";

import type { SpectrumData } from "../@types";

const data: SpectrumData[] = [
  {
    names: ["B1"],
    spectrumData: Band1,
  },
  {
    names: ["B3"],
    spectrumData: Band3,
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
    names: ["B40"],
    spectrumData: Band40,
  },
];

export default data;
