function roundToPrecision(val: number, precision: number): number {
  return Math.round(val * 10 ** precision) / 10 ** precision;
}

export function formatFrequency(
  freqMhz: number,
  hideUnits: boolean = false
): string {
  if (freqMhz > 10_000) {
    if (hideUnits) {
      return `${roundToPrecision(freqMhz / 1000, 2)}`;
    }

    return `${roundToPrecision(freqMhz / 1000, 2)} GHz`;
  }

  if (hideUnits) {
    return `${freqMhz}`;
  }

  return `${freqMhz} MHz`;
}
