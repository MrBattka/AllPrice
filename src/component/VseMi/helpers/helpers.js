import { newPrice } from "../../../helpers/NewPrice";

export const returnNameInArrVseMi = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = /\s(.+)/.exec(reverseStrName)[1];
  let replaceStick = /\s(.+)/.exec(splitPrice)[1]
  let reverseBackStrName = replaceStick.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceVseMi = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = reverseStrName.split(' ')[0]
    let reverseBackStrName = splitPrice.split("").reverse().join("");
  
    return reverseBackStrName;
  };

  export const returnExtraPriceVseMi = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = reverseStrName.split(' ')[0]
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
  
  return replacehd08;
};
