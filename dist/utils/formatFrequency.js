"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFrequency = void 0;
function roundToPrecision(val, precision) {
    return Math.round(val * Math.pow(10, precision)) / Math.pow(10, precision);
}
function formatFrequency(freqMhz) {
    if (freqMhz > 10000) {
        return `${roundToPrecision(freqMhz / 1000, 2)} GHz`;
    }
    return `${freqMhz} MHz`;
}
exports.formatFrequency = formatFrequency;
//# sourceMappingURL=formatFrequency.js.map