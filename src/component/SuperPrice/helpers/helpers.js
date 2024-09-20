export const fixNameSuperPrice = (name) => {
  // const toLowerCase = name.toLowerCase()
  const fixS24 = name.replace("S24 +", "S24+");
  const fixA25 = fixS24.replace("A25 5G", "A25");
  const fixA35 = fixA25.replace("A35 5G", "A35");
  const fixA54 = fixA35.replace("A54 5G", "A54");
  const fixA55 = fixA54.replace("A55 5G", "A55");
  const fixGB = fixA55.replace("GB", "");
  const fixGb = fixGB.replace(" Gb", "");
  const fixIceBlue = fixGb.replace("Ice Blue", "Iceblue");
  const fixSandstone = fixIceBlue.replace("Sandstore", "Sandstone");
  const fixGrey = fixSandstone.replace("Grey", "Gray");
  const fixzFold6 = fixGrey.replace("Z Fold6", "Z Fold 6");
  const fixzFlip6 = fixzFold6.replace("Z Flip6", "Z Flip 6");
  const fixzFold5 = fixzFlip6.replace("Z Fold5", "Z Fold 5");
  const fixzFlip5 = fixzFold5.replace("Z Flip5", "Z Flip 5");
  const fixWatch5 = fixzFlip5.replace("Watch5", "Watch 5");
  const fixWatch6 = fixWatch5.replace("Watch6", "Watch 6");
  const fixmm = fixWatch6.replace("mm", "");
  const fix125g = fixmm.replace("12 5G", "12");
  const fix12pro4g = fix125g.replace("12 Pro 5G", "12 Pro");
  const fix135g = fix12pro4g.replace("13 5G", "13");
  const fix13t5g = fix135g.replace("13T 5G", "13T");
  const fix13tpro5g = fix13t5g.replace("13T Pro 5G", "13T Pro");
  const fix145g = fix13tpro5g.replace("14 5G", "14");
  const fix14ultra5g = fix145g.replace("14 Ultra 5G", "14 Ultra");
  const fixA155g = fix14ultra5g.replace("A15 5G", "A15");
  const fixA35Awesome = fixA155g.replace("Awesome ", "");
  const fixXperia5G =
    fixA35Awesome.indexOf("Xperia") != -1
      ? fixA35Awesome.replace("5G ", "")
      : fixA35Awesome;
  const fixPixel5G =
    fixXperia5G.indexOf("Pixel") != -1
      ? fixXperia5G.replace("5G ", "")
      : fixXperia5G;
  const fixObsidian = fixPixel5G.replace("Obsidian🇨🇦", "Obsidian");
  const fixSilver = fixObsidian.replace("Platinum Silver 12/512", "12/512 Platinum Silver");

  return fixSilver;
};
