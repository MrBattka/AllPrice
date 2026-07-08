export const returnFixNameStore77 = (name) => {
  const replaceGb = name.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const replaceSpaceBlack = replaceGB.replace("Space Black", "Black");
  const replaceSpaceGray = replaceSpaceBlack.replace("Space Gray", "Gray");
  const fixNlack = replaceSpaceGray.replace("Черный", "Black");
  const fixSilver = fixNlack.replace("Серебристый", "Silver");
  const fixLTE = fixSilver.replace("Wi-Fi + Сотовая связь", "5G");
  const fixBlue = fixLTE.replace("Голубой", "Blue ");
  const fixPink = fixBlue.replace("Розовый", "Pink");
  const fixYellow = fixPink.replace("Желтый", "Yellow");
  const fixPurple = fixYellow.replace("Фиолетовый", "Purple");
  const fixGray = fixPurple.replace("Серый", "Gray");
  const fixStarlight = fixGray.replace("Сияющая звезда", "Starlight ");
  const fix1TB = fixStarlight.replace("1 ТБ", "1TB");
  const fix1TB1 = fix1TB.replace("1 TБ", "1TB");
  const fix2TB = fix1TB1.replace("2 ТБ", "2TB");
  const fix2TB1 = fix2TB.replace("2 TБ", "2TB");
  const fixM2 = fix2TB1.replace(" М2 ", "M2");
  const fixM3 = fixM2.replace(" М3 ", "M3");
  const fixM4 = fixM3.replace(" М4 ", "M4");
  const fixM5 = fixM4.replace(" М5 ", "M5");
  const fixiPadMini7 = fixM5.replace("iPad mini (2024)", "iPad mini 7");
  

  return fixiPadMini7;
};
