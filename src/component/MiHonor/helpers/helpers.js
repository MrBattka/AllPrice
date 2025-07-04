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
  let splitPrice = removeRUB.indexOf(" ") !== -1 ? /\s(.+)/.exec(removeRUB)[1] : removeRUB
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return fixFlags(reverseBackStrName);
};

export const returnExtraPriceMihonor = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpaceName =
    reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
  let removeRUB =
    removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
  let splitPrice = removeRUB.indexOf(" ") !== -1 ? removeRUB.split(' ')[0] : removeRUB
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return newPrice(returnNameInArrMihonor(name), reverseBackStrName);
};

export const returnStockPriceMihonor = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpaceName =
    reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
  let removeRUB =
    removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
  let splitPrice = removeRUB.indexOf(" ") !== -1 ? removeRUB.split(' ')[0] : removeRUB
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const fixNameMihonor = (name) => {
  // const toLowercase = name.toLowerCase();
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const removeNewIcon = removeDoubleSpace.replace("🆕", "");

  const removeGB = removeNewIcon.replace("GB", "");
  const removeGb = removeGB.replace("Gb", "");
  const remove264 = removeGb.replace("2+64", "2/64");
  const remove2128 = remove264.replace("2+128", "2/128");
  const remove464 = remove2128.replace("4+64", "4/64");
  const remove4128 = remove464.replace("4+128", "4/128");
  const remove4256 = remove4128.replace("4+256", "4/256");
  const remove664 = remove4256.replace("6+64", "6/64");
  const remove6128 = remove664.replace("6+128", "6/128");
  const remove6256 = remove6128.replace("6+256", "6/256");
  const remove8128 = remove6256.replace("8+128", "8/128");
  const remove8256gb = remove8128.replace("8+256", "8/256");
  const remove8512 = remove8256gb.replace("8+512", "8/512");
  const remove12256 = remove8512.replace("12+256", "12/256");
  const remove12512 = remove12256.replace("12+512", "12/512");
  const remove121 = remove12512.replace("12+1TB", "12/1tb");
  const remove16256 = remove121.replace("16+256", "16/256");
  const remove16512 = remove16256.replace("16+512", "16/512");
  const remove161 = remove16512.replace("16+1TB", "15/1tb");
  const remove162 = remove161.replace("16+2TB", "16/2tb");
  const fix161024 = remove162.replace("16+1024", "16/1tb");
  
  const fixProPlus = fix161024.replace("PRO PLUS", "Pro +");
  const remove8256 = fixProPlus.replace("8+256", "8/256");

  const fixMi = returnNameInArrMihonor(name.toLowerCase())[0] === "M" ? remove8256.replace("MI ", "XIAOMI ") : remove8256

  const fixA5G = (fixMi.indexOf("A25") !== -1 || fixMi.indexOf("A26") !== -1 || fixMi.indexOf("A35") !== -1 ||
  fixMi.indexOf("A36") !== -1 || fixMi.indexOf("A55") !== -1 || fixMi.indexOf("A56") !== -1) ? fixMi.replace("5G ", "") : fixMi

  const remove874g = fixA5G.replace("8.7 4G ", "");
  const remove874wifi = remove874g.replace("8.7 WI FI ", "");

  const removeLightGreen = remove874wifi.replace("LIGHT GREEN", "green");
  const fixA9Plus = removeLightGreen.replace("SAMSUNG A9 PLUS", "Tab A9 +");
  const fixGray = fixA9Plus.replace("GREY", "gray");
  const removeLightViolet = fixGray.replace("LIGHT VIOLET", "violet");
  const fix1TB = removeLightViolet.replace("+1024GB", "/1Tb")
  const fixmi5g = (fix1TB.indexOf("MI 13") !== -1 || fix1TB.indexOf("MI 14") !== -1) ? fix1TB.replace("5G", "") : fix1TB

  const fixm55s = fixmi5g.indexOf("M55S") !== -1 ? fixmi5g.replace("5G ", "") : fixmi5g

  const fix8255GB = fixm55s.replace("8+255", "8/256");
  const fix8256 = fix8255GB.replace("8 256", "8/256");
  const fix8128 = fix8256.replace("8 128", "8/128");
  const fix12256 = fix8128.replace("12 256", "12/256");
  const fix6128 = fix12256.replace("6 128", "6/128");
  const fix4128 = fix6128.replace("4 128", "4/128");
  const fix121024 = fix4128.replace("12+1024", "12/1tb");
  const fix364 = fix121024.replace("3+64", "3/64");
  const fixNote14ProPlus = fix364.replace("NOTE 14 PRO PLUS", "NOTE 14 PRO +");
  const replace5G = (fixNote14ProPlus.indexOf("X7") !== -1) ? fixNote14ProPlus.replace("5G ", "") : fixNote14ProPlus
  const fix12512 = replace5G.replace("12+ 512", "12/512");
  
  return fix12512;
};