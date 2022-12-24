import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const n3: SimpleArfcnDataItem[] = [
  {
    arfcn: 362170,
    bandwidth: 15,
    operator: "Three",
    description: "15 MHz n3 non-DSS deployment",
  },
];

const n78: SimpleArfcnDataItem[] = [
  {
    arfcn: 631968,
    bandwidth: 100,
    operator: "Vodafone IE",
    description:
      "n78 deployment in Dublin, Cork, Limerick, Galway, Waterford and their suburbs",
  },
  {
    arfcn: 647424,
    bandwidth: 100,
    operator: "Three IE",
    description: "Standard n78 deployment",
  },
];

const NRARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(3, n3),
  ...mapArfcnListToBand(78, n78),
];

export default NRARFCNs;
