import { arfcnToBandInfo } from "./arfcnToBandInfo";
import { isUplinkArfcn } from "./isUplinkArfcn";

export function arfcnToFrequency(rat: "lte", arfcn: number): number | null {
  if (rat === "lte") {
    const data = arfcnToBandInfo("lte", arfcn);

    if (!data) return null;

    let loFreq = -1;
    let arfcnOffset = -1;

    if (data.duplexMode === "FDD") {
      if (isUplinkArfcn(rat, arfcn)) {
        loFreq = data.uplinkStartFrequency;
        arfcnOffset = data.uplinkArfcnOffset!;
      } else {
        loFreq = data.downlinkStartFrequency;
        arfcnOffset = data.downlinkArfcnOffset!;
      }
    } else {
      loFreq = data.startFrequency;
      arfcnOffset = data.arfcnOffset!;
    }

    return loFreq + 0.1 * (arfcn - arfcnOffset);
  } else {
    throw new Error("arfcnToFreq only supports LTE currently");
  }
}
