export const returnFixNameUniSale = (name) => {

  let str = typeof name === 'string' ? name : String(name);

  // Если при конвертации получили "null" или "undefined", можно вернуть пустую строку
  if (str === 'null' || str === 'undefined') {
    return '';
  }
  
  const replaceGb = name.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const replaceSpaceBlack = replaceGB.replace("Space Black", "Black");
  const replaceSpaceGray = replaceSpaceBlack.replace("Space Gray", "Gray");
  const fixLavender = replaceSpaceGray.replace("Lavander", "Lavender")
  const fixZFold6 = fixLavender.replace("z fold6", "z fold 6")
  const fixFlip6 = fixZFold6.replace("z flip6", "z flip 6")
  const fixFold7 = fixFlip6.replace("z fold7", "z fold 7")
  const fixFlip7 = fixFold7.replace("z flip7", "z flip 7")
  const fixMM3 = fixFlip7.replace("Magic Mouse (USB-C)", "Magic Mouse 3")
  const fixWiFi = fixMM3.replace("Wi‑Fi", "Wi-Fi")
  const fixM4 = fixWiFi.replace("(M4)", "M4")
  const fixM3 = fixM4.replace("(M3)", "M3")
  const fixM5 = fixM3.replace("(M5)", "M5")
  const fixSE2 = fixM5.replace("SE (2024)", "SE2")
  const fixSE3 = fixSE2.replace("SE (2025)", "SE3")
  const fixSE21 = fixSE3.replace("SE 2 (2024)", "SE2")
  const fixSE31 = fixSE21.replace("SE 3 (2025)", "SE3")
  const replaceMM = fixSE31.replace("mm", "")
  const fixYandex = replaceMM.replace("Yandex", "Яндекс")
  const fixDisc = fixYandex.replace("Disk", "Disc")
  const fix1TB = fixDisc.replace("/1024 ", "/1TB ")
  const fixZFLIP = fix1TB.replace("zflip", "z flip")
  
  
  return fixZFLIP;
};

export const returnFixPriceUniSale = (price) => {
  let priceStr;
  if (typeof price === "number") {
    priceStr = String(price);
  } else if (typeof price !== "string") {
    return price;
  } else {
    priceStr = price;
  }

  return priceStr.replace(/\s/g, "");
};