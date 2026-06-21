export const returnFixNameRootOpt = (name) => {
  const replaceTablet = name.replace("Планшет ", "");
  const replaceSmartphone = replaceTablet.replace("Смартфон ", "");
  const replaceAcusticSystem = replaceSmartphone.replace(
    "Портативная акустическая система ",
    ""
  );
  const replaceHeadphoneBluetooth = replaceAcusticSystem.replace(
    "Наушники беспроводные ",
    ""
  );
  const replaceHeadphone = replaceHeadphoneBluetooth.replace("Наушники ", "");
  const replaceSmartWatch = replaceHeadphone.replace("Смарт-часы ", "");
  const replaceGb = replaceSmartWatch.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const replaceGBRus = replaceGB.replace("ГБ", "");
  const replaceMM = replaceGBRus.replace("mm", "");
  const replaceMMRus = replaceMM.replace("мм ", "");
  const replaceWatch6 = replaceMMRus.replace("Watch6", "Watch 6");
  const replaceWatch7 = replaceWatch6.replace("Watch7", "Watch 7");
  const replaceSimbol = replaceWatch7.replace(", ", "");
  const replaceSimbol1 = replaceSimbol.replace("8/256, Gold", "8/256 Gold");
  const replaceS24FE = replaceSimbol1.replace("S24FE", "s24 FE");
  const fix2a = replaceS24FE.replace("2а", "2a");
  const fix3a = fix2a.replace("3а", "3a");
  const fixZFlip7 = fix3a.replace("Z Flip7", "Z Flip 7");
  const fixZFold7 = fixZFlip7.replace("Z Fold7", "Z Fold 7");
  const fixce5 = fixZFold7.replace("CE 5", "ce5");
  const replaceS23FE = fixce5.replace("S23FE", "s23 FE");
  const replaceNFC = replaceS23FE.replace("NFC", "");
  const replaceBluetooth = replaceNFC.replace("Беспроводные наушники ", "");

  const fixBlue = replaceBluetooth.replace("Синий", "Blue");
  const fixRed = fixBlue.replace("Красный", "Red");
  const fixPurple = fixRed.replace("Фиолетовый", "Purple");
  const fixGreen = fixPurple.replace("Зеленый", "Green");
  const fixBlack = fixGreen.replace("Черный", "Black");
  const fixBlueBlack = fixBlack.replace("Темно синий", "Black");
  const fixGray = fixBlueBlack.replace("Серый", "Gray");
  const fixYellow = fixGray.replace("Желтый", "Yellow");
  const fixBeige = fixYellow.replace("Бежевый", "Beige");
  const fixOrange = fixBeige.replace("Оранжевый", "Orange");
  const fixWhite = fixOrange.replace("Белый", "White");
  const fixSilvers = fixWhite.replace("Серебристый", "Silver");
  const fixViolet = fixSilvers.replace("Фиолет", "Violet");
  const fixMint = fixViolet.replace("Мятный", "Mint");
  const fixLilac = fixMint.replace("Сирень", "Lilac");
  const fixGraphite = fixLilac.replace("Графит", "Graphite");
  const fixGold = fixGraphite.replace("Золотой", "Gold");
  const fixTb = fixGold.replace(" ТБ", "Tb");
  const fixDot = fixTb.replace(",", "");
  const fix121 = fixDot.replace("12/1T ", "12/1TB ");
  const fix161 = fix121.replace("16/1T ", "16/1TB ");
  const fixDot121T = fix161.replace("12/1 ", "12/1TB ");
  const fixFold6 = fixDot121T.replace("Fold6", "Fold 6");
  const fixProMax = fixFold6.replace("ProMax", "Pro Max");
  const fixS11 = fixProMax.replace("Series 11", "S11");
  const fixFlip6 = fixS11.replace("Flip6", "Flip 6");
  const fixSilver = fixFlip6.replace("Серебро", "Silver");
  const fixS25Icyblue =
    fixSilver.indexOf("S25") !== -1
      ? fixSilver.replace("Ice Blue", "icyblue")
      : fixSilver;
  const fixLightBlue =
    fixS25Icyblue.indexOf("A55 ") !== -1
      ? fixS25Icyblue.replace("Голубой", "Light Blue")
      : fixS25Icyblue.replace("Голубой", "Iceblue");

  const fixS10 = fixLightBlue.replace("Series 10", "S10");
  const fixPoco5G =
    fixS10.indexOf("POCO") !== -1 || fixS10.indexOf("Galaxy") !== -1
      ? fixS10.replace("5G ", "")
      : fixS10;
  const fixPocoEU =
    fixPoco5G.indexOf("POCO") !== -1 ? fixPoco5G.replace("EU", "") : fixPoco5G;
    const fixCMFBuds = fixPocoEU.replace("CMF(Nothing)", "CMF")
    const fixS25FE = fixCMFBuds.replace("S25FE", "S25 FE")
    const fixZFlip7FE = fixS25FE.replace("Z Flip 7FE", "SZ Flip 7 FE")
    const fixMi15 = fixZFlip7FE.replace("Mi15", "Mi 15")
    const fixMagic7Pro = fixMi15.replace("Magic7 Pro", "Magic 7 Pro")

  return fixMagic7Pro;
};


export const returnNameInArrRoot = (name) => {

  const removeDoubleSpace = name.replace(/\s+/g, " ");
  let stickToSpace =
    removeDoubleSpace.indexOf("-") !== -1
      ? removeDoubleSpace.replace("-", " ")
      : removeDoubleSpace;

  let reverseStrName = stickToSpace.split("").reverse().join("");

  let splitPrice = null;
  if (reverseStrName && reverseStrName.length > 7 && reverseStrName.indexOf(" ") !== -1) {
    const match = /\s(.+)/.exec(reverseStrName);
    splitPrice = match ? match[1] : "";
  } else {
    splitPrice = removeDoubleSpace;
  }

  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceRoot = (name) => {

  let reverseStrName = name.split("").reverse().join("");

  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  let reverseBackStrName = checkSpace4.split("").reverse().join("");

  let fixWiFi = reverseBackStrName.replace("Wi-Fi", "WiFi");
  let fixUSBC = fixWiFi.replace("usb-c", "usbc");
  let fixNEW = fixUSBC.replace("new", "");
  let fixWH1 = fixNEW.replace("WH-1", "WH1");
  let fixStick1 = fixWH1.replace(" — ", "-");
  
  let fixStick = fixStick1.replace("- ", "-");

  let splitPrice =
    fixStick.indexOf("-") !== -1 ? fixStick.split("-")[1] : fixStick;
  let splitPrice2 =
    splitPrice.indexOf(" ") !== -1 ? /\s(.+)/.exec(splitPrice)[1] : splitPrice

  return splitPrice2;
};