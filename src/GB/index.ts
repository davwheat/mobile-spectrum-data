import Band1 from "./1";
import Band1_20250801 from "./1_2025_08_01";
import Band1_20260101 from "./1_2026_01_01";
import Band1_20310930 from "./1_2031_09_30";
import Band3 from "./3";
import Band7 from "./7";
import Band8 from "./8";
import Band8_SpectrumSwap from "./8_swap";
import Band20 from "./20";
import Band28 from "./28";
import Band32 from "./32";
import Band32_20250801 from "./32_2025_08_01";
import Band32_20270930 from "./32_2027_09_30";
import Band38 from "./38";
import Band38_20250801 from "./38_2025_08_01";
import Band38_20260930 from "./38_2026_09_30";
import Band39 from "./39";
import Band40 from "./40";
import Band67 from "./67";
import Band77 from "./77";
import Band78 from "./78";
import Band78_SpectrumSwap from "./78_swap";
import Band78_20260101 from "./78_2026_01_01";

import type { SpectrumData } from "../@types";

const data: SpectrumData[] = [
  {
    names: ["B1", "n1"],
    spectrumData: Band1,
  },
  {
    names: ["B1", "n1"],
    extraInfo: {
      shortAddendum: "from 2025-08-01",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band1_20250801,
  },
  {
    names: ["B1", "n1"],
    extraInfo: {
      shortAddendum: "from 2026-01-01",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band1_20260101,
  },
  {
    names: ["B1", "n1"],
    extraInfo: {
      shortAddendum: "from 2031-09-30",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band1_20310930,
  },
  {
    names: ["B3", "n3"],
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
    names: ["B8", "n8"],
    extraInfo: {
      shortAddendum: "defragmented",
      description:
        "Spectrum allocation visualisation for post 900 MHz spectrum swap to defragment allocations. This took effect across large swathes of the UK on 1 July 2024.",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band8_SpectrumSwap,
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
    names: ["B32"],
    spectrumData: Band32,
  },
  {
    names: ["B32"],
    extraInfo: {
      shortAddendum: "from 2025-08-01",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band32_20250801,
  },
  {
    names: ["B32"],
    extraInfo: {
      shortAddendum: "from 2027-09-30",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band32_20270930,
  },
  {
    names: ["B38"],
    spectrumData: Band38,
  },
  {
    names: ["B38"],
    extraInfo: {
      shortAddendum: "from 2025-08-01",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band38_20250801,
  },
  {
    names: ["B38"],
    extraInfo: {
      shortAddendum: "from 2026-09-30",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band38_20260930,
  },
  {
    names: ["B39"],
    spectrumData: Band39,
  },
  {
    names: ["B40"],
    spectrumData: Band40,
  },
  {
    names: ["B67"],
    spectrumData: Band67,
  },
  {
    names: ["n77"],
    spectrumData: Band77,
  },
  {
    names: ["n78"],
    spectrumData: Band78,
  },
  {
    names: ["n78"],
    extraInfo: {
      shortAddendum: "post spectrum swap",
      description:
        "Spectrum allocation visualisation for after completion of Vodafone and O2's n78 spectrum swap.",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band78_SpectrumSwap,
  },
  {
    names: ["n78"],
    extraInfo: {
      shortAddendum: "from 2026-01-01",
      excludeFromSpectrumTotal: true,
    },
    spectrumData: Band78_20260101,
  },
];

export default data;
