import { IBandInfo } from "../BandInfo";
import { LTEBandData } from "../BandInfo/LTEBandData";

export function arfcnToBandInfo(rat: "lte", arfcn: number): IBandInfo | null {
  if (rat === "lte") {
    let loFreq: number = -1;
    let hiFreq: number = -1;
    let arfcnOffset: number = -1;
    let carrierBandwidth: number = -1;

    const data = Object.values(LTEBandData).find((v) => {
      const doesMatch = () =>
        arfcn >= arfcnOffset && arfcn < arfcnOffset + 10 * carrierBandwidth;

      if (v.duplexMode === "FDD") {
        arfcnOffset = v.downlinkArfcnOffset!;
        loFreq = v.downlinkStartFrequency;
        hiFreq = v.downlinkEndFrequency;
        carrierBandwidth = hiFreq - loFreq;
        if (doesMatch()) return true;

        arfcnOffset = v.uplinkArfcnOffset!;
        loFreq = v.uplinkStartFrequency;
        hiFreq = v.uplinkEndFrequency;
        return doesMatch();
      } else {
        arfcnOffset = v.arfcnOffset!;
        loFreq = v.startFrequency;
        hiFreq = v.endFrequency;
        carrierBandwidth = hiFreq - loFreq;
        return doesMatch();
      }
    });

    return data ?? null;
  } else {
    throw new Error("arfcnToFreq only supports LTE currently");
  }
}
