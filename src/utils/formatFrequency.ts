function roundToPrecision(val: number, precision: number): number {
  return Math.round(val * 10 ** precision) / 10 ** precision;
}

export function formatFrequency(
  freqMhz: number,
  hideUnits: boolean = false
): string {
  if (freqMhz > 10_000) {
    const val = roundToPrecision(freqMhz / 1000, 5);

    if (hideUnits) {
      return `${val}`;
    }

    return `${val} GHz`;
  }

  const val = roundToPrecision(freqMhz, 5);

  if (hideUnits) {
    return `${val}`;
  }

  return `${val} MHz`;
}
