import { LTEBandData } from "./LTEBandData";
import { NRBandData } from "./NRBandData";

export interface ICommonBandInfo {
  /**
   * String-based band number (e.g., "B1" or "n1").
   */
  band: string;
  /**
   * Common name for the band (e.g., "IMT" for B1/n1).
   */
  name: string;

  /**
   * Predominant frequency of the band in MHz (e.g., `2100` for B1/n1).
   */
  frequency: number[] | number;
  /**
   * The spectrum's duplex mode.
   *
   * One of FDD (frequency division duplex), TDD (time division duplex),
   * SDL (supplemental downlink), or SUL (supplemental uplink - NR only).
   */
  duplexMode: "FDD" | "TDD" | "SDL" | "SUL";
}

export interface IFDDBandInfo extends ICommonBandInfo {
  downlinkStartFrequency: number;
  downlinkEndFrequency: number;
  uplinkStartFrequency: number;
  uplinkEndFrequency: number;
  duplexMode: "FDD";
  downlinkArfcnOffset?: number;
  uplinkArfcnOffset?: number;
}

export interface ITDDBandInfo extends ICommonBandInfo {
  startFrequency: number;
  endFrequency: number;
  duplexMode: "TDD";
  arfcnOffset?: number;
}

export interface ISDLBandInfo extends ICommonBandInfo {
  startFrequency: number;
  endFrequency: number;
  duplexMode: "SDL";
  arfcnOffset?: number;
}

export interface ISULBandInfo extends ICommonBandInfo {
  startFrequency: number;
  endFrequency: number;
  duplexMode: "SUL";
  arfcnOffset?: number;
}

export type IBandInfo =
  | IFDDBandInfo
  | ITDDBandInfo
  | ISDLBandInfo
  | ISULBandInfo;

const AllBandData = { ...LTEBandData, ...NRBandData };

export { AllBandData, LTEBandData, NRBandData };
