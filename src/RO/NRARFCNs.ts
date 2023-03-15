import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const n1: SimpleArfcnDataItem[] = [
  {
    arfcn: 431960,
    bandwidth: 10,
    operator: "Vodafone",
    description: "NR + LTE DSS",
  },
  {
    arfcn: 429424,
    bandwidth: 10,
    operator: "Orange",
    description: "NR only",
  },
];

const n41: SimpleArfcnDataItem[] = [
  {
    arfcn: 519000,
    bandwidth: 40,
    operator: "Digi",
    description: "n41 deployment without DSS",
  },
];

const n78: SimpleArfcnDataItem[] = [
  {
    arfcn: 634000,
    bandwidth: 40,
    operator: "Vodafone",
    description: "Standard n78 deployment",
  },
  {
    arfcn: 636096,
    bandwidth: [80, 100],
    operator: "Orange",
    description: "Ericsson n78 deployment",
  },
  {
    arfcn: 639648,
    bandwidth: 100,
    operator: "Orange",
    description: "Huawei n78 deployment",
  },
  {
    arfcn: 648334,
    bandwidth: [40, 50],
    operator: "Digi",
    description: "Standard n78 deployment",
  },
];

const NRARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, n1),
  ...mapArfcnListToBand(38, n41),
  ...mapArfcnListToBand(78, n78),
];

export default NRARFCNs;
