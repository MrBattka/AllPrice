export const returnFixNameBonus = (name) => {
  const replaceTablet = name.replace("Планшет ", "");
  const replaceSmartphone = replaceTablet.replace("Смартфон ", "");
  const replaceAcusticSystem = replaceSmartphone.replace("Портативная акустическая система ", "");
  const replaceHeadphoneBluetooth = replaceAcusticSystem.replace("Наушники беспроводные ", "");
  const replaceHeadphone = replaceHeadphoneBluetooth.replace("Наушники ", "");
  const replaceSmartWatch = replaceHeadphone.replace("Смарт-часы ", "");
  const replaceGb = replaceSmartWatch.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const replaceMM = replaceGB.replace("mm", "");

  return replaceMM;
};
