import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const B1: SimpleArfcnDataItem[] = [
  {
    arfcn: 100,
    bandwidth: 20,
    operator: "Yettel Bulgaria",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 100,
    bandwidth: 15,
    operator: "Yettel Bulgaria",
    description:
      "Indoor and metro B1 deployment, presents as 20 MHz with 25 RBs blocked for UMTS B1",
  },
  {
    arfcn: 275,
    bandwidth: 15,
    operator: "A1 Bulgaria",
    description: "Indoor and metro B1 deployment (with UMTS B1 5 MHz)",
  },
  {
    arfcn: 300,
    bandwidth: 20,
    operator: "A1 Bulgaria",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 500,
    bandwidth: 20,
    operator: "Vivacom",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 500,
    bandwidth: 10,
    operator: "Vivacom",
    description: "Indoor and metro B1 deployment (with UMTS B1 5 MHz)",
  },
];

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1300,
    bandwidth: 20,
    operator: "A1 Bulgaria",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1550,
    bandwidth: 20,
    operator: "Yettel Bulgaria",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1675,
    bandwidth: 5,
    operator: "Yettel Bulgaria",
    description: "Secondary B3 carrier - test deployment",
  },
  {
    arfcn: 1800,
    bandwidth: 20,
    operator: "Vivacom",
    description: "Standard B3 deployment, with n3 DSS",
  },
];

const B7: SimpleArfcnDataItem[] = [
  {
    arfcn: 2950,
    bandwidth: 20,
    operator: "A1 Bulgaria",
    description: "Standard B7 deployment",
  },
  {
    arfcn: 3150,
    bandwidth: 20,
    operator: "Vivacom",
    description: "Standard B7 deployment",
  },
  {
    arfcn: 3350,
    bandwidth: 20,
    operator: "Yettel Bulgaria",
    description: "Standard B7 deployment, rarely with n7 DSS",
  },
];

const B8: SimpleArfcnDataItem[] = [
  {
    arfcn: 3516,
    bandwidth: 4.6,
    operator: "Vivacom",
    description:
      "Standard B8 deployment - signalled as 5 MHz, operating on 4.6 MHz of spectrum",
  },
  {
    arfcn: 3678,
    bandwidth: 4.6,
    operator: "A1 Bulgaria",
    description:
      "Standard B8 deployment - signalled as 5 MHz, operating on 4.6 MHz of spectrum due to LTE's 0.5 MHz guard band for 5 MHz bandwidth.",
  },
  {
    arfcn: 3774,
    bandwidth: 4.6,
    operator: "Yettel Bulgaria",
    description:
      "Standard B8 deployment - signalled as 5 MHz, operating on 4.6 MHz of spectrum",
  },
];

const B20: SimpleArfcnDataItem[] = [
  {
    arfcn: 6200,
    bandwidth: 10,
    operator: "A1 Bulgaria",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6300,
    bandwidth: 10,
    operator: "Vivacom",
    description: "Standard B20 deployment",
  },
  {
    arfcn: 6400,
    bandwidth: 10,
    operator: "Yettel Bulgaria",
    description: "Standard B20 deployment",
  },
];

const B28: SimpleArfcnDataItem[] = [
  {
    arfcn: 9360,
    bandwidth: 10,
    operator: "Vivacom",
    description: "Standard B28 deployment",
  },
  {
    arfcn: 9460,
    bandwidth: 10,
    operator: "Yettel Bulgaria",
    description: "B28 deployment",
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
