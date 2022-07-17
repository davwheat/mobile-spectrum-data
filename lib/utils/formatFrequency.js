function roundToPrecision(val, precision) {
    return Math.round(val * Math.pow(10, precision)) / Math.pow(10, precision);
}
export function formatFrequency(freqMhz) {
    if (freqMhz > 10000) {
        return "".concat(roundToPrecision(freqMhz / 1000, 2), " GHz");
    }
    return "".concat(freqMhz, " MHz");
}
//# sourceMappingURL=formatFrequency.js.map