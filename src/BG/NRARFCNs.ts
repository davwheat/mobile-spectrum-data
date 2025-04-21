import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const n3: SimpleArfcnDataItem[] = [
  {
    arfcn: 372730,
    bandwidth: 20,
    operator: "Vivacom",
    description: "Standard n3 DSS deployment",
  },
];

const n7: SimpleArfcnDataItem[] = [
  {
    arfcn: 534884,
    bandwidth: 20,
    operator: "Yettel Bulgaria",
    description: "DSS n7 in some urban areas",
  },
];

const n28: SimpleArfcnDataItem[] = [
  {
    arfcn: 152690,
    bandwidth: 10,
    operator: "A1 Bulgaria",
    description: "Standard n28 deployment",
  },
  {
    arfcn: 156510,
    bandwidth: 10,
    operator: "Yettel Bulgaria",
    description: "Standard n28 deployment",
  },
];

const n78: SimpleArfcnDataItem[] = [
  {
    arfcn: 629988,
    bandwidth: 20,
    operator: "Yettel Bulgaria",
    description: "20 MHz n78 deployment on some new equipment",
  },
  {
    arfcn: 631392,
    bandwidth: 20,
    operator: "A1 Bulgaria",
    description: "20 MHz n78 deployment on Nokia 3rd gen equipment",
  },
  {
    arfcn: 636576,
    bandwidth: 100,
    operator: "Yettel Bulgaria",
    description: "100 MHz n78 standard deployment",
  },
  {
    arfcn: 643296,
    bandwidth: 100,
    operator: "A1 Bulgaria",
    description: "100 MHz n78 standard deployment",
  },
  {
    arfcn: 649920,
    bandwidth: 100,
    operator: "Vivacom",
    description: "100 MHz n78 standard deployment",
  },
];

const n258: SimpleArfcnDataItem[] = [
  {
    arfcn: 2018971,
    bandwidth: 100,
    operator: "Yettel Bulgaria",
    description: "1st mmWave carrier",
  },
  {
    arfcn: 2020699,
    bandwidth: 100,
    operator: "Yettel Bulgaria",
    description: "2nd mmWave carrier",
  },
  {
    arfcn: 2022427,
    bandwidth: 100,
    operator: "Yettel Bulgaria",
    description: "3rd mmWave carrier",
  },
  {
    arfcn: 2023867,
    bandwidth: 100,
    operator: "Yettel Bulgaria",
    description: "4th mmWave carrier",
  },
];

const NRARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(3, n3),
  ...mapArfcnListToBand(7, n7),
  ...mapArfcnListToBand(28, n28),
  ...mapArfcnListToBand(78, n78),
  ...mapArfcnListToBand(258, n258),
];

export default NRARFCNs;
