import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const n1: SimpleArfcnDataItem[] = [
  {
    arfcn: 427970,
    bandwidth: 10,
    operator: "Yettel Hungary",
    description: "n1 DSS deployment",
  },
  {
    arfcn: 431520,
    bandwidth: 15,
    operator: "Vodafone Hungary",
    description: "n1 DSS deployment",
  },
];

const n28: SimpleArfcnDataItem[] = [
  {
    arfcn: 155600,
    bandwidth: 10,
    operator: "Vodafone Hungary",
    description: "Standard n28 DSS deployment",
  },
];

const n78: SimpleArfcnDataItem[] = [
  {
    arfcn: 647328,
    bandwidth: 100,
    operator: "Yettel Hungary",
    description: "Standard n78 deployment",
  },
];

const NRARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, n1),
  ...mapArfcnListToBand(28, n28),
  ...mapArfcnListToBand(78, n78),
];

export default NRARFCNs;
