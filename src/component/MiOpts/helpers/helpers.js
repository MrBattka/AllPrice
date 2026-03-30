const checkFlags = (str, str2) => {
  let checkSpace1 = str[str.length - 1] === " " ? str.slice(0, -1) : str;
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
  if (
    checkSpace4.slice(-4) === `🇯🇵` ||
    checkSpace4.slice(-4) === "🇮🇳" ||
    checkSpace4.slice(-4) === "🇪🇺" ||
    checkSpace4.slice(-4) === "🇦🇪" ||
    checkSpace4.slice(-4) === "🇧🇷" ||
    checkSpace4.slice(-4) === "🇻🇳" ||
    checkSpace4.slice(-4) === "🇰🇼" ||
    checkSpace4.slice(-4) === "🇺🇸" ||
    checkSpace4.slice(-4) === "🇭🇰" ||
    checkSpace4.slice(-4) === "🇬🇧" ||
    checkSpace4.slice(-4) === "🇨🇳" ||
    checkSpace4.slice(-4) === "🇹🇼" ||
    checkSpace4.slice(-4) === "🇷🇺" ||
    checkSpace4.slice(-4) === "🇦🇺" ||
    checkSpace4.slice(-4) === "🇨🇦" ||
    checkSpace4.slice(-4) === "🇨🇱" ||
    checkSpace4.slice(-4) === "🇹🇭" ||
    checkSpace4.slice(-4) === "🇸🇬" ||
    checkSpace4.slice(-4) === "🇲🇾" ||
    checkSpace4.slice(-4) === "🇨🇫" ||
    checkSpace4.slice(-4) === "🇰🇿" ||
    checkSpace4.slice(-4) === "🇰🇷" ||
    checkSpace4.slice(-4) === "🇬🇺"
  ) {
    return (
      str2 + checkSpace4.slice(-4)
    );
  } else {
    return str2;
  }
};

export const returnNameInArrMiOpts = (name) => {
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  let stickToSpace =
    removeDoubleSpace.indexOf("-") !== -1
      ? removeDoubleSpace.replace("-", " ")
      : removeDoubleSpace;

  let reverseStrName = stickToSpace.split("").reverse().join("");

  // Проверяем наличие пробела и извлекаем часть после него
  let splitPrice = null;
  if (reverseStrName && reverseStrName.length > 7 && reverseStrName.indexOf(" ") !== -1) {
    const match = /\s(.+)/.exec(reverseStrName);
    splitPrice = match ? match[1] : ""; // Если нет совпадения — пустая строка
  } else {
    splitPrice = removeDoubleSpace;
  }

  let reverseBackStrName = splitPrice.split("").reverse().join("");
  const reverseFlags = checkFlags(removeDoubleSpace, reverseBackStrName);

  return reverseFlags;
};

export const returnExtraPriceMiOpts = (name) => {
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const stickToSpace = removeDoubleSpace.replace("-", " ");
  let reverseStrName = stickToSpace.split("").reverse().join("");
  let sliceFlags =
    reverseStrName.indexOf("₽") != -1
      ? reverseStrName.split("₽", 2)
      : reverseStrName;
  let slicePrice =
    sliceFlags[1].indexOf("-") != -1 && sliceFlags[1].indexOf("Wi-Fi") == -1
      ? sliceFlags[1].split("-", 2)
      : sliceFlags[1];
  let slicePrice1 =
    slicePrice.indexOf(" ") != -1 ? slicePrice.split(" ", 2) : slicePrice;
  let reverseBackStrName = slicePrice1[0].split("").reverse().join("");
  let extraPrice = Number(reverseBackStrName) + 700;

  return extraPrice;
};

export const returnStockPriceMiOpts = (name) => {
  const stickToSpace = name.replace("-", " ");
  const removeDoubleSpace = stickToSpace.replace(/\s+/g, " ");
  let reverseStrName = removeDoubleSpace.split("").reverse().join("");
  let sliceFlags =
    reverseStrName.indexOf("₽") != -1
      ? reverseStrName.split("₽", 2)
      : reverseStrName;

  let slicePrice =
    sliceFlags[1].indexOf("-") != -1 && sliceFlags[1].indexOf("Wi-Fi") == -1
      ? sliceFlags[1].split("-", 2)
      : sliceFlags[1].split(" ", 2);
  let reverseBackStrName = slicePrice[0].split("").reverse().join("");

  let extraPrice = Number(reverseBackStrName) + 400;
  return extraPrice;
};

export const fixNameMiOpts = (name) => {
  // const toLowercase = name.toLowerCase();
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const removeNewIcon = removeDoubleSpace.replace("🆕", "");

  const fixMI = removeNewIcon.replace("Xiaomi", "Mi");

  const fixMI2 = fixMI.replace("iaomi Mi", "Mi");

  const fixPoco = fixMI2.replace("Poco", "POCO");
  const replaceGB = fixPoco.replace("GB", "");
  const replace5G =
    replaceGB.indexOf("M55 ") !== -1 ||
    replaceGB.indexOf("A25 ") !== -1 ||
    replaceGB.indexOf("A35 ") !== -1 ||
    replaceGB.indexOf("A55 ") !== -1 ||
    replaceGB.indexOf("A26 ") !== -1 ||
    replaceGB.indexOf("A36 ") !== -1 ||
    replaceGB.indexOf("A56 ") !== -1 ||
    replaceGB.indexOf("A37 ") !== -1 ||
    replaceGB.indexOf("A57 ") !== -1 ||
    replaceGB.indexOf("S24 ") !== -1 ||
    replaceGB.indexOf("S25 ") !== -1 ||
    replaceGB.indexOf("Mi 1") !== -1 ||
    replaceGB.indexOf("POCO") !== -1 ||
    replaceGB.indexOf("X7 ") !== -1
      ? replaceGB.replace("5G", "")
      : replaceGB;
  const fixS24FE = replace5G.replace("S24FE", "S24 FE");
  const fixNote13ProPlus = fixS24FE.replace(
    "Note 13 Pro Plus",
    "Note 13 Pro +"
  );
  const fixNote14ProPlus = fixNote13ProPlus.replace(
    "Note 14 Pro Plus",
    "Note 14 Pro +"
  );
  const fix1 = fixNote14ProPlus.replace(" 1шт", "");

  return fix1;
};
