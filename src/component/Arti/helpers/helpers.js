export const returnFixNameArti = (name) => {
  const replacePhoneStar = name.replace("📱*", " ");

  const fixiPadMiniBlack =
    replacePhoneStar.indexOf("iPad") != -1 &&
    replacePhoneStar.indexOf("iPad Pro") == -1
      ? replacePhoneStar.replace("⚫", " Gray")
      : replacePhoneStar;
  const fixBlack =
    fixiPadMiniBlack.indexOf("14 ") != -1 ||
    fixiPadMiniBlack.indexOf("13 ") != -1
      ? fixiPadMiniBlack.replace("⚫", " Midnight")
      : fixiPadMiniBlack.replace("⚫", " Black");
  const fixS2Violet =
    fixBlack.indexOf("S24") != -1 || fixBlack.indexOf("S23") != -1
      ? fixBlack.replace("🟣", " Violet")
      : fixBlack;
  const fixPurple = fixS2Violet.replace("🟣", " Purple");
  const fixiPadMiniWhite =
    fixPurple.indexOf("iPad") != -1
      ? fixPurple.replace("⚪", " Silver")
      : fixPurple;
  const fixWhite =
    fixiPadMiniWhite.indexOf("13 ") != -1 ||
    fixiPadMiniWhite.indexOf("14 ") != -1
      ? fixiPadMiniWhite.replace("⚪", " Starlight")
      : fixiPadMiniWhite.replace("⚪", " White");
  const fixYellow = fixWhite.replace("🟡", " Yellow");
  const fixRed = fixYellow.replace("🔴", " Red");
  const fixAirPods3 = fixRed.replace("AirPods3", "AirPods 3");
  const fixZFlip7 = fixAirPods3.replace("Flip7⃣", "Flip 7");
  const fixPink = fixZFlip7.replace("💕", " Pink");
  const fixGray = fixPink.replace("🔘", " Gray");
  const fixOrange = fixGray.replace("🟠", " Orange");

  const fixiPhone16Blue =
    fixOrange.indexOf("16 128") != -1 ||
    fixOrange.indexOf("16 256") != -1 ||
    fixOrange.indexOf("16 512") != -1 ||
    fixOrange.indexOf("16 Pro") != -1
      ? fixOrange.replace("🔵", " Ultramarine")
      : fixOrange;
  const fixBlue = fixiPhone16Blue.replace("🔵", " Blue");

  const fixiPhone16Green =
    fixBlue.indexOf("16 128") != -1 ||
    fixBlue.indexOf("16 256") != -1 ||
    fixBlue.indexOf("16 512") != -1 ||
    fixBlue.indexOf("16 Pro") != -1
      ? fixBlue.replace("🟢", " Teal")
      : fixBlue;
  const fixGreen = fixiPhone16Green.replace("🟢", " Green");
  const fixZFold6Black = fixGreen.replace("Crafted Black", "Black");
  const fixS9FEGray =
    fixZFold6Black.indexOf("S9 F") != -1
      ? fixZFold6Black.replace("Black", "Gray")
      : fixZFold6Black;
  const fixS9Graphite =
    fixS9FEGray.indexOf("S9 ") != -1
      ? fixS9FEGray.replace("Black", "Graphite")
      : fixS9FEGray;
  const fixS9FESilver =
    fixS9Graphite.indexOf("S9 F") != -1
      ? fixS9Graphite.replace("White", "Silver")
      : fixS9Graphite;
  const fixS9FELavander =
    fixS9FESilver.indexOf("S9 ") != -1
      ? fixS9FESilver.replace("Purple", "Lavender")
      : fixS9FESilver;
  const fixS9Beige =
    fixS9FELavander.indexOf("S9 ") != -1
      ? fixS9FELavander.replace("White", "Beige")
      : fixS9FELavander;
  const fixZFlip6Mint =
    fixS9Beige.indexOf("Z Flip 6 ") != -1
      ? fixS9Beige.replace("Green", "Mint")
      : fixS9Beige;
  const fixZFlip6Silver =
    fixZFlip6Mint.indexOf("Z Flip 6 ") != -1 ||
    fixZFlip6Mint.indexOf("Z Fold 6 ") != -1
      ? fixZFlip6Mint.replace("Gray", "Silver")
      : fixZFlip6Mint;
  const fixZFlip6Navy =
    fixZFlip6Silver.indexOf("Z Fold 6 ") != -1
      ? fixZFlip6Silver.replace("Blue", "Navy")
      : fixZFlip6Silver;

  const replacePhone = fixZFlip6Navy.replace("📱", "");
  const replaceNewStar = replacePhone.replace("🆕*", " ");
  const replaceLaptopStar = replaceNewStar.replace("💻*", " ");
  const replaceMacMiniStar = replaceLaptopStar.replace("🖥*", " ");
  const replacePadStar = replaceMacMiniStar.replace("📋*", " ");
  const replaceStar = replacePadStar.replace("⭐", " ");
  const fixUSB = replaceStar.replace("2(USB-C)", "2 USB-C");
  const fixUSBC = fixUSB.replace("(USB-C)", "USB-C");
  const fix4ANC = fixUSBC.replace("4(шумодав)", "4 anc");
  const fix2023 = fix4ANC.replace("(2023)", "2023");
  const replaceFire = fix2023.replace("🔥", "");
  const fixSymbol6 = replaceFire.replace("6⃣", "6");
  const replaceSymbolStar = fixSymbol6.replace("*", "");
  const replaceHeadphone = replaceSymbolStar.replace("🎧", "");
  const replacePancil = replaceHeadphone.replace("✏️", "");
  const replacePad = replacePancil.replace("📋", "");
  const fixSymbol1 = replacePad.replace("1⃣", "1");
  const fixSymbol2 = fixSymbol1.replace("2⃣", "2");
  const fixSymbol3 = fixSymbol2.replace("3⃣", "3");
  const replace2Sim = fixSymbol3.replace("(2Sim)", "");
  const replaceWithKeyboard = replace2Sim.replace("(+клавиатура)", "");
  const fixS24Plus = replaceWithKeyboard.replace("S24 Plus", "S24+");
  const fixS23Plus = fixS24Plus.replace("S23 Plus", "S23+");
  const fixS9FEPlus = fixS23Plus.replace("S9 Fe Plus", "S9 FE +");
  const fix2024 = fixS9FEPlus.replace("2️⃣0️⃣2️⃣4️⃣", " 2024");
  const fix8255 = fix2024.replace("8/255", "8/256");
  const fix4 = fix8255.replace("4⃣", "4");
  const fix4anc = fix4.indexOf("AirPods") != -1 ? fix4.replace("🔇", " ANC") : fix4
  

  const replaceBrecket1 = fix4anc.replace("(", "");
  const replaceBrecket2 = replaceBrecket1.replace(")", "");
  const replaceS711B = replaceBrecket2.replace(" S711B", "");
  const replaceS918B = replaceS711B.replace(" S918B", "");
  const replaceS9160 = replaceS918B.replace(" S9160", "");
  const replaceS911B = replaceS9160.replace(" S911B", "");
  const replaceS9210 = replaceS911B.replace(" S9210", "");
  const replaceS921B = replaceS9210.replace(" S921B", "");
  const replaceS9280 = replaceS921B.replace(" S9280", "");
  const replaceS928B = replaceS9280.replace(" S928B", "");
  const replaceS926B = replaceS928B.replace(" S926B", "");
  const replaceF731B = replaceS926B.replace(" F731B", "");
  const replaceF946B = replaceF731B.replace(" F946B", "");
  const replaceAI2401 = replaceF946B.replace(" AI2401", "");
  const replaceAI2302 = replaceAI2401.replace(" AI2302", "");
  const replaceX710 = replaceAI2302.replace(" X710", "");
  const replaceX810 = replaceX710.replace(" X810", "");
  const replaceEC72 = replaceX810.replace(" XQ-EC72", "");
  const replaceES72 = replaceEC72.replace(" 5G XQ-ES72", "");
  const replaceDQ72 = replaceES72.replace(" XQ-DQ72", "");
  const fixnx721j = replaceDQ72.replace("NX721J ", "");
  const fixne2213 = fixnx721j.replace("NE2213 ", "");
  const fixcph2609 = fixne2213.replace("CPH2609 ", "");
  const fixcph2493 = fixcph2609.replace("CPH2493 ", "");
  const fixcnx769j = fixcph2493.replace("NX769J ", "");
  const fixxqde72 = fixcnx769j.replace("XQ-DE72 ", "");
  const fixs916b = fixxqde72.replace("S916B ", "");
  const fixF956B = fixs916b.replace("F956B ", "");
  const fixS721B = fixF956B.replace("S721B ", "");
  const fixF741B = fixS721B.replace("F741B ", "");
  const fixAirPods4 = fixF741B.replace("AirPods4", "AirPods 4");
  const fix5 = fixAirPods4.replace("5️⃣", " 5 ");
  const fix6 = fix5.replace("6️⃣", " 6 ");

  return fix6;
};

