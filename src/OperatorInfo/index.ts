import { default as OperatorsAT } from "./AT";
import { default as OperatorsAX } from "./FI";
import { default as OperatorsBG } from "./BG";
import { default as OperatorsDE } from "./DE";
import { default as OperatorsDK } from "./DK";
import { default as OperatorsGB } from "./GB";
import { default as OperatorsFI } from "./FI";
import { default as OperatorsMK } from "./MK";
import { default as OperatorsRO } from "./RO";
import { default as OperatorsUA } from "./UA";

const allCountries: Record<string, IOperatorInfo[]> = {
  AT: OperatorsAT,
  AX: OperatorsAX,
  BG: OperatorsBG,
  DE: OperatorsDE,
  DK: OperatorsDK,
  GB: OperatorsGB,
  FI: OperatorsFI,
  MK: OperatorsMK,
  RO: OperatorsRO,
  UA: OperatorsUA,
};

export {
  OperatorsAT,
  OperatorsAX,
  OperatorsBG,
  OperatorsDE,
  OperatorsDK,
  OperatorsGB,
  OperatorsFI,
  OperatorsMK,
  OperatorsRO,
  OperatorsUA,
};

export interface IOperatorInfo {
  name: string;
  aliases: string[];
  color: string;
}

/**
 * Returns the main colour for an operator, to be used for styling.
 *
 * If the operator cannot be found, defaults to `#dddddd`.
 *
 * @param country Two-letter country code to look within (e.g., GB or DK)
 * @param operator Operator name or alias
 * @returns Main colour for the operator
 */
export function getOperatorColor(country: string, operator: string): string {
  const data = allCountries[country.toUpperCase()];

  const backupColour = "#dddddd";

  if (!data) return backupColour;

  const operatorInfo = data.find((o) => {
    return (
      o.name.toLowerCase() === operator.toLowerCase() ||
      o.aliases.map((s) => s.toLowerCase()).includes(operator.toLowerCase())
    );
  });

  if (!operatorInfo) return backupColour;

  return operatorInfo.color;
}
