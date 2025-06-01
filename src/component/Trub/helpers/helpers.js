import { newPrice } from "../../../helpers/NewPrice";

export const fixNameTrub = (name) => {
  const replaceCheckbox = name.replace("✅", "");
  const replaceBlock = replaceCheckbox.replace("без СЗУ", "");
  const replaceNFC = replaceBlock.replace("NFC", "");
  const replaceKeyboard = replaceNFC.replace("+Чехол-клавиатура", "");
  const replaceKeyboardWithTouchpad = replaceKeyboard.replace(
    "+ Чехол-клавиатура с тачпадом",
    ""
  );
  const fixBlackRus = replaceKeyboardWithTouchpad.replace("Черный", "Black");
  const fixNavyRus = fixBlackRus.indexOf("Z Fold") !== -1 ? replaceKeyboardWithTouchpad.replace(" Темно-Синий", "Navy") : fixBlackRus
  const fixBlackRus1 = fixNavyRus.replace("Чёрный", "Black");
  const fixS9FEPlus = fixBlackRus1.replace("S9FE+", "S9 Fe +");
  const fixS9FE = fixS9FEPlus.replace("S9FE", "S9 FE");
  const fixA164G = fixS9FE.replace("4G ", "");
  const fixS10Plus = fixA164G.replace("S10+", "S10 +");
  const fixA9Plus = fixS10Plus.replace("A9+", "A9 +");
  const fixS25Plus = fixA9Plus.replace("S25 Plus", "S25+");
  const fixS24Plus = fixS25Plus.replace("S24 Plus", "S24+");
  const fixS24FE = fixS24Plus.replace("S24FE", "S24 FE");
  const fixS23FE = fixS24FE.replace("S23FE", "S23 FE");
  const fixS22FE = fixS23FE.replace("S22FE", "S22 FE");
  const fixS21FE = fixS22FE.replace("S21FE", "S21 FE");
  const fixS20FE = fixS21FE.replace("S20FE", "S20 FE");
  const fixS23Plus = fixS20FE.replace("S23 Plus", "S23+");
  const fixS22Plus = fixS23Plus.replace("S22 Plus", "S22+");
  const fixS21Plus = fixS22Plus.replace("S21 Plus", "S21+");
  const fixS20Plus = fixS21Plus.replace("S20 Plus", "S20+");
  const replaceWhite = fixS20Plus.replace("Белый", "");
  const fixGreen = replaceWhite.replace("Зеленый", "Green");
  const fixYellow = fixGreen.replace("Желтый", "Yellow");
  const fixPurple = fixYellow.replace("Фиолетовый", "Purple");
  const fixBlueRu1 = fixPurple.replace("Синий", "Blue");
  const fixCoral = fixBlueRu1.replace("Coral", "Red");
  const fixSilverRu = fixCoral.replace("Серебро", "Silver");
  const fixGraphiteRu =
    fixSilverRu.indexOf("S10 ") !== -1 || fixSilverRu.indexOf("S9 ") !== -1
      ? fixSilverRu.replace("Графит", "Gray")
      : fixSilverRu.replace("Графит", "Graphite");
  const fixBeigeRu = fixGraphiteRu.replace("Бежевый", "Beige");
  const fixLavenderRu = fixBeigeRu.replace("Лаванда", "Lavender");
  const fixMintRu = fixLavenderRu.replace("Мятный", "Mint");
  const fixMintRu1 = fixMintRu.replace("Мята", "Mint");
  const fixGoldRu = fixMintRu1.replace("золото", "Gold");
  const fixGrayRu =
    fixGoldRu.indexOf("Magic 7 Pro") !== -1
      ? fixGoldRu.replace("Серый", "White")
      : fixGoldRu.replace("Серый", "Gray");
  const fixBlackRu = fixGrayRu.replace("Черный", "Black");
  const fixBlueRu = fixBlackRu.replace("Голубой", "Blue");
  const fixPinkRu = fixBlueRu.replace("Розовый", "Pink");
  const fixGray = fixPinkRu.replace("Grey", "Gray");
  
  const fixA =
  fixGray.indexOf("А16") !== -1 ||
    fixGray.indexOf("А25") !== -1 ||
    fixGray.indexOf("А26") !== -1 ||
    fixGray.indexOf("А35") !== -1 ||
    fixGray.indexOf("А36") !== -1 ||
    fixGray.indexOf("А55") !== -1 ||
    fixGray.indexOf("А56") !== -1
      ? fixGray.replace("А", "A")
      : fixGray;
      const fixA5G =
      fixA.indexOf("A25") !== -1 ||
      fixA.indexOf("A26") !== -1 ||
      fixA.indexOf("A35") !== -1 ||
      fixA.indexOf("A36") !== -1 ||
      fixA.indexOf("A55") !== -1 ||
      fixA.indexOf("A56") !== -1
        ? fixA.replace("5G ", "")
        : fixA;
  const replace1Sim = fixA5G.replace("1sim", "");
  const fixPixel5G =
    replace1Sim.indexOf("Pixel") != -1 ||
    replace1Sim.indexOf("M55") != -1 ||
    replace1Sim.indexOf("S21") != -1 ||
    replace1Sim.indexOf("А36") != -1 ||
    replace1Sim.indexOf("А56") != -1 ||
    replace1Sim.indexOf("А25") != -1 ||
    replace1Sim.indexOf("А26") != -1 ||
    replace1Sim.indexOf("А35") != -1 ||
    replace1Sim.indexOf("А54") != -1 ||
    replace1Sim.indexOf("S22") != -1 ||
    replace1Sim.indexOf("S23") != -1 ||
    replace1Sim.indexOf("S24") != -1 ||
    replace1Sim.indexOf("S25") != -1
      ? replace1Sim.replace("5G ", "")
      : replace1Sim;

  return fixPixel5G;
};

