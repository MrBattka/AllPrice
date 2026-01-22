import idProductAppleData from "../data/idProductAppleData.json";
import idProductSamsungData from "../data/idProductSamsungData.json";
import idProductXiaomiData from "../data/idProductXiaomiData.json";
import idProductGarminData from "../data/idProductGarminData.json";
import idProductOtherBrandData from "../data/idProductOtherBrandData.json";
import idProductOtherBrandData2 from "../data/idProductOtherBrandData2.json";
import { memoize } from "lodash";
import { articleToIdMap } from "../data/articleToIdMap";

const checkEntry = (name, entry) => {
  const [id, params] = entry;
  const isAllNecessaryIncluded = params.include.every(
    (item) => name.includes(item)
  );
  const isAllExcludeNotInName = params.exclude.every(
    (item) => !name.includes(item)
  );
  return isAllNecessaryIncluded && isAllExcludeNotInName ? id : null;
};

export const getIdByName = memoize((name) => {
  const lowerName = name.toLowerCase();

  // Шаг 1: Поиск по ключевым словам (как раньше)
  const entries = Object.entries({
    ...idProductAppleData,
    ...idProductSamsungData,
    ...idProductXiaomiData,
    ...idProductGarminData,
    ...idProductOtherBrandData,
    ...idProductOtherBrandData2,
  });

  const foundById = entries
    .map((entry) => checkEntry(lowerName, entry))
    .find((id) => id !== null);

  if (foundById) {
    return foundById;
  }

  // Шаг 2: Поиск по артикулу
  const articleMatch = lowerName.match(/010-\d{5,6}-\d{2}/i);
  if (articleMatch) {
    const article = articleMatch[0].toUpperCase(); // нормализуем
    if (articleToIdMap[article]) {
      return articleToIdMap[article];
    }
  }

  return "No match";
});