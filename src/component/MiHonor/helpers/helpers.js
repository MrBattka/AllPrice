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

export const returnNameInArr = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpaceName =
    reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
  let removeRUB =
    removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
  let splitPrice = /\s(.+)/.exec(removeRUB)[1];
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return fixFlags(reverseBackStrName);
};

export const returnExtraPrice = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpaceName =
    reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
  let removeRUB =
    removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
  let splitPrice = removeRUB.split(' ')[0]
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return newPrice(returnNameInArr(name), reverseBackStrName);
};

export const returnStockPrice = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpaceName =
    reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
  let removeRUB =
    removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
  let splitPrice = removeRUB.split(' ')[0]
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const fixName = (name) => {
  const toLowercase = name.toLowerCase();
  const removeDoubleSpace = toLowercase.replace(/\s+/g, " ");
  const removeNewIcon = removeDoubleSpace.replace("🆕", "");

  const remove264 = removeNewIcon.replace("2+64gb", "2/64");
  const remove2128 = remove264.replace("2+128gb", "2/128");
  const remove464 = remove2128.replace("4+64gb", "4/64");
  const remove4128 = remove464.replace("4+128gb", "4/128");
  const remove4256 = remove4128.replace("4+256gb", "4/256");
  const remove664 = remove4256.replace("6+64gb", "6/64");
  const remove6128 = remove664.replace("6+128gb", "6/128");
  const remove6256 = remove6128.replace("6+256gb", "6/256");
  const remove8128 = remove6256.replace("8+128gb", "8/128");
  const remove8256 = remove8128.replace("8+256gb", "8/256");
  const remove8512 = remove8256.replace("8+512gb", "8/512");
  const remove12256 = remove8512.replace("12+256gb", "12/256");
  const remove12512 = remove12256.replace("12+512gb", "12/512");
  const remove121 = remove12512.replace("12+1tb", "12/1tb");
  const remove16256 = remove121.replace("16+256gb", "16/256");
  const remove16512 = remove16256.replace("16+512gb", "16/512");
  const remove161 = remove16512.replace("16+1tb", "15/1tb");
  const remove162 = remove161.replace("16+2tb", "16/2tb");

  const fixMi = returnNameInArr(name.toLowerCase())[0] === "m" ? remove162.replace("mi ", "xiaomi ") : remove162

  const remove874g = fixMi.replace("8.7 4g ", "");
  const remove874wifi = remove874g.replace("8.7 wi fi ", "");

  const removeLightGreen = remove874wifi.replace("light green", "green");
  const removeLightViolet = removeLightGreen.replace("light violet", "violet");
  
  return removeLightViolet;
};
// 16+256gb
// 16+512gb
// 16+1tb
// 16+2tb