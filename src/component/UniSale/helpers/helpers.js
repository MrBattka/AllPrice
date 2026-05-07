export const returnFixNameUniSale = (name) => {
  const replaceGb = name.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const replaceSpaceBlack = replaceGB.replace("Space Black", "Black");
  const replaceSpaceGray = replaceSpaceBlack.replace("Space Gray", "Gray");
  

  return replaceSpaceGray;
};

export const returnFixPriceUniSale = (price) => {
  // Если не строка — конвертируем или возвращаем "0"
  let priceStr;
  if (typeof price === "number") {
    priceStr = String(price);
  } else if (typeof price !== "string") {
    return price;
  } else {
    priceStr = price;
  }

  // Удаляем ВСЕ пробельные символы: обычные, неразрывные, табы и т.д.
  return priceStr.replace(/\s/g, "");
};