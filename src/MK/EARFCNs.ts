import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const B1: SimpleArfcnDataItem[] = [
  {
    arfcn: 150,
    bandwidth: 20,
    operator: "A1",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 200,
    bandwidth: 20,
    operator: "A1",
    description: "B1 deployment",
  },
  {
    arfcn: 356,
    bandwidth: 10,
    operator: "Telekom",
    description: "Standard B1C1 deployment",
  },
  {
    arfcn: 500,
    bandwidth: 20,
    operator: "Telekom",
    description: "Standard B1C2 deployment",
  },
];

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1279,
    bandwidth: 20,
    operator: "A1",
    description: "Standard B3C1 deployment",
  },
  {
    arfcn: 1450,
    bandwidth: 20,
    operator: "A1",
    description: "Standard B3C2 deployment",
  },
  {
    arfcn: 1700,
    bandwidth: 20,
    operator: "Telekom",
    description: "Standard B3 deployment",
  },
];

const B20: SimpleArfcnDataItem[] = [
  {
    arfcn: 6200,
    bandwidth: 10,
    operator: "A1",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6300,
    bandwidth: 10,
    operator: "Telekom",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6400,
    bandwidth: 10,
    operator: "A1",
    description: "Standard B20 deployment",
  },
];

const B28: SimpleArfcnDataItem[] = [
  {
    arfcn: 9360,
    bandwidth: 10,
    operator: "Telekom",
    description: "Standard B28 deployment",
  },
  {
    arfcn: 9460,
    bandwidth: 10,
    operator: "A1",
    description: "Standard B28 deployment",
  },
];

const B42: SimpleArfcnDataItem[] = [
  {
    arfcn: 41665,
    bandwidth: 15,
    operator: "Neotel",
    description: "B42 15 MHz deployment - carrier 1",
  },
  {
    arfcn: 41690,
    bandwidth: 20,
    operator: "Neotel",
    description: "B42 20 MHz deployment",
  },
  {
    arfcn: 41815,
    bandwidth: 15,
    operator: "Neotel",
    description: "B42 15 MHz deployment - carrier 2",
  },
];

const EARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, B1),
  ...mapArfcnListToBand(3, B3),
  ...mapArfcnListToBand(20, B20),
  ...mapArfcnListToBand(28, B28),
  ...mapArfcnListToBand(42, B42),
];

export default EARFCNs;
