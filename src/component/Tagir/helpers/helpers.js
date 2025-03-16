import { newPrice } from "../../../helpers/NewPrice";

export const fixNameTagir = (name) => {
  const replaceDot = name.replace(".", "");
  const replaceYandex = replaceDot.replace("🔊", "");
  const fixGray = replaceYandex.replace("Mi 14Т", "Mi 14T");
  const fixMi14t = fixGray.replace("Grey", "Gray");
  const fixA06 = fixMi14t.replace("А06", "A06");
  const fixA16 = fixA06.replace("А16", "A16");
   const fix12256 = fixA16.replace("12+256", "12/256");
   const fix12512 = fix12256.replace("12+512", "12/512");
   const fix16512 = fix12512.replace("16+512", "16/512");
  const fixA35 = fix16512.replace("А35", "A35");
  const fixA55 = fixA35.replace("А55", "A55");
  const replaceNewIcon = fixA55.replace("🆕", "");
  const replace5G =
    replaceNewIcon.indexOf("Note 14 Pro Plus") ||
    replaceNewIcon.indexOf("Note 34 Pro Plus")
      ? replaceNewIcon.replace("5G ", "")
      : replaceNewIcon;
  const fixNote14ProPlus = replace5G.replace(
    "Note 14 Pro Plus",
    "Note 14 Pro +"
  );
  const fixNote14ProPlus1 = fixNote14ProPlus.replace(
    "Note 14 Pro+",
    "Note 14 Pro +"
  );
  const fixNote13ProPlus = fixNote14ProPlus1.replace(
    "Note 13 Pro Plus",
    "Note 13 Pro +"
  );
  const replaceMilanese = fixNote13ProPlus.replace("Milanese ", "");
  const fixSE3 = replaceMilanese.replace("SE 3 ", "SE3 ");

  const fixS10Slate = fixSE3.indexOf("S10 ")
    ? fixSE3.replace("State", "Slate")
    : fixSE3;

  return fixS10Slate;
};

export const returnNameTagir = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice =
    reverseStrName.indexOf(" ") != -1
      ? /\s(.+)/.exec(reverseStrName)[1]
      : reverseStrName;
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceTagir = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = reverseStrName.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

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

  let splitPrice =
    reverseStrName.indexOf("-") != -1
      ? reverseStrName.split("-")[0]
      : reverseStrName.split(" ")[0];
  let replaceSpace = splitPrice.replace(" ", "");
  let replaceDoubleSpace = replaceSpace.replace(" ", "");

  let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  return newPrice(fixNameTagir(name), reverseBackStrName);
};
