import { newPrice } from "../../../helpers/NewPrice";

export const returnNameInArrVseMi = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice =
    reverseStrName.indexOf(" ") !== -1
      ? /\s(.+)/.exec(reverseStrName)[1]
      : reverseStrName;
  let replaceStick =
    splitPrice.indexOf(" ") !== -1 ? /\s(.+)/.exec(splitPrice)[1] : splitPrice;
  let reverseBackStrName = replaceStick.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceVseMi = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = reverseStrName.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnExtraPriceVseMi = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = reverseStrName.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return newPrice(returnNameInArrVseMi(name), reverseBackStrName);
};

export const fixNameVseMi = (name) => {
  // const toLowerCase = name.toLowerCase();
  const replaceDualsensIcon = name.replace("🎮", "");
  const replacer510 = replaceDualsensIcon.replace("R510 ", "");
  const replacer920 = replacer510.replace("R920 ", "");
  const replacer940 = replacer920.replace("R940 ", "");
  const replacemm = replacer940.replace("mm", "");
  const replacehd08 = replacemm.replace("Gift Set Vinca ", "");
  const replaceGB = replacehd08.replace("GB", "");
  const fix13ProPlus = replaceGB.replace("13 Pro+", "13 Pro +");
  const fix14ProPlus = fix13ProPlus.replace("14 Pro+", "14 Pro +");
  const replaceNFC = fix14ProPlus.replace("(NFC)", "");
  const replace8256G = replaceNFC.replace("8/256G", "8/256");
  const replace12256G = replace8256G.replace("12/256G", "12/256");
  const replace12512G = replace12256G.replace("12/512G", "12/512");
  const fixGrey = replace12512G.replace("Grey", "Gray");
  const fixgrey = fixGrey.replace("grey", "gray");
  const fixPixel = fixgrey.replace("Google Pixel", "Pixel");
  const fix5GObsidian = fixPixel.replace("5G Obsidian", "Obsidian");
  const fixMiPad = fix5GObsidian.replace("Mi Pad", "Xiaomi Pad");
  const fixOceanTeal = fixMiPad.replace("Ocean Teal", "teal");
  const fixPoco5g =
    fixOceanTeal.indexOf("Poco") != -1
      ? fixOceanTeal.replace("5G", "")
      : fixOceanTeal;
  const fixDualsense = fixPoco5g.replace("Dualsence", "Dualsense");

  return fixDualsense;
};
