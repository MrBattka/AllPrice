import { newPrice } from "../../../helpers/NewPrice";

export const fixNameNarod = (name) => {
  const replaceDot = name.replace(".", "");
  const replaceGb = replaceDot.replace("gb", "");
  const fixGrey = replaceGb.replace("Grey", "Gray");
  const fix256Yellow = fixGrey.replace("256Yellow", "256 Yellow");
  const fixS24Plus = fix256Yellow.replace("S24 Plus", "S24+");
  const fixViolete = fixS24Plus.replace("Violett", "Violet");
  const fix24Plus12 = fixViolete.replace("24+12", "24+ 12");
  const fixCream = fix24Plus12.replace("Ceram", "Cream");
  const fixLavanda = fixCream.replace("Lavanda", "Lavender");
  const fixMi14T = fixLavanda.replace("Mi 14T12/256", "Mi 14T 12/256");
  const fixZFlip5 = fixMi14T.replace("Z Flip5", "Z Flip 5");
  const fixLavendelr = fixZFlip5.replace("Lavendel", "Lavender");
  const fixOnePlus = fixLavendelr.replace("One plus", "OnePlus");
  const fixOnePlus1 = fixOnePlus.replace("One Plus", "OnePlus");
  const fixGraffiti = fixOnePlus1.replace("Graffiti", "Graphite");
  const fix1tb = fixGraffiti.replace("1024", "1TB");
  const fixMinit = fix1tb.replace("Minit", "Mint");
  const fixMint = fixMinit.replace("Мята", "Mint");
  const fixs23feGraphite =
    fixMint.indexOf("S23 FE") != -1
      ? fixMint.replace("Black", "Graphite")
      : fixMint;
  const fixZFold6Navy =
    fixs23feGraphite.indexOf("Z Fold 6") != -1
      ? fixs23feGraphite.replace("Blue", "Navy")
      : fixs23feGraphite;
  const fixA55Lilac =
    fixZFold6Navy.indexOf("A55") != -1 || fixZFold6Navy.indexOf("A35") != -1
      ? fixZFold6Navy.replace("Lavender", "Lilac")
      : fixZFold6Navy;
  const fixA55Lime =
    fixA55Lilac.indexOf("A55") != -1
      ? fixA55Lilac.replace("Limon", "Lime")
      : fixA55Lilac;
  const fixA55Iceblue =
    fixA55Lime.indexOf("A55") != -1 || fixA55Lime.indexOf("A35") != -1
      ? fixA55Lime.replace("ice blue", "iceblue")
      : fixA55Lime;
  const fixA55Lilac1 =
    fixA55Iceblue.indexOf("A55") != -1 || fixA55Iceblue.indexOf("A35") != -1
      ? fixA55Iceblue.replace("violet", "Lilac")
      : fixA55Iceblue;
  const fixA25Blue =
    fixA55Lilac1.indexOf("A25") != -1
      ? fixA55Lilac1.replace("голубой", "Blue")
      : fixA55Lilac1;
  const fixA25Lime =
    fixA25Blue.indexOf("A25") != -1 || fixA25Blue.indexOf("A15") != -1
      ? fixA25Blue.replace("Yellow", "Yellow")
      : fixA25Blue;
  const fixA25 =
    fixA25Lime.indexOf("А25") != -1
      ? fixA25Lime.replace("А25", "A25")
      : fixA25Lime;
  const fixA15 =
    fixA25.indexOf("А15") != -1 ? fixA25.replace("А15", "A15") : fixA25;
  const fixA15Blue =
    fixA15.indexOf("A15") != -1 ? fixA15.replace("Галубой", "Blue") : fixA15;
  const fixPocoF6Titan =
    fixA15Blue.indexOf("Poco F6") != -1
      ? fixA15Blue.replace("Gold", "Titan")
      : fixA15Blue;
  const fix13ProPlus = fixPocoF6Titan.replace("13 Pro Plus", "13 Pro +");
  const fixWhite = fix13ProPlus.replace("While", "White");
  const replaceNEFlag = fixWhite.replace("🇳🇪", "");
  const fixGraphite = replaceNEFlag.replace("Графит", "Graphite");
  const fixLemon = fixGraphite.replace("Limon", "Lemon");
  const fix128G = fixLemon.replace("128G ", "128 ");
  const fix256G = fix128G.replace("256G ", "256 ");
  const fix8Pro = fix256G.replace("8Pro", "8 Pro");
  const fixFE = fix8Pro.replace(" FF ", " FE ");
  const fixA56 = fixFE.replace("А56", "A56");
  const fixA36 = fixA56.replace("А36", "A36");
  const fixA26 = fixA36.replace("А26", "A26");
  const fixA17 = fixA26.replace("A176/128", "A17 6/128");
  const fixWhite1 = fixA17.replace("Белый", "White");
  const fixSnow = fixWhite1.indexOf("PIXEL") !== -1 ? fixWhite1.replace("WHITE", "Snow") : fixWhite1
  const fixBay = fixSnow.indexOf("Pixel") !== -1 ? fixSnow.replace("Галубой", "Bay") : fixSnow
  const fixBay1 = fixBay.indexOf("Pixel") !== -1 ? fixBay.replace("Голубой", "Bay") : fixBay
  const fixCreamZFlip6 = fixBay1.indexOf("Flip") !== -1 ? fixBay1.replace("Бежевый", "Cream") : fixBay1

  const replace5G =
    fixCreamZFlip6.indexOf("M55 ") !== -1 ||
   fixCreamZFlip6.indexOf("A25 ") !== -1 ||
   fixCreamZFlip6.indexOf("A35 ") !== -1 ||
   fixCreamZFlip6.indexOf("A55 ") !== -1 ||
   fixCreamZFlip6.indexOf("A26 ") !== -1 ||
   fixCreamZFlip6.indexOf("A36 ") !== -1 ||
   fixCreamZFlip6.indexOf("A56 ") !== -1 ||
   fixCreamZFlip6.indexOf("S24 ") !== -1 ||
   fixCreamZFlip6.indexOf("S25 ") !== -1 ||
   fixCreamZFlip6.indexOf("Mi 1") !== -1 ||
   fixCreamZFlip6.indexOf("POCO") !== -1 ||
   fixCreamZFlip6.indexOf("X7 ") !== -1
      ? fixCreamZFlip6.replace("5G", "")
      : fixCreamZFlip6;
  
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

export const returnNameNarod = (name) => {
  let replaceFlag = checkFlags(name);
  let reverseStrName = replaceFlag.split("").reverse().join("");
  let splitPrice =
    reverseStrName.indexOf(" ") != -1
      ? /\s(.+)/.exec(reverseStrName)[1]
      : reverseStrName;
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceNarod = (name) => {
  let replaceEU = name.replace("🇪🇺", "");
  let replaceAE = replaceEU.replace("🇦🇪", "");
  let replaceAEAE = replaceAE.replace("🇦🇪🇦🇪", "");
  let replaceFKGS = replaceAEAE.replace("🇫🇰🇬🇸", "");
  let replaceIN = replaceFKGS.replace("🇮🇳", "");
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
  let replaceGU = replaceKR.replace("🇬🇺", "");
  let replacePA = replaceGU.replace("🇵🇦", "");
  let replaceMC = replacePA.replace("🇲🇨", "");
  const replaceDot = replaceMC.replace(".", "");
  const replaceRub = replaceDot.replace("₽", "");

  let reverseStrName = replaceRub.split("").reverse().join("");
  let splitPrice = reverseStrName.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");
  let replaceAA = reverseBackStrName.replace("🇦🇪", "")

  return replaceAA;
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

  return newPrice(fixNameNarod(name), reverseBackStrName);
};
