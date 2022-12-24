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
    names: ["B3", "n3"],
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
    names: ["B42", "B43", "n78"],
    extraInfo: {
      shortAddendum: "large cities",
      description:
        "Spectrum allocation visualisation for 3500 MHz within Dublin, Cork, Limerick, Galway, Waterford and their suburbs.",
    },
    spectrumData: Band78Cities,
  },
  {
    names: ["B42", "B43", "n78"],
    extraInfo: {
      shortAddendum: "rural",
      description:
        "Spectrum allocation visualisation for 3500 MHz within the Border Midlands, West, South West, East and South East regions.",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band78Rural,
  },
];

export default data;
