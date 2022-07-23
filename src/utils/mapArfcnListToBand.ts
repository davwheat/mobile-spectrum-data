import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";

export function mapArfcnListToBand(
  band: number,
  list: SimpleArfcnDataItem[]
): ArfcnDataItem[] {
  const newList = list as ArfcnDataItem[];

  return newList.map((x) => {
    x.band = band;
    return x;
  });
}
