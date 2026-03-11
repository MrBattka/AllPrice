import { newPrice } from "../../../helpers/NewPrice";

export const returnNameInArrHi = (name) => {
  let fixUSBC = name.replace("USB-C", "USBC");
  let replaceInfo = fixUSBC.indexOf("Bot:") !== -1 ? fixUSBC.split("Bot:")[1] : fixUSBC
  let fixTYPEC = replaceInfo.replace("TYPE-C", "USBC");
  let fixWiFi = fixTYPEC.replace("Wi-Fi", "WiFi");
  let fixZero = fixWiFi.replace("🛩️", "");

  let reverseStrName = fixZero.split("").reverse().join("");
  let checkSpace =
    reverseStrName[0] === " "
      ? reverseStrName.replace(" ", "")
      : reverseStrName;
  let checkSpace1 =
    checkSpace[0] === " " ? checkSpace.replace(" ", "") : checkSpace;
  let checkSpace2 =
    checkSpace1[0] === " " ? checkSpace1.replace(" ", "") : checkSpace1;

  let checkSpace3 =
    checkSpace2[0] === " " ? checkSpace2.replace(" ", "") : checkSpace2;

  // let splitPrice = checkSpace3.indexOf(" ") !== -1 ? /\s(.+)/.exec(checkSpace3)[1] : checkSpace3

  let removeStick =
    reverseStrName.indexOf("-") !== -1
      ? reverseStrName.split("-")[1]
      : reverseStrName;

  let reverseBackStrName = removeStick.split("").reverse().join("");

  let fixTYPEC1 = reverseBackStrName.replace("USBC", "USB-C");
  let fixWiFi1 = fixTYPEC1.replace("WiFi", "Wi-Fi")

  return fixWiFi1;
};

