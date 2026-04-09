export const defaultFixName = (el) => {
  const name = el.toLowerCase();
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const fixESim =
  removeDoubleSpace.indexOf("e-sim") !== -1
    ? removeDoubleSpace.replace("e-sim", "esim")
    : removeDoubleSpace;
  const fixDualSim1 =
  fixESim.indexOf("2sim") !== -1
    ? fixESim.replace("2sim", "dual")
    : fixESim;
  const fixPinkGold =fixDualSim1.replace("pink gold", "gold")
  const fixDualSim2 =
  fixPinkGold.indexOf("2-sim") !== -1
    ? fixPinkGold.replace("2-sim", "dual")
    : fixPinkGold;
  const fixAirPodsUSB =
    fixDualSim2.indexOf("airpods pro 2") !== -1
      ? fixDualSim2.replace("type", "usb")
      : fixDualSim2;
  const fixAirPodsMax22 =
    fixAirPodsUSB.indexOf("airpods max") !== -1 &&
      fixAirPodsUSB.indexOf("usb") !== -1
      ? fixAirPodsUSB.replace("usb", "2")
      : fixAirPodsUSB;
  const fixSE2Black =
    (fixAirPodsMax22.indexOf("se2") !== -1 ||
      fixAirPodsMax22.indexOf("s8") !== -1 ||
      fixAirPodsMax22.indexOf("s9") !== -1)
      ? fixAirPodsMax22.replace("black", "midnight")
      : fixAirPodsMax22;
  const fixSE2White =
    (fixSE2Black.indexOf("se2") !== -1 ||
      fixSE2Black.indexOf("s8") !== -1 ||
      fixSE2Black.indexOf("s9") !== -1)
      ? fixSE2Black.replace("white", "starlight")
      : fixSE2Black;
  const fixUltra2 =
    fixSE2White.indexOf("ul 2") !== -1
      ? fixSE2White.replace("ul 2", "ultra 2")
      : fixSE2White;
  const fixUltra2OB =
    fixUltra2.indexOf("ul 2") !== -1
      ? fixUltra2.replace("ob", "ocean band")
      : fixUltra2;
  const fixipadPro11Gray =
    fixUltra2OB.indexOf("pro 11") !== -1 &&
      (fixUltra2OB.indexOf("m4") !== -1 ||
        fixUltra2OB.indexOf("m5") !== -1)
      ? fixUltra2OB.replace("gray", "black")
      : fixUltra2OB;
  const fixiPhoneGray =
    fixipadPro11Gray.indexOf("iphone") !== -1
      ? fixipadPro11Gray.replace("gray", "black")
      : fixipadPro11Gray;
  const fixiPhone1Sim =
    fixiPhoneGray.indexOf("iphone") !== -1
      ? fixiPhoneGray.replace("nano sim + esim", "🇮🇳")
      : fixiPhoneGray;
  const fixiPhone17Orange =
    fixiPhone1Sim.indexOf("iphone") !== -1
      ? fixiPhone1Sim.replace("cosmic ", "")
      : fixiPhone1Sim;

  const fixGrey = fixiPhone17Orange.replace("grey", "gray")
  const fixMagic7ProWhite =
    (fixGrey.indexOf("magic 7 pro") !== -1 ||
      fixGrey.indexOf("magic 8 pro") !== -1)
      ? fixGrey.replace("gray", "white")
      : fixGrey;

  const fixMagic7ProGreen =
    fixMagic7ProWhite.indexOf("magic 8 pro") !== -1
      ? fixMagic7ProWhite.replace("cyan", "green")
      : fixMagic7ProWhite;
  const fixUltra3Ob =
    fixMagic7ProGreen.indexOf("ultra 3") !== -1
      ? fixMagic7ProGreen.replace("ocean", "ob")
      : fixMagic7ProGreen;
  const fixbuds3black1 =
    fixUltra3Ob.indexOf("buds 3") !== -1 &&
      fixUltra3Ob.indexOf("buds 3 fe") === -1
      ? fixUltra3Ob.replace("black", "silver")
      : fixUltra3Ob;
  const fixbuds3black2 =
    fixbuds3black1.indexOf("buds 3") !== -1 &&
      fixbuds3black1.indexOf("buds 3 fe") === -1
      ? fixbuds3black1.replace("gray", "silver")
      : fixbuds3black1;

  const fixBuds3White =
    (fixbuds3black2.indexOf("buds 3 white") !== -1) &&
      fixbuds3black2[0] === "b"
      ? fixbuds3black2.replace("buds 3 white", "galaxy buds 3 white")
      : fixbuds3black2;
  const fixBuds3Silver =
    fixBuds3White.indexOf("buds 3 silver") !== -1 &&
      fixBuds3White[0] === "b"
      ? fixBuds3White.replace("buds 3 silver", "galaxy buds 3 silver")
      : fixBuds3White;
  const fixBuds3FEWhite =
    (fixBuds3Silver.indexOf("buds 3 fe gray") !== -1) &&
      fixBuds3Silver[0] === "b"
      ? fixBuds3Silver.replace("buds 3 fe gray", "galaxy buds 3 fe gray")
      : fixBuds3Silver;
  const fixBuds3FESilver =
    fixBuds3FEWhite.indexOf("buds 3 fe black") !== -1 &&
      fixBuds3FEWhite[0] === "b"
      ? fixBuds3FEWhite.replace("buds 3 fe black", "galaxy buds 3 fe black")
      : fixBuds3FEWhite;
  const fixBuds3ProWhite =
    (fixBuds3FESilver.indexOf("buds 3 pro white") !== -1) &&
      fixBuds3FESilver[0] === "b"
      ? fixBuds3FESilver.replace("buds 3 pro white", "galaxy buds 3 pro white")
      : fixBuds3FESilver;
  const fixBuds3ProSilver =
    fixBuds3ProWhite.indexOf("buds 3 pro silver") !== -1 &&
      fixBuds3ProWhite[0] === "b"
      ? fixBuds3ProWhite.replace("buds 3 pro silver", "galaxy buds 3 pro silver")
      : fixBuds3ProWhite;

  const fixMagic11Pro =
    fixBuds3ProSilver.indexOf("magic 11 pro") !== -1
      ? fixBuds3ProSilver.replace("cryo", "black")
      : fixBuds3ProSilver;
  const fixS25UltraSilver =
    (fixMagic11Pro.indexOf("s25 ultra") !== -1 ||
      fixMagic11Pro.indexOf("s25 fe") !== -1)
      ? fixMagic11Pro.replace("silver", "white")
      : fixMagic11Pro;
  const fixS25UltraGold =
    fixS25UltraSilver.indexOf("s25 ") !== -1
      ? fixS25UltraSilver.replace("gold", "pink")
      : fixS25UltraSilver;

  const fixMagicV5Gray =
    (fixS25UltraGold.indexOf("magic v5") !== -1 ||
      fixS25UltraGold.indexOf("pura 80") !== -1 ||
      fixS25UltraGold.indexOf("oneplus 13") !== -1 ||
      fixS25UltraGold.indexOf("oneplus 15") !== -1 ||
      fixS25UltraGold.indexOf("ace 6t") !== -1 ||
      fixS25UltraGold.indexOf("a26 ") !== -1 ||
      fixS25UltraGold.indexOf("a36 ") !== -1 ||
      fixS25UltraGold.indexOf("s25 fe") !== -1 ||
      fixS25UltraGold.indexOf("mi pad 8") !== -1 ||
      fixS25UltraGold.indexOf("poco f7") !== -1 ||
      fixS25UltraGold.indexOf("z70 ultra") !== -1 ||
      fixS25UltraGold.indexOf("honor 400") !== -1) &&
      fixS25UltraGold.indexOf("mi pad 8 pro") === -1
      ? fixS25UltraGold.replace("gray", "black")
      : fixS25UltraGold;
  const fixOnePlus15Purple =
    fixMagicV5Gray.indexOf("oneplus 15") !== -1
      ? fixMagicV5Gray.replace("viol", "purple")
      : fixMagicV5Gray;
  const fixExtreme = fixOnePlus15Purple.replace("extrime", "extreme")

  const fixOnePlusAce5 =
    fixExtreme.indexOf("ace 5") !== -1
      ? fixExtreme.replace("silver", "titan")
      : fixExtreme;
  const fixOnePlusAce6Gray =
    (fixOnePlusAce5.indexOf("ace 6 ") !== -1 ||
      fixOnePlusAce5.indexOf("s25+") !== -1)
      ? fixOnePlusAce5.replace("gray", "silver")
      : fixOnePlusAce5;
  const fixPura80Gold =
    fixOnePlusAce6Gray.indexOf("pura 80") !== -1
      ? fixOnePlusAce6Gray.replace("yellow", "gold")
      : fixOnePlusAce6Gray;
  const fixShadow =
    fixPura80Gold.indexOf("redmagic 10 pro") !== -1
      ? fixPura80Gold.replace("shadow", "black")
      : fixPura80Gold;
  const fixMidnightNote14 =
    fixShadow.indexOf("note 14") !== -1
      ? fixShadow.replace("midnight", "black")
      : fixShadow;
  const fixPixel10Green =
    fixMidnightNote14.indexOf("pixel 10") !== -1
      ? fixMidnightNote14.replace("jade", "green")
      : fixMidnightNote14;
  const fixHonorGold =
    fixPixel10Green.indexOf("honor 400") !== -1
      ? fixPixel10Green.replace("yellow", "gold")
      : fixPixel10Green;

  const fixOnePlusBlue =
    fixHonorGold.indexOf("oneplus") !== -1
      ? fixHonorGold.replace("noir", "black")
      : fixHonorGold;
  const fixS10Gray =
    fixOnePlusBlue.indexOf("tab s10") !== -1
      ? fixOnePlusBlue.replace("black", "gray")
      : fixOnePlusBlue;
  const fixOnePlusBlack =
    fixS10Gray.indexOf("oneplus") !== -1
      ? fixS10Gray.replace("ocean", "blue")
      : fixS10Gray;
  const fixOnePlusSilver =
    fixOnePlusBlack.indexOf("oneplus") !== -1
      ? fixOnePlusBlack.replace("astral", "silver")
      : fixOnePlusBlack;

  const fixOnePlus13White = fixOnePlusSilver.replace("arctic", "white")

  const fixMagicPhantom =
    fixOnePlus13White.indexOf("magic") !== -1
      ? fixOnePlus13White.replace("phantom", "black")
      : fixOnePlus13White;
  const fixMagicSubzero =
    fixMagicPhantom.indexOf("magic") !== -1
      ? fixMagicPhantom.replace("subzero", "silver")
      : fixMagicPhantom;
  const fixMi17Black =
    fixMagicSubzero.indexOf("mi 17") !== -1
      ? fixMagicSubzero.replace("gray", "black")
      : fixMagicSubzero;
  const fixNote14Green =
    fixMi17Black.indexOf("note 14") !== -1
      ? fixMi17Black.replace("green", "blue")
      : fixMi17Black;
  const fixNote15Color =
    fixNote14Green.indexOf("note 15") !== -1
      ? fixNote14Green.replace("color", "titan")
      : fixNote14Green;
  const fixNote15ProPlus =
    fixNote15Color.indexOf("note 15") !== -1
      ? fixNote15Color.replace("pro+", "pro +")
      : fixNote15Color;
  const fixNote15ProGray =
    fixNote15ProPlus.indexOf("note 15 pro") !== -1
      ? fixNote15ProPlus.replace("gray", "titan")
      : fixNote15ProPlus;
  const fixMagicPrism =
    fixNote15ProGray.indexOf("magic 11 air") !== -1
      ? fixNote15ProGray.replace("prism", "white")
      : fixNote15ProGray;
  const fixNote15ProPlus1 =
    fixMagicPrism.indexOf("note 15 pro") !== -1
      ? fixMagicPrism.replace("pro plus", "pro +")
      : fixMagicPrism;
  const fixS25UltraJetblack =
    fixNote15ProPlus1.indexOf("s25 ultra") !== -1
      ? fixNote15ProPlus1.replace("jetblack", "jet black")
      : fixNote15ProPlus1;
  const fixipad11White =
    (fixS25UltraJetblack.indexOf("ipad 11") !== -1 ||
      fixS25UltraJetblack.indexOf("tab s11") !== -1 ||
      fixS25UltraJetblack.indexOf("poco m7") !== -1 ||
      fixS25UltraJetblack.indexOf("1000xm5") !== -1 ||
      fixS25UltraJetblack.indexOf("honor 400") !== -1)
      ? fixS25UltraJetblack.replace("white", "silver")
      : fixS25UltraJetblack;
  const fixipadPro11White =
    fixipad11White.indexOf("ipad pro 11") !== -1
      ? fixipad11White.replace("white", "silver")
      : fixipad11White;

  const fixNote14PoPlusGold =
    (fixipadPro11White.indexOf("note 15 pro +") !== -1 ||
      fixipadPro11White.indexOf("z70 ultra") !== -1)
      ? fixipadPro11White.replace("gold", "brown")
      : fixipadPro11White;

  const fixUltra2TL =
    fixNote14PoPlusGold.indexOf("ul 2") !== -1
      ? fixNote14PoPlusGold.replace("tl", "trail loop")
      : fixNote14PoPlusGold;
  const fixUltra2AL =
    fixUltra2TL.indexOf("ul 2") !== -1
      ? fixUltra2TL.replace("al", "alpine loop")
      : fixUltra2TL;
  const fixUltra2Case =
    fixUltra2AL.indexOf("ultra 2") !== -1
      ? fixUltra2AL.replace("case", "ti")
      : fixUltra2AL;
  const fixPencilUsb =
    fixUltra2Case.indexOf("pencil") !== -1
      ? fixUltra2Case.replace("type", "usb")
      : fixUltra2Case;
  const fixiPadMini7 =
    fixPencilUsb.indexOf("ipad mini") !== -1
      ? fixPencilUsb.replace("2024", "7")
      : fixPencilUsb;
  const fixHK =
    fixiPadMini7.indexOf("🇭🇰") !== -1 && fixiPadMini7.indexOf("17") === -1
      ? fixiPadMini7.replace("🇭🇰", " dual ")
      : fixiPadMini7;
  const fixCH =
    fixHK.indexOf("🇨🇳") !== -1 ? fixHK.replace("🇨🇳", " dual ") : fixHK;
  const fixStarlight =
    fixCH.indexOf("13 128 white") !== -1 ||
      fixCH.indexOf("13 256 white") !== -1 ||
      fixCH.indexOf("13 512 white") !== -1 ||
      fixCH.indexOf("13 mini 512 white") !== -1 ||
      fixCH.indexOf("13 mini 512 white") !== -1 ||
      fixCH.indexOf("13 mini 512 white") !== -1 ||
      fixCH.indexOf("14 128 white") !== -1 ||
      fixCH.indexOf("14 256 white") !== -1 ||
      fixCH.indexOf("14 512 white") !== -1 ||
      fixCH.indexOf("14 plus 128 white") !== -1 ||
      fixCH.indexOf("14 plus 256 white") !== -1 ||
      fixCH.indexOf("14 plus 512 white") !== -1
      ? fixCH.replace("white", "starlight")
      : fixCH;
  const fixMidnight =
    fixStarlight.indexOf("13 128 black") !== -1 ||
      fixStarlight.indexOf("13 256 black") !== -1 ||
      fixStarlight.indexOf("13 512 black") !== -1 ||
      fixStarlight.indexOf("13 mini 512 black") !== -1 ||
      fixStarlight.indexOf("13 mini 512 black") !== -1 ||
      fixStarlight.indexOf("13 mini 512 black") !== -1 ||
      fixStarlight.indexOf("14 128 black") !== -1 ||
      fixStarlight.indexOf("14 256 black") !== -1 ||
      fixStarlight.indexOf("14 512 black") !== -1 ||
      fixStarlight.indexOf("15 128 black") !== -1 ||
      fixStarlight.indexOf("15 256 black") !== -1 ||
      fixStarlight.indexOf("15 512 black") !== -1 ||
      fixStarlight.indexOf("14 plus 128 black") !== -1 ||
      fixStarlight.indexOf("14 plus 256 black") !== -1 ||
      fixStarlight.indexOf("14 plus 512 black") !== -1 ||
      fixStarlight.indexOf("15 plus 128 black") !== -1 ||
      fixStarlight.indexOf("15 plus 256 black") !== -1 ||
      fixStarlight.indexOf("15 plus 512 black") !== -1
      ? fixStarlight.replace("black", "midnight")
      : fixStarlight;

  const fixMint =
    fixMidnight.indexOf("z flip 5") === -1
      ? fixMidnight.replace("mint", "Green")
      : fixMidnight;

  const fixA36Lime =
    fixMint.indexOf("a36") !== -1 ? fixMint.replace("lime", "Green") : fixMint;
  const fixLime = fixA36Lime.replace("lime", "Yellow");
  const fixGraphite =
    fixLime.indexOf("s22") === -1 ||
      fixLime.indexOf("s23") === -1 ||
      fixLime.indexOf("s23") === -1 ||
      fixLime.indexOf("buds 2") === -1 ||
      fixLime.indexOf("epix") === -1 ||
      fixLime.indexOf("fenix") === -1 ||
      fixLime.indexOf("instinct") === -1 ||
      fixLime.indexOf("watch 8") === -1 ||
      fixLime.indexOf("pad se") === -1
      ? fixLime.replace("graphite", "Black")
      : fixLime;
  const fixNavyBlack =
    fixGraphite.indexOf("a35") !== -1 || fixGraphite.indexOf("a55") !== -1
      ? fixGraphite.replace("navy", "Black")
      : fixGraphite;
  const fixLilac1 =
    fixNavyBlack.indexOf("a35") !== -1 || fixNavyBlack.indexOf("a55") !== -1
      ? fixNavyBlack.replace("lavender", "Lilac")
      : fixNavyBlack;
  const fixLilac2 =
    fixLilac1.indexOf("a35") !== -1 || fixLilac1.indexOf("a55") !== -1
      ? fixLilac1.replace("violet", "Lilac")
      : fixLilac1;
  const fixLTE = fixLilac2.replace("lte", "5g");
  const fixBuds2Pro = fixLTE.replace("buds pro 2", "buds 2 pro");

  const fixPencil1 =
    fixBuds2Pro.indexOf("pencil 1") !== -1 && fixBuds2Pro.indexOf("usb") === -1
      ? fixBuds2Pro.replace("pencil 1", "pencil lightning")
      : fixBuds2Pro;

  const fixLavender = fixPencil1.replace("lavender", "Purple");

  const fixViolet = fixLavender.replace("violet", "Purple");

  const fixLunar =
    fixViolet.indexOf("poco") !== -1
      ? fixViolet.replace("lunar", "silver")
      : fixViolet;
  const fixOlive = fixLunar.replace("olive", "Green");
  const fixTeal1 =
    fixOlive.indexOf("note 13 pro") !== -1
      ? fixOlive.replace("teal", "Green")
      : fixOlive;
  const fixTeal2 =
    fixTeal1.indexOf("note 13 pro") !== -1
      ? fixTeal1.replace("blue", "Green")
      : fixTeal1;

  

  const fixPad6sProBlack =
    fixTeal2.indexOf("pad 6s pro") !== -1 ||
      fixTeal2.indexOf("mi pad 7") !== -1
      ? fixTeal2.replace("gray", "Black")
      : fixTeal2;

  const fixGray = fixPad6sProBlack.replace("grey", "Gray");

  const fix17Sage =
    fixGray.indexOf("17 ") !== -1 ? fixGray.replace("sage", "Green") : fixGray;
  const fixMistBlue = fix17Sage.replace("mist blue", "Blue");
  const fixCosmicOrange = fixMistBlue.replace("cosmic orange", "Orange");
  const fixDeepBlue = fixCosmicOrange.replace("deep blue", "blue");
  const fixSpaceBlack = fixDeepBlue.replace("space black", "black");
  const fixCloudWhite = fixSpaceBlack.replace("cloud white", "white");
  const fixLightGold = fixCloudWhite.replace("light gold", "gold");
  const fixSkyBlue = fixLightGold.replace("sky blue", "blue");
  const fixSE3Black =
    fixSkyBlue.indexOf("se3") !== -1 || fixSkyBlue.indexOf("magic") !== -1
      ? fixSkyBlue.replace("midnight", "black")
      : fixSkyBlue;
  const fixSE3White =
    fixSE3Black.indexOf("se3") !== -1
      ? fixSE3Black.replace("starlight", "white")
      : fixSE3Black;
  const fixGoPro =
    fixSE3White.indexOf("gopro 1") !== -1
      ? fixSE3White.replace("gopro 1", "hero 1")
      : fixSE3White;
  const fixNord5Blue =
    fixGoPro.indexOf("nord 5") !== -1
      ? fixGoPro.replace("ice", "blue")
      : fixGoPro;
  const fixNord5White =
    fixNord5Blue.indexOf("nord 5") !== -1
      ? fixNord5Blue.replace("sands", "white")
      : fixNord5Blue;
  const fixNordCE5Mist =
    fixNord5White.indexOf("nord ce5") !== -1
      ? fixNord5White.replace("mist", "white")
      : fixNord5White;
  const fixNordCE5Mist2 =
    fixNordCE5Mist.indexOf("nord ce5") !== -1
      ? fixNordCE5Mist.replace("gray", "white")
      : fixNordCE5Mist;
  const fixNordGray =
    fixNordCE5Mist2.indexOf("nord ") !== -1
      ? fixNordCE5Mist2.replace("tempest", "gray")
      : fixNordCE5Mist2;
  const fixNordGreen =
    fixNordGray.indexOf("nord ") !== -1
      ? fixNordGray.replace("mistry", "green")
      : fixNordGray;
  const fixNordSilver =
    fixNordGreen.indexOf("nord ") !== -1
      ? fixNordGreen.replace("mercurial", "silver")
      : fixNordGreen;
  const fixNordOasis =
    fixNordSilver.indexOf("nord ") !== -1
      ? fixNordSilver.replace("oasis", "green")
      : fixNordSilver;
  const fixNordObsidian =
    fixNordOasis.indexOf("nord ") !== -1 ||
      fixNordOasis.indexOf("pixel ") !== -1
      ? fixNordOasis.replace("obsidian", "black")
      : fixNordOasis;
  const fixNordCeladon =
    fixNordObsidian.indexOf("nord ") !== -1
      ? fixNordObsidian.replace("celadon", "green")
      : fixNordObsidian;
  const fixNordChrome =
    fixNordCeladon.indexOf("nord ") !== -1
      ? fixNordCeladon.replace("chrome", "black")
      : fixNordCeladon;
  const fixOnePlusOpen =
    fixNordChrome.indexOf("open ") !== -1
      ? fixNordChrome.replace("dusk", "green")
      : fixNordChrome;
  const fixOnePlusNebula =
    fixOnePlusOpen.indexOf("oneplus") !== -1
      ? fixOnePlusOpen.replace("nebula", "black")
      : fixOnePlusOpen;
  const fixOnePlusNoir =
    fixOnePlusNebula.indexOf("oneplus") !== -1
      ? fixOnePlusNebula.replace("noir", "black")
      : fixOnePlusNebula;
  const fixOnePlusAstral =
    fixOnePlusNoir.indexOf("oneplus") !== -1
      ? fixOnePlusNoir.replace("astral", "silver")
      : fixOnePlusNoir;
  const fixOnePlusTrail =
    fixOnePlusAstral.indexOf("oneplus") !== -1
      ? fixOnePlusAstral.replace("trail", "silver")
      : fixOnePlusAstral;
  const fixSeafoam = fixOnePlusTrail.replace("seafoam", "green");
  const fixBlack = fixSeafoam.replace("stormy", "black");
  const fixPixelSnow =
    fixBlack.indexOf("pixel") !== -1
      ? fixBlack.replace("snow", "white")
      : fixBlack;
  const fixCharcoal = fixPixelSnow.replace("charcoal", "black");
  const fixPixelSea =
    fixCharcoal.indexOf("pixel") !== -1
      ? fixCharcoal.replace("sea", "blue")
      : fixCharcoal;
  const fixPixelRose =
    fixPixelSea.indexOf("pixel") !== -1
      ? fixPixelSea.replace("rose", "pink")
      : fixPixelSea;
  const fixPixelBay =
    fixPixelRose.indexOf("pixel") !== -1
      ? fixPixelRose.replace("bay", "blue")
      : fixPixelRose;
  const fixPixelPorcelain =
    fixPixelBay.indexOf("pixel") !== -1
      ? fixPixelBay.replace("porcelain", "gold")
      : fixPixelBay;
  const fixPixelAloe =
    fixPixelPorcelain.indexOf("pixel") !== -1
      ? fixPixelPorcelain.replace("aloe", "green")
      : fixPixelPorcelain;
  const fixPixelPeony =
    fixPixelAloe.indexOf("pixel") !== -1
      ? fixPixelAloe.replace("peony", "pink")
      : fixPixelAloe;
  const fixPixelIris =
    fixPixelPeony.indexOf("pixel") !== -1
      ? fixPixelPeony.replace("iris", "purple")
      : fixPixelPeony;
  const fixPixeJade =
    fixPixelIris.indexOf("pixel") !== -1
      ? fixPixelIris.replace("jade", "green")
      : fixPixelIris;

  const fixeSim1 =
    (fixPixeJade.indexOf("17 256") !== -1 ||
      fixPixeJade.indexOf("17 512") !== -1 ||
      fixPixeJade.indexOf("17e 256") !== -1 ||
      fixPixeJade.indexOf("17e 512") !== -1 ||
      fixPixeJade.indexOf("17 pro 256") !== -1 ||
      fixPixeJade.indexOf("17 pro 512") !== -1 ||
      fixPixeJade.indexOf("17 pro 1tb") !== -1 ||
      fixPixeJade.indexOf("17 pro max 256") !== -1 ||
      fixPixeJade.indexOf("17 pro max 512") !== -1 ||
      fixPixeJade.indexOf("17 pro max 1tb") !== -1 ||
      fixPixeJade.indexOf("17 pro max 2tb") !== -1) &&
      fixPixeJade.indexOf("+") === -1
      ? fixPixeJade.replace("esim", "🇺🇸")
      : fixPixeJade;

  const fixeSim41 =
    (fixeSim1.indexOf("17 256") !== -1 ||
      fixeSim1.indexOf("17 512") !== -1 ||
      fixeSim1.indexOf("17e 256") !== -1 ||
      fixeSim1.indexOf("17e 512") !== -1 ||
      fixeSim1.indexOf("17 pro 256") !== -1 ||
      fixeSim1.indexOf("17 pro 512") !== -1 ||
      fixeSim1.indexOf("17 pro 1tb") !== -1 ||
      fixeSim1.indexOf("17 pro max 256") !== -1 ||
      fixeSim1.indexOf("17 pro max 512") !== -1 ||
      fixeSim1.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim1.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim1.indexOf("+") === -1
      ? fixeSim1.replace("e-sim", "🇺🇸")
      : fixeSim1;

  const fixeSim =
    (fixeSim41.indexOf("17 256") !== -1 ||
      fixeSim41.indexOf("17 512") !== -1 ||
      fixeSim41.indexOf("17e 256") !== -1 ||
      fixeSim41.indexOf("17e 512") !== -1 ||
      fixeSim41.indexOf("17 pro 256") !== -1 ||
      fixeSim41.indexOf("17 pro 512") !== -1 ||
      fixeSim41.indexOf("17 pro 1tb") !== -1 ||
      fixeSim41.indexOf("17 pro max 256") !== -1 ||
      fixeSim41.indexOf("17 pro max 512") !== -1 ||
      fixeSim41.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim41.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim41.indexOf("+") !== -1
      ? fixeSim41.replace("+", "🇮🇳")
      : fixeSim41;

  const fixDualSim =
    (fixeSim.indexOf("17 256") !== -1 ||
      fixeSim.indexOf("17 512") !== -1 ||
      fixeSim.indexOf("17e 256") !== -1 ||
      fixeSim.indexOf("17e 512") !== -1 ||
      fixeSim.indexOf("17 pro 256") !== -1 ||
      fixeSim.indexOf("17 pro 512") !== -1 ||
      fixeSim.indexOf("17 pro 1tb") !== -1 ||
      fixeSim.indexOf("17 pro max 256") !== -1 ||
      fixeSim.indexOf("17 pro max 512") !== -1 ||
      fixeSim.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim.indexOf("🇨🇳") !== -1
      ? fixeSim.replace("🇨🇳", "dual")
      : fixeSim;

  const fixeSim0 =
    (fixDualSim.indexOf("17 256") !== -1 ||
      fixDualSim.indexOf("17 512") !== -1 ||
      fixDualSim.indexOf("17e 256") !== -1 ||
      fixDualSim.indexOf("17e 512") !== -1 ||
      fixDualSim.indexOf("17 pro 256") !== -1 ||
      fixDualSim.indexOf("17 pro 512") !== -1 ||
      fixDualSim.indexOf("17 pro 1tb") !== -1 ||
      fixDualSim.indexOf("17 pro max 256") !== -1 ||
      fixDualSim.indexOf("17 pro max 512") !== -1 ||
      fixDualSim.indexOf("17 pro max 1tb") !== -1 ||
      fixDualSim.indexOf("17 pro max 2tb") !== -1) &&
      fixDualSim.indexOf("🇧🇭") !== -1
      ? fixDualSim.replace("🇧🇭", "🇺🇸")
      : fixDualSim;
  const fixeSim2 =
    (fixeSim0.indexOf("17 256") !== -1 ||
      fixeSim0.indexOf("17 512") !== -1 ||
      fixeSim0.indexOf("17e 256") !== -1 ||
      fixeSim0.indexOf("17e 512") !== -1 ||
      fixeSim0.indexOf("17 pro 256") !== -1 ||
      fixeSim0.indexOf("17 pro 512") !== -1 ||
      fixeSim0.indexOf("17 pro 1tb") !== -1 ||
      fixeSim0.indexOf("17 pro max 256") !== -1 ||
      fixeSim0.indexOf("17 pro max 512") !== -1 ||
      fixeSim0.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim0.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim0.indexOf("🇨🇦") !== -1
      ? fixeSim0.replace("🇨🇦", "🇺🇸")
      : fixeSim0;
  const fixeSim3 =
    (fixeSim2.indexOf("17 256") !== -1 ||
      fixeSim2.indexOf("17 512") !== -1 ||
      fixeSim2.indexOf("17e 256") !== -1 ||
      fixeSim2.indexOf("17e 512") !== -1 ||
      fixeSim2.indexOf("17 pro 256") !== -1 ||
      fixeSim2.indexOf("17 pro 512") !== -1 ||
      fixeSim2.indexOf("17 pro 1tb") !== -1 ||
      fixeSim2.indexOf("17 pro max 256") !== -1 ||
      fixeSim2.indexOf("17 pro max 512") !== -1 ||
      fixeSim2.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim2.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim2.indexOf("🇬🇺") !== -1
      ? fixeSim2.replace("🇬🇺", "🇺🇸")
      : fixeSim2;
  const fixeSim4 =
    (fixeSim3.indexOf("17 256") !== -1 ||
      fixeSim3.indexOf("17 512") !== -1 ||
      fixeSim3.indexOf("17e 256") !== -1 ||
      fixeSim3.indexOf("17e 512") !== -1 ||
      fixeSim3.indexOf("17 pro 256") !== -1 ||
      fixeSim3.indexOf("17 pro 512") !== -1 ||
      fixeSim3.indexOf("17 pro 1tb") !== -1 ||
      fixeSim3.indexOf("17 pro max 256") !== -1 ||
      fixeSim3.indexOf("17 pro max 512") !== -1 ||
      fixeSim3.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim3.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim3.indexOf("🇯🇵") !== -1
      ? fixeSim3.replace("🇯🇵", "🇺🇸")
      : fixeSim3;
  const fixeSim5 =
    (fixeSim4.indexOf("17 256") !== -1 ||
      fixeSim4.indexOf("17 512") !== -1 ||
      fixeSim4.indexOf("17e 256") !== -1 ||
      fixeSim4.indexOf("17e 512") !== -1 ||
      fixeSim4.indexOf("17 pro 256") !== -1 ||
      fixeSim4.indexOf("17 pro 512") !== -1 ||
      fixeSim4.indexOf("17 pro 1tb") !== -1 ||
      fixeSim4.indexOf("17 pro max 256") !== -1 ||
      fixeSim4.indexOf("17 pro max 512") !== -1 ||
      fixeSim4.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim4.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim4.indexOf("🇰🇼") !== -1
      ? fixeSim4.replace("🇰🇼", "🇺🇸")
      : fixeSim4;
  const fixeSim6 =
    (fixeSim5.indexOf("17 256") !== -1 ||
      fixeSim5.indexOf("17 512") !== -1 ||
      fixeSim5.indexOf("17e 256") !== -1 ||
      fixeSim5.indexOf("17e 512") !== -1 ||
      fixeSim5.indexOf("17 pro 256") !== -1 ||
      fixeSim5.indexOf("17 pro 512") !== -1 ||
      fixeSim5.indexOf("17 pro 1tb") !== -1 ||
      fixeSim5.indexOf("17 pro max 256") !== -1 ||
      fixeSim5.indexOf("17 pro max 512") !== -1 ||
      fixeSim5.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim5.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim5.indexOf("🇲🇽") !== -1
      ? fixeSim5.replace("🇲🇽", "🇺🇸")
      : fixeSim5;
  const fixeSim7 =
    (fixeSim6.indexOf("17 256") !== -1 ||
      fixeSim6.indexOf("17 512") !== -1 ||
      fixeSim6.indexOf("17e 256") !== -1 ||
      fixeSim6.indexOf("17e 512") !== -1 ||
      fixeSim6.indexOf("17 pro 256") !== -1 ||
      fixeSim6.indexOf("17 pro 512") !== -1 ||
      fixeSim6.indexOf("17 pro 1tb") !== -1 ||
      fixeSim6.indexOf("17 pro max 256") !== -1 ||
      fixeSim6.indexOf("17 pro max 512") !== -1 ||
      fixeSim6.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim6.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim6.indexOf("🇴🇲") !== -1
      ? fixeSim6.replace("🇴🇲", "🇺🇸")
      : fixeSim6;
  const fixeSim8 =
    (fixeSim7.indexOf("17 256") !== -1 ||
      fixeSim7.indexOf("17 512") !== -1 ||
      fixeSim7.indexOf("17e 256") !== -1 ||
      fixeSim7.indexOf("17e 512") !== -1 ||
      fixeSim7.indexOf("17 pro 256") !== -1 ||
      fixeSim7.indexOf("17 pro 512") !== -1 ||
      fixeSim7.indexOf("17 pro 1tb") !== -1 ||
      fixeSim7.indexOf("17 pro max 256") !== -1 ||
      fixeSim7.indexOf("17 pro max 512") !== -1 ||
      fixeSim7.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim7.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim7.indexOf("🇶🇦") !== -1
      ? fixeSim7.replace("🇶🇦", "🇺🇸")
      : fixeSim7;
  const fixeSim9 =
    (fixeSim8.indexOf("17 256") !== -1 ||
      fixeSim8.indexOf("17 512") !== -1 ||
      fixeSim8.indexOf("17e 256") !== -1 ||
      fixeSim8.indexOf("17e 512") !== -1 ||
      fixeSim8.indexOf("17 pro 256") !== -1 ||
      fixeSim8.indexOf("17 pro 512") !== -1 ||
      fixeSim8.indexOf("17 pro 1tb") !== -1 ||
      fixeSim8.indexOf("17 pro max 256") !== -1 ||
      fixeSim8.indexOf("17 pro max 512") !== -1 ||
      fixeSim8.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim8.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim8.indexOf("🇸🇦") !== -1
      ? fixeSim8.replace("🇸🇦", "🇺🇸")
      : fixeSim8;
  const fixeSim110 =
    (fixeSim9.indexOf("17 256") !== -1 ||
      fixeSim9.indexOf("17 512") !== -1 ||
      fixeSim9.indexOf("17e 256") !== -1 ||
      fixeSim9.indexOf("17e 512") !== -1 ||
      fixeSim9.indexOf("17 pro 256") !== -1 ||
      fixeSim9.indexOf("17 pro 512") !== -1 ||
      fixeSim9.indexOf("17 pro 1tb") !== -1 ||
      fixeSim9.indexOf("17 pro max 256") !== -1 ||
      fixeSim9.indexOf("17 pro max 512") !== -1 ||
      fixeSim9.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim9.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim9.indexOf("🇦🇪") !== -1
      ? fixeSim9.replace("🇦🇪", "🇺🇸")
      : fixeSim9;
  const fixeSim11 =
    (fixeSim110.indexOf("17 256") !== -1 ||
      fixeSim110.indexOf("17 512") !== -1 ||
      fixeSim110.indexOf("17e 256") !== -1 ||
      fixeSim110.indexOf("17e 512") !== -1 ||
      fixeSim110.indexOf("17 pro 256") !== -1 ||
      fixeSim110.indexOf("17 pro 512") !== -1 ||
      fixeSim110.indexOf("17 pro 1tb") !== -1 ||
      fixeSim110.indexOf("17 pro max 256") !== -1 ||
      fixeSim110.indexOf("17 pro max 512") !== -1 ||
      fixeSim110.indexOf("17 pro max 1tb") !== -1 ||
      fixeSim110.indexOf("17 pro max 2tb") !== -1) &&
      fixeSim110.indexOf("🇻🇮") !== -1
      ? fixeSim110.replace("🇻🇮", "🇺🇸")
      : fixeSim110;

  const fixOB = fixeSim11.replace("ocean band", "ob");
  const fixTL = fixOB.replace("trail loop", "tl");
  const fixAL = fixTL.replace("alpine loop", "al");
  const fixUL3 = fixAL.replace("ul ", "ultra ");
  const fixPS51 = fixUL3.replace("ps5", "ps 5");
  const fixPS52 = fixPS51.replace("playstation 5", "ps 5");
  const fixPS = fixPS52.replace("playstation", "ps");
  const fixMajor4 =
    fixPS.indexOf("major") !== -1 ? fixPS.replace("iv", "4") : fixPS;
  const fixMajor5 =
    fixMajor4.indexOf("major") !== -1 ? fixMajor4.replace("v", "5") : fixMajor4;
  const fixXperiaCN =
    fixMajor5.indexOf("xperia") !== -1 ||
      fixMajor5.indexOf("17 256") !== -1 ||
      fixMajor5.indexOf("17 512") !== -1 ||
      fixMajor5.indexOf("17e 256") !== -1 ||
      fixMajor5.indexOf("17e 512") !== -1 ||
      fixMajor5.indexOf("17 pro 256") !== -1 ||
      fixMajor5.indexOf("17 pro 512") !== -1 ||
      fixMajor5.indexOf("17 pro 1tb") !== -1 ||
      fixMajor5.indexOf("17 pro max 256") !== -1 ||
      fixMajor5.indexOf("17 pro max 1tb") !== -1 ||
      fixMajor5.indexOf("17 pro max 512") !== -1 ||
      fixMajor5.indexOf("17 pro max 2tb") !== -1
      ? fixMajor5.replace("🇨🇳", "dual")
      : fixMajor5;

  const fixApple2Sim =
    fixXperiaCN.indexOf("17 256") !== -1 ||
      fixXperiaCN.indexOf("17 512") !== -1 ||
      fixXperiaCN.indexOf("17e 256") !== -1 ||
      fixXperiaCN.indexOf("17e 512") !== -1 ||
      fixXperiaCN.indexOf("17 pro 256") !== -1 ||
      fixXperiaCN.indexOf("17 pro 512") !== -1 ||
      fixXperiaCN.indexOf("17 pro 1tb") !== -1 ||
      fixXperiaCN.indexOf("17 pro max 256") !== -1 ||
      fixXperiaCN.indexOf("17 pro max 1tb") !== -1 ||
      fixXperiaCN.indexOf("17 pro max 512") !== -1 ||
      fixXperiaCN.indexOf("17 pro max 2tb") !== -1
      ? fixXperiaCN.replace("2sim", "dual")
      : fixXperiaCN;

  const fixApple2Sim2 =
    fixApple2Sim.indexOf("17 256") !== -1 ||
      fixApple2Sim.indexOf("17 512") !== -1 ||
      fixApple2Sim.indexOf("17e 256") !== -1 ||
      fixApple2Sim.indexOf("17e 512") !== -1 ||
      fixApple2Sim.indexOf("17 pro 256") !== -1 ||
      fixApple2Sim.indexOf("17 pro 512") !== -1 ||
      fixApple2Sim.indexOf("17 pro 1tb") !== -1 ||
      fixApple2Sim.indexOf("17 pro max 256") !== -1 ||
      fixApple2Sim.indexOf("17 pro max 1tb") !== -1 ||
      fixApple2Sim.indexOf("17 pro max 512") !== -1 ||
      fixApple2Sim.indexOf("17 pro max 2tb") !== -1
      ? fixApple2Sim.replace("2-sim", "dual")
      : fixApple2Sim;

  const fixXperiaHK =
    fixApple2Sim2.indexOf("xperia") !== -1
      ? fixApple2Sim2.replace("🇭🇰", "dual")
      : fixApple2Sim2;

  const fixRedmagic = fixXperiaHK.replace("red magic", "redmagic");

  const fixRedmagicProPlus =
    fixRedmagic.indexOf("redmagic") !== -1
      ? fixRedmagic.replace("pro +", "pro plus")
      : fixRedmagic;
  const fixRedmagicProPlus1 =
    fixRedmagicProPlus.indexOf("redmagic") !== -1
      ? fixRedmagicProPlus.replace("pro+", "pro plus")
      : fixRedmagicProPlus;

  const fixRedmagicSleet = fixRedmagicProPlus1.replace("sleet", "black");
  const fixRedmagicDusk = fixRedmagicSleet.replace("dusk", "black");
  const fixRedmagicMoonlight = fixRedmagicDusk.replace("moonlight", "silver");
  const fixRedmagicLightspeed = fixRedmagicMoonlight.replace(
    "lightspeed",
    "white"
  );
  const fixMagicV3Red =
    fixRedmagicLightspeed.indexOf("magic v3") !== -1
      ? fixRedmagicLightspeed.replace("brown", "red")
      : fixRedmagicLightspeed;
  const fixYandex =
    fixMagicV3Red.indexOf("станция") !== -1
      ? fixMagicV3Red.replace("станция", "яндекс")
      : fixMagicV3Red;

  const fixYandexBlack =
    fixYandex.indexOf("яндекс") !== -1
      ? fixYandex.replace("black", "черн")
      : fixYandex;
  const fixYandexBlue =
    fixYandexBlack.indexOf("яндекс") !== -1
      ? fixYandexBlack.replace("blue", "син")
      : fixYandexBlack;
  const fixYandexGreen =
    fixYandexBlue.indexOf("яндекс") !== -1
      ? fixYandexBlue.replace("green", "зелен")
      : fixYandexBlue;
  const fixYandexRed =
    fixYandexGreen.indexOf("яндекс") !== -1
      ? fixYandexGreen.replace("red", "красн")
      : fixYandexGreen;
  const fixYandexGray =
    fixYandexRed.indexOf("яндекс") !== -1
      ? fixYandexRed.replace("gray", "сер")
      : fixYandexRed;
  const fixYandexPurple =
    fixYandexGray.indexOf("яндекс") !== -1
      ? fixYandexGray.replace("purple", "фиол")
      : fixYandexGray;
  const fixYandexPink =
    fixYandexPurple.indexOf("яндекс") !== -1
      ? fixYandexPurple.replace("pink", "розов")
      : fixYandexPurple;
  const fixYandexWhite =
    fixYandexPink.indexOf("яндекс") !== -1
      ? fixYandexPink.replace("white", "бел")
      : fixYandexPink;
  const fixYandexBeige =
    fixYandexWhite.indexOf("яндекс") !== -1
      ? fixYandexWhite.replace("beige", "беж")
      : fixYandexWhite;
  const fixYandexMax =
    fixYandexBeige.indexOf("яндекс") !== -1
      ? fixYandexBeige.replace("max", "макс")
      : fixYandexBeige;

  const fixS23Plus = fixYandexMax.replace("s23 plus", "S23+");
  const fixS23Plus1 = fixS23Plus.replace("s23 +", "S23+");
  const fixS24Plus = fixS23Plus1.replace("s24 plus", "S24+");
  const fixS24Plus1 = fixS24Plus.replace("s24 +", "S24+");
  const fixS25Plus = fixS24Plus1.replace("s25 plus", "S25+");
  const fixS25Plus1 = fixS25Plus.replace("s25 +", "S25+");
  const fixS26Plus = fixS25Plus1.replace("s26 plus", "S26+");
  const fixS26Plus1 = fixS26Plus.replace("s26 +", "S26+");
  const fixA07Gray =
    fixS26Plus1.indexOf("a07 4/64") !== -1 ||
      fixS26Plus1.indexOf("a07 4/128") !== -1 ||
      fixS26Plus1.indexOf("a07 6/128") !== -1 ||
      fixS26Plus1.indexOf("a07 8/256") !== -1 ||
      fixS26Plus1.indexOf("tab s11") !== -1
      ? fixS26Plus1.replace("black", "gray")
      : fixS26Plus1;

  const fixS25Icyblue =
    fixA07Gray.indexOf("s25") !== -1
      ? fixA07Gray.replace("iceblue", "icyblue")
      : fixA07Gray;

  const fixRedmi15CBLCK =
    fixS25Icyblue.indexOf("redmi 15 ") !== -1
      ? fixS25Icyblue.replace("black", "gray")
      : fixS25Icyblue;

  const fixA36Lilac =
    fixRedmi15CBLCK.indexOf("a36") !== -1
      ? fixRedmi15CBLCK.replace("lilac", "purple")
      : fixRedmi15CBLCK;
  const fixCE4Black =
    fixA36Lilac.indexOf("ce4") !== -1
      ? fixA36Lilac.replace("gray", "black")
      : fixA36Lilac;

  const fix15C =
    fixCE4Black.indexOf("15c") !== -1
      ? fixCE4Black.replace("black", "gray")
      : fixCE4Black;

  const fixYLilac =
    fix15C.indexOf("яндекс") !== -1
      ? fix15C.replace("лиловая", "фиолет")
      : fix15C;

  const fixNote14ProPlus = fixYLilac.replace(
    "note 14 pro plus",
    "note 14 pro +"
  );

  const fixOpenSwimOrange =
    fixNote14ProPlus.indexOf("openswim") !== -1
      ? fixNote14ProPlus.replace("coral", "orange")
      : fixNote14ProPlus;

  const fixHonorWhite =
    fixOpenSwimOrange.indexOf("honor") !== -1
      ? fixOpenSwimOrange.replace("белый", "white")
      : fixOpenSwimOrange;
  const fixHonorBlack =
    fixHonorWhite.indexOf("honor") !== -1
      ? fixHonorWhite.replace("чёрный", "black")
      : fixHonorWhite;
  const fixHonorGreen =
    fixHonorBlack.indexOf("honor") !== -1
      ? fixHonorBlack.replace("зелёный", "green")
      : fixHonorBlack;
   const fixA37Chark = fixHonorGreen.indexOf("a37 ") !== -1 ? fixHonorGreen.replace("black", "chark") : fixHonorGreen   
   const fixA37Green = fixA37Chark.indexOf("a37 ") !== -1 ? fixA37Chark.replace("green", "gray") : fixA37Chark  
   const fixPadSEGray =
    fixA37Green.indexOf("pad se") !== -1
      ? fixA37Green.replace("graphite", "gray")
      : fixA37Green;
   
  const fixPadSEBlack =
  fixPadSEGray.indexOf("pad se") !== -1
    ? fixPadSEGray.replace("black", "gray")
    : fixPadSEGray;

  return fixPadSEBlack;
};


// export const defaultFixName = (input) => {
//   if (!input || typeof input !== 'string') return '';

//   let result = input.toLowerCase().replace(/\s+/g, ' ').trim();

//   // === 1. Общие замены (без условий) ===
//   const generalReplacements = [
//     [/grey/g, 'gray'],
//     [/extrime/g, 'extreme'],
//     [/red magic/g, 'redmagic'],
//     [/ps5|playstation 5/g, 'ps 5'],
//     [/playstation/g, 'ps'],
//     [/major iv/g, 'major 4'],
//     [/major v/g, 'major 5'],
//     [/e-sim|2sim|2-sim/g, 'esim'],
//     [/type-c|type /g, 'usb '],
//     [/pro \+|pro\+/g, 'pro plus'],
//     [/note 14 pro plus/g, 'note 14 pro +'],
//     [/ul (\d)/g, 'ultra $1'],
//     [/pencil 1(?!.*usb)/g, 'pencil lightning'],
//     [/hero 1/g, 'gopro hero 1'],
//     [/s23 plus|s23 \+/g, 'S23+'],
//     [/s24 plus|s24 \+/g, 'S24+'],
//     [/s25 plus|s25 \+/g, 'S25+'],
//     [/s26 plus|s26 \+/g, 'S26+'],
//     [/mist blue/g, 'blue'],
//     [/cosmic orange/g, 'orange'],
//     [/deep blue/g, 'blue'],
//     [/sky blue/g, 'blue'],
//     [/space black/g, 'black'],
//     [/cloud white/g, 'white'],
//     [/light gold/g, 'gold'],
//     [/iceblue/g, 'icyblue'],
//     [/olive/g, 'green'],
//     [/jetblack/g, 'jet black'],
//   ];

//   generalReplacements.forEach(([regex, rep]) => {
//     result = result.replace(regex, rep);
//   });

//   // === 2. Контекстные обработчики (порядок важен!) ===

//   // AirPods Pro 2 → type → usb
//   if (result.includes('airpods pro 2')) {
//     result = result.replace('type', 'usb');
//   }

//   // AirPods Max + USB → usb → 2
//   if (result.includes('airpods max') && result.includes('usb')) {
//     result = result.replace('usb', '2');
//   }

//   // SE2 + S8/S9 → black → midnight, white → starlight
//   if (result.includes('se2') && (result.includes('s8') || result.includes('s9'))) {
//     result = result.replace('black', 'midnight').replace('white', 'starlight');
//   }

//   // Ultra 2 → ul 2 → ultra 2
//   if (result.includes('ul 2')) {
//     result = result.replace('ul 2', 'ultra 2');
//     // Затем: ob → ocean band, tl → trail loop, al → alpine loop
//     result = result.replace('ob', 'ocean band');
//     result = result.replace('tl', 'trail loop');
//     result = result.replace('al', 'alpine loop');
//   }

//   // Ultra 2 → case → ti
//   if (result.includes('ultra 2')) {
//     result = result.replace('case', 'ti');
//   }

//   // iPad Pro 11 + M4/M5 → gray → black
//   if (result.includes('ipad pro 11') && (result.includes('m4') || result.includes('m5'))) {
//     result = result.replace('gray', 'black');
//   }

//   // iPhone: gray → black, nano sim + esim → 🇮🇳, cosmic → удалить
//   if (result.includes('iphone')) {
//     result = result.replace('gray', 'black');
//     result = result.replace('nano sim + esim', '🇮🇳');
//     result = result.replace('cosmic ', '');
//   }

//   // Magic 7/8 Pro → gray → white, cyan → green
//   if (result.includes('magic 7 pro') || result.includes('magic 8 pro')) {
//     result = result.replace('gray', 'white');
//   }
//   if (result.includes('magic 8 pro')) {
//     result = result.replace('cyan', 'green');
//   }

//   // Ultra 3 → ocean → ob
//   if (result.includes('ultra 3')) {
//     result = result.replace('ocean', 'ob');
//   }

//   // Buds 3 (не FE) → black/gray → silver
//   if (result.includes('buds 3') && !result.includes('buds 3 fe')) {
//     result = result.replace(/black|gray/g, 'silver');
//   }

//   // Buds 3 White/Silver → Galaxy Buds 3...
//   if (result.startsWith('buds 3 white')) {
//     result = result.replace('buds 3 white', 'galaxy buds 3 white');
//   }
//   if (result.startsWith('buds 3 silver')) {
//     result = result.replace('buds 3 silver', 'galaxy buds 3 silver');
//   }
//   if (result.startsWith('buds 3 fe gray')) {
//     result = result.replace('buds 3 fe gray', 'galaxy buds 3 fe gray');
//   }
//   if (result.startsWith('buds 3 fe black')) {
//     result = result.replace('buds 3 fe black', 'galaxy buds 3 fe black');
//   }
//   if (result.startsWith('buds 3 pro white')) {
//     result = result.replace('buds 3 pro white', 'galaxy buds 3 pro white');
//   }
//   if (result.startsWith('buds 3 pro silver')) {
//     result = result.replace('buds 3 pro silver', 'galaxy buds 3 pro silver');
//   }

//   // Magic 11 Pro → cryo → black
//   if (result.includes('magic 11 pro')) {
//     result = result.replace('cryo', 'black');
//   }

//   // S25 Ultra/FE → silver → white, gold → pink
//   if (result.includes('s25 ultra') || result.includes('s25 fe')) {
//     result = result.replace('silver', 'white');
//   }
//   if (result.includes('s25 ') && !result.includes('fe')) {
//     result = result.replace('gold', 'pink');
//   }

//   // Много устройств → gray → black (кроме mi pad 8 pro)
//   const shouldGrayToBlack =
//     /magic v5|pura 80|oneplus 13|oneplus 15|ace 6t|a26 |a36 |s25 fe|mi pad 8|poco f7|z70 ultra|honor 400/.test(result) &&
//     !result.includes('mi pad 8 pro');
//   if (shouldGrayToBlack) {
//     result = result.replace('gray', 'black');
//   }

//   // OnePlus 15 → viol → purple
//   if (result.includes('oneplus 15')) {
//     result = result.replace('viol', 'purple');
//   }

//   // Ace 5 → silver → titan
//   if (result.includes('ace 5')) {
//     result = result.replace('silver', 'titan');
//   }

//   // Ace 6 / S25+ → gray → silver
//   if (result.includes('ace 6 ') || result.includes('s25+')) {
//     result = result.replace('gray', 'silver');
//   }

//   // Pura 80 → yellow → gold
//   if (result.includes('pura 80')) {
//     result = result.replace('yellow', 'gold');
//   }

//   // RedMagic 10 Pro → shadow → black
//   if (result.includes('redmagic 10 pro')) {
//     result = result.replace('shadow', 'black');
//   }

//   // Note 14 → midnight → black
//   if (result.includes('note 14')) {
//     result = result.replace('midnight', 'black');
//   }

//   // Pixel 10 → white → porcelain, jade → green
//   if (result.includes('pixel 10')) {
//     result = result.replace('white', 'porcelain');
//     result = result.replace('jade', 'green');
//   }

//   // Honor 400 → yellow → gold
//   if (result.includes('honor 400')) {
//     result = result.replace('yellow', 'gold');
//   }

//   // OnePlus: noir/ocean/astral/arctic/trail/dusk/tempest/mistry/mercurial/oasis/obsidian/celadon/chrome → стандарт
//   const onePlusColors = {
//     noir: 'black',
//     nebula: 'black',
//     ocean: 'blue',
//     astral: 'silver',
//     arctic: 'white',
//     trail: 'silver',
//     dusk: 'black',
//     tempest: 'gray',
//     mistry: 'green',
//     mercurial: 'silver',
//     oasis: 'green',
//     obsidian: 'black',
//     celadon: 'green',
//     chrome: 'black',
//     seafoam: 'green',
//     stormy: 'black',
//   };
//   Object.entries(onePlusColors).forEach(([from, to]) => {
//     if (result.includes('oneplus')) {
//       result = result.replace(from, to);
//     }
//   });

//   // Magic → phantom → black, subzero → silver, prism → white
//   if (result.includes('magic')) {
//     result = result.replace('phantom', 'black');
//     result = result.replace('subzero', 'silver');
//     result = result.replace('moonlight', 'silver');
//   }
//   if (result.includes('magic 11 air')) {
//     result = result.replace('prism', 'white');
//   }

//   // Mi 17 → gray → black
//   if (result.includes('mi 17')) {
//     result = result.replace('gray', 'black');
//   }

//   // Note 14 → green → blue
//   if (result.includes('note 14')) {
//     result = result.replace('green', 'blue');
//   }

//   // Note 15 → color → titan, gray → titan
//   if (result.includes('note 15')) {
//     result = result.replace('color', 'titan');
//   }
//   if (result.includes('note 15 pro')) {
//     result = result.replace('gray', 'titan');
//   }

//   // Note 15 pro + / Z70 Ultra → gold → brown
//   if (result.includes('note 15 pro +') || result.includes('z70 ultra')) {
//     result = result.replace('gold', 'brown');
//   }

//   // Tab S11 / A07 → black → gray
//   if (/a07 4\/\d+|a07 6\/128|a07 8\/256|tab s11/.test(result)) {
//     result = result.replace('black', 'gray');
//   }

//   // iPad Mini → 2024 → 7
//   if (result.includes('ipad mini')) {
//     result = result.replace('2024', '7');
//   }

//   // HK → dual (если нет "17"), CN → dual
//   if (result.includes('🇭🇰') && !result.includes('17')) {
//     result = result.replace('🇭🇰', 'dual');
//   }
//   if (result.includes('🇨🇳')) {
//     result = result.replace('🇨🇳', 'dual');
//   }

//   // iPhone 13/14/15: white → starlight, black → midnight
//   const iphoneModels = ['13', '14', '15'];
//   const capacities = ['128', '256', '512'];
//   const hasIphoneColorPattern = (color) =>
//     iphoneModels.some(m => capacities.some(c => result.includes(`${m} ${c} ${color}`)));

//   if (hasIphoneColorPattern('white')) {
//     result = result.replace('white', 'starlight');
//   }
//   if (hasIphoneColorPattern('black')) {
//     result = result.replace('black', 'midnight');
//   }

//   // Z Flip 5 → mint остаётся, иначе → Green
//   if (!result.includes('z flip 5')) {
//     result = result.replace('mint', 'Green');
//   }

//   // A36 → lime → Green
//   if (result.includes('a36')) {
//     result = result.replace('lime', 'Green');
//   } else {
//     result = result.replace('lime', 'Yellow');
//   }

//   // Graphite → Black (если не s22, s23, buds 2, epix, fenix, instinct, watch 8)
//   const exemptGraphite = /s22|s23|buds 2|epix|fenix|instinct|watch 8/.test(result);
//   if (!exemptGraphite) {
//     result = result.replace('graphite', 'Black');
//   }

//   // A35/A55 → navy → Black, lavender/violet → Lilac
//   if (result.includes('a35') || result.includes('a55')) {
//     result = result.replace('navy', 'Black');
//     result = result.replace('lavender', 'Lilac');
//     result = result.replace('violet', 'Lilac');
//   }

//   // LTE → 5G, buds pro 2 → buds 2 pro
//   result = result.replace('lte', '5g');
//   result = result.replace('buds pro 2', 'buds 2 pro');

//   // lavender/violet → Purple
//   result = result.replace('lavender', 'Purple');
//   result = result.replace('violet', 'Purple');

//   // Poco → lunar → silver
//   if (result.includes('poco')) {
//     result = result.replace('lunar', 'silver');
//   }

//   // Note 13 Pro → teal/blue → Green
//   if (result.includes('note 13 pro')) {
//     result = result.replace('teal', 'Green');
//     result = result.replace('blue', 'Green');
//   }

//   // Pad SE → graphite → Gray
//   if (result.includes('pad se')) {
//     result = result.replace('graphite', 'Gray');
//   }

//   // Pad 6s Pro / Mi Pad 7 → gray → Black
//   if (result.includes('pad 6s pro') || result.includes('mi pad 7')) {
//     result = result.replace('gray', 'Black');
//   }

//   // iPhone 17 → sage → Green
//   if (result.includes('17 ')) {
//     result = result.replace('sage', 'Green');
//   }

//   // SE3 → midnight → black, starlight → white
//   if (result.includes('se3') || result.includes('magic')) {
//     result = result.replace('midnight', 'black');
//   }
//   if (result.includes('se3')) {
//     result = result.replace('starlight', 'white');
//   }

//   // Nord: ice → blue, sands → white, mist/gray → white, tempest → gray, mistry → green, и т.д.
//   if (result.includes('nord')) {
//     result = result.replace('nord ce 5', 'nord ce5')
//   }
//   if (result.includes('nord 5')) {
//     result = result.replace('ice', 'blue');
//     result = result.replace('sands', 'white');
//   }
//   if (result.includes('nord ce5')) {
//     result = result.replace('mist', 'white');
//     result = result.replace('gray', 'white');
//   }
//   if (result.includes('nord ')) {
//     result = result.replace('tempest', 'gray');
//     result = result.replace('mistry', 'green');
//     result = result.replace('mercurial', 'silver');
//     result = result.replace('oasis', 'green');
//     result = result.replace('obsidian', 'black');
//     result = result.replace('celadon', 'green');
//     result = result.replace('chrome', 'black');
//   }
//   if (result.includes('open ')) {
//     result = result.replace('dusk', 'green');
//   }

//   // Pixel: snow → white, sea/bay → blue, rose/peony → pink, iris → purple, aloe → green, porcelain → gold
//   if (result.includes('pixel')) {
//     result = result.replace('snow', 'white');
//     result = result.replace('obsidian', 'black');
//     result = result.replace(/sea|bay/g, 'blue');
//     result = result.replace(/rose|peony/g, 'pink');
//     result = result.replace('iris', 'purple');
//     result = result.replace('aloe', 'green');
//     result = result.replace('porcelain', 'gold');
//   }

//   // eSIM / Dual SIM для iPhone 17
//   const isIphone17 = /(17(?:e| pro max?|)|17)/.test(result);
//   if (isIphone17) {
//     if (result.includes('+')) {
//       result = result.replace('+', '🇮🇳');
//     } else {
//       result = result.replace('esim', '🇺🇸');
//     }

//     // Эти флаги → 🇺🇸
//     const usFlags = ['🇧🇭', '🇨🇦', '🇬🇺', '🇯🇵', '🇰🇼', '🇲🇽', '🇴🇲', '🇶🇦', '🇸🇦', '🇦🇪', '🇻🇮'];
//     usFlags.forEach(flag => {
//       result = result.replace(flag, '🇺🇸');
//     });
//   }

//   // Xperia / Apple: 2sim, 2-sim → dual
//   if (result.includes('xperia') || isIphone17) {
//     result = result.replace('2sim', 'dual');
//     result = result.replace('2-sim', 'dual');
//   }

//   // Yandex: станция → яндекс, цвета → русские, макс → макс
//   if (result.includes('станция')) {
//     result = result.replace('станция', 'яндекс');
//   }
//   if (result.includes('яндекс')) {
//     result = result.replace('black', 'черн');
//     result = result.replace('blue', 'син');
//     result = result.replace('green', 'зелен');
//     result = result.replace('red', 'красн');
//     result = result.replace('gray', 'сер');
//     result = result.replace('purple', 'фиол');
//     result = result.replace('pink', 'розов');
//     result = result.replace('white', 'бел');
//     result = result.replace('beige', 'беж');
//     result = result.replace('max', 'макс');
//     result = result.replace('лиловая', 'фиолет');
//   }

//   // OpenSwim → coral → orange
//   if (result.includes('openswim')) {
//     result = result.replace('coral', 'orange');
//   }

//   // Honor: белый/чёрный/зелёный → white/black/green
//   if (result.includes('honor')) {
//     result = result.replace('белый', 'white');
//     result = result.replace('чёрный', 'black');
//     result = result.replace('зелёный', 'green');
//   }

//   // A37 → black → chark, green → gray
//   if (result.includes('a37 ')) {
//     result = result.replace('charc', 'chark');
//     result = result.replace('black', 'chark');
//     result = result.replace('green', 'gray');
//   }

//   return result.trim();
// };