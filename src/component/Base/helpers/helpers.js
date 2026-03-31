export const returnFixNameBase = (name) => {
  const replaceGB = name.replace("GB", "");
  const replaceNote4G = replaceGB.indexOf("Note ")
    ? replaceGB.replace("4G ", "")
    : replaceGB;
  const fixPlus =
    replaceNote4G.indexOf("OnePlus") === -1
      ? replaceNote4G.replace("Plus", "+")
      : replaceNote4G;
  const fixiPhone16Plus = fixPlus.indexOf("iPhone") !== -1 ? fixPlus.replace("16 +", "16 Plus") : fixPlus
  const fixNordCE3 = fixiPhone16Plus.replace("Nord CE 3", "Nord CE3");
  const replace5G =
    (fixNordCE3.indexOf("A53") !== -1 ||
      fixNordCE3.indexOf("A55") !== -1 ||
      fixNordCE3.indexOf("A35") !== -1 ||
      fixNordCE3.indexOf("A56") !== -1 ||
      fixNordCE3.indexOf("A36") !== -1 ||
      fixNordCE3.indexOf("A57") !== -1 ||
      fixNordCE3.indexOf("A37") !== -1 ||
      fixNordCE3.indexOf("A25") !== -1 ||
      fixNordCE3.indexOf("A26") !== -1)
      ? fixNordCE3.replace("5G ", "")
      : fixNordCE3;
  const fix14Plus = replace5G.replace("iPhone 14 +", "iPhone 14 Plus");
  const fixPoco = fix14Plus.replace("Pocophone", "Poco");
  const fixS10 = fixPoco.replace("Apple Watch 10", "S10");
  const fixS9 = fixS10.replace("Apple Watch 9", "S9");

  return fixS9;
};
