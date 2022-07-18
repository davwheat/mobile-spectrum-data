import { arfcnToBandInfo } from ".";

export function arfcnToBandNumber(rat: "lte", arfcn: number): string | null {
  if (rat === "lte") {
    const data = arfcnToBandInfo("lte", arfcn);

    return data?.band ?? null;
  } else {
    throw new Error("`arfcnToBandNumber` only supports LTE currently");
  }
}
