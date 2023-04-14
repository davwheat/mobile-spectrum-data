import Band1 from "./1";
import Band3 from "./3";
import Band7 from "./7";
import Band8 from "./8";
import Band20 from "./20";
import Band28 from "./28";
import Band32 from "./32";
import Band38 from "./38";
import Band78 from "./78";
import Band78_2026 from "./78_2026";

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
    names: ["B28"],
    spectrumData: Band28,
  },
  {
    names: ["B32"],
    spectrumData: Band32,
  },
  {
    names: ["B38", "n41"],
    spectrumData: Band38,
  },
  {
    names: ["n78"],
    spectrumData: Band78,
  },
  {
    names: ["n78"],
    extraInfo: {
      description: "Band 78 will be refarmed from 2026 onwards.",
      excludeFromSpectrumTotal: true,
      shortAddendum: "in 2026",
    },
    spectrumData: Band78_2026,
  },
];

export default data;
