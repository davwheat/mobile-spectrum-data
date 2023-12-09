import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const B1: SimpleArfcnDataItem[] = [
  {
    arfcn: 250,
    bandwidth: 10,
    operator: "Telekom Srbija",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 350,
    bandwidth: 10,
    operator: "A1 Srbija",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 525,
    bandwidth: 15,
    operator: "Yettel Srbija",
    description: "Standard B1 deployment",
  },
];

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1300,
    bandwidth: 20,
    operator: "Yettel Srbija",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1500,
    bandwidth: 20,
    operator: "Telekom Srbija",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1651,
    bandwidth: 10,
    operator: "A1 Srbija",
    description: "Standard B3 deployment - secondary carrier",
  },
  {
    arfcn: 1795,
    bandwidth: 20,
    operator: "A1 Srbija",
    description: "Standard B3 deployment - primary carrier",
  },
];

const B20: SimpleArfcnDataItem[] = [
  {
    arfcn: 6200,
    bandwidth: 10,
    operator: "Telekom Srbija",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6300,
    bandwidth: 10,
    operator: "Yettel Srbija",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6400,
    bandwidth: 10,
    operator: "A1 Srbija",
    description: "Standard B20 deployment",
  },
];

const EARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, B1),
  ...mapArfcnListToBand(3, B3),
  ...mapArfcnListToBand(20, B20),
];

export default EARFCNs;
