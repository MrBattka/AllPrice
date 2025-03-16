export const returnFixNameBase = (name) => {
  const replaceGB = name.replace("GB", "");
  const replaceNote4G = replaceGB.indexOf("Note ")
    ? replaceGB.replace("4G ", "")
    : replaceGB;
  const fixPlus =
    replaceNote4G.indexOf("OnePlus") === -1
      ? replaceNote4G.replace("Plus", "+")
      : replaceNote4G;
  const fixNordCE3 = fixPlus.replace("Nord CE 3", "Nord CE3");
  const replace5G =
    fixNordCE3.indexOf("A53") ||
    fixNordCE3.indexOf("A55") ||
    fixNordCE3.indexOf("A35") ||
    fixNordCE3.indexOf("A25")
      ? fixNordCE3.replace("5G ", "")
      : fixNordCE3;
  const fix14Plus = replace5G.replace("iPhone 14 +", "iPhone 14 Plus");
  const fixPoco = fix14Plus.replace("Pocophone", "Poco");

  return fixPoco;
};
