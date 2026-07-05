import idProductAppleData from "../data/idProductAppleData.json";
import idProductSamsungData from "../data/idProductSamsungData.json";
import idProductXiaomiData from "../data/idProductXiaomiData.json";
import idProductGarminData from "../data/idProductGarminData.json";
import idProductOtherBrandData from "../data/idProductOtherBrandData.json";
import idProductOtherBrandData2 from "../data/idProductOtherBrandData2.json";

const ALL_BRANDS_DATA = [
  idProductAppleData,
  idProductSamsungData,
  idProductXiaomiData,
  idProductGarminData,
  idProductOtherBrandData,
  idProductOtherBrandData2,
];

const ALL_IDS_SET = new Set(
  ALL_BRANDS_DATA.flatMap((data) => Object.keys(data))
);

export const findProductById = (id) => {
  const normalizedId = String(id).trim();
  for (const data of ALL_BRANDS_DATA) {
    if (data[normalizedId]) {
      return { id: normalizedId, ...data[normalizedId] };
    }
  }
  return null;
};

export const getIdsAndNamesFromAvitoString = (idString) => {
  if (!idString || typeof idString !== "string") return [];

  const ids = idString
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  const result = [];

  for (const id of ids) {
    const product = findProductById(id);
    if (product) {
      const name = Array.isArray(product.include)
        ? product.include.join(" ")
        : product.name;

      result.push({ id, name, price: null }); 
    }
  }

  return result;
};