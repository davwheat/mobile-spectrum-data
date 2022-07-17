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
export declare function bandNumberToFrequency(band: number, rat: "lte" | "nr"): number[];
