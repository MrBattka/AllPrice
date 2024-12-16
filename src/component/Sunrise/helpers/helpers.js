import { newPrice } from "../../../helpers/NewPrice";

export const returnFixNameSunrise = (name) => {
  const replaceFork = name.replace("🔌", "")
  const replaceMM = replaceFork.replace("mm", "")
  const replaceGb = replaceMM.replace("Gb", "")
  const replaceFireBall = replaceGb.replace("🔥", "")
  const replaceFlash = replaceFireBall.replace("⚡️", "")
  const replaceS8Year = replaceFlash.replace("S8 2022", "S8")
  const replaceS9Year = replaceS8Year.replace("S9 2023", "S9")

  return replaceS9Year;
};


export const returnNameInArrSunrise = (name) => {
  let checkSpace2 =
    name[name.length - 1] === " "
      ? name.slice(0, -1)
      : name;
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
      ? /\-(.+)/.exec(reverseStrName)[1]
      : reverseStrName;
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceSunrise = (name) => {

  let reverseStrName = name.split("").reverse().join("");
  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  // let splitPrice = checkSpace4.split(" ")[0];
  let removeStick = checkSpace4.indexOf("-")
    ? checkSpace4.split("-")[0]
    : checkSpace4;
  let reverseBackStrName = removeStick.split("").reverse().join("");

  return returnFixNameSunrise(reverseBackStrName);
};
