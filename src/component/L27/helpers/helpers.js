import { newPrice } from "../../../helpers/NewPrice";

export const returnFixNameL27 = (name) => {
  const fixTb = name.replace("1T ", "1Tb ");
  const fixTb1 = fixTb.replace("1T  ", "1Tb ");
  const fix16Pro = fixTb1.replace("16Pro ", "16 Pro ");
  const fix16Pro1 = fix16Pro.replace("16Pro  ", "16 Pro ");
  const fix15Pro = fix16Pro1.replace("15Pro ", "15 Pro ");
  const fix15Pro1 = fix15Pro.replace("15Pro ", "15 Pro ");
  const fix16Plus = fix15Pro1.replace("16+ ", "16 Plus ");
  const fix15Plus = fix16Plus.replace("15+ ", "15 Plus ");
  const fix15Plus1 = fix15Plus.replace("15+  ", "15 Plus ");
  const fix16Plus1 = fix15Plus1.replace("16+  ", "16 Plus ");
  const fix14Pro = fix16Plus1.replace("14Pro ", "14 Pro ");
  const fix12Pro = fix14Pro.replace("12Pro  ", "12 Pro ");
  const fixMouse = fix12Pro.replace("Maus ", "Mouse ");

  return fixMouse;
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
    checkSpace4.slice(-4) === "🇬🇺" ||
    checkSpace4.slice(-4) === "🇺🇲"
  ) {
    return (
      checkSpace4.slice(-4) + checkSpace4.substring(0, checkSpace4.length - 4)
    );
  } else {
    return checkSpace4;
  }
};

export const returnNameInArrL27 = (name) => {
  const fixFlags = checkFlags(name);

  let reverseStrName = fixFlags.split("").reverse().join("");
  let splitPrice =
    reverseStrName.indexOf(" ") !== -1
      ? /\s(.+)/.exec(reverseStrName)[1]
      : reverseStrName;
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceL27 = (name) => {
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
  let replaceGU = replaceKR.replace("🇬🇺", "");
  let replaceUM = replaceGU.replace("🇺🇲", "");

  let reverseStrName = replaceUM.split("").reverse().join("");
  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  let splitPrice = checkSpace4.split(" ")[0];
  let splitPrice1 = splitPrice.split(" ")[0];
  let splitPrice2 = splitPrice1.split(" ")[0];
  let reverseBackStrName = splitPrice2.split("").reverse().join("");

  return reverseBackStrName;
};

