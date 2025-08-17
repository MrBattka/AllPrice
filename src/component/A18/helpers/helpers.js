import { newPrice } from "../../../helpers/NewPrice";

export const returnFixNameA18 = (name) => {
  const fixX7 = name.replace("X7 ", "poco x7 ");
  const fixF7 = fixX7.replace("F7 ", "poco f7 ");
  const replaceGb = fixF7.replace("Gb", "");
  const fixOnePlus = replaceGb.replace("One Plus", "OnePlus");
  const fixPorcelain = fixOnePlus.replace("Procelain", "porcelain");
  const fix23FE = fixPorcelain.replace("S23FE", "S23 FE");
  const fixStemDeck = fix23FE.replace("Steam Deck Black", "Steam Deck");
  const fix15Plus = fixStemDeck.replace("15+", "15 plus");
  const fix24FE = fix15Plus.replace("S24FE", "S24 FE");
  const fix1TB = fix24FE.replace("1T ", "1tb ");
  const fixFlip = fix1TB.replace("Flip", "Z Flip");
  const fixFold = fixFlip.replace("Fold", "Z Fold");
  const fixNote14Plus = fixFold.replace("14 Pro+", "14 pro +");
  const fixMi1 = fixNote14Plus.replace("MI1", "Mi 1");
  const fixS10Plus = fixMi1.replace("S10+", "s10 +");
  const fixRog = fixS10Plus.replace("Rog ", "Rog Phone ");
  const fixLTE = fixRog.replace("LTE", "5G");
  const fixCE4 = fixLTE.replace("CE 4", "CE4");
  const fixIris = fixCE4.replace("Irbis", "iris");
  const fixS10Plus1 = fixIris.replace("S10 Plus", "S10 +");
  const fixS10FEPlus = fixS10Plus1.replace("S10FE Plus", "S10 FE +");
  const fixProPlus = fixS10FEPlus.replace("Pro Plus", "Pro +");
  
  const fixSnow = fixProPlus.indexOf("Pixel") !== -1 ? fixProPlus.replace("White", "Snow") : fixProPlus
  const fixObsidian = fixSnow.indexOf("Pixel") !== -1 ? fixSnow.replace("Black", "Obsidian") : fixSnow
  return fixObsidian  ;
};

export const returnNameInArrA18 = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let toLowerCase = reverseStrName.toLowerCase()
  // let splitPrice =
  //   reverseStrName.indexOf(" ") !== -1
  //     ? /\s(.+)/.exec(reverseStrName)[1]
  //     : reverseStrName;

  // let checkSpace1 = splitPrice[0] === " " ? splitPrice.slice(1) : splitPrice;
  // let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  // let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  // let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  // let checkTriple = checkSpace4.split("-")[4]
  //   ? `${checkSpace4.split("-")[1]}-${checkSpace4.split("-")[2]}-${
  //       checkSpace4.split("-")[3]
  //     }-${checkSpace4.split("-")[4]}`
  //   : checkSpace4;

  // let checkDouble = checkTriple.split("-")[3]
  //   ? `${checkTriple.split("-")[1]}-${checkTriple.split("-")[2]}-${
  //       checkTriple.split("-")[3]
  //     }`
  //   : checkTriple;

  // let splitPrice1 = checkDouble.split("-")[2]
  //   ? `${checkDouble.split("-")[1]}-${checkDouble.split("-")[2]}`
  //   : (checkDouble.split("-")[1] && checkDouble.split("-")[1]) || checkDouble;
  let fixWiFi = toLowerCase.replace("wi-fi", "wifi")

  let splitName =
    fixWiFi.indexOf("-") !== -1
      ? fixWiFi.split("-")[1]
      : fixWiFi;

  let reverseBackStrName = splitName.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceA18 = (name) => {
  let toLowerCase = name.toLowerCase();

  let reverseStrName = name.split("").reverse().join("");

  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  // let splitPrice =
  //   checkSpace4.indexOf(" ") != -1
  //     ? checkSpace4.split(" ")[0]
  //     : checkSpace4;
  // let replaceSpace = splitPrice.replace(" ", "");
  // let replaceDoubleSpace = replaceSpace.replace(" ", "");

  // let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  // let removeOther = reverseBackStrName.indexOf(" ")
  //   ? reverseBackStrName.split(" ")[0]
  //   : reverseBackStrName;
  let fixWiFi = toLowerCase.replace("wi-fi", "wifi");
  let fixUSBC = fixWiFi.replace("usb-c", "usbc");

  let splitPrice =
    fixUSBC.indexOf("-") !== -1 ? fixUSBC.split("-")[1] : fixUSBC;
  
  let splitFire =
    splitPrice.indexOf("🧨") !== -1 ? splitPrice.replace("🧨", "") : splitPrice;
  let splitDoubleFire =
    splitFire.indexOf("🧨") !== -1 ? splitFire.replace("🧨", "") : splitFire;

  return splitDoubleFire;
};
