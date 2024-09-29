import { newPrice } from "../../../helpers/NewPrice";

export const fixNameS5 = (name) => {
  const replaceHeadphone = name.replace("🎧", "");

  const replacePencil = replaceHeadphone.replace("✏️", "");
  const replaceAfterChange = replacePencil.replace("(после обмена)", "");
  const replace2Sim = replaceAfterChange.replace("(2-sim)", "");
  const replacePred = replace2Sim.replace("(пред актив)", "");
  const replaceSM = replacePred.replace("S/M", "");
  const replaceML = replaceSM.replace("M/L", "");
  const replaceVilka = replaceML.replace("(наша вилка)", "");
  const replace1TB = replaceVilka.replace("1 TB", "1TB");
  const replaceGB = replace1TB.replace("Gb", "");
  const replaceAirpods = replaceGB.replace("Air Pods", "AirPods");
  const replaceStarlight = replaceAirpods.replace(
    "13 128  starting",
    "13 128 Starlight"
  );
  const replaceMM = replaceStarlight.replace(" mm", "");
  const replaceM42024 = replaceMM.replace("M4 2024", "M4");
  const replaceSpaceGray = replaceM42024.replace("Space Gray", "Gray");
  const replaceiPad9Grey = replaceSpaceGray.replace("9 64 Grey", "9 64 Gray");
  const replaceA35IceBlue = replaceiPad9Grey.indexOf("35")
    ? replaceSpaceGray.replace("ice blue", "iceblue")
    : replaceSpaceGray;
    const replaceNote13ProPlus = (replaceA35IceBlue.indexOf("Pro Plus") && replaceA35IceBlue.indexOf("5G"))
    ? replaceA35IceBlue.replace("Pro Plus", "Pro Plus 5G")
    : replaceA35IceBlue;
    const replaceProPlus = replaceNote13ProPlus.replace("Pro Plus", "Pro +");
    const replace4G = replaceProPlus.replace(" 4G", "");
    const replaceA9Plus = replace4G.replace("A9+", "A9 +");
    const replaceMagsafe = replaceA9Plus.replace("AirPods Pro MagSafe 2", "AirPods Pro 2");
    const replaceS9Plus = replaceMagsafe.replace("S9 Plus", "S9 +");
    const replaceTabA9 = replaceS9Plus.replace("A9 128", "Tab A9 128");
    const replaceTabA9Plus = replaceTabA9.replace("A9 + 128", "Tab A9 + 128");
    const replaceFEPlus = replaceTabA9Plus.replace("FE+", "FE +");
    const replaceS9FE = replaceFEPlus.replace("S9FE", "S9 FE");

  return replaceS9FE;
};

export const returnNameInArrS5 = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = /\s(.+)/.exec(reverseStrName)[1];
  let replaceStick = /\s(.+)/.exec(splitPrice)[1];

  let checkTriple = reverseStrName.split("-")[4]
    ? `${reverseStrName.split("-")[1]}-${reverseStrName.split("-")[2]}-${
        reverseStrName.split("-")[3]
      }-${reverseStrName.split("-")[4]}`
    : reverseStrName;

  let checkDouble = checkTriple.split("-")[3]
    ? `${checkTriple.split("-")[1]}-${checkTriple.split("-")[2]}-${
        checkTriple.split("-")[3]
      }`
    : checkTriple;

  let splitPrice1 = checkDouble.split("-")[2]
    ? `${checkDouble.split("-")[1]}-${checkDouble.split("-")[2]}`
    : (checkDouble.split("-")[1] && checkDouble.split("-")[1]) || checkDouble;

  let reverseBackStrName = splitPrice1.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceS5 = (name) => {
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

  let splitPrice = reverseStrName.indexOf("-") != -1 ? reverseStrName.split("-")[0] : reverseStrName.split(" ")[0]
  let replaceSpace = splitPrice.replace(" ", "");
  let replaceDoubleSpace = replaceSpace.replace(" ", "");

  let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  return reverseBackStrName;
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

  let splitPrice = reverseStrName.indexOf("-") != -1 ? reverseStrName.split("-")[0] : reverseStrName.split(" ")[0]
  let replaceSpace = splitPrice.replace(" ", "");
  let replaceDoubleSpace = replaceSpace.replace(" ", "");

  let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  return newPrice(fixNameS5(name), reverseBackStrName);
};
