"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandNumberToFrequency = void 0;
const BandInfo_1 = require("../BandInfo");
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
function bandNumberToFrequency(band, rat) {
    const data = rat === "lte" ? BandInfo_1.LTEBandData : BandInfo_1.NRBandData;
    const bandName = rat === "lte" ? `B${band}` : `n${band}`;
    const bandData = data[bandName];
    if (!bandData) {
        throw new Error(`Unknown band number: ${band} (${rat})`);
    }
    let freq = bandData.frequency;
    if (!Array.isArray(freq))
        freq = [freq];
    return freq;
}
exports.bandNumberToFrequency = bandNumberToFrequency;
//# sourceMappingURL=bandNumberToFrequency.js.map