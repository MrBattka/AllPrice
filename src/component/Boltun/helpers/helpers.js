export const returnFixNameBoltun = (name) => {
  const replaceGb = name.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const fixDual = replaceGB.replace(" Dua ", " Dual ");
  const replaceSpaceBlack = fixDual.replace("Space Black", "Black");
  const replaceSpaceGray = replaceSpaceBlack.replace("Space Gray", "Gray");
  const replaceNanoSim = replaceSpaceGray.replace("nano SIM + eSIM ", "");
  const fixNatural = replaceNanoSim.replace("Narural", "Natural");
  const fixSony = fixNatural.replace("Sony Xperia", "Dual 🇭🇰 Sony Xperia");
   
  

  return fixSony;
};
