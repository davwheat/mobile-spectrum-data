import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";

function mapListToBand(
  band: number,
  list: SimpleArfcnDataItem[]
): ArfcnDataItem[] {
  const newList = list as ArfcnDataItem[];

  return newList.map((x) => {
    x.band = band;
    return x;
  });
}

const B1: SimpleArfcnDataItem[] = [
  {
    arfcn: 75,
    bandwidth: 15,
    operator: "Yettel BG",
    description: "Standard B1 deployment",
  },
  {
    arfcn: 275,
    bandwidth: 20,
    operator: "A1 BG",
    description: "Standard L21 (5 MHz U21 refarmed to LTE) deployment",
  },
  {
    arfcn: 300,
    bandwidth: 15,
    operator: "A1 BG",
    description: "Standard U21+L21 deployment",
  },
  {
    arfcn: 525,
    bandwidth: 15,
    operator: "Vivacom",
    description: "Standard B1 deployment",
  },
];

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1275,
    bandwidth: 15,
    operator: "A1 BG",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1425,
    bandwidth: 15,
    operator: "Yettel BG",
    description: "Standard B3 deployment",
  },
  {
    arfcn: 1575,
    bandwidth: 15,
    operator: "Vivacom",
    description:
      "Standard B3 deployment, with n3 DSS in urban areas and on highways",
  },
];

const B7: SimpleArfcnDataItem[] = [
  {
    arfcn: 2950,
    bandwidth: 20,
    operator: "A1 BG",
    description: "Standard B7 deployment",
  },
  {
    arfcn: 3150,
    bandwidth: 20,
    operator: "Yettel BG",
    description: "Standard B7 deployment",
  },
  {
    arfcn: 3350,
    bandwidth: 20,
    operator: "Vivacom",
    description: "Standard B7 deployment",
  },
];

const B8: SimpleArfcnDataItem[] = [
  {
    arfcn: 3516,
    bandwidth: 5,
    operator: "Vivacom",
    description: "Standard 5 MHz B8 deployment",
  },
  {
    arfcn: 3678,
    bandwidth: 4.6,
    operator: "A1 BG",
    description:
      "Standard B8 deployment - signalled as 5 MHz, operating on 4.6 MHz of spectrum due to LTE's 0.5 MHz guard band for 5 MHz bandwidth.",
  },
  {
    arfcn: 3774,
    bandwidth: 3,
    operator: "Yettel BG",
    description: "B8 deployment in Varna",
  },
  {
    arfcn: 3780,
    bandwidth: 3,
    operator: "Yettel BG",
    description: "Standard B8 deployment",
  },
];

const EARFCNs: ArfcnDataItem[] = [
  ...mapListToBand(1, B1),
  ...mapListToBand(3, B3),
  ...mapListToBand(7, B7),
  ...mapListToBand(8, B8),
];

export default EARFCNs;
