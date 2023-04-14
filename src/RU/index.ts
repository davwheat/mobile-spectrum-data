import Band1 from "./1";
import Band3_Moscow from "./3_Moscow";
import Band7 from "./7";
import Band8_Moscow from "./8_Moscow";
import Band20 from "./20";
import Band38 from "./38";
import Band40 from "./40";

import type { SpectrumData } from "../@types";

const data: SpectrumData[] = [
  {
    names: ["B1"],
    spectrumData: Band1,
  },
  {
    names: ["B3"],
    extraInfo: {
      shortAddendum: "allocation in Moscow",
    },
    spectrumData: Band3_Moscow,
  },
  {
    names: ["B7"],
    spectrumData: Band7,
  },
  {
    names: ["B8"],
    extraInfo: {
      shortAddendum: "allocation in Moscow",
    },
    spectrumData: Band8_Moscow,
  },
  {
    names: ["B20"],
    spectrumData: Band20,
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
