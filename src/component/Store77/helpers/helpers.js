export const returnFixNameStore77 = (name) => {
  const replaceGb = name.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const replaceSpaceBlack = replaceGB.replace("Space Black", "Black");
  const replaceSpaceGray = replaceSpaceBlack.replace("Space Gray", "Gray");
  

  return replaceSpaceGray;
};
