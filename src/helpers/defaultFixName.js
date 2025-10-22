export const defaultFixName = (el) => {
  const name = el.toLowerCase();
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const fixAirPodsUSB =
    removeDoubleSpace.indexOf("airpods pro 2") !== -1
      ? removeDoubleSpace.replace("type", "usb")
      : removeDoubleSpace;
  const fixAirPodsMax22 =
    fixAirPodsUSB.indexOf("airpods max") !== -1 &&
    fixAirPodsUSB.indexOf("usb") !== -1
      ? fixAirPodsUSB.replace("usb", "2")
      : fixAirPodsUSB;
  const fixSE2Black =
    fixAirPodsMax22.indexOf("se2") !== -1 &&
    fixAirPodsMax22.indexOf("s8") !== -1 &&
    fixAirPodsMax22.indexOf("s9") !== -1
      ? fixAirPodsMax22.replace("black", "midnight")
      : fixAirPodsMax22;
  const fixSE2White =
    fixSE2Black.indexOf("se2") !== -1 &&
    fixSE2Black.indexOf("s8") !== -1 &&
    fixSE2Black.indexOf("s9") !== -1
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
  const fixUltra2TL =
    fixUltra2OB.indexOf("ul 2") !== -1
      ? fixUltra2OB.replace("tl", "trail loop")
      : fixUltra2OB;
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
    fixCH.indexOf("14 plus 512 white") !== -1 ||
    fixCH.indexOf("se3 64") !== -1 ||
    fixCH.indexOf("se3 128") !== -1
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
    fixStarlight.indexOf("15 plus 512 black") !== -1 ||
    fixStarlight.indexOf("se3 64") !== -1 ||
    fixStarlight.indexOf("se3 128") !== -1
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
    fixLime.indexOf("instinct") === -1
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

  const fixPadSEGray =
    fixTeal2.indexOf("pad se") !== -1
      ? fixTeal2.replace("graphite", "Gray")
      : fixTeal2;

  const fixPad6sProBlack =
    fixPadSEGray.indexOf("pad 6s pro") !== -1 ||
    fixPadSEGray.indexOf("mi pad 7") !== -1
      ? fixPadSEGray.replace("gray", "Black")
      : fixPadSEGray;

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
  const fixMajor4 =
    fixPS52.indexOf("major") !== -1 ? fixPS52.replace("iv", "4") : fixPS52;
  const fixMajor5 =
    fixMajor4.indexOf("major") !== -1 ? fixMajor4.replace("v", "5") : fixMajor4;
  const fixXperiaCN =
    fixMajor5.indexOf("xperia") !== -1 ||
    fixMajor5.indexOf("17 256") !== -1 ||
    fixMajor5.indexOf("17 512") !== -1 ||
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

  const fixS23Plus = fixYandexBeige.replace("s23 plus", "S23+");
  const fixS23Plus1 = fixS23Plus.replace("s23 +", "S23+");
  const fixS24Plus = fixS23Plus1.replace("s24 plus", "S24+");
  const fixS24Plus1 = fixS24Plus.replace("s24 +", "S24+");
  const fixS25Plus = fixS24Plus1.replace("s25 plus", "S25+");
  const fixS25Plus1 = fixS25Plus.replace("s25 +", "S25+");
  const fixA07Gray =
    fixS25Plus1.indexOf("a07 4/64") !== -1 ||
    fixS25Plus1.indexOf("a07 4/128") !== -1 ||
    fixS25Plus1.indexOf("a07 6/128") !== -1 ||
    fixS25Plus1.indexOf("a07 8/256") !== -1
      ? fixS25Plus1.replace("black", "gray")
      : fixS25Plus1;

  return fixA07Gray;
};
