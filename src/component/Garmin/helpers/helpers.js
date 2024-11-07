import { newPrice } from "../../../helpers/NewPrice";

export const fixNameGarmin = (name) => {
  const replaceCharging = name.replace("💓", "");
  const replaceBulb = replaceCharging.replace("💡", "");
  const replaceBicycle = replaceBulb.replace("🚲", "");
  const replaceCompass = replaceBicycle.replace("🧭", "");
  const replaceWatch = replaceCompass.replace("⌚️", "");
  const replaceMM = replaceWatch.replace("mm", "");
  const replaceGen2Standart = replaceMM.replace("Gen 2 Standart", "Gen 2");
  return replaceGen2Standart;
};

export const returnFixNameProductGarmin = (name) => {
  let reverseStrName = name.split("").reverse().join("");

  let checkTriple = reverseStrName.split("-")[4]
    ? `${reverseStrName.split("-")[1]}-${reverseStrName.split("-")[2]}-${
        reverseStrName.split("-")[3]
      }-${reverseStrName.split("-")[4]}`
    : reverseStrName;

  let checkDouble = checkTriple.split("-")[3]
    ? `${checkTriple.split("-")[1]}-${checkTriple.split("-")[2]}-${
        checkTriple.split("-")[3]
      }`
    : checkTriple;

  let splitPrice = checkDouble.split("-")[2]
    ? `${checkDouble.split("-")[1]}-${checkDouble.split("-")[2]}`
    : (checkDouble.split("-")[1] && checkDouble.split("-")[1]) || checkDouble;

  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceGarmin = (name) => {
  let checkSpace1 = name[name.length - 1] === " " ? name.slice(0, -1) : name;
  let checkSpace2 =
    checkSpace1[checkSpace1.length - 1] === " "
      ? checkSpace1.slice(0, -1)
      : checkSpace1;
  let checkSpace3 =
    checkSpace2[checkSpace2.length - 1] === " "
      ? checkSpace2.slice(0, -1)
      : checkSpace2;
  let checkSpace4 =
    checkSpace3[checkSpace3.length - 1] === " "
      ? checkSpace3.slice(0, -1)
      : checkSpace3;
  let reverseStrName = checkSpace4.split("").reverse().join("");

  let splitPrice =
    reverseStrName.indexOf("-") !== -1
      ? reverseStrName.split("-")[0]
      : reverseStrName.split(" ")[0] + reverseStrName.split(" ")[1];
  let replaceSpace = splitPrice.replace(" ", "");
  let replaceDoubleSpace = replaceSpace.replace(" ", "");

  let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnExtraPriceGarmin = (name) => {
  let reverseStrName = name.split("").reverse().join("");

  let splitPrice = reverseStrName.split("-")[0];
  let replaceSpace = splitPrice.replace(" ", "");
  let replaceDoubleSpace = replaceSpace.replace(" ", "");

  let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  return newPrice(returnFixNameProductGarmin(name), reverseBackStrName);
};
