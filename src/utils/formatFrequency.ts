function roundToPrecision(val: number, precision: number): number {
  return Math.round(val * 10 ** precision) / 10 ** precision;
}

export function formatFrequency(freqMhz: number): string {
  if (freqMhz > 10_000) {
    return `${roundToPrecision(freqMhz / 1000, 2)} GHz`;
  }
  return `${freqMhz} MHz`;
}
