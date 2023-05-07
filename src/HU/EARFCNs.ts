import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const B1: SimpleArfcnDataItem[] = [
  {
    arfcn: 75,
    bandwidth: [10, 15],
    operator: "Magyar Telekom",
    description: "B1 deployment",
  },
  {
    arfcn: 100,
    bandwidth: 20,
    operator: "Magyar Telekom",
    description: "B1 deployment",
  },
  {
    arfcn: 200,
    bandwidth: 10,
    operator: "Magyar Telekom",
    description: "B1 deployment",
  },
  {
    arfcn: 300,
    bandwidth: 10,
    operator: "Yettel Hungary",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 476,
    bandwidth: 15,
    operator: "Vodafone Hungary",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 500,
    bandwidth: 20,
    operator: "Vodafone Hungary",
    description: "B1 deployment with no U21",
  },
];

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1276,
    bandwidth: 15,
    operator: "Vodafone Hungary",
    description: "rare B3 deployment with G18",
  },
  {
    arfcn: 1300,
    bandwidth: 20,
    operator: "Vodafone Hungary",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1500,
    bandwidth: 20,
    operator: "Magyar Telekom",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1724,
    bandwidth: 3,
    operator: "Digi Hungary",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1850,
    bandwidth: 20,
    operator: "Yettel Hungary",
    description: "Standard B3 deployment",
  },
];

const B7: SimpleArfcnDataItem[] = [
  {
    arfcn: 2850,
    bandwidth: 20,
    operator: "Magyar Telekom",
    description: "Standard B7 deployment - primary carrier",
  },
  {
    arfcn: 2994,
    bandwidth: 10,
    operator: "Magyar Telekom",
    description: "Standard B7 deployment - secondary carrier",
  },
  {
    arfcn: 3150,
    bandwidth: 20,
    operator: "Vodafone Hungary",
    description: "Standard B7 deployment",
  },
  {
    arfcn: 3350,
    bandwidth: 20,
    operator: "Yettel Hungary",
    description: "Standard B7 deployment",
  },
];

const B8: SimpleArfcnDataItem[] = [
  {
    arfcn: 3550,
    bandwidth: 10,
    operator: "Yettel Hungary",
    description: "Standard B8 deployment",
  },
];

const B20: SimpleArfcnDataItem[] = [
  {
    arfcn: 6200,
    bandwidth: 10,
    operator: "Vodafone Hungary",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6300,
    bandwidth: 10,
    operator: "Magyar Telekom",
    description: "Standard B20 deployment in Budapest",
  },
  {
    arfcn: 6350,
    bandwidth: 20,
    operator: "Magyar Telekom",
    description: "Standard B20 MOCN in Eastern Hungary",
  },
  {
    arfcn: 6350,
    bandwidth: 20,
    operator: "Yettel Hungary",
    description: "Standard B20 MOCN in Western Hungary",
  },
  {
    arfcn: 6400,
    bandwidth: 10,
    operator: "Yettel Hungary",
    description: "Standard B20 deployment in Budapest",
  },
];

const B28: SimpleArfcnDataItem[] = [
  {
    arfcn: 9310,
    bandwidth: 10,
    operator: "Magyar Telekom",
    description: "Standard B28 deployment",
  },
  {
    arfcn: 9410,
    bandwidth: 10,
    operator: "Vodafone Hungary",
    description: "Standard B28 deployment",
  },
  {
    arfcn: 9485,
    bandwidth: 5,
    operator: "Yettel Hungary",
    description: "Standard B28 deployment",
  },
];

const EARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, B1),
  ...mapArfcnListToBand(3, B3),
  ...mapArfcnListToBand(7, B7),
  ...mapArfcnListToBand(8, B8),
  ...mapArfcnListToBand(20, B20),
  ...mapArfcnListToBand(28, B28),
];

export default EARFCNs;
