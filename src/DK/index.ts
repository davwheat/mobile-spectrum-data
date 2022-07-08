import Band1 from "./1.json";
import Band3 from "./3.json";
import Band7 from "./7.json";
import Band8 from "./8.json";
import Band20 from "./20.json";
import Band28 from "./28.json";
import Band31 from "./31.json";
import Band32_75_76 from "./32_75_76.json";
import Band38 from "./38.json";
import Band40 from "./40.json";
import Band67 from "./67.json";
import Band78 from "./78.json";
import Band257_258 from "./257_258.json";

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
    names: ["B20"],
    spectrumData: Band20 as any,
  },
  {
    names: ["B28", "n28"],
    spectrumData: Band28 as any,
  },
  {
    names: ["B31"],
    spectrumData: Band31 as any,
  },
  {
    names: ["B32", "B75", "B76"],
    spectrumData: Band32_75_76 as any,
  },
  {
    names: ["B38"],
    spectrumData: Band38 as any,
  },
  {
    names: ["B40"],
    spectrumData: Band40 as any,
  },
  {
    names: ["B67"],
    spectrumData: Band67 as any,
  },
  {
    names: ["n78"],
    spectrumData: Band78 as any,
  },
  {
    names: ["n257", "n258"],
    spectrumData: Band257_258 as any,
  },
];

export default data;
