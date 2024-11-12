export const returnFixNameElectrozon = (name) => {
  const replaceRU = name.replace("RU", "");
  const fixRuFlag = replaceRU.replace("(EAC)", "🇷🇺");
  const replaceSams = fixRuFlag.replace("Samsung ", "");
  const replaceXiaomi = replaceSams.replace("Xiaomi ", "");
  const replaceGb = replaceXiaomi.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const fixBlueBlack =
    replaceGB.indexOf("A05") != -1 &&
    replaceGB.indexOf("A15") != -1 &&
    replaceGB.indexOf("A25") != -1
      ? replaceGB.replace("Dark", "Navy")
      : replaceGB;
  const fixWhiteA55 =
    fixBlueBlack.indexOf("A55") != -1
      ? fixBlueBlack.replace("White", "Iceblue")
      : fixBlueBlack;
  const fixBlueNote13 =
    fixWhiteA55.indexOf("Note 13") != -1
      ? fixWhiteA55.replace("Ice Blue", "Blue")
      : fixWhiteA55;
  const fixGreenNote13 =
    fixBlueNote13.indexOf("Note 13") != -1
      ? fixBlueNote13.replace("Mint Green", "Green")
      : fixBlueNote13;
      const fixBlackNote13 =
    fixGreenNote13.indexOf("Note 13") != -1
      ? fixGreenNote13.replace("Midnight Black", "Black")
      : fixGreenNote13;
  const fixX55G =
    fixBlackNote13.indexOf("X5 ") != -1
      ? fixBlackNote13.replace("5G ", "")
      : fixBlackNote13;
  const fixLilacA35 =
    fixX55G.indexOf("A35") != -1
      ? fixX55G.replace("Lavender", "Lilac")
      : fixX55G;
  const fixPurpleS23 =
    fixLilacA35.indexOf("S23 FE") != -1
      ? fixLilacA35.replace("Violet", "Purple")
      : fixLilacA35;
  const fixCreamZFlip5 =
    fixPurpleS23.indexOf("Z Flip 5") != -1
      ? fixPurpleS23.replace("Beige", "Cream")
      : fixPurpleS23;
  const fixGreenZFlip6 =
    fixCreamZFlip5.indexOf("Z Flip 6") != -1
      ? fixCreamZFlip5.replace("Light Green", "Mint")
      : fixCreamZFlip5;
  const fixGreenS9FE =
    fixGreenZFlip6.indexOf("S9 FE") != -1
      ? fixGreenZFlip6.replace("Green", "Mint")
      : fixGreenZFlip6;
  const fixGraphiteA9Plus =
    fixGreenS9FE.indexOf("A9") != -1
      ? fixGreenS9FE.replace("Grey", "Graphite")
      : fixGreenS9FE;
  const fixGraphiteS9Plus =
    fixGraphiteA9Plus.indexOf("S9+") != -1
      ? fixGraphiteA9Plus.replace("Gray", "Graphite")
      : fixGraphiteA9Plus;
  const fixGraphiteS9Ultra =
    fixGraphiteS9Plus.indexOf("S9 Ultra") != -1
      ? fixGraphiteS9Plus.replace("Gray", "Graphite")
      : fixGraphiteS9Plus;
  const fixGrayS9 =
    fixGraphiteS9Ultra.indexOf("S9 FE+") != -1
      ? fixGraphiteS9Ultra.replace("Graphite", "Gray")
      : fixGraphiteS9Ultra;
  const fixLavenderS9FE =
    fixGrayS9.indexOf("S9 FE+") != -1
      ? fixGrayS9.replace("Pink", "Lavender")
      : fixGrayS9;
  const fixNavy =
    fixLavenderS9FE.indexOf("A55") != -1
      ? fixLavenderS9FE.replace("Dark", "Navy")
      : fixLavenderS9FE;

  let [q, w, e, r, t, y] = fixNavy.split(" ");
  const replaceSM1 =
    e.indexOf("SM-") != -1
      ? `${q} ${w} ${r} ${t} ${y === "🇷🇺" ? y : ""}`
      : fixNavy;
  let [a, s, d, f, g, h, j, k] = fixNavy.split(" ");
  const replaceSM2 =
    f.indexOf("SM-") != -1
      ? `${a} ${s} ${d} ${g} ${h} ${typeof j !== "undefined" && j}`
      : replaceSM1;
  const replaceSM3 =
    g.indexOf("SM-") != -1
      ? `${a} ${s} ${d} ${f} ${h} ${j} ${typeof k !== "undefined" && k}`
      : replaceSM2;
  const fixFEPlus = replaceSM3.replace("FE+", "FE +");
  const fixS9Plus = fixFEPlus.replace("S9+", "S9 +");
  const fixA9Plus = fixS9Plus.replace("A9+", "A9 +");
  const FixLightBlue = fixA9Plus.replace("White-Blue", "Light Blue");
  const FixGrey = FixLightBlue.replace("Grey", "Gray");

  return FixGrey;
};
