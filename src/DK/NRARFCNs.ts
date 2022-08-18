import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const n1: SimpleArfcnDataItem[] = [
  {
    arfcn: 423170,
    bandwidth: 10,
    operator: "3 DK",
    description: "E/// 10 MHz DSS n1 deployment",
  },
];

const n3: SimpleArfcnDataItem[] = [
  {
    arfcn: 371570,
    bandwidth: 5,
    operator: "Telia-Telenor",
    description: "5 MHz shared n3 deployment",
  },
];

const n28: SimpleArfcnDataItem[] = [
  {
    arfcn: 155050,
    bandwidth: 15,
    operator: "TDC",
    description: "15 MHz n28 deployment. Base nationwide 5G NR layer.",
  },
];

const n78: SimpleArfcnDataItem[] = [
  {
    arfcn: 630048,
    bandwidth: 100,
    operator: "TDC",
    description: "E/// 100 MHz n78 deployment",
  },
  {
    arfcn: 636768,
    bandwidth: 100,
    operator: "3 DK",
    description: "E/// 100 MHz standard n78 deployment",
  },
  {
    arfcn: 647328,
    bandwidth: 100,
    operator: "Telia-Telenor",
    description: "100 MHz shared n78 deployment",
  },
];

const NRARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, n1),
  ...mapArfcnListToBand(3, n3),
  ...mapArfcnListToBand(28, n28),
  ...mapArfcnListToBand(78, n78),
];

export default NRARFCNs;
