import { newPrice } from "../../../helpers/NewPrice";

export const returnFixNameDiscount = (name) => {
  const replaceGb = name.replace("Gb", "");
  const replaceMi12Lite = replaceGb.replace("12 Lite 5G", "Mi 12 Lite");
  const replaceMi12 = replaceMi12Lite.replace("12 5G ", "Mi 12 ");
  const replaceMi13 = replaceMi12.replace("13 5G ", "Mi 13 ");
  const replaceMi14 = replaceMi13.replace("14 5G ", "Mi 14 ");
  const fixiPadLTE =
    replaceMi14.indexOf("iPad") !== -1
      ? replaceMi14.replace("5G", "LTE")
      : replaceMi14;

  const replaceGB = fixiPadLTE.replace("GB", "");
  const replace4G = replaceGB.replace("4G ", "");
  const replaceProPlus = replace4G.replace("Pro+", "Pro +");
  const replaceAwesome = replaceProPlus.replace("Awesome ", "");
  const fix16PM = replaceAwesome.replace("16 Prо Maх", "16 Pro Max");
  const replace2sim = fix16PM.replace("2sim ", "");
  const fixSE3 = replace2sim.replace("SE 3", "SE3");
  const fixS9 = fixSE3.replace("AW 9", "S9");
  const fixS10 = fixS9.replace("AW 10", "S10"); 
  const fixSteamDeck = fixS10.replace("SteamDeck", "Steam Deck");
  const replacedual = fixSteamDeck.replace("DUAL", "");
  const fixPrо = replacedual.replace("Prо", "Pro");
  const replaceSE = fixPrо.replace("SE 8.7", "SE");
  const replaceNoteBlue =
    replaceSE.indexOf("Note ") !== -1
      ? replaceSE.replace("Ice Blue", "Blue")
      : replaceSE;
  const replaceNoteMidnight =
    replaceNoteBlue.indexOf("Note ") !== -1
      ? replaceNoteBlue.replace("Midnight ", "")
      : replaceNoteBlue;
  const replaceNoteMint =
    replaceNoteMidnight.indexOf("Note ") !== -1
      ? replaceNoteMidnight.replace("Mint ", "")
      : replaceNoteMidnight;
  const replaceNoteForest =
    replaceNoteMint.indexOf("Note ") !== -1
      ? replaceNoteMint.replace("Forest ", "")
      : replaceNoteMint;
  const replaceNoteLavender =
    replaceNoteForest.indexOf("Note ") !== -1
      ? replaceNoteForest.replace("Lavender ", "")
      : replaceNoteForest;
  const fixMi12Purple =
    replaceNoteLavender.indexOf("Mi 12") !== -1
      ? replaceNoteLavender.replace("purple", "Pink")
      : replaceNoteLavender;
  const fixMi14Silver =
    fixMi12Purple.indexOf("Mi 14") !== -1
      ? fixMi12Purple.replace("white", "Silver")
      : fixMi12Purple;
  const fixMini6 =
    fixMi14Silver.indexOf("MINI 6") !== -1
      ? fixMi14Silver.replace("Black", "Gray")
      : fixMi14Silver;

  const fixthirdGeneration = fixMini6.replace("(3rd Gen)", "3");
  const fixSplatoon3 = fixthirdGeneration.replace("Splatoon 3", "Splatoon 3 ");
  const fixMagSafe = fixSplatoon3.replace("MagSafe", "MagSafe ");
  const fixStick = fixMagSafe.replace("-", "- ");
  const fixStickUsbC = fixStick.replace("usbc", "usb-c");
  const fixS23Plus = fixStickUsbC.replace("S23 +", "S2+");
  const fixS24Plus = fixS23Plus.replace("S24 +", "S24+");
  const fixZFlip5 = fixS24Plus.replace("Flip5", "Flip 5");
  const fixZFlip6 = fixZFlip5.replace("Flip6", "Flip 6");
  const fixZFold5 = fixZFlip6.replace("Fold5", "Fold 5");
  const fixZFold6 = fixZFold5.replace("Fold6", "Fold 6");
  const replace375 = fixZFold6.replace("3.75", "");
  const replaceLeica = replace375.replace("Leica ", "");
  const fixPS5 = replaceLeica.replace("Playstation Slim Disk", "PS5 Slim Disk");

  const fixDSWhite = fixPS5.replace("SONY Белый", "Dualsense White");
  const fixDSBlack = fixDSWhite.replace("SONY Чёрный", "Dualsense Black");
  const fixDSPink = fixDSBlack.replace("SONY Розовый", "Dualsense Pink");
  const fixDSBlue = fixDSPink.replace("SONY Синий", "Dualsense Blue");
  const fixDSRed = fixDSBlue.replace("SONY Красный", "Dualsense Red");
  const fixDSPurple = fixDSRed.replace("SONY Фиолетовый", "Dualsense Purple");
  const fixWiFi = fixDSPurple.replace("Wi- Fi", "Wi-Fi");
  const fixWiFi1 = fixWiFi.replace("WIFI", "Wi-Fi");
  const fixWi = fixWiFi1.replace("Wi ", "Wi-Fi");
  const fixWiFi2 = fixWi.replace("WiFi", "Wi-Fi");
  const replace2Sim = fixWiFi2.replace("2Sim", "");
  const replace = replace2Sim.replace("наша вилка", "");
  const fixPurple = replace.replace("Pruple", "Purple");
  const fix1TB = fixPurple.replace("/1024 ", "/1TB ");
  const fixiPadAir11 = fix1TB.replace("iPad Air 8 11 ", "iPad Air 11 ");
  
  const fixiPadAir13 = fixiPadAir11.replace("iPad Air 8 13 ", "iPad Air 13 ");
  const fixPS5Pro = fixiPadAir13.replace("PlayStation Pro", "PlayStation 5 Pro");
  const fixPS5Disc = fixPS5Pro.replace("Disk", "Disc");
  const fixWhite = fixPS5Disc.replace("Белый", "White");
  const fixBlack = fixWhite.replace("Черный", "Black");
  const fixViolet = fixBlack.replace("Фиолетовый", "Purple");
  const fixStarlight = fixViolet.replace("Strarlight", "Starlight");
  const replaceA356 = fixStarlight.replace("(A356) ", "");
  const replacePS51 = replaceA356.replace(" 🇭🇰2118А 2рев", "");
  const replacePS52 = replacePS51.replace("1рев 2000a", "");
  const replacePS53 = replacePS52.replace("1рев 2000в", "");
  
  const fixLavander = replacePS53.replace("Lavander", "Lavender");
  const fixGray = fixLavander.replace("Grey", "Gray");
  const replace5g =
    fixGray.indexOf("SM") !== -1 ||
    fixGray.indexOf("A3") !== -1 ||
    fixGray.indexOf("A2") !== -1 ||
    fixGray.indexOf("A1") !== -1 ||
    fixGray.indexOf("A5") !== -1
      ? fixGray.replace("5G ", "")
      : fixGray;

  return replace5g;
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

export const returnNameInArrDiscount = (name) => {
  const fixFlags = checkFlags(name);

  let reverseStrName = fixFlags.split("").reverse().join("");
  let splitPrice =
    reverseStrName.indexOf(" ") !== -1
      ? /\s(.+)/.exec(reverseStrName)[1]
      : reverseStrName;
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceDiscount = (name) => {
  let replaceEU = name.replace("🇪🇺", "");
  let replaceAE = replaceEU.replace("🇦🇪", "");
  let replacePY = replaceAE.replace("🇵🇾", "");
  let replaceIN = replacePY.replace("🇮🇳", "");
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
  let replaceGU = replaceKR.replace("🇬🇺", "");
  let replaceDot = replaceGU.replace(".", "");
  let replacePA = replaceDot.replace("🇵🇦", "");
  let replaceSM = replacePA.replace("SM-", "SM");
  let replace = replaceSM.replace(",", "");
  let replace2Sim = replace.replace("2Sim", "");

  let reverseStrName = replace2Sim.split("").reverse().join("");
  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  // let splitPrice = checkSpace4.split(" ")[0];
  let removeStick =
    checkSpace4.indexOf("–") !== -1
      ? checkSpace4.split("–")[0]
      : checkSpace4.split(" ")[0];

  let removeStick2 =
    removeStick.indexOf("-") !== -1 ? removeStick.split("-")[0] : removeStick;

  let removeSpace =
    removeStick2.indexOf(" ") !== -1
      ? removeStick2.replace(" ", "")
      : removeStick2;
  let reverseBackStrName = removeSpace.split("").reverse().join("");

  let remove2Sim =
    reverseBackStrName.indexOf("2sim") !== -1
      ? reverseBackStrName.replace("2sim", "")
      : reverseBackStrName;
  let replaceWhiteColor = remove2Sim.replace("⚪️", "");
  let replaceRub = replaceWhiteColor.replace("₽", "");

  return replaceRub;
};

export const returnExtraPriceRacmag = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = reverseStrName.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return newPrice(returnNameInArrDiscount(name), reverseBackStrName);
};
