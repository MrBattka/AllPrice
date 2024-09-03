import { newPrice } from "../../../helpers/NewPrice";

export const returnNameInArr = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = /\s(.+)/.exec(reverseStrName)[1];
  let replaceStick = /\s(.+)/.exec(splitPrice)[1]
  let reverseBackStrName = replaceStick.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPrice = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = reverseStrName.split(' ')[0]
    let reverseBackStrName = splitPrice.split("").reverse().join("");
  
    return reverseBackStrName;
  };

  export const returnExtraPrice = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = reverseStrName.split(' ')[0]
    let reverseBackStrName = splitPrice.split("").reverse().join("");
  
    return newPrice(returnNameInArr(name), reverseBackStrName);
  };

export const fixName = (name) => {
  const toLowerCase = name.toLowerCase();
  const replaceDualsensIcon = toLowerCase.replace("🎮", "");
  const replacer510 = replaceDualsensIcon.replace("r510 ", "");
  const replacer920 = replacer510.replace("r920 ", "");
  const replacer940 = replacer920.replace("r940 ", "");
  const replacemm = replacer940.replace("mm", "");
  const replacehd08 = replacemm.replace("gift set vinca ", "");
  

  return replacehd08;
};
