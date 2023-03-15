import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const B1: SimpleArfcnDataItem[] = [
  {
    arfcn: 78,
    bandwidth: 15,
    operator: "Digi",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 103,
    bandwidth: 10,
    operator: "Digi",
    description: "B1 deployment in areas with 3G",
  },
  {
    arfcn: 228,
    bandwidth: 15,
    operator: "Telekom",
    description: "B1 deployment in areas without 3G",
  },
  {
    arfcn: 251,
    bandwidth: 10,
    operator: "Telekom",
    description: "B1 deployment in some areas",
  },
  {
    arfcn: 400,
    bandwidth: 10,
    operator: "Orange",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 498,
    bandwidth: 10,
    operator: "Vodafone",
    description: "Standard B1 deployment",
  },
];

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1256,
    bandwidth: 10,
    operator: "Vodafone",
    description: "Standard secondary B3 carrier",
  },
  {
    arfcn: 1283,
    bandwidth: 5,
    operator: "Vodafone",
    description: "Secondary B3 carrier in some areas with 2G on Band 3",
  },
  {
    arfcn: 1400,
    bandwidth: 20,
    operator: "Vodafone",
    description: "Standard primary B3 carrier",
  },
  {
    arfcn: 1600,
    bandwidth: 20,
    operator: "Orange",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1798,
    bandwidth: 20,
    operator: "Telekom",
    description:
      "Standard B3 deployment - less than 100 resource blocks due to 2G",
  },
];

const B7: SimpleArfcnDataItem[] = [
  {
    arfcn: 2950,
    bandwidth: 20,
    operator: "Orange",
    description: "Standard B7 deployment",
  },
  {
    arfcn: 3150,
    bandwidth: 20,
    operator: "Digi",
    description: "Standard B7 deployment - carrier 1",
  },
  {
    arfcn: 3348,
    bandwidth: 20,
    operator: "Digi",
    description: "Standard B7 deployment - carrier 2",
  },
];

const B8: SimpleArfcnDataItem[] = [
  {
    arfcn: 3578,
    bandwidth: 3,
    operator: "Digi",
    description:
      "Standard B8 deployment - in the process of being refarmed to 2G",
  },
  {
    arfcn: 3650,
    bandwidth: 5,
    operator: "Telekom",
    description: "Standard B8 deployment",
  },
];

const B20: SimpleArfcnDataItem[] = [
  {
    arfcn: 6175,
    bandwidth: 5,
    operator: "Digi",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6250,
    bandwidth: 10,
    operator: "Vodafone",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6350,
    bandwidth: 10,
    operator: "Orange",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6425,
    bandwidth: 5,
    operator: "Telekom",
    description: "Standard B20 deployment",
  },
];

const B38: SimpleArfcnDataItem[] = [
  {
    arfcn: 37800,
    bandwidth: 10,
    operator: "Digi",
    description: "Standard B38 deployment - in Huawei areas",
  },
  {
    arfcn: 37950,
    bandwidth: 20,
    operator: "Digi",
    description: "Standard B38 deployment - in Huawei areas",
  },
  {
    arfcn: 37902,
    bandwidth: 20,
    operator: "Digi",
    description: "Standard B38 deployment - in Nokia and Ericsson areas",
  },
  {
    arfcn: 38100,
    bandwidth: 20,
    operator: "Digi",
    description: "Standard B38 deployment - in Nokia and Ericsson areas",
  },
];

const EARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, B1),
  ...mapArfcnListToBand(3, B3),
  ...mapArfcnListToBand(7, B7),
  ...mapArfcnListToBand(8, B8),
  ...mapArfcnListToBand(20, B20),
  ...mapArfcnListToBand(38, B38),
];

export default EARFCNs;
