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
export function bandNumberToFrequency(
  band: number,
  rat: "lte" | "nr",
): number[] {
  const data = rat === "lte" ? LTEBandData : NRBandData;
  const bandName = rat === "lte" ? `B${band}` : `n${band}`;

  const bandData = data[bandName];

  if (!bandData) {
    throw new Error(`Unknown band number: ${band} (${rat})`);
  }

  let freq = bandData.frequency;

  if (!Array.isArray(freq)) freq = [freq];

  return freq;
}