export const returnExtraPriceHi = (name) => {
  if (
    name?.indexOf("🇪🇺") != -1 ||
    name?.indexOf("🇷🇺") != -1 ||
    name?.indexOf("🇰🇿") != -1 ||
    name?.indexOf("🇿🇦") != -1 ||
    name?.indexOf("🇮🇳") != -1 ||
    name?.indexOf("🇦🇪") != -1 ||
    name?.indexOf("🇲🇾") != -1 ||
    name?.indexOf("🇭🇰") != -1 ||
    name?.indexOf("🇻🇳") != -1 ||
    name?.indexOf("🇹🇭") != -1 ||
    name?.indexOf("🇬🇧") != -1 ||
    name?.indexOf("🇯🇵") != -1 ||
    name?.indexOf("🇺🇸") != -1 ||
    name?.indexOf("🇨🇳") != -1 ||
    name?.indexOf("🇸🇬") != -1
  ) {
    let fixLemonPrice = name.replace("🍏 ", "");
    let fixDoubleCarPrice = fixLemonPrice.replace(" 🏎", "");
    let fixDoubleSpaceCarPrice = fixDoubleCarPrice.replace(" 🛩", "");
    let fixCarPricePrice = fixDoubleSpaceCarPrice.replace(" 🚙", "");
    let flagSearch =
      fixCarPricePrice.search("🇪🇺") &
      fixCarPricePrice.search("🇷🇺") &
      fixCarPricePrice.search("🇰🇿") &
      fixCarPricePrice.search("🇿🇦") &
      fixCarPricePrice.search("🇮🇳") &
      fixCarPricePrice.search("🇦🇪") &
      fixCarPricePrice.search("🇲🇾") &
      fixCarPricePrice.search("🇭🇰") &
      fixCarPricePrice.search("🇻🇳") &
      fixCarPricePrice.search("🇹🇭") &
      fixCarPricePrice.search("🇬🇧") &
      fixCarPricePrice.search("🇯🇵") &
      fixCarPricePrice.search("🇺🇸") &
      fixCarPricePrice.search("🇨🇳") &
      fixCarPricePrice.search("🇸🇬");
    let length = fixCarPricePrice.length;

    let splitStartPriceFlag = fixCarPricePrice.substring(flagSearch, length);

    let splitFlagEU = splitStartPriceFlag.replace("🇪🇺", "");
    let splitFlagRU = splitFlagEU.replace("🇷🇺", "");
    let splitFlagKZ = splitFlagRU.replace("🇰🇿", "");
    let splitFlagZA = splitFlagKZ.replace("🇿🇦", "");
    let splitFlagIN = splitFlagZA.replace("🇮🇳", "");
    let splitFlagAE = splitFlagIN.replace("🇦🇪", "");
    let splitFlagMY = splitFlagAE.replace("🇲🇾", "");
    let splitFlagHK = splitFlagMY.replace("🇭🇰", "");
    let splitFlagVN = splitFlagHK.replace("🇻🇳", "");
    let splitFlagTH = splitFlagVN.replace("🇹🇭", "");
    let splitFlagGB = splitFlagTH.replace("🇬🇧", "");
    let splitFlagJP = splitFlagGB.replace("🇯🇵", "");
    let splitFlagUS = splitFlagJP.replace("🇺🇸", "");
    let splitFlagCN = splitFlagUS.replace("🇨🇳", "");
    let splitFlagSG = splitFlagCN.replace("🇸🇬", "");

    let reverseStr = splitFlagSG.split("").reverse().join("");
    let removeSpace1 = reverseStr[0] === " " ? reverseStr.slice(1) : reverseStr;
    let removeSpace2 =
      removeSpace1[0] === " " ? removeSpace1.slice(1) : removeSpace1;
    let removeSpace3 =
      removeSpace2[0] === " " ? removeSpace2.slice(1) : removeSpace2;

    let splitStartPrice = removeSpace3.split("  ")[0];
    let reverseBackStr = splitStartPrice.split("").reverse().join("");

    let fixCar = reverseBackStr?.replace("🏎", "");

    let splitPriceEU = name.replace(/🇪🇺.*/g, "🇪🇺");
    let splitPriceRU = splitPriceEU.replace(/🇷🇺.*/g, "🇷🇺");
    let splitPriceKZ = splitPriceRU.replace(/🇰🇿.*/g, "🇰🇿");
    let splitPriceZA = splitPriceKZ.replace(/🇿🇦.*/g, "🇿🇦");
    let splitPriceIN = splitPriceZA.replace(/🇮🇳.*/g, "🇮🇳");
    let splitPriceAE = splitPriceIN.replace(/🇦🇪.*/g, "🇦🇪");
    let splitPriceMY = splitPriceAE.replace(/🇲🇾.*/g, "🇲🇾");
    let splitPriceHK = splitPriceMY.replace(/🇭🇰.*/g, "🇭🇰");
    let splitPriceVN = splitPriceHK.replace(/🇻🇳.*/g, "🇻🇳");
    let splitPriceTH = splitPriceVN.replace(/🇹🇭.*/g, "🇹🇭");
    let splitPriceGB = splitPriceTH.replace(/🇬🇧.*/g, "🇬🇧");
    let splitPriceJP = splitPriceGB.replace(/🇯🇵.*/g, "🇯🇵");
    let splitPriceUS = splitPriceJP.replace(/🇺🇸.*/g, "🇺🇸");
    let splitPriceCN = splitPriceUS.replace(/🇨🇳.*/g, "🇨🇳");
    let splitPricesSG = splitPriceCN.replace(/🇸🇬.*/g, "🇸🇬");

    let fixLemon = splitPricesSG.replace("🍏 ", "");
    let fixDoubleCar = fixLemon.replace(" 🏎", "");
    let fixDoubleSpaceCar = fixDoubleCar.replace(" 🛩", "");
    let fixCarPrice = fixDoubleSpaceCar.replace(" 🚙", "");
    let fixAirPods = fixCarPrice.replace("🎧", "");
    let fixMacbook = fixAirPods.replace("💻", "");
    let fixAppleName = fixMacbook.replace("Apple", "");

    return newPrice(fixAppleName, fixCar);
  } else {
    let fixLemonPrice = name.replace("🍏 ", "");
    let fixDoubleCarPrice = fixLemonPrice.replace(" 🏎", "");
    let fixDoubleSpaceCarPrice = fixDoubleCarPrice.replace(" 🛩", "");
    let fixCarPricePrice = fixDoubleSpaceCarPrice.replace(" 🚙", "");

    let reverseStr = fixCarPricePrice.split("").reverse().join("");
    let removeSpace1 = reverseStr[0] === " " ? reverseStr.slice(1) : reverseStr;
    let removeSpace2 =
      removeSpace1[0] === " " ? removeSpace1.slice(1) : removeSpace1;
    let removeSpace3 =
      removeSpace2[0] === " " ? removeSpace2.slice(1) : removeSpace2;
    let splitStartPrice = removeSpace3.split(" ")[0];
    let reverseBackStr = splitStartPrice.split("").reverse().join("");

    let fixCar = reverseBackStr.replace("🏎", "");

    let fixLemon = name.replace("🍏 ", "");
    let fixDoubleCar = fixLemon.replace(" 🏎", "");
    let fixDoubleSpaceCar = fixDoubleCar.replace(" 🛩", "");
    let fixCarPrice = fixDoubleSpaceCar.replace(" 🚙", "");
    let fixAirPods = fixCarPrice.replace("🎧", "");
    let fixMacbook = fixAirPods.replace("💻", "");

    let reverseStrName = fixMacbook.split("").reverse().join("");
    let removeSpaceName1 =
      reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
    let removeSpaceName2 =
      removeSpaceName1[0] === " "
        ? removeSpaceName1.slice(1)
        : removeSpaceName1;
    let removeSpaceName3 =
      removeSpaceName2[0] === " "
        ? removeSpaceName2.slice(1)
        : removeSpaceName2;
    let splitPriceEU =
      removeSpaceName3.indexOf(" ") != -1
        ? /\s(.+)/.exec(removeSpaceName3)[1]
        : removeSpaceName3;
    let reverseBackStrName = splitPriceEU.split("").reverse().join("");

    return newPrice(reverseBackStrName, fixCar);
  }
};

