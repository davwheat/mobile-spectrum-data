import { default as OperatorsAT } from "./AT";
import { default as OperatorsAX } from "./FI";
import { default as OperatorsBG } from "./BG";
import { default as OperatorsDE } from "./DE";
import { default as OperatorsDK } from "./DK";
import { default as OperatorsEE } from "./EE";
import { default as OperatorsGB } from "./GB";
import { default as OperatorsIE } from "./IE";
import { default as OperatorsLT } from "./LT";
import { default as OperatorsFI } from "./FI";
import { default as OperatorsKR } from "./KR";
import { default as OperatorsMK } from "./MK";
import { default as OperatorsPT } from "./PT";
import { default as OperatorsRO } from "./RO";
import { default as OperatorsRS } from "./RS";
import { default as OperatorsRU } from "./RU";
import { default as OperatorsUA } from "./UA";

const allCountries: Record<string, IOperatorInfo[]> = {
  AT: OperatorsAT,
  AX: OperatorsAX,
  BG: OperatorsBG,
  DE: OperatorsDE,
  DK: OperatorsDK,
  EE: OperatorsEE,
  GB: OperatorsGB,
  IE: OperatorsIE,
  LT: OperatorsLT,
  FI: OperatorsFI,
  KR: OperatorsKR,
  MK: OperatorsMK,
  PT: OperatorsPT,
  RO: OperatorsRO,
  RS: OperatorsRS,
  RU: OperatorsRU,
  UA: OperatorsUA,
};

export {
  OperatorsAT,
  OperatorsAX,
  OperatorsBG,
  OperatorsDE,
  OperatorsDK,
  OperatorsEE,
  OperatorsGB,
  OperatorsIE,
  OperatorsLT,
  OperatorsFI,
  OperatorsKR,
  OperatorsMK,
  OperatorsPT,
  OperatorsRO,
  OperatorsRS,
  OperatorsRU,
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

  const operatorInfo = getOperatorInfoByNameOrAlias(country, operator);

  if (!operatorInfo) return backupColour;

  return operatorInfo.color;
}

export function getOperatorInfoByNameOrAlias(
  country: string,
  name: string
): IOperatorInfo | null {
  const data = allCountries[country.toUpperCase()];

  if (!data) return null;

  const operatorInfo = data.find((o) => {
    return (
      o.name.toLowerCase() === name.toLowerCase() ||
      o.aliases.map((s) => s.toLowerCase()).includes(name.toLowerCase())
    );
  });

  return operatorInfo || null;
}
