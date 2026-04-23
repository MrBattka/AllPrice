import { newPrice } from "../../../helpers/NewPrice";

export const returnFixNameMTA = (name) => {
  const replaceSmartphone = name.replace(" (nano texture)", "");
  const replaceGb = replaceSmartphone.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const fixS24Plus = replaceGB.replace("S24 +", "S24+");
  const fixS23FE = fixS24Plus.replace("S23FE", "S23 FE");
  const fixS24FE = fixS23FE.replace("S24FE", "S24 FE");
  const fixS2TB = fixS24FE.replace("2 TB", "2TB");
  
  const fixS25Plus = fixS2TB.replace("S25 Plus", "S25+");
  const fixSGray = fixS25Plus.replace("Grey", "Gray");
  const fixtitan = fixSGray.replace("Titamiun", "Titanium");
  const fixS25FE = fixtitan.replace("S25FE", "S25 FE");
  const replace5G =
    fixS25FE.indexOf("SM") !== -1 ? fixS25FE.replace("5G", "") : fixS25FE;
  return replace5G;
};

export const returnNameInArrMTA = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpace =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let removeSpace1 =
    removeSpace[0] === " " ? removeSpace.slice(1) : removeSpace;
  let splitName =
    removeSpace1.indexOf(" ") !== -1
      ? /\s(.+)/.exec(removeSpace1)[1]
      : removeSpace1;

  let reverseBackStrName = splitName.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceMTA = (name) => {

  let fixStick = name.replace("USB-C", "USBC")
  let fixWiFi = fixStick.replace("Wi-Fi", "WiFi")

  let reverseStrName = fixWiFi.split("").reverse().join("");

  let removeSpace =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let removeSpace1 =
    removeSpace[0] === " " ? removeSpace.slice(1) : removeSpace;
  let splitPrice = removeSpace1.indexOf("-") !== -1 ? removeSpace1.split("-")[0] : removeSpace1.split(" ")[0]
  let checkLength =
    splitPrice.length === 3 && reverseStrName.indexOf("-") !== -1
      ? reverseStrName.split("-")[0]
      : splitPrice;
  let reverseBackStrName = checkLength.split("").reverse().join("");

  let replaceEU = reverseBackStrName.replace("🇪🇺", "");
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
  let replaceHuman = replaceZA.replace("🧟", "");
  let replaceUEU = replaceHuman.replace("EU", "");
  let replaceBlue = replaceUEU.replace("Blue", "");
  let replaceNatural = replaceBlue.replace("Natural", "");
  let replacesim = replaceNatural.replace("1Sim+Esim", "");
  let replaceGU = replacesim.replace("🇬🇺", "");
  let replaceSpace = replaceGU.replace(" ", "");
  let replaceSpace1 = replaceSpace.replace(" ", "");
  let replaceDot = replaceSpace1.replace(".", "");
  let replaceFire = replaceDot.replace("🔥", "");
  let replace1 = replaceFire.replace("🌫️", "");
  let replace2 = replace1.replace("⚫️", "");
  let replaceAM = replace2.replace("🇦🇲", "");

  let replace3 = replaceAM.replace("QA", "");
  let replace4 = replace3.replace("LL", "");
  let replace5 = replace4.replace("🌸", "");
  let replace6 = replace5.replace("👻", "");
  let replace7 = replace6.replace("🥶", "");
  let replace8 = replace7.replace("ZP", "");
  let replace9 = replace8.replace("👚", "");
  let replace10 = replace9.replace("👽", "");
  let replaceRub = replace10.replace("₽", "");
  let replacePoint = replaceRub.replace(",", "");
  let replace11= replacePoint.replace("CH720NPink: ", "");
  
  

  return replace11;
};
