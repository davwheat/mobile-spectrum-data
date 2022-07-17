/**
 * Converts a band number and RAT to a human-readable name.
 *
 * This will include the predominant frequency (e.g., 2100 MHz for B1/n1), along
 * with the name for that area of spectrum (e.g., "IMT" for B1/n1).
 *
 * @example `bandNumberToHumanName(1, 'lte')` returns "2100 MHz IMT".
 */
export declare function bandNumberToHumanName(band: number, rat: "lte" | "nr"): string;
