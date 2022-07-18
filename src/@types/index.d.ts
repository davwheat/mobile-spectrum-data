export interface BaseSpectrumBlock {
  owner: string;
  ownerLongName?: string;

  startFreq: number;
  endFreq: number;

  nrarfcns?: (number | string)[] | string;
  earfcns?: (number | string)[] | string;
  uarfcns?: (number | string)[] | string;
  arfcns?: (number | string)[] | string;

  details: string | string[];
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

export type SpectrumBlock =
  | FDDSpectrumBlock
  | TDDSpectrumBlock
  | SDLSpectrumBlock;

export interface SpectrumData {
  names: string[];

  spectrumData: SpectrumBlock[];
}
