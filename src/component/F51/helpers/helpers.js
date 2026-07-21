
export const returnNameF51 = (name) => {
  const replaceGb = name.replace("Gb", "");
  const replac4G = replaceGb.replace("4G", "");
  const replac121T = replac4G.replace("1T ", "1Tb ");
  const fixS24Plus = replac121T.replace("S24 +", "S24+");
  const fixA05s464 = fixS24Plus.replace("A05s 4/05", "A05s 4/64");
  const fixNordCE3 = fixA05s464.replace("Nord CE 3", "Nord CE3");
  const fixLavender = fixNordCE3.replace("Lavander", "Lavender");
  const fixPnk = fixLavender.replace("Pnk", "Pink");
  const fixmm = fixPnk.replace("mm", "");
  const fixFEPlus = fixmm.replace("FE+", "FE +");
  const fixGray = fixFEPlus.replace("Grey", "Gray");
  const fixCE5 = fixGray.replace("CE 5", "CE5");
  const fixCE4 = fixCE5.replace("CE 4", "CE4");
  const fixACE5 = fixCE4.replace("ACE5", "Ace 5");
  const fixSilver = fixACE5.replace("Slver", "Silver");
  const fixSilver1 = fixSilver.replace("Siver", "Silver");
  const fixAce5 = fixSilver1.replace("Ace5", "Ace 5");
  const fixBrown = fixAce5.replace("Brow", "Brown");
  const fixSony = fixBrown.replace("Sony Xperia", "Dual 🇭🇰 Sony Xperia");
  const fixSony1 = fixSony.replace("Sony  Xperia", "Dual 🇭🇰 Sony Xperia");
  const fixTabS5G = fixSony1.indexOf("Tab S") !== -1 ? fixSony1.replace("5G", "LTE") : fixSony1
  const fixYelow = fixTabS5G.replace("Yelow", "Yellow");
  const fixPixel8 =
    fixYelow.indexOf("Pixel") !== -1 ? fixYelow.replace("8/", "") : fixYelow;
  const fixPixel6 =
    fixPixel8.indexOf("Pixel") !== -1 ? fixPixel8.replace("6/", "") : fixPixel8;
  const fixPixel12 =
    fixPixel6.indexOf("Pixel") !== -1
      ? fixPixel6.replace("12/", "")
      : fixPixel6;
  const fixGren = fixPixel12.replace("Greem", "Green");
  const fixRedmiPad = fixGren.replace("8.7 ", "");
  const fixRedmiPadSELTE =
    fixRedmiPad.indexOf("Redmi Pad") != -1
      ? fixRedmiPad.replace("LTE ", "")
      : fixRedmiPad;
  const fixRedmiPadSE5G =
    fixRedmiPadSELTE.indexOf("Redmi Pad") != -1
      ? fixRedmiPadSELTE.replace("5G ", "")
      : fixRedmiPadSELTE;
  const fixRedmiPadWiFi =
    fixRedmiPadSE5G.indexOf("Redmi Pad") != -1
      ? fixRedmiPadSE5G.replace("Wi-Fi ", "")
      : fixRedmiPadSE5G;
  const fixRedmiPadSE6 = fixRedmiPadWiFi.replace("Pad SE6", "Pad SE 6");

  const fixParcelain = fixRedmiPadSE6.replace("Parcelain", "Porcelain");

  const fixA9Plus =
    fixParcelain.indexOf("Tab ") != -1
      ? fixParcelain.replace("A9+", "A9 +")
      : fixParcelain;
  const fixS9Plus =
    fixA9Plus.indexOf("Tab ") != -1
      ? fixA9Plus.replace("S9+", "S9 +")
      : fixA9Plus;
  const fixS9FEPlus =
    fixS9Plus.indexOf("Tab ") != -1
      ? fixS9Plus.replace("S9 + FE", "S9 FE +")
      : fixS9Plus;
  const replaceTabWiFi =
    fixS9FEPlus.indexOf("Tab ") != -1
      ? fixS9FEPlus.replace("Wi-Fi ", "")
      : fixS9FEPlus;
  const fixRedMagic9ProSilver =
    replaceTabWiFi.indexOf("Red Magic 9 PRO") != -1
      ? replaceTabWiFi.replace("Silver", "Snowfall")
      : replaceTabWiFi;
  const fixmi12Black =
    fixRedMagic9ProSilver.indexOf("mi 12") != -1
      ? fixRedMagic9ProSilver.replace("Gray", "Black")
      : fixRedMagic9ProSilver;
  const fixS23FEGraphite =
    fixmi12Black.indexOf("S23 FE") != -1
      ? fixmi12Black.replace("Gray", "Graphite")
      : fixmi12Black;
  const fix512 = fixS23FEGraphite.replace("1512", "512")
  const fix256 = fix512.replace("1256", "256")
  const fix128 = fix256.replace("1128", "128")
  const fixS10Plus = fix128.replace("S10+", "S10 +")
  const fixBuds = fixS10Plus.replace("Samsung Buds", "Galaxy Buds")
  const fixLemon = fixBuds.replace("Limongrass", "Lemongrass")
  const fixObsidian = fixLemon.replace("bsidian", "Obsidian")
  const fixObsidain = fixObsidian.replace("Obsidain", "Obsidian")
  const fixCMFWatch = fixObsidain.replace("Nothing Watch PRO", "CMF Watch PRO")
  const fixRedMagic = fixCMFWatch.replace("Red Magic", "RedMagic")
  
  const fixGeen = fixRedMagic.replace("Geen", "Green")
  const fixPRO = fixGeen.replace("PRO", "Pro")
  const fixMote15PeoSilver = fixPRO.indexOf("Note 15 Pro") !== -1 ? fixPRO.replace("Silver", "Titan") : fixPRO

  return fixMote15PeoSilver;
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
    checkSpace4.slice(-4) === "🇮🇩"
  ) {
    return (
      checkSpace4.slice(-4) + checkSpace4.substring(0, checkSpace4.length - 4)
    );
  } else if (
    checkSpace4.slice(-6) === "(esim)" ||
    checkSpace4.slice(-6) === "(2sim)"
  ) {
    return (
      checkSpace4.slice(-6) + checkSpace4.substring(0, checkSpace4.length - 6)
    );
  } else {
    return checkSpace4;
  }
};

