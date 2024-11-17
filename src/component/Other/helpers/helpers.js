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
  const fix16Pro = fixStarlight.replace("16Pro", "16 Pro");
  const fix15pro = fix16Pro.replace("15pro", "15 Pro");
  const fix15Pro = fix15pro.replace("15Pro", "15 Pro");
  const fix12Pro = fix15Pro.replace("12Pro", "12 Pro");
  const fix14Plus = fix12Pro.replace("14+", "14 Plus");
  const fix15Plus = fix14Plus.replace("15+", "15 Plus");
  const fix16Plus = fix15Plus.replace("16+", "16 Plus");
 const fix1tb = fix16Plus.replace(" 1T ", " 1Tb ");
 const fix16Max2 = fix1tb.replace("16 Max 2", "16 Pro Max 2");
 const fix16Max5 = fix16Max2.replace("16 Max 5", "16 Pro Max 5");
 const replaceMM = fix16Max5.replace("mm", "");
 const fixWiFi = replaceMM.replace("WiFi", "Wi-Fi");
 const fixM2 = fixWiFi.replace("(M2)", "M2");
 const fixM22 = fixM2.replace("( M2)", "M2");
 const fixM4 = fixM22.replace("(M4)", "M4");
 const fix14pro = fixM4.replace("14pro", "14 Pro");
 const fix14Pro = fix14pro.replace("14Pro", "14 Pro");
 const fix15pro1 = fix14Pro.replace("15про макс", "15 Pro Max");
 const fixAir11M2 = fix15pro1.replace("iPad Air 11", "iPad Air 11 M2");
 const fixAir13M2 = fixAir11M2.replace("iPad Air 13", "iPad Air 13 M2");
 const fixAir112024 = fixAir13M2.replace("Air 11 (2024)", "Air 11 M2");
 const fixAir132024 = fixAir112024.replace("Air 13 (2024)", "Air 13 M2");
 const fixPro112024 = fixAir132024.replace("Pro 11 (2024)", "Pro 11 M4");
 const fixPro132024 = fixPro112024.replace("Pro 13 (2024)", "Pro 13 M4");
 const fixseries9 = fixPro132024.replace("Series 9", "S9");
 const fixLightning = fixseries9.replace("Lighting", "Lightning");
 const fixwifi = fixLightning.replace("Wifi", "Wi-Fi");
 const fixiPad5g = (fixwifi.indexOf("Air 1") !== -1 || fixwifi.indexOf("Pro 1") !== -1) ? fixwifi.replace("5G", "LTE") : fixwifi

  return fixiPad5g;
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
    checkSpace4.slice(-4) === "🇺🇲" ||
    checkSpace4.slice(-4) === "🇵🇾"
  ) {
    return (
      checkSpace4.slice(-4) + checkSpace4.substring(0, checkSpace4.length - 4)
    );
  } else {
    return checkSpace4;
  }
};

export const returnNameInArrOther = (name) => {
  const fixFlags = checkFlags(name);
  const reverseStrName = fixFlags.split("").reverse().join("");
  const replaceDouble1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  const replaceDouble2 =
    replaceDouble1[0] === " " ? replaceDouble1.slice(1) : replaceDouble1;
  const replaceDouble3 =
    replaceDouble2[0] === " " ? replaceDouble2.slice(1) : replaceDouble2;
  const replaceDouble4 =
    replaceDouble3[0] === " " ? replaceDouble3.slice(1) : replaceDouble3;

  const splitPrice = replaceDouble4.indexOf(" ") !== -1 ? /\s(.+)/.exec(replaceDouble4)[1] : replaceDouble4
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
  let replaceUS1 = replaceUS.replace("🇺🇸", "");
  let replaceHK = replaceUS1.replace("🇭🇰", "");
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
  let replaceUM = replaceKR.replace("🇺🇲", "");
  let replacePY = replaceUM.replace("🇵🇾", "");
  let replace2Sim = replacePY.replace("2sim", "");
  let replaceSim = replace2Sim.replace("-sim", "");
  let replacePoint = replaceSim.replace(".", "");
  let replacePoint1 = replacePoint.replace(",", "");

  let reverseStrName = replacePoint1.split("").reverse().join("");
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
  

  return reverseBackStrName.indexOf("0") !== -1 && reverseBackStrName;
};
