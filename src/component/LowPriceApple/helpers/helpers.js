import { newPrice } from "../../../helpers/NewPrice";

export const fixNameLowPrice = (name) => {
  const fixFlip6 = name.replace("Flip6", "Flip 6");
  const fixWiFi = fixFlip6.replace(" Wi ", " Wi-Fi ");
  const fixGB = fixWiFi.replace("GB", "");
  const fixSE3 = fixGB.replace("SE 3", "SE3");
  const fix16ProMax = fixSE3.replace("Prо Maх", "16 Pro Max");
  const fix16Pro = fix16ProMax.replace("16 Prо", "16 Pro");
  const fixGray = fix16Pro.replace("Grey", "Gray");
  const fix1Tb = fixGray.replace("1 Tb", "1Tb");
  const fixMouse = fix1Tb.replace("Mause", "Mouse");
  const fixWiFi1 = fixMouse.replace("WIFI", "Wi-Fi");
  const fixU3 = fixWiFi1.replace("U3", "Ultra 3");
  const fixWiFi2 = fixU3.replace("WiFi", "Wi-Fi");
  const fixMilanese = fixWiFi2.replace("Milanse", "Milanese");
  const replace5G =
    fixMilanese.indexOf("M55 ") !== -1 ||
    fixMilanese.indexOf("A25 ") !== -1 ||
    fixMilanese.indexOf("A35 ") !== -1 ||
    fixMilanese.indexOf("A55 ") !== -1 ||
    fixMilanese.indexOf("A26 ") !== -1 ||
    fixMilanese.indexOf("A36 ") !== -1 ||
    fixMilanese.indexOf("A56 ") !== -1 ||
    fixMilanese.indexOf("A37 ") !== -1 ||
    fixMilanese.indexOf("A57 ") !== -1 ||
    fixMilanese.indexOf("S24 ") !== -1 ||
    fixMilanese.indexOf("S25 ") !== -1 ||
    fixMilanese.indexOf("Mi 1") !== -1 ||
    fixMilanese.indexOf("POCO") !== -1 ||
    fixMilanese.indexOf("X7 ") !== -1
      ? fixMilanese.replace("5G", "")
      : fixMilanese;

  return replace5G;
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

export const returnNameInArrLowPrice = (name) => {

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

export const returnStockPriceLowPrice = (name) => {
  let replaceEU = name.replace("🇪🇺", "");
  let replaceAE = replaceEU.replace("🇦🇪", "");
  let replaceIN = replaceAE.replace("🇮🇳", "");
  let replaceBR = replaceIN.replace("🇧🇷", "");
  let replaceJP = replaceBR.replace("🇯🇵", "");
  let replaceVN = replaceJP.replace("🇻🇳", "");
  let replaceKW = replaceVN.replace("🇰🇼", "");
  let replaceUS = replaceKW.replace("🇺🇸", "");
  let replaceHK = replaceUS.replace("🇭🇰", "");
  let fixMilanese = replaceHK.replace("🇬🇧", "");
  let replaceCN = fixMilanese.replace("🇨🇳", "");
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
  let fixStick = replaceZA.replace("–", "-");
  let fixRub1 = fixStick.replace(" ₽", "");
  let feixWiFi = fixRub1.replace("Wi-Fi", "WiFi")
  let replaceUSBC = feixWiFi.replace("USB-C", "USBC");
  let replaceBuds3White = replaceUSBC.replace("Buds 3 White", "");
  let replaceS9feLavander = replaceBuds3White.replace(
    "Tab S9FE 8/256 Lavender 5G",
    ""
  );

  let reverseStrName = replaceS9feLavander.split("").reverse().join("");

  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;


  let splitPrice =
    checkSpace4.indexOf("—") !== -1
      ? checkSpace4.split("—")[0]
      : checkSpace4;
      let splitPrice1 =
    splitPrice.indexOf("-") !== -1
      ? splitPrice.split("-")[0]
      : splitPrice;
  let replaceSpace = splitPrice1.replace(" ", "");
  let replaceDoubleSpace = replaceSpace.replace(" ", "");

  let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  let removeOther = reverseBackStrName.indexOf(" ") !== -1
    ? reverseBackStrName.split(" ")[0]
    : reverseBackStrName;

  let removeDot =
    removeOther.indexOf(",") !== -1
      ? removeOther.replace(",", "")
      : removeOther;

  let removeSD8gen3 =
    removeDot.indexOf("SD8gen3") !== -1
      ? removeDot.replace("SD8gen3", "")
      : removeDot;

  let fixUSBC = removeSD8gen3.replace("USBC", "USB-C");
  let fixWiFi1 = fixUSBC.replace("WiFi", "Wi-Fi");
  let fixRub = fixWiFi1.replace("₽", "");
  let fix1Sim = fixRub.replace("1sim", "");
  let fixeSim = fix1Sim.replace("Esim", "");
  let replacePoint = fixeSim.replace(".", "");
  let replaceCar = replacePoint.replace("🚛", "");
  

  return replaceCar;
};
