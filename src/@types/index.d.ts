export interface BaseSpectrumBlock {
  owner: string;
  ownerLongName?: string;

  startFreq: number;
  endFreq: number;

  nrarfcns?: (number | string)[] | string;
  earfcns?: (number | string)[] | string;
  uarfcns?: (number | string)[] | string;
  arfcns?: (number | string)[] | string;

  details?: string | string[];
}

export interface FDDSpectrumBlock extends BaseSpectrumBlock {
  type: "fddDown";
  pairedWith: {
    type: "fddUp";
    startFreq: number;
    endFreq: number;
  };
}

export interface TDDSpectrumBlock extends BaseSpectrumBlock {
  type: "tdd";
}

export interface SDLSpectrumBlock extends BaseSpectrumBlock {
  type: "sdl";
}

export interface GenericSpectrumBlock extends BaseSpectrumBlock {
  /**
   * Used for spectrum allocated for purposes other than mobile networking.
   */
  type: "generic";
}

export interface GenericPairedSpectrumBlock extends BaseSpectrumBlock {
  /**
   * Used for spectrum allocated for purposes other than mobile networking.
   */
  type: "genericPaired";
  pairedWith: {
    type: "genericPaired";
    startFreq: number;
    endFreq: number;
  };
}

export type SpectrumBlock =
  | FDDSpectrumBlock
  | TDDSpectrumBlock
  | SDLSpectrumBlock
  | GenericSpectrumBlock
  | GenericPairedSpectrumBlock;

export interface SpectrumData {
  names: string[];

  spectrumData: SpectrumBlock[];
}

export interface ArfcnDataItem {
  band: number;
  arfcn: number;
  operator: string;
  description: string;
  /**
   * Bandwidth in MHz
   */
  bandwidth?: number | number[];
}

export interface SimpleArfcnDataItem extends Omit<ArfcnDataItem, "band"> {}