const checkFlags = (str) => {
  let checkSpace1 = str[str.length - 1] === " " ? str.slice(0, -1) : str;
  let checkSpace2 =
    checkSpace1[checkSpace1.length - 1] === " "
      ? checkSpace1.slice(0, -1)
      : checkSpace1;
  let checkSpace3 =
    checkSpace2[checkSpace2.length - 1] === " "
      ? checkSpace2.slice(0, -1)
      : checkSpace2;
  let checkSpace4 =
    checkSpace3[checkSpace3.length - 1] === " "
      ? checkSpace3.slice(0, -1)
      : checkSpace3;

  if (
    checkSpace4.slice(-4) === `🇯🇵` ||
    checkSpace4.slice(-4) === "🇮🇳" ||
    checkSpace4.slice(-4) === "🇪🇺" ||
    checkSpace4.slice(-4) === "🇦🇪" ||
    checkSpace4.slice(-4) === "🇧🇷" ||
    checkSpace4.slice(-4) === "🇻🇳" ||
    checkSpace4.slice(-4) === "🇰🇼" ||
    checkSpace4.slice(-4) === "🇺🇸" ||
    checkSpace4.slice(-4) === "🇭🇰" ||
    checkSpace4.slice(-4) === "🇬🇧" ||
    checkSpace4.slice(-4) === "🇨🇳" ||
    checkSpace4.slice(-4) === "🇹🇼" ||
    checkSpace4.slice(-4) === "🇷🇺" ||
    checkSpace4.slice(-4) === "🇦🇺" ||
    checkSpace4.slice(-4) === "🇨🇦" ||
    checkSpace4.slice(-4) === "🇨🇱" ||
    checkSpace4.slice(-4) === "🇹🇭" ||
    checkSpace4.slice(-4) === "🇸🇬" ||
    checkSpace4.slice(-4) === "🇲🇾" ||
    checkSpace4.slice(-4) === "🇨🇫" ||
    checkSpace4.slice(-4) === "🇰🇿" ||
    checkSpace4.slice(-4) === "🇰🇷" ||
    checkSpace4.slice(-4) === "🇬🇺"
  ) {
    return (
      checkSpace4.slice(-4) + checkSpace4.substring(0, checkSpace4.length - 4)
    );
  } else {
    return checkSpace4;
  }
};

