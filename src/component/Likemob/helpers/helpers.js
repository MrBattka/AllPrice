import { newPrice } from "../../../helpers/NewPrice";

export const returnFixNameLikemob = (name) => {
  const replaceCar = name.replace("🚚", "");
  const replaceLaptop = replaceCar.replace("Ноутбук ", "");
  const replaceGb = replaceLaptop.replace("Gb", "");
  const replaceNanoSIM = replaceGb.replace("NanoSIM ", "");
  const fix8Plus = replaceNanoSIM.replace("8+", "8/");
  const replaceRU = fix8Plus.replace("RU ", "");
  const replace375 = replaceRU.replace("3.75 ", "");
  const fix15Plus = replace375.replace("15+", "15 plus");
  const fix24FE = fix15Plus.replace("S24FE", "S24 FE");
  const fix1TB = fix24FE.replace("1T ", "1tb ");
  const fixFlip = fix1TB.replace("Flip", "Z Flip");
  const fixFold = fixFlip.replace("Fold", "Z Fold");
  const fixNote14Plus = fixFold.replace("14 Pro+", "14 pro +");
  const fixMi1 = fixNote14Plus.replace("MI1", "Mi 1");
  const fixS10Plus = fixMi1.replace("S10+", "s10 +");
  const fixLTE = fixS10Plus.replace("LTE", "5G");
  const fixWatch7 = fixLTE.replace("Watch7", "Watch 7");
  const fixSE2 = fixWatch7.replace("SE(Gen 2)", "se2 ");
  const fixWatchS11 = fixSE2.replace("Watch 11", "S11");
  const fixWatchMM = fixWatchS11.replace("mm", "");
  return fixWatchMM;
};

export const returnNameInArrLikemob = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  // let toLowerCase = reverseStrName.toLowerCase()
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
  let fixWiFi = reverseStrName.replace("Wi-Fi", "WiFi")

  let splitName =
    fixWiFi.indexOf("-") !== -1
      ? fixWiFi.split("-")[1]
      : fixWiFi;

  let reverseBackStrName = splitName.split("").reverse().join("");
  let fixwiFi1 = reverseBackStrName.replace("WiFi", "Wi-Fi")

  return fixwiFi1;
};

export const returnStockPriceLikemob = (name) => {
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

  return splitPrice;
};
