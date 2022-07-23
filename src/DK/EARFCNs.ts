import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const B1: SimpleArfcnDataItem[] = [
  {
    arfcn: 75,
    bandwidth: 15,
    operator: "3 DK",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 300,
    bandwidth: 20,
    operator: "TDC",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 500,
    bandwidth: 20,
    operator: "Telia-Telenor",
    description: "Standard B1 deployment",
  },
];

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1300,
    bandwidth: 20,
    operator: "TDC",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1500,
    bandwidth: 20,
    operator: "3 DK",
    description: "Standard B3C1 deployment",
  },
  {
    arfcn: 1644,
    bandwidth: 10,
    operator: "3 DK",
    description: "Standard B3C2 deployment",
  },
  {
    arfcn: 1850,
    bandwidth: 20,
    operator: "Telia-Telenor",
    description: "Standard B3 deployment",
  },
];

const B7: SimpleArfcnDataItem[] = [
  {
    arfcn: 2850,
    bandwidth: 20,
    operator: "TDC",
    description: "Standard B7 deployment",
  },
  {
    arfcn: 3000,
    bandwidth: 10,
    operator: "3 DK",
    description: "Standard B7 deployment",
  },
  {
    arfcn: 3150,
    bandwidth: 20,
    operator: "Telia-Telenor",
    description: "Standard B7C1 deployment",
  },
  {
    arfcn: 3348,
    bandwidth: 20,
    operator: "Telia-Telenor",
    description: "Standard B7C2 deployment",
  },
];

const B8: SimpleArfcnDataItem[] = [
  {
    arfcn: 3500,
    bandwidth: 10,
    operator: "Telia-Telenor",
    description: "Standard B8 deployment",
  },
  {
    arfcn: 3700,
    bandwidth: 10,
    operator: "3 DK",
    description: "Standard B8 deployment",
  },
];

const B20: SimpleArfcnDataItem[] = [
  {
    arfcn: 6350,
    bandwidth: 20,
    operator: "TDC",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6200,
    bandwidth: 10,
    operator: "Telia-Telenor",
    description: "Standard B20 deployment",
  },
];

const B28: SimpleArfcnDataItem[] = [
  {
    arfcn: 9335,
    bandwidth: 5,
    operator: "Telia-Telenor",
    description: "Standard B28 deployment",
  },
  {
    arfcn: 9260,
    bandwidth: 10,
    operator: "3 DK",
    description: "Standard B28 deployment",
  },
];

const B38: SimpleArfcnDataItem[] = [
  {
    arfcn: 37900,
    bandwidth: 20,
    operator: "3 DK",
    description: "Standard B38 deployment",
  },
];

const B40: SimpleArfcnDataItem[] = [
  {
    arfcn: 38752,
    bandwidth: 20,
    operator: "TDC",
    description: "Standard B40C1 deployment",
  },
  {
    arfcn: 38950,
    bandwidth: 20,
    operator: "TDC",
    description: "Standard B40C2 deployment",
  },
  {
    arfcn: 39148,
    bandwidth: 20,
    operator: "TDC",
    description: "Standard B40C3 deployment",
  },
];

const EARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, B1),
  ...mapArfcnListToBand(3, B3),
  ...mapArfcnListToBand(7, B7),
  ...mapArfcnListToBand(8, B8),
  ...mapArfcnListToBand(20, B20),
  ...mapArfcnListToBand(28, B28),
  ...mapArfcnListToBand(38, B38),
  ...mapArfcnListToBand(40, B40),
];

export default EARFCNs;