export const returnNameInArrF51 = (name) => {
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

  // let splitPrice =
  //   checkSpace4.indexOf(" ") != -1 ? checkSpace4.split(" ")[0] : checkSpace4;

  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceF51 = (name) => {
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
  let replacePY = replaceZA.replace("🇵🇾", "");
  let replaceID = replacePY.replace("🇮🇩", "");

  
  let replaceRub = replaceID.replace("₽", "");
  let replaceGT = replaceRub.replace("🇬🇹", "");
  let replaceLT = replaceGT.replace("🇱🇹", "");
  let replacePA = replaceLT.replace("🇵🇦", "");
  let replaceSA = replacePA.replace("🇸🇦", "");
  let replaceSim = replaceSA.replace("1Sim+Esim", "");
  let replaceCar = replaceSim.replace("🚘", "");
  let replaceBuds3White = replaceCar.replace("Buds 3 White", "");
  let replaceS9feLavander = replaceBuds3White.replace(
    "Tab S9FE 8/256 Lavender 5G",
    ""
  );
  let checkSpace11 =
    replaceS9feLavander[0] === " " ? replaceS9feLavander.slice(1) : replaceS9feLavander;
  let checkSpace21 = checkSpace11[0] === " " ? checkSpace11.slice(1) : checkSpace11;
  let checkSpace31 = checkSpace21[0] === " " ? checkSpace21.slice(1) : checkSpace21;
  let checkSpace41 = checkSpace31[0] === " " ? checkSpace31.slice(1) : checkSpace31;
  let checkSpace51 = checkSpace41[0] === " " ? checkSpace41.slice(1) : checkSpace41;

  let reverseStrName = checkSpace51.split("").reverse().join("");

  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  let splitPrice =
    checkSpace4.indexOf(" ") !== -1 ? checkSpace4.split(" ")[0] : checkSpace4;

  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};