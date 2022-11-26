import Band1 from "./1";
import Band1_Kyiv from "./1_Kyiv";
import Band3 from "./3";
import Band7 from "./7";
import Band8 from "./8";
import Band38 from "./38";
import Band40 from "./40";

import type { SpectrumData } from "../@types";

const data: SpectrumData[] = [
  {
    names: ["B1"],
    spectrumData: Band1,
  },
  {
    names: ["B1 in Kyiv"],
    spectrumData: Band1_Kyiv,
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
    names: ["B38"],
    spectrumData: Band38,
  },
  {
    names: ["B40"],
    spectrumData: Band40,
  },
];

export default data;
