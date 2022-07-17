"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandNumberToHumanName = void 0;
const BandInfo_1 = require("../BandInfo");
const bandNumberToFrequency_1 = require("./bandNumberToFrequency");
const formatFrequency_1 = require("./formatFrequency");
/**
 * Converts a band number and RAT to a human-readable name.
 *
 * This will include the predominant frequency (e.g., 2100 MHz for B1/n1), along
 * with the name for that area of spectrum (e.g., "IMT" for B1/n1).
 *
 * @example `bandNumberToHumanName(1, 'lte')` returns "2100 MHz IMT".
 */
function bandNumberToHumanName(band, rat) {
    const data = rat === "lte" ? BandInfo_1.LTEBandData : BandInfo_1.NRBandData;
    const bandName = rat === "lte" ? `B${band}` : `n${band}`;
    const bandData = data[bandName];
    if (!bandData) {
        throw new Error(`Unknown band number: ${band} (${rat})`);
    }
    const freqs = bandNumberToFrequency_1.bandNumberToFrequency(band, rat);
    return `${bandData.name} (${freqs.map(formatFrequency_1.formatFrequency).join("/")})`;
}
exports.bandNumberToHumanName = bandNumberToHumanName;
//# sourceMappingURL=bandNumberToHumanName.js.map