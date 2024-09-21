import { newPrice } from "../../../helpers/NewPrice";

const fixFlags = (str) => {
  const result = [];

  let current = str;
  for (let i = 1; i < str.length; i++) {
      current = current.slice(4) + ' ' + current[0] + current[1] + current[2] + current[3];
      result.push(current)
  }
  return result[0];
}

export const returnNameInArrMihonor = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpaceName =
    reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
  let removeRUB =
    removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
  let splitPrice = /\s(.+)/.exec(removeRUB)[1];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return fixFlags(reverseBackStrName);
};

export const returnExtraPriceMihonor = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpaceName =
    reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
  let removeRUB =
    removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
  let splitPrice = removeRUB.split(' ')[0]
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return newPrice(returnNameInArrMihonor(name), reverseBackStrName);
};

export const returnStockPriceMihonor = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpaceName =
    reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
  let removeRUB =
    removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
  let splitPrice = removeRUB.split(' ')[0]
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const fixNameMihonor = (name) => {
  // const toLowercase = name.toLowerCase();
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const removeNewIcon = removeDoubleSpace.replace("🆕", "");

  const remove264 = removeNewIcon.replace("2+64GB", "2/64");
  const remove2128 = remove264.replace("2+128GB", "2/128");
  const remove464 = remove2128.replace("4+64GB", "4/64");
  const remove4128 = remove464.replace("4+128GB", "4/128");
  const remove4256 = remove4128.replace("4+256GB", "4/256");
  const remove664 = remove4256.replace("6+64GB", "6/64");
  const remove6128 = remove664.replace("6+128GB", "6/128");
  const remove6256 = remove6128.replace("6+256GB", "6/256");
  const remove8128 = remove6256.replace("8+128GB", "8/128");
  const remove8256gb = remove8128.replace("8+256GB", "8/256");
  const remove8512 = remove8256gb.replace("8+512GB", "8/512");
  const remove12256 = remove8512.replace("12+256GB", "12/256");
  const remove12512 = remove12256.replace("12+512GB", "12/512");
  const remove121 = remove12512.replace("12+1TB", "12/1tb");
  const remove16256 = remove121.replace("16+256GB", "16/256");
  const remove16512 = remove16256.replace("16+512GB", "16/512");
  const remove161 = remove16512.replace("16+1TB", "15/1tb");
  const remove162 = remove161.replace("16+2TB", "16/2tb");
  const remove8256 = remove162.replace("8+256", "8/256");

  const fixMi = returnNameInArrMihonor(name.toLowerCase())[0] === "M" ? remove8256.replace("MI ", "XIAOMI ") : remove8256

  const remove874g = fixMi.replace("8.7 4G ", "");
  const remove874wifi = remove874g.replace("8.7 WI FI ", "");

  const removeLightGreen = remove874wifi.replace("LIGHT GREEN", "green");
  const removeLightViolet = removeLightGreen.replace("LIGHT VIOLET", "violet");
  const fix1TB = removeLightViolet.replace("+1024GB", "/1Tb")

  const fix8255GB = fix1TB.replace("8+255GB", "8/256");
  
  return fix8255GB;
};