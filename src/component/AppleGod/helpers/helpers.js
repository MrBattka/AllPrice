export const returnFixNameAppleGod = (name) => {
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
  const fixiPadMini7 = fixM5.replace("iPad Mini (2024)", "iPad mini 7");
  const fixS11 = fixiPadMini7.replace("Watch Series 11", "S11")
  const fixS10 = fixS11.replace("Watch Series 10", "S10")
  const fixS9 = fixS10.replace("Watch Series 9", "S9")
  const fixTabS10Plus = fixS9.replace("Tab S10+", "Tab S10 +")
  const fixTabA9Plus = fixTabS10Plus.replace("Tab A9+", "Tab A9 +")
  const fixTabS11Plus = fixTabA9Plus.replace("Tab S10+", "Tab S11 +")
  const fixTabS9FEPlus = fixTabS11Plus.replace("Tab S9 FE+", "Tab S9 FE +")
  const fixM42026 = fixTabS9FEPlus.replace("M4(2024)", "M4")
  const fixPro13M4 = fixM42026.replace("Pro 13\"M4", "Pro 13 M4")
  const fixiPad10 = fixPro13M4.replace("10.2\" (2021)", "10")
  const fixM41 = fixiPad10.replace("M4(2026)", "M4")
  const fixAir11M4 = fixM41.replace("Air 11\"M4", "Air 11 M4")
  const fixStarlight1 = fixAir11M4.replace("Сияющая Звезда", "Starlight")
  const fixPro13M2 = fixStarlight1.replace("Pro 12.9\" M2 (2022)", "Pro 13 M2")
  const fix1Tb = fixPro13M2.replace("1 TB", "1TB")
  const fixLTE1 = fix1Tb.replace("Wi-Fi+Cellular", "LTE")
 

  
  const fixBlackA9Plus = fixLTE1.indexOf("Tab A9") !== -1 ? fixLTE1.replace("Графит", "Black") : fixLTE1
  const fixGrayS9FE = fixBlackA9Plus.indexOf("S9 FE") !== -1 ? fixBlackA9Plus.replace("Графит", "Gray") : fixBlackA9Plus
  const fixPurpleS9FE = fixGrayS9FE.indexOf("S9 FE") !== -1 ? fixGrayS9FE.replace("Лаванда", "Purple") : fixGrayS9FE
  const fixNavy = fixPurpleS9FE.replace("Темно-синий", "Navy")
  const fixMint = fixNavy.replace("Мятный", "Mint")
  const fixSilver1 = fixMint.replace("Серебро", "Silver")

  
  const fixZFlip7 = fixSilver1.replace("ZFlip7", "Z Flip 7")
  const fixZFlip71 = fixZFlip7.replace("Z Flip7", "Z Flip 7")
  const fixZFold7 = fixZFlip71.replace("ZFold7", "Z Fold 7")
  const fixZFold71 = fixZFold7.replace("Z Fold7", "Z Fold 7")
  const fixZFlip8 = fixZFold71.replace("ZFlip8", "Z Flip 8")
  const fixZFlip81 = fixZFlip8.replace("Z Flip8", "Z Flip 8")
  const fixZFold8 = fixZFlip81.replace("ZFold8", "Z Fold 8")
  const fixZFold81 = fixZFold8.replace("Z Fold8", "Z Fold 8")
  
  const fixZFlip6 = fixZFold81.replace("ZFlip6", "Z Flip 6")
  const fixZFlip61 = fixZFlip6.replace("Z Flip6", "Z Flip 6")
  const fixZFold6 = fixZFlip61.replace("ZFold6", "Z Fold 6")
  const fixZFold61 = fixZFold6.replace("Z Fold6", "Z Fold 6")
  

  return fixZFold61;
};