export const returnNameArti = (name) => {
  let reverseStrName = name.split("").reverse().join("");

  let checkTriple = reverseStrName.split("-")[4]
    ? `${reverseStrName.split("-")[1]}-${reverseStrName.split("-")[2]}-${
        reverseStrName.split("-")[3]
      }-${reverseStrName.split("-")[4]}`
    : reverseStrName;

  let checkDouble = checkTriple.split("-")[3]
    ? `${checkTriple.split("-")[1]}-${checkTriple.split("-")[2]}-${
        checkTriple.split("-")[3]
      }`
    : checkTriple;

  let splitPrice1 = checkDouble.split("-")[2]
    ? `${checkDouble.split("-")[1]}-${checkDouble.split("-")[2]}`
    : (checkDouble.split("-")[1] && checkDouble.split("-")[1]) || checkDouble;

  let reverseBackStrName = splitPrice1.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnStockPriceArti = (name) => {
  let reverseStrName = name.split("").reverse().join("");

  let splitPrice =
    reverseStrName.indexOf("-") != -1
      ? reverseStrName.split("-")[0]
      : reverseStrName.split(" ")[0];
  let replaceSpace = splitPrice.replace(" ", "");
  let replaceDoubleSpace = replaceSpace.replace(" ", "");

  let reverseBackStrName = replaceDoubleSpace.split("").reverse().join("");

  return reverseBackStrName;
};
