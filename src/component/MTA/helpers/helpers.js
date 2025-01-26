import { newPrice } from "../../../helpers/NewPrice"

export const returnFixNameMTA = (name) => {
    const replaceSmartphone = name.replace(" (nano texture)", "")
    const replaceGb = replaceSmartphone.replace("Gb", "")
    const replaceGB = replaceGb.replace("GB", "")
    const replace5G = replaceGB.indexOf("SM") !== -1 ? replaceGb.replace("5G", "") : replaceGB
    return replace5G
}

export const returnNameInArrMTA = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let removeSpace = reverseStrName[0] === ' ' ? reverseStrName.slice(1) : reverseStrName
    let removeSpace1 = removeSpace[0] === ' ' ? removeSpace.slice(1) : removeSpace
    let splitName = removeSpace1.indexOf(" ") !== -1 ? /\s(.+)/.exec(removeSpace1)[1] : removeSpace1

    let reverseBackStrName = splitName.split("").reverse().join("");
  
    return reverseBackStrName;
  };

export const returnStockPriceMTA = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let removeSpace = reverseStrName[0] === ' ' ? reverseStrName.slice(1) : reverseStrName
    let removeSpace1 = removeSpace[0] === ' ' ? removeSpace.slice(1) : removeSpace
    let splitPrice = removeSpace1.split(' ')[0]
    let checkLength = (splitPrice.length === 3 && reverseStrName.indexOf("-") !== -1) ? reverseStrName.split("-")[0] : splitPrice
    let reverseBackStrName = checkLength.split("").reverse().join("");

    let replaceIN = reverseBackStrName.replace("🇮🇳", "")
    let replaceEU = replaceIN.replace("🇪🇺", "")
    let replaceUS = replaceEU.replace("🇺🇸", "")
    let replaceSpace = replaceUS.replace(" ", "")
    let replaceSpace1 = replaceSpace.replace(" ", "")
  
    return replaceSpace1;
  };