import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const n1: SimpleArfcnDataItem[] = [
  {
    arfcn: 430830,
    bandwidth: 20,
    operator: "Telekom",
    description: "DSS n1",
  },
];

const n78: SimpleArfcnDataItem[] = [
  {
    arfcn: 647424,
    bandwidth: 100,
    operator: "Telekom",
    description: "100 MHz n78 standard deployment",
  },
];

const NRARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, n1),
  ...mapArfcnListToBand(78, n78),
];

export default NRARFCNs;
