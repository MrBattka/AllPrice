import { newPrice } from "../../../helpers/NewPrice"

export const returnFixNameBigAp = (name) => {
    const replaceSmartphone = name.replace("Смартфон ", "")
    const replaceTablet = replaceSmartphone.replace("Планшет ", "")
    const replaceGamepad = replaceTablet.replace("Геймпад ", "")
    const replaceLaptop = replaceGamepad.replace("Ноутбук ", "")
    const replaceMonoblock = replaceLaptop.replace("Моноблок", "")
    const replaceGameConsole = replaceMonoblock.replace("Игровая приставка ", "")
    const replacePortative = replaceGameConsole.replace("Колонка портативная ", "")
    const replaceRST= replacePortative.replace(" (Ростест)", "")
    const replaceGb = replaceRST.replace("Gb", "")
    const replaceGB = replaceGb.replace("GB", "")
    return replaceGB
}

export const returnNameInArrBigAp = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = /\s(.+)/.exec(reverseStrName)[1];
    let reverseBackStrName = splitPrice.split("").reverse().join("");
  
    return reverseBackStrName;
  };

export const returnStockPriceBigAp = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = reverseStrName.split(' ')[0]
    let reverseBackStrName = splitPrice.split("").reverse().join("");
  
    return reverseBackStrName;
  };