import { newPrice } from "../../../helpers/NewPrice";

export const returnFixNameRacmag = (name) => {
  const replaceGb = name.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const replace4G = replaceGB.replace("4G ", "");
  const replaceProPlus = replace4G.replace("Pro+", "Pro +");
  const fix14C = replaceProPlus.replace("Redmi 14С", "Redmi 14C");
  const fixBlue = fix14C.replace("Bluе", "Blue");
  const replaceAwesome = fixBlue.replace("Awesome ", "");
  const replaceSE = replaceAwesome.replace("SE 8.7", "SE");
  const replaceNoteBlue =
    replaceSE.indexOf("Note ") !== -1
      ? replaceSE.replace("Ice Blue", "Blue")
      : replaceSE;
  const replaceNoteMidnight =
    replaceNoteBlue.indexOf("Note ") !== -1
      ? replaceNoteBlue.replace("Midnight ", "")
      : replaceNoteBlue;
  const replaceNoteMint =
    replaceNoteMidnight.indexOf("Note ") !== -1
      ? replaceNoteMidnight.replace("Mint ", "")
      : replaceNoteMidnight;
  const replaceNoteForest =
    replaceNoteMint.indexOf("Note ") !== -1
      ? replaceNoteMint.replace("Forest ", "")
      : replaceNoteMint;
  const replaceNoteLavender =
    replaceNoteForest.indexOf("Note ") !== -1
      ? replaceNoteForest.replace("Lavender ", "")
      : replaceNoteForest;
  const replace5G =
    replaceNoteLavender.indexOf("Note 14 Pro +") !== -1
      ? replaceNoteLavender.replace("5G ", "")
      : replaceNoteLavender;
  const fix15C = replace5G.replace("15С", "15C")

  return fix15C;
};

export const returnNameInArrRacmag = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = /\s(.+)/.exec(reverseStrName)[1];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceRacmag = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = reverseStrName.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnExtraPriceRacmag = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = reverseStrName.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return newPrice(returnNameInArrRacmag(name), reverseBackStrName);
};
