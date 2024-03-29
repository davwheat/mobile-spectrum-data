import { LTEBandData, NRBandData } from "../BandInfo";
import { bandNumberToFrequency } from "./bandNumberToFrequency";
import { formatFrequency } from "./formatFrequency";

/**
 * Converts a band number and RAT to a human-readable name.
 *
 * This will include the predominant frequency (e.g., 2100 MHz for B1/n1), along
 * with the name for that area of spectrum (e.g., "IMT" for B1/n1).
 *
 * @example `bandNumberToHumanName(1, 'lte')` returns "IMT (2100 MHz)".
 */
export function bandNumberToHumanName(
  band: number,
  rat: "lte" | "nr",
): string | null {
  const data = rat === "lte" ? LTEBandData : NRBandData;
  const bandName = rat === "lte" ? `B${band}` : `n${band}`;

  const bandData = data[bandName];

  if (!bandData) {
    return null;
  }

  const freqs = bandNumberToFrequency(band, rat);

  return `${bandData.name} (${freqs.map((v) => formatFrequency(v)).join("/")})`;
}
