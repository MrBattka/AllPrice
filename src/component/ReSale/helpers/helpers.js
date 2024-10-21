import { checkFixPrice } from "../../../helpers/fixPrice";
import { newPrice } from "../../../helpers/NewPrice";

const returnFixPrice = (el, prod) => {
  // console.log(prod + "prod");
  if (checkFixPrice(el)) {
    return `${prod} - `;
  } else {
    return prod;
  }
};

export const returnNameReSale = (name) => {
  if (name.indexOf("₽") != -1) {
    let reverseStrName = name.split("").reverse().join("");
    let removeSpaceName =
      reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
    let removeRUB =
      removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
    let splitPrice = /\s(.+)/.exec(removeRUB)[1];
    let reverseBackStrName = splitPrice.split("").reverse().join("");

    return reverseBackStrName;
  } else {
    let reverseStrName = name.split("").reverse().join("");
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
    let splitSpace =
      removeSpaceName3.indexOf(" ") != -1
        ? /\s(.+)/.exec(removeSpaceName3)[1]
        : removeSpaceName3;
    let splitDoubleSpace =
      removeSpaceName3.split(" ")[0].length === 3
        ? /\s(.+)/.exec(splitSpace)[1]
        : splitSpace;

    let splitDash =
      splitDoubleSpace.indexOf("-") != -1
        ? splitDoubleSpace.split("-")[1]
        : splitDoubleSpace;
    let reverseBackStrName = splitDash.split("").reverse().join("");

    return reverseBackStrName;
  }
};

export const returnStockPriceReSale = (name) => {
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

  if (replaceKR.indexOf("₽") != -1) {
    let reverseStrName = replaceKR.split("").reverse().join("");
    let removeSpaceName =
      reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
    let removeRUB =
      removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
    let splitPrice = removeRUB.split(" ")[0];
    let reverseBackStrName = splitPrice.split("").reverse().join("");

    return reverseBackStrName;
  } else {
    let reverseStrName = replaceKR.split("").reverse().join("");

    let checkSpace =
      reverseStrName[0] === " "
        ? reverseStrName.split(" ")[1] + reverseStrName.split(" ")[2]
        : reverseStrName;
    let splitPrice = checkSpace.split(" ")[0];
    let splitDoubleSpace =
      splitPrice.split(" ")[0].length === 3
        ? reverseStrName.split(" ")[0] + reverseStrName.split(" ")[1]
        : splitPrice;
    let reverseBackStrName = splitDoubleSpace.split("").reverse().join("");

    return reverseBackStrName;
  }
};

export const returnExtraPriceReSale = (name) => {
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

  if (replaceKR.indexOf("₽") != -1) {
    let reverseStrName = replaceKR.split("").reverse().join("");
    let removeSpaceName =
      reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
    let removeRUB =
      removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
    let splitPrice = removeRUB.split(" ")[0];
    let reverseBackStrName = splitPrice.split("").reverse().join("");

    return reverseBackStrName;
  } else {
    let reverseStrName = replaceKR.split("").reverse().join("");

    let checkSpace =
      reverseStrName[0] === " "
        ? reverseStrName.split(" ")[1] + reverseStrName.split(" ")[2]
        : reverseStrName;
    let splitPrice = checkSpace.split(" ")[0];
    let splitDoubleSpace =
      splitPrice.split(" ")[0].length === 3
        ? reverseStrName.split(" ")[0] + reverseStrName.split(" ")[1]
        : splitPrice;
    let reverseBackStrName = splitDoubleSpace.split("").reverse().join("");

    return reverseBackStrName;
  }
};

export const returnFixNameReSale = (name) => {
  const replaceCaseDyson = name.replace(" с кейсом наша вилка", "");
  const fixPriceDyson = replaceCaseDyson.replace(" наша вилка 🔌", "");
  const replaceOurPlug = fixPriceDyson.replace(" наша вилка", "");
  const replaceCase1 = replaceOurPlug.replace(" с кейсом и чехлом", "");
  const replaceCase = replaceCase1.replace(" с кейсом", "");
  const replacePoint = replaceCase.replace(".", "");
  const replacePointPlugSpace = replacePoint.replace(" 🔌", "");
  const replacePointPlug = replacePointPlugSpace.replace("🔌", "");
  const fixAWS = replacePointPlug.replace("Apple Watch Series ", "S");
  const fixMouse = fixAWS.replace("🐭", "");
  const fixHeadphone = fixMouse.replace("🎧", "");
  const fixPencil = fixHeadphone.replace("✏️", "");
  const fixPint = fixPencil.replace("•", "");
  const fixAW = fixPint.replace("Apple Watch ", "");
  const replaceSM = fixAW.replace("SM-", "SM");
  const replaceG = replaceSM.replace("G-", "G");
  const fixUSBC = replaceG.replace("Type-C", "Type C");
  const replaceDash = fixUSBC.replace(" –", "");
  const fixSimESim = replaceDash.replace("Sim-e", "Sim+e");
  const fixSFold5 = fixSimESim.replace("Fold5", "Fold 5"); 
  const fixSFold6 = fixSFold5.replace("Fold6", "Fold 6");
  const fixLTE = fixSFold6.replace("Wi-Fi + Cellular", "LTE");
  const fixSE3 = fixLTE.replace("SE 3 ", "SE3 ");
  const fixS24Plus = fixSE3.replace("S24 +", "S24+");
  const fixMM = fixS24Plus.replace("mm", "");
  const fixGB = fixMM.replace("GB", "");
  const fixDualSenseBlack = fixGB.replace("Чёрный", "dualsense Black ")
  const fixDualSenseWhite = fixDualSenseBlack.replace("Белый", "dualsense White ")
  const fixbracketAirPods3 = fixDualSenseWhite.replace("(3rd Gen)", "3"); 
  const fixbracket2 = fixbracketAirPods3.indexOf("SE") != -1 ? fixbracketAirPods3.replace("2 2023", " (2023) gen 2") : fixbracketAirPods3
  const fixSE2Blue = fixbracket2.indexOf("SE") != -1 ? fixbracket2.replace("Storm Blue", "Silver") : fixbracket2
  const fixUltra = fixSE2Blue.indexOf("Ultra") != -1 ? fixSE2Blue.replace(" 49 ", " ") : fixSE2Blue
  const fix14PMPurple = fixUltra.indexOf("14 ") != -1 ? fixUltra.replace("Deep Purple", "Purple") : fixUltra
  const fix14PMBlack = fix14PMPurple.indexOf("14 ") != -1 ? fix14PMPurple.replace("Space Black", "Black") : fix14PMPurple
  const fixSE3Black = fix14PMBlack.indexOf("SE3 ") != -1 ? fix14PMBlack.replace("Midnight", "Black") : fix14PMBlack
  const fixAWUltraGray = fixSE3Black.indexOf("Ultra 2") != -1 ? fixSE3Black.replace("Green Gray", "Gray") : fixSE3Black
  const fixAWUltraBlack = fixAWUltraGray.indexOf("Ultra 2") != -1 ? fixAWUltraGray.replace("Blue Black", "Black") : fixAWUltraGray

  return fixAWUltraBlack;
};
