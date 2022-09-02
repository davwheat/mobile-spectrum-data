import { default as OperatorsBG } from "./BG";
import { default as OperatorsDE } from "./DE";
import { default as OperatorsDK } from "./DK";
import { default as OperatorsGB } from "./GB";

const allCountries: Record<string, IOperatorInfo[]> = {
  BG: OperatorsBG,
  DE: OperatorsDE,
  DK: OperatorsDK,
  GB: OperatorsGB,
};

export { OperatorsBG, OperatorsDE, OperatorsDK, OperatorsGB };

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
