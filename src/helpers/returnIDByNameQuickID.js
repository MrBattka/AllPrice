import { memoize } from "lodash";
import idProductQuickID from "../data/idProductQuickID.json";

const checkRuleMatch = (normalizedName, rule) => {
  const includesMatch = rule.include.every((item) =>
    normalizedName.includes(item.toLowerCase())
  );

  const excludesMatch = rule.exclude.every(
    (item) => !normalizedName.includes(item.toLowerCase())
  );

  return includesMatch && excludesMatch;
};

export const getIdByNameQuickID = memoize((name) => {
  const normalizedName = name.toLowerCase();

  const BRAND_RULES = [
    { brand: "quickID", rules: idProductQuickID }
  ];

  for (const { rules } of BRAND_RULES) {
    for (const [ruleId, rule] of Object.entries(rules)) {
      if (checkRuleMatch(normalizedName, rule)) {
        return ruleId;
      }
    }
  }

  return "No match";
});