export const returnNameInArrTrub = (name) => {
  const fixFlags = checkFlags(name);

  let reverseStrName = fixFlags.split("").reverse().join("");

  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  let splitPrice =
    checkSpace4.indexOf(" ") !== -1
      ? /\s(.+)/.exec(checkSpace4)[1]
      : checkSpace4;
  // let replaceStick = /\s(.+)/.exec(splitPrice)[1];

  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceTrub = (name) => {
  let replaceEU = name.replace("🇪🇺", "");
  let replaceAE = replaceEU.replace("🇦🇪", "");
  let replaceIN = replaceAE.replace("🇮🇳", "");
  let replaceBR = replaceIN.replace("🇧🇷", "");
  let replaceJP = replaceBR.replace("🇯🇵", "");
  let replaceVN = replaceJP.replace("🇻🇳", "");
  let replaceKW = replaceVN.replace("🇰🇼", "");
  let replaceUS = replaceKW.replace("🇺🇸", "");
  let replaceHK = replaceUS.replace("🇭🇰", "");
  let replaceGB = replaceHK.replace("🇬🇧", "");
  let replaceCN = replaceGB.replace("🇨🇳", "");
  let replaceTW = replaceCN.replace("🇹🇼", "");
  let replaceBU = replaceTW.replace("🇷🇺", "");
  let replaceAU = replaceBU.replace("🇦🇺", "");
  let replaceCA = replaceAU.replace("🇨🇦", "");
  let replaceCL = replaceCA.replace("🇨🇱", "");
  let replaceTH = replaceCL.replace("🇹🇭", "");
  let replaceSG = replaceTH.replace("🇸🇬", "");
  let replaceMY = replaceSG.replace("🇲🇾", "");
  let replaceCF = replaceMY.replace("🇨🇫", "");
  let replaceKZ = replaceCF.replace("🇰🇿", "");
  let replaceKR = replaceKZ.replace("🇰🇷", "");
  let replaceZA = replaceKR.replace("🇿🇦", "");
  let replacePY = replaceZA.replace("🇵🇾", "");

  let reverseBackStrName = replacePY.split("").reverse().join("");

  let checkSpace1 =
    reverseBackStrName[0] === " "
      ? reverseBackStrName.slice(1)
      : reverseBackStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  let removeOther = checkSpace4.indexOf(" ")
    ? checkSpace4.split(" ")[0]
    : checkSpace4;

  let reverseStrName = removeOther.split("").reverse().join("");

  let replaceSilverblue = reverseStrName.replace("Silverblue", "")

  return replaceSilverblue;
};

export const returnExtraPriceS5 = (name) => {
  let replaceEU = name.replace("🇪🇺", "");
  let replaceAE = replaceEU.replace("🇦🇪", "");
  let replaceIN = replaceAE.replace("🇮🇳", "");
  let replaceBR = replaceIN.replace("🇧🇷", "");
  let replaceJP = replaceBR.replace("🇯🇵", "");
  let replaceVN = replaceJP.replace("🇻🇳", "");
  let replaceKW = replaceVN.replace("🇰🇼", "");
  let replaceUS = replaceKW.replace("🇺🇸", "");
  let replaceHK = replaceUS.replace("🇭🇰", "");
  let replaceGB = replaceHK.replace("🇬🇧", "");
  let replaceCN = replaceGB.replace("🇨🇳", "");
  let replaceTW = replaceCN.replace("🇹🇼", "");
  let replaceBU = replaceTW.replace("🇷🇺", "");
  let replaceAU = replaceBU.replace("🇦🇺", "");
  let replaceCA = replaceAU.replace("🇨🇦", "");
  let replaceCL = replaceCA.replace("🇨🇱", "");
  let replaceTH = replaceCL.replace("🇹🇭", "");
  let replaceSG = replaceTH.replace("🇸🇬", "");
  let replaceMY = replaceSG.replace("🇲🇾", "");
  let replaceCF = replaceMY.replace("🇨🇫", "");
  let replaceKZ = replaceCF.replace("🇰🇿", "");
  let replaceKR = replaceKZ.replace("🇰🇷", "");
  let replaceBuds3White = replaceKR.replace("Buds 3 White", "");
  let replaceS9feLavander = replaceBuds3White.replace(
    "Tab S9FE 8/256 Lavender 5G",
    ""
  );

  let reverseStrName = replaceS9feLavander.split("").reverse().join("");

  let splitPrice =
    reverseStrName.indexOf("-") != -1
      ? reverseStrName.split("-")[0]
      : reverseStrName.split(" ")[0];
  let replaceSpace = splitPrice.replace(" ", "");
  let replaceDoubleSpace = replaceSpace.replace(" ", "");

  let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  return newPrice(fixNameTrub(name), reverseBackStrName);
};
