import idProductAppleData from "../data/idProductAppleData.json";
import idProductSamsungData from "../data/idProductSamsungData.json";
import idProductXiaomiData from "../data/idProductXiaomiData.json";
import idProductGarminData from "../data/idProductGarminData.json";
import idProductOtherBrandData from "../data/idProductOtherBrandData.json";
import idProductOtherBrandData2 from "../data/idProductOtherBrandData2.json";

const checkEntry = (name, entry) => {
  const [id, params] = entry;
  const isAllNecessaryIncluded = params.include.every(
    (item) => name.indexOf(item) !== -1
  );
  const isAllExcludeNotInName = params.exclude.every(
    (item) => name.indexOf(item) === -1
  );
  if (isAllNecessaryIncluded && isAllExcludeNotInName) return id;
  return null;
};

export const getIdByName = (name) => {
  const toLowerCase = name.toLowerCase();
  const entries = Object.entries({
    ...idProductAppleData,
    ...idProductSamsungData,
    ...idProductXiaomiData,
    ...idProductGarminData,
    ...idProductOtherBrandData,
    ...idProductOtherBrandData2
  });

  return (
    entries
      .map((entry) => checkEntry(toLowerCase, entry))
      .filter((i) => i !== null)[0] ?? "No match"
  );
};
