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

const n3: SimpleArfcnDataItem[] = [
  {
    arfcn: 368410,
    bandwidth: 15,
    operator: "Vivacom",
    description: "DSS n3 in urban areas and on highways",
  },
];

const n78: SimpleArfcnDataItem[] = [
  {
    arfcn: 636576,
    bandwidth: 100,
    operator: "Yettel BG",
    description: "100 MHz n78 standard deployment",
  },
  {
    arfcn: 643296,
    bandwidth: 100,
    operator: "A1 BG",
    description: "100 MHz n78 standard deployment",
  },
  {
    arfcn: 628588,
    bandwidth: 100,
    operator: "Vivacom",
    description: "100 MHz n78 standard deployment",
  },
];

const NRARFCNs: ArfcnDataItem[] = [
  ...mapListToBand(3, n3),
  ...mapListToBand(78, n78),
];

export default NRARFCNs;
