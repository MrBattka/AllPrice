import { newPrice } from "../../../helpers/NewPrice";

export const returnFixNameOther = (name) => {
  const removeDoubleSpace = name.indexOf("  ")
    ? name.replace(/\s+/g, " ")
    : name;
  const replaceGb = removeDoubleSpace.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const replace4G = replaceGB.replace("4G ", "");
  const replaceProPlus = replace4G.replace("Pro+", "Pro +");
  const replaceAwesome = replaceProPlus.replace("Awesome ", "");
  const replaceSE = replaceAwesome.replace("SE 8.7", "SE");
  const replaceNoteBlue = replaceSE.indexOf("Note ")
    ? replaceSE.replace("Ice Blue", "Blue")
    : replaceSE;
  const replaceNoteMidnight = replaceNoteBlue.indexOf("Note ")
    ? replaceNoteBlue.replace("Midnight ", "")
    : replaceNoteBlue;
  const replaceNoteMint = replaceNoteMidnight.indexOf("Note ")
    ? replaceNoteMidnight.replace("Mint ", "")
    : replaceNoteMidnight;
  const replaceNoteForest = replaceNoteMint.indexOf("Note ")
    ? replaceNoteMint.replace("Forest ", "")
    : replaceNoteMint;
  const replaceNoteLavender = replaceNoteForest.indexOf("Note ")
    ? replaceNoteForest.replace("Lavender ", "")
    : replaceNoteForest;
  const fixAirPods = replaceNoteLavender.replace("Air Pods", "AirPods");
  const fix1TB = fixAirPods.replace("1 TB", "1Tb");
  const fix13Midnight =
    (fix1TB.indexOf(13) != -1 || fix1TB.indexOf(14) != -1) &&
    (fix1TB.indexOf(128) != -1 || fix1TB.indexOf(256) != -1)
      ? fix1TB.replace("black", "Midnight")
      : fix1TB;
  const fix13Starlight =
    (fix13Midnight.indexOf(13) != -1 || fix13Midnight.indexOf(14) != -1) &&
    (fix13Midnight.indexOf(128) != -1 || fix13Midnight.indexOf(256) != -1)
      ? fix13Midnight.replace("white", "Starlight")
      : fix13Midnight;
  const fix16Starlight =
    fix13Starlight.indexOf(16) != -1 &&
    (fix13Starlight.indexOf(128) != -1 ||
      fix13Starlight.indexOf(256) != -1 ||
      fix13Starlight.indexOf(512) != -1 ||
      fix13Starlight.indexOf("1T") != -1)
      ? fix13Starlight.replace("Starlight", "White")
      : fix13Starlight;
  const fix16Black =
    fix16Starlight.indexOf(16) != -1 &&
    (fix16Starlight.indexOf(128) != -1 ||
      fix16Starlight.indexOf(256) != -1 ||
      fix16Starlight.indexOf(512) != -1 ||
      fix16Starlight.indexOf("1T") != -1)
      ? fix16Starlight.replace("Midnight", "Black")
      : fix16Starlight;
  const replacePencil = fix16Black.replace("✏️ ", "");
  const fixStarlight = replacePencil.replace("starling", "Starlight");

  return fixStarlight;
};

export const returnNameInArrOther = (name) => {
  const reverseStrName = name.split("").reverse().join("");
  const replaceDouble1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  const replaceDouble2 =
    replaceDouble1[0] === " " ? replaceDouble1.slice(1) : replaceDouble1;
  const replaceDouble3 =
    replaceDouble2[0] === " " ? replaceDouble2.slice(1) : replaceDouble2;
  const replaceDouble4 =
    replaceDouble3[0] === " " ? replaceDouble3.slice(1) : replaceDouble3;

  const splitPrice = /\s(.+)/.exec(replaceDouble4)[1];
  const reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceOther = (name) => {
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
  let replace2Sim = replaceKR.replace("2sim", "");
  let replaceSim = replace2Sim.replace("-sim", "");
  let replacePoint = replaceSim.replace(".", "");

  let reverseStrName = replacePoint.split("").reverse().join("");
  const replaceDouble1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  const replaceDouble2 =
    replaceDouble1[0] === " " ? replaceDouble1.slice(1) : replaceDouble1;
  const replaceDouble3 =
    replaceDouble2[0] === " " ? replaceDouble2.slice(1) : replaceDouble2;
  const replaceDouble4 =
    replaceDouble3[0] === " " ? replaceDouble3.slice(1) : replaceDouble3;

  let splitPrice = replaceDouble4.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnExtraPriceOther = (name) => {
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
  let replace2Sim = replaceKR.replace("2sim", "");
  let replaceSim = replace2Sim.replace("-sim", "");
  let replacePoint = replaceSim.replace(".", "");

  let reverseStrName = replacePoint.split("").reverse().join("");
  const replaceDouble1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  const replaceDouble2 =
    replaceDouble1[0] === " " ? replaceDouble1.slice(1) : replaceDouble1;
  const replaceDouble3 =
    replaceDouble2[0] === " " ? replaceDouble2.slice(1) : replaceDouble2;
  const replaceDouble4 =
    replaceDouble3[0] === " " ? replaceDouble3.slice(1) : replaceDouble3;

  let splitPrice = replaceDouble4.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};
