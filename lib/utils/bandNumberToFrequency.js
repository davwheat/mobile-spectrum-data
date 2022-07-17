import { LTEBandData, NRBandData } from "../BandInfo";
/**
 * Converts a band number and RAT to its predominant frequencies.
 *
 * @example
 * // [2100]
 * bandNumberToFrequency(1, 'lte')
 * @example
 * // [900, 1500]
 * bandNumberToFrequency(94, 'nr')
 */
export function bandNumberToFrequency(band, rat) {
    var data = rat === "lte" ? LTEBandData : NRBandData;
    var bandName = rat === "lte" ? "B".concat(band) : "n".concat(band);
    var bandData = data[bandName];
    if (!bandData) {
        throw new Error("Unknown band number: ".concat(band, " (").concat(rat, ")"));
    }
    var freq = bandData.frequency;
    if (!Array.isArray(freq))
        freq = [freq];
    return freq;
}
//# sourceMappingURL=bandNumberToFrequency.js.map