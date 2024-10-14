import { newPrice } from "../../../helpers/NewPrice";

export const returnNameReSale = (name) => {
  if (name.indexOf("₽") != -1) {
    let reverseStrName = name.split("").reverse().join("");
    let removeSpaceName =
      reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
    let removeRUB =
      removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
    let splitPrice = /\s(.+)/.exec(removeRUB)[1];
    let splitDash = /\s([-\w]+)/.exec(splitPrice)[1];
    let reverseBackStrName = splitDash.split("").reverse().join("");

    return reverseBackStrName;
  } else {
    let reverseStrName = name.split("").reverse().join("");
    let removeSpaceName1 =
      reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
    let removeSpaceName2 =
      removeSpaceName1[0] === " "
        ? removeSpaceName1.slice(1)
        : removeSpaceName1;
    let removeSpaceName3 =
      removeSpaceName2[0] === " "
        ? removeSpaceName2.slice(1)
        : removeSpaceName2;
    let wggile =
      removeSpaceName3.indexOf(" ") != -1 ? /\s(.+)/.exec(removeSpaceName3)[1] : removeSpaceName3
    let test = removeSpaceName3.split(" ")[0].length === 3 ? /\s(.+)/.exec(wggile)[1] : wggile
      

    // let splitPriceEU = wggile.indexOf(" ") != -1 && /\s(.+)/.exec(wggile)[1];
    let reverseBackStrName = test.split("").reverse().join("");

    return reverseBackStrName;
  }
};

export const returnStockPriceReSale = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = reverseStrName.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnExtraPriceVseMi = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let splitPrice = reverseStrName.split(" ")[0];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return newPrice(returnNameReSale(name), reverseBackStrName);
};

export const returnFixNameReSale = (name) => {
  const replaceCaseDyson = name.replace("с кейсом наша вилка", "");
  const fixPriceDyson = replaceCaseDyson.replace(" наша вилка 🔌", "");
  const replaceOurPlug = fixPriceDyson.replace(" наша вилка", "");
  const replaceCase1 = replaceOurPlug.replace("с кейсом и чехлом", "");
  const replaceCase = replaceCase1.replace("с кейсом", "");
  const replacePoint = replaceCase.replace(".", "");
  const replacePointPlug = replacePoint.replace("🔌", "");
  const fixAWS = replacePointPlug.replace("Apple Watch Series ", "S");
  const fixMouse = fixAWS.replace("🐭", "");
  const fixHeadphone = fixMouse.replace("🎧", "");
  const fixPencil = fixHeadphone.replace("✏️", "");
  const fixPint = fixPencil.replace("•", "");
  const fixAW = fixPint.replace("Apple Watch ", "");

  return fixAW;
};