export const returnStockPriceHi = (name) => {
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  let replaceCar = removeDoubleSpace.replace(" 🏎️", "");
  let fixZero = replaceCar.replace("🛩️", "");


  let reverseStrName = fixZero.split("").reverse().join("");
  let checkSpace =
    reverseStrName[0] === " "
      ? reverseStrName.replace(" ", "")
      : reverseStrName;
  let checkSpace1 =
    checkSpace[0] === " " ? checkSpace.replace(" ", "") : checkSpace;
  let checkSpace2 =
    checkSpace1[0] === " " ? checkSpace1.replace(" ", "") : checkSpace1;
  let checkSpace3 =
    checkSpace1[0] === " " ? checkSpace2.replace(" ", "") : checkSpace2;
  let splitPrice = checkSpace3.split(" ")[0];
  const removeDoubleSpace2 = splitPrice.replace(" ", "");

  let slicePrice =
    reverseStrName.indexOf("-") !== -1
      ? reverseStrName.split("-")[0]
      : reverseStrName;

  let reverseBackStrName = slicePrice.split("").reverse().join("");
  let w = reverseBackStrName.replace(" ", "");
  let s = w.replace(" ", "");

  let removeStick = s.replace("-", "")
  
  let fixZero1 = removeStick.replace("0️", "0");

  return fixZero1.replace(" ", "");
};


