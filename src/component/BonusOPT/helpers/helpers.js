export const returnFixNameBonus = (name) => {
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
  const replaceGB1 = replaceGb.replace("GB,", "");
  const replaceGB = replaceGB1.replace("GB", "");
  const replacePoint = replaceGB.replace(",", "");
  const replace5G =
    replacePoint.indexOf("A55") ||
    replacePoint.indexOf("A25") ||
    replacePoint.indexOf("A35")
      ? replacePoint.replace("5G ", "")
      : replacePoint;
  const fix14ProPlus = replace5G.replace("Note 14 Pro+", "Note 14 Pro +");
  const fix13ProPlus = fix14ProPlus.replace("Note 13 Pro+", "Note 13 Pro +");
  const fixWatch6 = fix13ProPlus.replace("Watch6", "Watch 6");
  const fixWatch7 = fixWatch6.replace("Watch7", "Watch 7");
  const replaceMM = fixWatch7.replace("mm", "");

  const fixBlue = replaceMM.replace("Синий", "Blue");
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
  const fixSilver = fixGold.replace("Серебро", "Silver");
  const fixLightBlue =
    fixSilver.indexOf("A55 ") !== -1
      ? fixSilver.replace("Голубой", "Light Blue")
      : fixSilver.replace("Голубой", "Iceblue");

  const fixBlueBlack1 = fixLightBlue.replace("темно-синий", "Black");
  const fixBlue1 = fixBlueBlack1.replace("синий", "Blue");
  const fixRed1 = fixBlue1.replace("красный", "Red");
  const fixPurple1 = fixRed1.replace("фиолетовый", "Purple");
  const fixGreen1 = fixPurple1.replace("зеленый", "Green");
  const fixBlack1 = fixGreen1.replace("черный", "Black");
  const fixGray1 = fixBlack1.replace("серый", "Gray");
  const fixYellow1 = fixGray1.replace("желтый", "Yellow");
  const fixBeige1 = fixYellow1.replace("бежевый", "Beige");
  const fixOrange1 = fixBeige1.replace("оранжевый", "Orange");
  const fixWhite1 = fixOrange1.replace("белый", "White");
  const fixSilvers1 = fixWhite1.replace("серебристый", "Silver");
  const fixViolet1 = fixSilvers1.replace("фиолет", "Violet");
  const fixMint1 = fixViolet1.replace("мятный", "Mint");
  const fixLilac1 = fixMint1.replace("сирень", "Lilac");
  const fixGraphite1 = fixLilac1.replace("графит", "Graphite");
  const fixGold1 = fixGraphite1.replace("золотой", "Gold");
  const fixSilver1 = fixGold1.replace("серебро", "Silver");
  const fixLightBlue1 =
    fixSilver1.indexOf("A55 ") !== -1
      ? fixSilver1.replace("голубой", "Light Blue")
      : fixSilver1.replace("голубой", "Iceblue");

  return fixLightBlue1;
};
