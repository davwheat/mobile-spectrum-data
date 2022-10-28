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

const n78: SimpleArfcnDataItem[] = [
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
    arfcn: 628588,
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
