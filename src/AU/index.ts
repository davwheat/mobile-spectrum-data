import Band1MelbourneSydney from "./1_melbourne_sydney";
import Band3MelbourneSydney from "./3_melbourne_sydney";
import Band5_26 from "./5-26";
import Band7 from "./7";
import Band8 from "./8";
import Band28 from "./28";
import Band40 from "./40";
import Band78MelbourneSydney from "./78_melbourne_sydney";
import Band258 from "./258";

import type { SpectrumData } from "../@types";

const data: SpectrumData[] = [
  {
    names: ["B1", "n1"],
    extraInfo: {
      shortAddendum: "Melbourne and Sydney",
    },
    spectrumData: Band1MelbourneSydney,
  },
  {
    names: ["B3"],
    extraInfo: {
      shortAddendum: "Melbourne and Sydney",
    },
    spectrumData: Band3MelbourneSydney,
  },
  {
    names: ["B5", "B26", "n5", "n26"],
    extraInfo: {
      description:
        "Telstra get full access to band 26 extension after 30/6/2024, there are test sites.",
      shortAddendum:
        "Melbourne, Sydney, Brisbane, Adelaide, Canberra and Perth",
    },
    spectrumData: Band5_26,
  },
  {
    names: ["B7", "n7"],
    spectrumData: Band7,
  },
  {
    names: ["B8"],
    spectrumData: Band8,
  },
  {
    names: ["B28", "n28"],
    spectrumData: Band28,
  },
  {
    names: ["B40", "n40"],
    extraInfo: {
      shortAddendum: "Melbourne, Sydney, Brisbane, Adelaide and Perth",
    },
    spectrumData: Band40,
  },
  {
    names: ["n78"],
    extraInfo: {
      shortAddendum: "Melbourne and Sydney",
    },
    spectrumData: Band78MelbourneSydney,
  },
  {
    names: ["n258"],
    spectrumData: Band258,
  },
];

export default data;
