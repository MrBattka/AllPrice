export const returnFixNameUniSale = (name) => {
  
  const replaceGb = name.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const replaceSpaceBlack = replaceGB.replace("Space Black", "Black");
  const replaceSpaceGray = replaceSpaceBlack.replace("Space Gray", "Gray");
  const fixLavender = replaceSpaceGray.replace("Lavander", "Lavender")
  const fixZFold6 = fixLavender.replace("z fold6", "z fold 6")
  const fixFlip6 = fixZFold6.replace("z flip6", "z flip 6")
  const fixFold7 = fixFlip6.replace("z fold7", "z fold 7")
  const fixFlip7 = fixFold7.replace("z flip7", "z flip 7")
  const fixMM3 = fixFlip7.replace("Magic Mouse (USB-C)", "Magic Mouse 3")
  const fixWiFi = fixMM3.replace("Wi‑Fi", "Wi-Fi")
  const fixM4 = fixWiFi.replace("(M4)", "M4")
  const fixM3 = fixM4.replace("(M3)", "M3")
  const fixM5 = fixM3.replace("(M5)", "M5")
  const fixSE2 = fixM5.replace("SE (2024)", "SE2")
  const fixSE3 = fixSE2.replace("SE (2025)", "SE3")
  const fixSE21 = fixSE3.replace("SE 2 (2024)", "SE2")
  const fixSE31 = fixSE21.replace("SE 3 (2025)", "SE3")
  const replaceMM = fixSE31.replace("mm", "")
  const fixYandex = replaceMM.replace("Yandex", "Яндекс")
  const fixDisc = fixYandex.replace("Disk", "Disc")
  const fix1TB = fixDisc.replace("/1024 ", "/1TB ")
  const fixZFLIP = fix1TB.replace("zflip", "z flip")
  const fixWiFiLTE = fixZFLIP.replace("Wi-Fi + LTE", "5G")
  const fixS26Plus = fixWiFiLTE.replace("s26 Plus", "S26+")
  const fixS25Plus = fixS26Plus.replace("s25 Plus", "S25+")
  const fixESim = fixS25Plus.replace("E-Sim", "eSim")
  const fixDualSim = fixESim.replace("Dual-Sim", "Dual")

  return fixDualSim;
};

// export const returnFixPriceUniSale = (price) => {
//   let priceStr;
//   if (typeof price === "number") {
//     priceStr = String(price);
//   } else if (typeof price !== "string") {
//     return price;
//   } else {
//     priceStr = price;
//   }

//   return priceStr.replace(/\s/g, "");
// };



export const returnNameInArrUniSale = (name) => {

  let reverseStrName = name.split("").reverse().join("");

  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  let splitPrice =
    checkSpace4.indexOf("-") !== -1
      ? /\s(.+)/.exec(checkSpace4)[1]
      : checkSpace4;
  // let replaceStick = /\s(.+)/.exec(splitPrice)[1];

  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceUniSale = (name) => {

  let reverseBackStrName = name.split("").reverse().join("");

  let checkSpace1 =
    reverseBackStrName[0] === " "
      ? reverseBackStrName.slice(1)
      : reverseBackStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  let removeOther = checkSpace4.indexOf(" ")
    ? checkSpace4.split(" ")[0]
    : checkSpace4;

  let reverseStrName = removeOther.split("").reverse().join("");
  
  let replace1 = reverseStrName.replace("`", "")

  return replace1;
};