import { newPrice } from "../../../helpers/NewPrice"

export const returnFixNameOther = (name) => {
    const replaceGb = name.replace("Gb", "")
    const replaceGB = replaceGb.replace("GB", "")
    const replace4G = replaceGB.replace("4G ", "")
    const replaceProPlus = replace4G.replace("Pro+", "Pro +")
    const replaceAwesome = replaceProPlus.replace("Awesome ", "")
    const replaceSE = replaceAwesome.replace("SE 8.7", "SE")
    const replaceNoteBlue= replaceSE.indexOf("Note ") ? replaceSE.replace("Ice Blue", "Blue") : replaceSE
    const replaceNoteMidnight = replaceNoteBlue.indexOf("Note ") ? replaceNoteBlue.replace("Midnight ", "") : replaceNoteBlue
    const replaceNoteMint = replaceNoteMidnight.indexOf("Note ") ? replaceNoteMidnight.replace("Mint ", "") : replaceNoteMidnight
    const replaceNoteForest = replaceNoteMint.indexOf("Note ") ? replaceNoteMint.replace("Forest ", "") : replaceNoteMint
    const replaceNoteLavender = replaceNoteForest.indexOf("Note ") ? replaceNoteForest.replace("Lavender ", "") : replaceNoteForest

    return replaceNoteLavender
}

export const returnNameInArrOther = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = /\s(.+)/.exec(reverseStrName)[1];
    let reverseBackStrName = splitPrice.split("").reverse().join("");
  
    return reverseBackStrName;
  };

export const returnStockPriceOther = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = reverseStrName.split(' ')[0]
    let reverseBackStrName = splitPrice.split("").reverse().join("");
  
    return reverseBackStrName;
  };
  
  export const returnExtraPriceOther = (name) => {
    let reverseStrName = name.split("").reverse().join("");
    let splitPrice = reverseStrName.split(' ')[0]
    let reverseBackStrName = splitPrice.split("").reverse().join("");
  
    return newPrice(returnNameInArrOther(name), reverseBackStrName);
  };