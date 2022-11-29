export type SourceType =
  | {
      type: "url";
      url: string;
    }
  | {
      type: "other";
      details: string;
    };

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
  sourceInfo?: SourceType;
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
  /**
   * Name of the bands represented in this allocation.
   *
   * @example
   * `["B20"]`
   *
   * @example
   * `["B32", "B75", "B76"]`
   *
   * @example
   * `["B1", "n1"]`
   */
  names: string[];
  extraInfo?: {
    /**
     * Adds extra detail to the allocation.
     *
     * Use for regional allocations. For example, `"in Kyiv"` or `"post spectrum swap"`.
     */
    shortAddendum?: string;
    /**
     * A longer description about the purpose for the `shortAddendum`, or other info
     * about the allocation.
     */
    description?: string;
    /**
     * Use when this dataset is a regional allocation or some other
     * non-standard allocation.
     */
    excludeFromSpectrumTotal?: boolean;
  };
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
