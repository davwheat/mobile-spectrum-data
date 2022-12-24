import Band1 from "./1";
import Band3 from "./3";
import Band7 from "./7";
import Band8 from "./8";
import Band20 from "./20";
import Band28 from "./28";
import Band38 from "./38";
import Band40 from "./40";
import Band78Cities from "./78_cities";
import Band78Rural from "./78_rural";

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
    names: ["B38"],
    spectrumData: Band38,
  },
  {
    names: ["B40"],
    spectrumData: Band40,
  },
  {
    names: [
      "B42, B43 and n78 in Dublin, Cork, Limerick, Galway, Waterford and their suburbs",
    ],
    spectrumData: Band78Cities,
  },
  {
    names: [
      "B42, B43 and n78 in Border Midlands and West, South West, East and South East",
    ],
    spectrumData: Band78Rural,
  },
];

export default data;
