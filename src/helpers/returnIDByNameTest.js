import idProductAppleData from "../data/idProductAppleData.json";
import idProductSamsungData from "../data/idProductSamsungData.json";
import idProductXiaomiData from "../data/idProductXiaomiData.json";
import idProductGarminData from "../data/idProductGarminData.json";
import idProductOtherBrandData from "../data/idProductOtherBrandData.json";
import idProductOtherBrandData2 from "../data/idProductOtherBrandData2.json";
import { memoize } from "lodash";

const checkRuleMatch = (normalizedName, rule) => {
  const includesMatch = rule.include.every((item) =>
    normalizedName.includes(item.toLowerCase())
  );

  const excludesMatch = rule.exclude.every(
    (item) => !normalizedName.includes(item.toLowerCase())
  );

  return includesMatch && excludesMatch;
};

export const getIdByNameTest = memoize((name) => {
  const normalizedName = name.toLowerCase();

  const BRAND_RULES = [
    { brand: "apple", rules: idProductAppleData },
    { brand: "samsung", rules: idProductSamsungData },
    { brand: "xiaomi", rules: idProductXiaomiData },
    { brand: "garmin", rules: idProductGarminData },
    { brand: "other1", rules: idProductOtherBrandData },
    { brand: "other2", rules: idProductOtherBrandData2 },
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
