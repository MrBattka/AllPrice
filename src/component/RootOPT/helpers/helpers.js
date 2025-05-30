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
  const replaceS23FE = replaceS24FE.replace("S23FE", "s23 FE");
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
  const fixFold6 = fixDot.replace("Fold6", "Fold 6");
  const fixFlip6 = fixFold6.replace("Flip6", "Flip 6");
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

  return fixPocoEU;
};
