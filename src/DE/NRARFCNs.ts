import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const n1: SimpleArfcnDataItem[] = [
  {
    arfcn: 431070,
    bandwidth: 10,
    operator: "Telekom",
    description: "10 MHz DSS n1 deployment",
  },
];

const n78: SimpleArfcnDataItem[] = [
  {
    arfcn: 628800,
    bandwidth: 90,
    operator: "Vodafone DE",
    description: "n78 deployment",
  },
  {
    arfcn: 629952,
    bandwidth: 90,
    operator: "Vodafone DE",
    description: "n78 deployment",
  },
  {
    arfcn: 631968,
    bandwidth: 90,
    operator: "Vodafone DE",
    description: "n78 deployment",
  },
  {
    arfcn: 633312,
    bandwidth: 50,
    operator: "1&1",
    description: "n78 deployment",
  },
  {
    arfcn: 638304,
    bandwidth: 70,
    operator: "O2 DE",
    description: "n78 deployment",
  },
  {
    arfcn: 641760,
    bandwidth: 90,
    operator: "Telekom",
    description: "n78 deployment",
  },
];

const NRARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, n1),
  ...mapArfcnListToBand(78, n78),
];

export default NRARFCNs;
