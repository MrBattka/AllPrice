import { newPrice } from "../../../helpers/NewPrice";

export const returnFixNameMTA = (name) => {
  const replaceSmartphone = name.replace(" (nano texture)", "");
  const replaceGb = replaceSmartphone.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const fixS24Plus = replaceGB.replace("S24 +", "S24+");
  const replace5G =
    fixS24Plus.indexOf("SM") !== -1 ? fixS24Plus.replace("5G", "") : fixS24Plus;
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
  let replaceBlue = replaceZA.replace("Blue", "");
  let replaceNatural = replaceBlue.replace("Natural", "");
  let replacesim = replaceNatural.replace("1Sim+Esim", "");
  let replaceGU = replacesim.replace("🇬🇺", "");
  let replaceSpace = replaceGU.replace(" ", "");
  let replaceSpace1 = replaceSpace.replace(" ", "");
  let replaceDot = replaceSpace1.replace(".", "");
  let replaceFire = replaceDot.replace("🔥", "");
  let replace1 = replaceFire.replace("🌫️", "");
  let replace2 = replace1.replace("⚫️", "");

  let replace3 = replace2.replace("QA", "");
  let replace4 = replace3.replace("LL", "");
  let replace5 = replace4.replace("🌸", "");
  let replace6 = replace5.replace("👻", "");
  let replace7 = replace6.replace("🥶", "");
  let replace8 = replace7.replace("ZP", "");
  let replace9 = replace8.replace("👚", "");
  let replace10 = replace9.replace("👽", "");
  
  

  return replace10;
};
