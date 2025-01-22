import { newPrice } from "../../../helpers/NewPrice"

export const returnFixNameAlikson = (name) => {
    const replaceCar = name.replace("🚚", "")
    const replaceLaptop = replaceCar.replace("Ноутбук ", "")
    const replaceGb = replaceLaptop.replace("Gb", "")
    const replaceNanoSIM = replaceGb.replace("NanoSIM ", "")
    const fix8Plus = replaceNanoSIM.replace("8+", "8/")
    const replaceRU = fix8Plus.replace("RU ", "")
    const replace375 = replaceRU.replace("3.75 ", "")
    return replace375
}

export const returnNameInArrAlikson= (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = /\s(.+)/.exec(reverseStrName)[1];
    let reverseBackStrName = splitPrice.split("").reverse().join("");
  
    return reverseBackStrName;
  };

export const returnStockPriceAlikson = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = reverseStrName.split(' ')[0]
    let reverseBackStrName = splitPrice.split("").reverse().join("");
  
    return reverseBackStrName;
  };