export const fixNameHi = (name) => {
  // const toLowercase = name.toLowerCase();
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  let fixCar = removeDoubleSpace.replace("🛩", "");
  let fixCar1 = fixCar.replace("🏎", "");
  let fixCar2 = fixCar1.replace("🚙", "");
  let fixCar3 = fixCar2.replace("🚕", "");
  let fixCar4 = fixCar3.replace("🚚", "");
  let fixCar5 = fixCar4.replace("🚗", "");
  let fixCar6 = fixCar5.replace("🚘", "");
  let fixCar7 = fixCar6.replace("🚖", "");
  let fixKeyboard = fixCar7.replace("⌨️", "Keyboard ");
  
  let fixCar8 = fixKeyboard.replace("🛩️", "");
  
  let fixZero = fixCar8.replace("0️", "0");
  // let fixCar8 = fixCar7.replace("🏎️", "");
  
  

  const fixPlus = fixZero.replace("S24 +", "S24+");
  const fixMarbleGray = fixPlus.replace(
    "S24 8/128 Gray",
    "S24 8/128 Marble Gray"
  );
  const fixCobaltViolet = fixMarbleGray.replace(
    "S24 8/128 Violet",
    "S24 8/128 Cobalt Violet"
  );
  const fixAmberYellow = fixCobaltViolet.replace(
    "S24 8/128 Yellow",
    "S24 8/128 Amber Yellow"
  );
  const fixJadeGreen = fixAmberYellow.replace(
    "S24 8/128 Green",
    "S24 8/128 Jade Green"
  );
  const fixSandstoneOrange = fixJadeGreen.replace(
    "S24 8/128 Orange",
    "S24 8/128 Sandstone Orange"
  );
  const fixSandstoreOrange = fixSandstoneOrange.replace(
    "S24 8/128 Orange",
    "S24 8/128 Sandstore Orange"
  );
  const fixSapphireBlue = fixSandstoreOrange.replace(
    "S24 8/128 Blue",
    "S24 8/128 Sapphire Blue"
  );

  const fixMarbleGray256 = fixSapphireBlue.replace(
    "S24 8/256 Gray",
    "S24 8/256 Marble Gray"
  );
  const fixCobaltViolet256 = fixMarbleGray256.replace(
    "S24 8/256 Violet",
    "S24 8/256 Cobalt Violet"
  );
  const fixAmberYellow256 = fixCobaltViolet256.replace(
    "S24 8/256 Yellow",
    "S24 8/256 Amber Yellow"
  );
  const fixOnyxBlack256 = fixAmberYellow256.replace(
    "S24 8/256 Black",
    "S24 8/256 Onyx Black"
  );
  const fixJadeGreen256 = fixOnyxBlack256.replace(
    "S24 8/256 Green",
    "S24 8/256 Jade Green"
  );
  const fixSandstoneOrange256 = fixJadeGreen256.replace(
    "S24 8/256 Orange",
    "S24 8/256 Sandstone Orange"
  );
  const fixSapphireBlue256 = fixSandstoneOrange256.replace(
    "S24 8/256 Blue",
    "S24 8/256 Sapphire Blue"
  );

  const fixMarbleGray12256 = fixSapphireBlue256.replace(
    "S24 12/256 Gray",
    "S24 12/256 Marble Gray"
  );
  const fixCobaltViolet12256 = fixMarbleGray12256.replace(
    "S24 12/256 Violet",
    "S24 12/256 Cobalt Violet"
  );
  const fixAmberYellow12256 = fixCobaltViolet12256.replace(
    "S24 12/256 Yellow",
    "S24 12/256 Amber Yellow"
  );
  const fixOnyxBlack12256 = fixAmberYellow12256.replace(
    "S24 12/256 Black",
    "S24 12/256 Onyx Black"
  );
  const fixJadeGreen12256 = fixOnyxBlack12256.replace(
    "S24 12/256 Green",
    "S24 12/256 Jade Green"
  );
  const fixSandstoneOrange12256 = fixJadeGreen12256.replace(
    "S24 12/256 Orange",
    "S24 12/256 Sandstone Orange"
  );
  const fixSapphireBlue12256 = fixSandstoneOrange12256.replace(
    "S24 12/256 Blue",
    "S24 12/256 Sapphire Blue"
  );

  const fixMarbleGray12512 = fixSapphireBlue12256.replace(
    "S24 12/512 Gray",
    "S24 12/512 Marble Gray"
  );
  const fixCobaltViolet12512 = fixMarbleGray12512.replace(
    "S24 12/512 Violet",
    "S24 12/512 Cobalt Violet"
  );
  const fixAmberYellow12512 = fixCobaltViolet12512.replace(
    "S24 12/512 Yellow",
    "S24 12/512 Amber Yellow"
  );
  const fixOnyxBlack12512 = fixAmberYellow12512.replace(
    "S24 12/512 Black",
    "S24 12/512 Onyx Black"
  );
  const fixJadeGreen12512 = fixOnyxBlack12512.replace(
    "S24 12/512 Green",
    "S24 12/512 Jade Green"
  );
  const fixSandstoneOrange12512 = fixJadeGreen12512.replace(
    "S24 12/512 Orange",
    "S24 12/512 Sandstone Orange"
  );
  const fixSapphireBlue12512 = fixSandstoneOrange12512.replace(
    "S24 12/512 Blue",
    "S24 12/512 Sapphire Blue"
  );

  const fixMarbleGrayPlus12256 = fixSapphireBlue12512.replace(
    "S24+ 12/256 Gray",
    "S24+ 12/256 Marble Gray"
  );
  const fixCobaltVioletPlus12256 = fixMarbleGrayPlus12256.replace(
    "S24+ 12/256 Violet",
    "S24+ 12/256 Cobalt Violet"
  );
  const fixAmberYellowPlus12256 = fixCobaltVioletPlus12256.replace(
    "S24+ 12/256 Yellow",
    "S24+ 12/256 Amber Yellow"
  );
  const fixOnyxBlackPlus12256 = fixAmberYellowPlus12256.replace(
    "S24+ 12/256 Black",
    "S24+ 12/256 Onyx Black"
  );
  const fixJadeGreenPlus12256 = fixOnyxBlackPlus12256.replace(
    "S24+ 12/256 Green",
    "S24+ 12/256 Jade Green"
  );
  const fixSandstoneOrangePlus12256 = fixJadeGreenPlus12256.replace(
    "S24+ 12/256 Orange",
    "S24+ 12/256 Sandstone Orange"
  );
  const fixSapphireBluePlus12256 = fixSandstoneOrangePlus12256.replace(
    "S24+ 12/256 Blue",
    "S24+ 12/256 Sapphire Blue"
  );

  const fixMarbleGrayPlus12512 = fixSapphireBluePlus12256.replace(
    "S24+ 12/512 Gray",
    "S24+ 12/512 Marble Gray"
  );
  const fixCobaltVioletPlus12512 = fixMarbleGrayPlus12512.replace(
    "S24+ 12/512 Violet",
    "S24+ 12/512 Cobalt Violet"
  );
  const fixAmberYellowPlus12512 = fixCobaltVioletPlus12512.replace(
    "S24+ 12/512 Yellow",
    "S24+ 12/512 Amber Yellow"
  );
  const fixOnyxBlackPlus12512 = fixAmberYellowPlus12512.replace(
    "S24+ 12/512 Black",
    "S24+ 12/512 Onyx Black"
  );
  const fixJadeGreenPlus12512 = fixOnyxBlackPlus12512.replace(
    "S24+ 12/512 Green",
    "S24+ 12/512 Jade Green"
  );
  const fixSandstoneOrangePlus12512 = fixJadeGreenPlus12512.replace(
    "S24+ 12/512 Orange",
    "S24+ 12/512 Sandstone Orange"
  );
  const fixSapphireBluePlus12512 = fixSandstoneOrangePlus12512.replace(
    "S24+ 12/512 Blue",
    "S24+ 12/512 Sapphire Blue"
  );

  const fixZFlip5 = fixSapphireBluePlus12512.replace("Z Flip5", "Z Flip 5");
  const fixZFlip6 = fixZFlip5.replace("Z Flip6", "Z Flip 6");
  const fixBeige = fixZFlip6.replace("Beigie", "Beige");
  const fixS95g = fixBeige.replace("Tab S9 5g 8/128", "Tab S9 8/128 lte");
  const fixOrange = fixS95g.replace("Orange Beige", "Orange");
  const fixGray = fixOrange.replace("Green Gray", "Gray");
  const fixTabS9Plus = fixGray.replace("S9 +", "S9+");
  const fixTabS9FE = fixTabS9Plus.replace("FE +", "FE+");
  const fixMM = fixTabS9FE.replace("mm", "");
  const fixBlackBlue = fixMM.replace("Black Blue", "Blue/Black");
  const fixIceBlue = fixBlackBlue.replace("Ice Blue", "IceBlue");
  const fixLavender = fixIceBlue.replace("Lavender", "Lavender");
  const fixZFold5 = fixLavender.replace("Z Fold5", "Z Fold 5");
  const fixZFold6 = fixZFold5.replace("Z Fold6", "Z Fold 6");
  const fix13C = fixZFold6.replace("13C", "13c");

  const fixA256128 = fix13C.replace("A25 6/128 Black", "A25 6/128 Blue/Black");
  const fixA258128 = fixA256128.replace(
    "A25 8/128 Black",
    "A25 8/128 Blue/Black"
  );
  const fixF258256 = fixA258128.replace(
    "A25 8/256 Black",
    "A25 8/256 Blue/Black"
  );

  const fixS248128 = fixF258256.replace(
    "S24 8/128 Yellow",
    "S24 8/128 Amber Yellow"
  );
  const fixS248256 = fixS248128.replace(
    "S24 8/256 Yellow",
    "S24 8/256 Amber Yellow"
  );
  const fixS248512 = fixS248256.replace(
    "S24 8/512 Yellow",
    "S24 8/512 Amber Yellow"
  );
  const fixS2412256 = fixS248512.replace(
    "S24 12/256 Yellow",
    "S24 12/256 Amber Yellow"
  );

  const fixZFold5121 = fixS2412256.replace(
    "Z Fold 5 12/1tb IceBlue",
    " Z Fold 5 12/1tb Icy Blue"
  );
  const fixZFold512512 = fixZFold5121.replace(
    "Z Fold 5 12/512 IceBlue",
    " Z Fold 5 12/512 Icy Blue"
  );
  const fixZFold12256 = fixZFold512512.replace(
    "Z Fold 5 12/256 IceBlue",
    " Z Fold 5 12/256 Icy Blue"
  );

  const removeLightGreen = fixZFold12256.replace("Light Green", "Green");
  const removeLightViolet = removeLightGreen.replace("Light Violet", "Violet");

  const removeWatch4 = removeLightViolet.replace("Watch4", "Watch 4");
  const removeWatch5 = removeWatch4.replace("Watch5", "Watch 5");
  const removeWatch6 = removeWatch5.replace("Watch6", "Watch 6");
  const removeWatch7 = removeWatch6.replace("Watch7", "Watch 7");

  const removeWatchS8 = removeWatch7.replace("S 8 ", "S8 ");
  const removeWatchS9 = removeWatchS8.replace("S 9 ", "S9 ");

  const fixBlueBlack = removeWatchS9.replace("Blue Black", "Blue/Black");
  const fixGrey = fixBlueBlack.replace("Grey", "Gray");

  const fixA155G = fixGrey.replace("A15 5G", "A15");
  const fixA255G = fixA155G.replace("A25 5G", "A25");
  const fixA355G = fixA255G.replace("A35 5G", "A35");
  const fixUSBC = fixA355G.replace("(USB-C)", "USB-C");
  const fix16e = fixUSBC.replace("16Е", "16e");
  const fixA545G = fix16e.replace("A54 5G", "A54");
  const fixA555G = fixA545G.replace("A55 5G", "A55");

  const fixXperia5G =
    fixA555G.indexOf("Xperia") != -1 ? fixA555G.replace("5G ", "") : fixA555G;
  const fixPixel5G =
    fixXperia5G.indexOf("Pixel") != -1
      ? fixXperia5G.replace("5G ", "")
      : fixXperia5G;

  const replaceGB = fixPixel5G.replace("GB", "");
  const fix1024 = replaceGB.replace("1024", "1Tb");

  return fix1024.replace("S24 8/128 Black", "S24 8/128 Onyx Black");
};
