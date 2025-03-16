import { newPrice } from "../../../helpers/NewPrice";

export const returnFixNameBigAp = (name) => {
  const replaceSmartphone = name.replace("Смартфон ", "");
  const replaceTablet = replaceSmartphone.replace("Планшет ", "");
  const replaceGamepad = replaceTablet.replace("Геймпад ", "");
  const replaceLaptop = replaceGamepad.replace("Ноутбук ", "");
  const replaceMonoblock = replaceLaptop.replace("Моноблок", "");
  const replaceGameConsole = replaceMonoblock.replace("Игровая приставка ", "");
  const replacePortative = replaceGameConsole.replace(
    "Колонка портативная ",
    ""
  );
  const replaceRST = replacePortative.replace(" (Ростест)", "");
  const fixLTE = replaceRST.replace("Wi-Fi + Cellular", "LTE");
  const fixGray = fixLTE.replace("Grey", "Gray");
  const replaceGb = fixGray.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  return replaceGB;
};

export const returnNameInArrBigAp = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpace =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let removeSpace1 =
    removeSpace[0] === " " ? removeSpace.slice(1) : removeSpace;
  let splitName =
    removeSpace1.indexOf(" ") !== -1
      ? /\s(.+)/.exec(removeSpace1)[1]
      : removeSpace1;

  let reverseBackStrName = splitName.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceBigAp = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpace =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let removeSpace1 =
    removeSpace[0] === " " ? removeSpace.slice(1) : removeSpace;
  let splitPrice = removeSpace1.split(" ")[0];
  let checkLength =
    splitPrice.length === 3 && reverseStrName.indexOf("-") !== -1
      ? reverseStrName.split("-")[0]
      : splitPrice;
  let reverseBackStrName = checkLength.split("").reverse().join("");

  let replaceIN = reverseBackStrName.replace("🇮🇳", "");
  let replaceEU = replaceIN.replace("🇪🇺", "");
  let replaceUS = replaceEU.replace("🇺🇸", "");
  let replaceRU = replaceUS.replace("🇷🇺", "");
  let replaceJP = replaceRU.replace("🇯🇵", "");
  let replaceSpace = replaceJP.replace(" ", "");
  let replaceSpace1 = replaceSpace.replace(" ", "");
  let replaceStick = replaceSpace1.replace("-", "");
  let replaceMQRJ3PA = replaceStick.replace("(MQRJ3PA/A)", "");

  return replaceMQRJ3PA;
};
