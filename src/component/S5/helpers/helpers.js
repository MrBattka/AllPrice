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
  const fixmm = replaceGB.replace("mm", "");
  const replaceAirpods = fixmm.replace("Air Pods", "AirPods");
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
  const replaceNote13ProPlus =
    replaceA35IceBlue.indexOf("Pro Plus") && replaceA35IceBlue.indexOf("5G")
      ? replaceA35IceBlue.replace("Pro Plus", "Pro Plus 5G")
      : replaceA35IceBlue;
  const replaceProPlus = replaceNote13ProPlus.replace("Pro Plus", "Pro +");
  const replace4G = replaceProPlus.replace(" 4G", "");
  const replaceA9Plus = replace4G.replace("A9+", "A9 +");
  const replaceMagsafe = replaceA9Plus.replace(
    "AirPods Pro MagSafe 2",
    "AirPods Pro 2"
  );
  const replaceS9Plus = replaceMagsafe.replace("S9 Plus", "S9 +");
  const fixiPad10 = replaceS9Plus.replace("iPad 10.2", "iPad 10");
  const replacemm = fixiPad10.replace("MM", "");
  const replaceTabA9 = replacemm.replace("A9 128", "Tab A9 128");
  const replaceTabA9Plus = replaceTabA9.replace("A9 + 128", "Tab A9 + 128");
  const replaceFEPlus = replaceTabA9Plus.replace("FE+", "FE +");
  const replaceS9FE = replaceFEPlus.replace("S9FE", "S9 FE");
  const fixStarlight = replaceS9FE.replace("starling", "starlight");
  const fixS10 = fixStarlight.replace("S 10", "S10");
  const fixS23FE = fixS10.replace("S23FE", "S23 FE");
  const fixFEPlus = fixS23FE.replace("FE Plus", "FE +");
  const fixA55 = fixFEPlus.replace("А55 ", "A55 ");
  const fixA55IceBlue = fixA55.indexOf("A55 ")
    ? fixA55.replace("Ice blue", "iceblue")
    : fixA55;

  return fixA55IceBlue;
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

export const returnNameInArrS5 = (name) => {
  const fixFlags = checkFlags(name);

  let reverseStrName = fixFlags.split("").reverse().join("");
  let splitPrice = reverseStrName.indexOf(" ") !== -1 ? /\s(.+)/.exec(reverseStrName)[1] : reverseStrName
  // let replaceStick = /\s(.+)/.exec(splitPrice)[1];

  let checkSpace1 =
  splitPrice[0] === " "
    ? splitPrice.slice(1)
    : splitPrice;
let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  let checkTriple = checkSpace4.split("-")[4]
    ? `${checkSpace4.split("-")[1]}-${checkSpace4.split("-")[2]}-${
        checkSpace4.split("-")[3]
      }-${checkSpace4.split("-")[4]}`
    : checkSpace4;

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
  let replaceZA = replaceKR.replace("🇿🇦", "");
  let replaceBuds3White = replaceZA.replace("Buds 3 White", "");
  let replaceS9feLavander = replaceBuds3White.replace(
    "Tab S9FE 8/256 Lavender 5G",
    ""
  );

  let reverseStrName = replaceS9feLavander.split("").reverse().join("");

  let checkSpace1 =
    reverseStrName[0] === " "
      ? reverseStrName.slice(1)
      : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  let splitPrice =
    checkSpace4.indexOf(" ") != -1
      ? checkSpace4.split(" ")[0]
      : checkSpace4;
  let replaceSpace = splitPrice.replace(" ", "");
  let replaceDoubleSpace = replaceSpace.replace(" ", "");

  let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  let removeOther = reverseBackStrName.indexOf(" ")
    ? reverseBackStrName.split(" ")[0]
    : reverseBackStrName;

  return removeOther;
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

  return newPrice(fixNameS5(name), reverseBackStrName);
};
