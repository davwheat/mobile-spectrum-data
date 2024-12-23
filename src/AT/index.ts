import Band1 from "./1";
import Band3 from "./3";
import Band7 from "./7";
import Band8 from "./8";
import Band20 from "./20";
import Band28 from "./28";
import Band31 from "./31";
import Band75_76 from "./75_76";
import Band38_41 from "./38_41";
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
    extraInfo: {
      description:
        "Spectrum licences will run in 2026. A new auction is being planned for 2025, it is also expected that 60MHz of band 40 will be auctioned",
    },
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
    extraInfo: {
      description:
        'On 400 base stations, Drei and Magenta have a spectrum sharing agreement named "active sharing" on these stations, they broadcast n28/30MHz, n75/50MHz, B20/10Mhz and B3/20MHz. This setup is available to customers of both networks, including MVNO users. Read more here in German: https://www.lteforum.at/mobilfunktarife/active-sharing-drei-magenta',
    },
    spectrumData: Band28,
  },
  {
    names: ["B31"],
    spectrumData: Band31,
  },
  {
    names: ["B38", "B41"],
    spectrumData: Band38_41,
    extraInfo: {
      description:
        "Spectrum licences will run in 2026. A new auction is being planned for 2025, it is also expected that 60MHz of band 40 will be auctioned",
    },
  },
  {
    names: ["n75", "n76"],
    spectrumData: Band75_76,
  },
  {
    names: ["n78"],
    extraInfo: {
      description:
        'The allocation you see here is the nationwide allocation. A1, Magenta and regional operators own regionally more spectrum. Please refer to the "Data source" link for a map and a regional spectrum chart to see the whole allocation.',
      shortAddendum: "nationwide",
    },
    spectrumData: Band78,
  },
  {
    names: ["n258"],
    spectrumData: Band258,
  },
];

export default data;
