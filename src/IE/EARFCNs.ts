import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1275,
    bandwidth: 15,
    operator: "Three IE",
    description: "Standard B3 deployment - secondary carrier",
  },
  {
    arfcn: 1450,
    bandwidth: 20,
    operator: "Vodafone IE",
    description: "Standard B3 deployment - primary carrier",
  },
  {
    arfcn: 1575,
    bandwidth: 5,
    operator: "Vodafone IE",
    description: "B3 deployment - secondary carrier",
  },
  {
    arfcn: 1700,
    bandwidth: 20,
    operator: "Three IE",
    description: "Standard B3 deployment - primary carrier",
  },
  {
    arfcn: 1875,
    bandwidth: 15,
    operator: "Eir",
    description: "Standard B3 deployment",
  },
];

const B20: SimpleArfcnDataItem[] = [
  {
    arfcn: 6200,
    bandwidth: 10,
    operator: "Eir",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6300,
    bandwidth: 10,
    operator: "Three IE",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6400,
    bandwidth: 10,
    operator: "Vodafone IE",
    description: "Standard B20 deployment",
  },
];

const B28: SimpleArfcnDataItem[] = [
  {
    arfcn: 9260,
    bandwidth: 10,
    operator: "Eir",
    description: "Standard B28 deployment",
  },
  {
    arfcn: 9360,
    bandwidth: 10,
    operator: "Three IE",
    description: "Standard B28 deployment",
  },
  {
    arfcn: 9460,
    bandwidth: 10,
    operator: "Vodafone IE",
    description: "Standard B28 deployment",
  },
];

const B42: SimpleArfcnDataItem[] = [
  {
    arfcn: 43265,
    bandwidth: 15,
    operator: "Imagine",
    description: "B42 FWA deployment",
  },
  {
    arfcn: 43290,
    bandwidth: 20,
    operator: "Imagine",
    description: "B42 FWA deployment",
  },
  {
    arfcn: 43415,
    bandwidth: 15,
    operator: "Imagine",
    description: "B42 FWA deployment",
  },
  {
    arfcn: 43490,
    bandwidth: 20,
    operator: "Imagine",
    description: "B42 FWA deployment",
  },
];

const EARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(3, B3),
  ...mapArfcnListToBand(20, B20),
  ...mapArfcnListToBand(28, B28),
  ...mapArfcnListToBand(42, B42),
];

export default EARFCNs;
