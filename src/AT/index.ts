import Band1 from "./1";
import Band3 from "./3";
import Band7 from "./7";
import Band8 from "./8";
import Band20 from "./20";
import Band28 from "./28";
import Band31 from "./31";
import Band32_75_76 from "./32_75_76";
import Band38 from "./38";
import Band78 from "./78";
import Band258 from "./258";

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
    names: ["B7"],
    spectrumData: Band7,
  },
  {
    names: ["B8"],
    spectrumData: Band8,
  },
  {
    names: ["B20"],
    spectrumData: Band20,
  },
  {
    names: ["B28", "n28"],
    spectrumData: Band28,
  },
  {
    names: ["B31"],
    spectrumData: Band31,
  },
  {
    names: ["B32", "B75", "n75", "B76"],
    spectrumData: Band32_75_76,
  },
  {
    names: ["B38"],
    spectrumData: Band38,
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
