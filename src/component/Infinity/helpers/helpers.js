import { newPrice } from "../../../helpers/NewPrice";

export const fixNameInfinity = (name) => {
  const replaceHeadphone = name.replace("🎧", "");
  const replacePencil = replaceHeadphone.replace(" ✏️", "");
  const replaceMouse = replacePencil.replace("🖱️", "");
  const replaceGen = replaceMouse.replace(
    "Pencil 1-gen (USB-C)",
    "Pencil USB C "
  );
  const replaceGb = replaceGen.replace("Gb ", "");
  const replaceGB = replaceGb.replace("GB ", "");
  const replace2Sim = replaceGB.replace("2sim", "");
  const fix1TB = replace2Sim.replace("1 TB", "1TB");
  const fix2TB = fix1TB.replace("2 TB", "2TB");
  const fixAirPods = fix2TB.replace("Air Pods", "AirPods");
  const fixeSIM = fixAirPods.replace("eSIM", "🇺🇸");
  const fixeSIM1 = fixeSIM.replace("(e-sim)", "🇺🇸");
  const fix2SIM = fixeSIM1.replace("(2-sim)", "dual");
  const fixStarlight = fix2SIM.replace("Starting", "Starlight")
  return fixStarlight;
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
    checkSpace4.slice(-4) === "eSIM" ||
    checkSpace4.slice(-4) === "dual"
  ) {
    return (
      checkSpace4.slice(-4) + checkSpace4.substring(0, checkSpace4.length - 4)
    );
  } else if (
    checkSpace4.slice(-7) === "(e-sim)" ||
    checkSpace4.slice(-7) === "(2-sim)"
  ) {
    return (
      checkSpace4.slice(-7) + checkSpace4.substring(0, checkSpace4.length - 7)
    );
  } else {
    return checkSpace4;
  }
};

export const returnNameInArrInfinity = (name) => {
  const fixFlags = checkFlags(name);

  let reverseStrName = fixFlags.split("").reverse().join("");
  let splitPrice =
    reverseStrName.indexOf(" ") !== -1
      ? /\s(.+)/.exec(reverseStrName)[1]
      : reverseStrName;
  // let replaceStick = /\s(.+)/.exec(splitPrice)[1];

  let checkSpace1 = splitPrice[0] === " " ? splitPrice.slice(1) : splitPrice;
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

export const returnStockPriceInfinity = (name) => {
  const fixFlags = checkFlags(name);
  let replaceEU = fixFlags.replace("🇪🇺", "");
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
  let replace2Sim = replaceZA.replace("2sim", "");
  let replaceBuds3White = replace2Sim.replace("Buds 3 White", "");
  let replaceS9feLavander = replaceBuds3White.replace(
    "Tab S9FE 8/256 Lavender 5G",
    ""
  );
  let replaceSick = replaceS9feLavander.replace("-", "");

  let reverseStrName = replaceSick.split("").reverse().join("");

  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  let splitPrice =
    checkSpace4.indexOf(" ") != -1 ? checkSpace4.split(" ")[0] : checkSpace4;
  let replaceSpace = splitPrice.replace(" ", "");
  let replaceDoubleSpace = replaceSpace.replace(" ", "");

  let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  let removeOther = reverseBackStrName.indexOf(" ")
    ? reverseBackStrName.split(" ")[0]
    : reverseBackStrName;
  let removeFire = removeOther.replace("💥", "");

  let removeDot =
    removeFire.indexOf(",") !== -1 ? removeFire.replace(",", "") : removeFire;
  let removeUS = removeDot.replace("🇺🇸", "");
  const fixFlags1 = checkFlags(removeUS);
  return fixFlags1;
};
