import Band1 from "./1";
import Band3 from "./3";
import Band7 from "./7";
import Band8 from "./8";
import Band20 from "./20";
import Band32 from "./32";
import Band38 from "./38";
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
    names: ["B7", "n7"],
    spectrumData: Band7,
  },
  {
    names: ["B8", "n8"],
    spectrumData: Band8,
  },
  {
    names: ["B20"],
    spectrumData: Band20,
  },
  {
    names: ["B32"],
    spectrumData: Band32,
  },
  {
    names: ["B38"],
    spectrumData: Band38,
  },
  {
    names: ["n78"],
    spectrumData: Band78,
  },
];

export default data;
