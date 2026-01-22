import { newPrice } from "../../../helpers/NewPrice";

export const fixNameGarmin = (name) => {
  return name
    .replace("💓", "")
    .replace("💡", "")
    .replace("🚲", "")
    .replace("🧭", "")
    .replace("⌚️", "")
    .replace(/mm/gi, "")
    .replace("Gen 2 Standart", "Gen 2")
    .replace(/\s+/g, " ")
    .trim();
};

export const returnFixNameProductGarmin = (name, article = "") => {
  let cleanName = fixNameGarmin(name);
  cleanName = cleanName.replace(/-\s*\d{2,}\s*\d{0,3}$/, "").trim();

  if (article) {
    const artMatch = article.match(/010-\d{5,6}-\d{2}/);
    if (artMatch) {
      cleanName = `${cleanName} ${artMatch[0]}`;
    }
  }

  return cleanName;
};

export const returnStockPriceGarmin = (name) => {
  const priceMatch = name.match(/-\s*(\d{2,}\s*\d{0,3})/);
  if (!priceMatch) return "";
  return priceMatch[1].replace(/\s/g, "");
};

export const returnExtraPriceGarmin = (name, article = "") => {
  const cleanName = returnFixNameProductGarmin(name, article);
  const price = returnStockPriceGarmin(name);
  return newPrice(cleanName, price);
};