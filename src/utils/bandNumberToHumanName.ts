import { AllBandData } from "../BandInfo";

/**
 * Converts a band number (e.g., "B1" or "n1") to a human-readable name.
 *
 * This will include the predominant frequency (e.g., 2100 MHz for B1/n1), along
 * with the name for that area of spectrum (e.g., "IMT" for B1/n1).
 * 
 * @example `bandNumberToHumanName("B1")` returns "2100 MHz IMT".
 */
export default function bandNumberToHumanName(
  band: keyof typeof allBands
): string {
  if (typeof band === "string")
    Object.keys(bandNames).includes(band) ||
      (band = parseInt(band.substring(1)));

  const freq = bandNumberToFrequency(band);

  if (freq === -1) return "";

  return bandNames[band] ? `${freq} MHz ${bandNames[band]}` : `${freq}`;
}
