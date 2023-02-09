import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const n3: SimpleArfcnDataItem[] = [
  {
    arfcn: 372730,
    bandwidth: 20,
    operator: "Vivacom",
    description: "DSS n3 in urban areas and on highways",
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

const n78: SimpleArfcnDataItem[] = [
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

const NRARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(3, n3),
  ...mapArfcnListToBand(78, n78),
];

export default NRARFCNs;
