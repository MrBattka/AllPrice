let gb = /Gb/gi;
let aws9 = /AW Series 9/gi;
let aw9Space = /AW  9/gi;
let aw9 = /AW 9/gi;
let awu2 = /AW Ultra 2/gi;
let awSE = /AW SE/gi;
let apple = /Apple /gi;
let mb = /MB /gi;
let ipad = /🇺🇸 \(2022\)/gi;
let aw8Spaces = /AW  8/gi;
let aws8 = /AW 8/gi;
let airPods = /Airpods/gi;
let proMax = /ProMax/gi;
let wiFi = /wifi/gi;
let watchS8 = /Watch S8/gi;
let IPad9 = /IPad 9/gi;
let fixFlagJp = /🇺🇸🇯🇵 \(2022\)/gi;
let fixFlagUs = /🇺🇸🇯🇵🇦🇺 \(2022\)/gi;
let fixFlagAu = /🇺🇸🇦🇺 \(2022\)/gi;
let air13 = /13.6 M/gi;
let air15 = /15 M/gi;
let airAir13 = /Air 13.6/gi;
let airAir15 = /Air 15/gi;
let MGN63 = /M1 256 Gold MGND3/gi;
let MGN93 = /M1 256 Silver MGN93/gi;
let MGND3 = /M1 256 Space Grey MGN63/gi;
let heapdphone = /Heapdphone/gi;
let dyson = /Dyson/gi;
let playstation = /Playstation/gi;
let zFlip = /Z flip/gi;
let galaxyWatch = /Galaxy Watch/gi;
let classik = /Classik/gi;
let s21 = /Samsung S21/gi;
let s22 = /Samsung S22/gi;
let s23 = /Samsung S23/gi;
let s24 = /Samsung S24/gi;
let a550 = /A550/gi;
let poco = /Poco/gi;
let poco1 = /poco/gi;
let watchGarmin = /Watch Garmin/gi;
let sunglases = /Sunglases/gi;
let dji = /Dji/gi;
let rog = /Rog/gi;
let sony = /Sony Xperia/gi;
let zenFone = /Asus ZenFone/gi;
let google = /Google /gi;
let asus = /Asus /gi;
let glasses = /glases/gi;
let huawei = /HUAWEI/gi;
let tecno = /T.Tecno/gi;
let realme = /T.Realme/gi;

export const fixNameUnimtrn = (el) => {
  const fixGb = el.Товар?.replace(gb, "");
  const removeDoubleSpace = fixGb.replace(/\s+/g, " ");
  const fixIPad9 = removeDoubleSpace.replace(IPad9, "iPad 9");
  const fixWiSpaceFi = fixIPad9.replace("Wi Fi", "Wi-Fi");
  const fixWatchS8 = fixWiSpaceFi.replace(watchS8, "S8");
  const fixWiFi = fixWatchS8.replace(wiFi, "Wi-Fi");
  const fixAWS9Space = fixWiFi.replace(aw9Space, "S9");
  const fixAWS9 = fixAWS9Space.replace(aws9, "S9");
  const fixAW9 = fixAWS9.replace(aw9, "S9");
  const fixAW8 = fixAW9.replace(aws8, "S8");
  const fixAW8Space = fixAW8.replace(aw8Spaces, "S8");
  const fixAWU2 = fixAW8Space.replace(awu2, "Ultra 2");
  const fixAWSE = fixAWU2.replace(awSE, "SE");
  const fixApple = fixAWSE.replace(apple, "");
  const fixmb = fixApple.replace(mb, "");
  const fixIpad = fixmb.replace(ipad, "(2022) 🇺🇸");
  const fixIpadUs = fixIpad.replace(fixFlagUs, "(2022)🇺🇸🇯🇵🇦🇺");
  const fixIpadJp = fixIpadUs.replace(fixFlagJp, "(2022)🇺🇸🇯🇵");
  const fixIpadAu = fixIpadJp.replace(fixFlagAu, "(2022)🇺🇸🇦🇺");
  const fixAirPods = fixIpadAu.replace(airPods, "AirPods");
  const fixAir13 = fixAirPods.replace(air13, "Air 13.6 M");
  const fixAir15 = fixAir13.replace(air15, "Air 15 M");
  const fixAirAir13 = fixAir15.replace(airAir13, "13.6");
  const fixAirAir15 = fixAirAir13.replace(airAir15, "15");
  const fixMGN63 = fixAirAir15.replace(MGN63, "Air M1 256 Gold MGND3");
  const fixMGN93 = fixMGN63.replace(MGN93, "Air M1 256 Silver MGN93");
  const fixMGND3 = fixMGN93.replace(MGND3, "Air M1 256 Space Grey MGN63");
  const fixHeapdphone = fixMGND3.replace(heapdphone, "Headphone");
  const fixDyson = fixHeapdphone.replace(dyson, "");
  const fixPlaystation = fixDyson.replace(playstation, "PlayStation");
  const fixGalaxyWatch = fixPlaystation.replace(galaxyWatch, "Watch");
  const fixClassik = fixGalaxyWatch.replace(classik, "Classic");
  const fixS21 = fixClassik.replace(s21, "S21");
  const fixS22 = fixS21.replace(s22, "S22");
  const fixS23 = fixS22.replace(s23, "S23");
  const fixS24 = fixS23.replace(s24, "S24");
  const fixA550 = fixS24.replace(a550, "A55");
  const fixZflip = fixA550.replace(zFlip, "Z Flip");
  const fixPoco = fixZflip.replace(poco, "POCO");
  const fixPoco1 = fixPoco.replace(poco1, "POCO");
  const fixWatchGarmin = fixPoco1.replace(watchGarmin, "Garmin");
  const fixSunglases = fixWatchGarmin.replace(sunglases, "Sunglasses");
  const fixDji = fixSunglases.replace(dji, "DJI");
  const fixSony = fixDji.replace(sony, "Xperia");
  const fixRog = fixSony.replace(rog, "ROG");
  const fixGoogle = fixRog.replace(google, "");
  const fixZenFone = fixGoogle.replace(zenFone, "ZenFone");
  const fixAsus = fixZenFone.replace(asus, "");
  const fixGlasses = fixAsus.replace(glasses, "glasses");
  const fixHuawei = fixGlasses.replace(huawei, "Huawei");
  const fixTecno = fixHuawei.replace(tecno, "Tecno");
  const fixRealme = fixTecno.replace(realme, "Realme");
  const replaceDoubleSpace = fixRealme.replace(/\s+/g, " ");
  const replaceS711B = replaceDoubleSpace.replace(" S711B", "");
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
  const replaceiPadYear = replaceDQ72.replace("10 (2022)", "10");
  const replaceiPad5109 = replaceiPadYear.replace("Air 5 10.9", "AIR 5");
  const replaceiPadPro11 = replaceiPad5109.replace("Pro 11", "PRO 11");
  const replaceiPadPro13 = replaceiPadPro11.replace("Pro 13", "PRO 13");
  const replaceiPadPro12 = replaceiPadPro13.replace("Pro 12.9", "PRO 12.9");
  const fix1TB = replaceiPadPro12.replace("1Tb", "1TB");
  const fix11M2 = fix1TB.replace("11 (2022)", "11 M2");
  const fix12M2 = fix11M2.replace("12.9 (2022)", "12.9 M2");
  const fix13M2 = fix12M2.replace("13 (2022)", "13 M2");
  const fixCPH2465 = fix13M2.replace("CPH2465 ", "");
  const fixMM = fixCPH2465.replace("mm", "");
  const fixnx721j = fixMM.replace("NX721J ", "");
  const fixne2213 = fixnx721j.replace("NE2213 ", "");
  const fixcph2609 = fixne2213.replace("CPH2609 ", "");
  const fixcph2493 = fixcph2609.replace("CPH2493 ", "");
  const fixcnx769j = fixcph2493.replace("NX769J ", "");
  const fixxqde72 = fixcnx769j.replace("XQ-DE72 ", "");
  const fixs916b = fixxqde72.replace("S916B ", "");
  const fixUltra2SM = fixs916b.replace("Ultra 2 S/M ", "ultra 2 ");
  const fixGreenGray = fixUltra2SM.replace(
    "ultra 2 Green/Gray",
    "ultra 2 gray"
  );
  const fixX510 = fixGreenGray.replace("X510 ", "");
  // const fixWifi = fixX510.replace("Wi-Fi ", "");
  const fixTitaniumBlack = fixX510.replace("Titanium Blaсk", "Black");
  const fixf741b = fixTitaniumBlack.replace("F741B ", "");
  const fixf956b = fixf741b.replace("F956B ", "");
  const fixmpq93 = fixf956b.replace("MPQ93 ", "");
  const fixx910 = fixmpq93.replace("X910 ", "");
  const fixiPad9 = fixx910.replace("iPad 9 (2021)", "ipad 9");
  const fixmk2n3 = fixiPad9.replace("MK2N3 ", "");
  const fixmk2p3 = fixmk2n3.replace("MK2P3 ", "");

  const replaceSpaceGrey = fixmk2p3.replace(
    "Space Grey",
    "Grey"
  );
  const replaceSpaceGray = replaceSpaceGrey.replace("Space Gray", "Grey");
  const replaceSpaceBlack = replaceSpaceGray.replace("Space Black", "Black");
  const replaceGrey = replaceSpaceBlack.replace("Grey", "Gray");

  const replaceiPadPink64 = replaceGrey.replace("Wi-Fi 64 Pink", "64 Pink Wi-Fi");
  const replaceiPadSilver64 = replaceiPadPink64.replace(
    "Wi-Fi 64 Silver",
    "64 Silver Wi-Fi"
  );
  const replaceiPadSpaceGray64 = replaceiPadSilver64.replace(
    "Wi-Fi 64 Gray",
    "64 Gray Wi-Fi"
  );
  const replaceiPadBlue64 = replaceiPadSpaceGray64.replace(
    "Wi-Fi 64 Blue",
    "64 Blue Wi-Fi"
  );
  const replaceiPadPurple64 = replaceiPadBlue64.replace(
    "Wi-Fi 64 Purple",
    "64 Purple Wi-Fi"
  );
  const replaceiPadYellow64 = replaceiPadPurple64.replace(
    "Wi-Fi 64 Yellow",
    "64 Yellow Wi-Fi"
  );
  const replaceiPadPinkLTE64 = replaceiPadYellow64.replace(
    "LTE 64 Pink",
    "64 Pink LTE"
  );
  const replaceiPadSilverLTE64 = replaceiPadPinkLTE64.replace(
    "LTE 64 Silver",
    "64 Silver LTE"
  );
  const replaceiPadBlueLTE64 = replaceiPadSilverLTE64.replace(
    "LTE 64 Blue",
    "64 Blue LTE"
  );
  const replaceiPadYellowLTE64 = replaceiPadBlueLTE64.replace(
    "LTE 64 Yellow",
    "64 Yellow LTE"
  );
  const replaceiPadPink128 = replaceiPadYellowLTE64.replace(
    "Wi-Fi 128 Pink",
    "128 Pink Wi-Fi"
  );
  const replaceiPadPurple128 = replaceiPadPink128.replace(
    "Wi-Fi 128 Purple",
    "128 Purple Wi-Fi"
  );
  const replaceiPadSpaceGrey128 = replaceiPadPurple128.replace(
    "Wi-Fi 128 Gray",
    "128 Gray Wi-Fi"
  );
  const replaceiPadSilver128 = replaceiPadSpaceGrey128.replace(
    "Wi-Fi 128 Silver",
    "128 Silver Wi-Fi"
  );
  const replaceiPadBlue128 = replaceiPadSilver128.replace(
    "Wi-Fi 128 Blue",
    "128 Blue Wi-Fi"
  );
  const replaceiPadYellow128 = replaceiPadBlue128.replace(
    "Wi-Fi 128 Yellow",
    "128 Yellow Wi-Fi"
  );
  const replaceiPadPinkLTE128 = replaceiPadYellow128.replace(
    "LTE 128 Pink",
    "128 Pink LTE"
  );
  const replaceiPadSilverLTE128 = replaceiPadPinkLTE128.replace(
    "LTE 128 Silver",
    "128 Silver LTE"
  );
  const replaceiPadBlueLTE128 = replaceiPadSilverLTE128.replace(
    "LTE 128 Blue",
    "128 Blue LTE"
  );
  const replaceiPadYellowLTE128 = replaceiPadBlueLTE128.replace(
    "LTE 128 Yellow",
    "128 Yellow LTE"
  );
  const replaceiPadPink256 = replaceiPadYellowLTE128.replace(
    "Wi-Fi 256 Pink",
    "256 Pink Wi-Fi"
  );
  const replaceiPadPurple256 = replaceiPadPink256.replace(
    "Wi-Fi 256 Purple",
    "256 Purple Wi-Fi"
  );
  const replaceiPadSpaceGrey256 = replaceiPadPurple256.replace(
    "Wi-Fi 256 Gray",
    "256 Gray Wi-Fi"
  );
  const replaceiPadSilver256 = replaceiPadSpaceGrey256.replace(
    "Wi-Fi 256 Silver",
    "256 Silver Wi-Fi"
  );
  const replaceiPadBlue256 = replaceiPadSilver256.replace(
    "Wi-Fi 256 Blue",
    "256 Blue Wi-Fi"
  );
  const replaceiPadYellow256 = replaceiPadBlue256.replace(
    "Wi-Fi 256 Yellow",
    "256 Yellow Wi-Fi"
  );
  const replaceiPadPinkLTE256 = replaceiPadYellow256.replace(
    "LTE 256 Pink",
    "256 Pink LTE"
  );
  const replaceiPadSilverLTE256 = replaceiPadPinkLTE256.replace(
    "LTE 256 Silver",
    "256 Silver LTE"
  );
  const replaceiPadBlueLTE256 = replaceiPadSilverLTE256.replace(
    "LTE 256 Blue",
    "256 Blue LTE"
  );
  const replaceiPadYellowLTE256 = replaceiPadBlueLTE256.replace(
    "LTE 256 Yellow",
    "256 Yellow LTE"
  );
  const replaceiPadPink512 = replaceiPadYellowLTE256.replace(
    "Wi-Fi 512 Pink",
    "512 Pink Wi-Fi"
  );
  const replaceiPadPurple512 = replaceiPadPink512.replace(
    "Wi-Fi 512 Purple",
    "512 Purple Wi-Fi"
  );
  const replaceiPadSilver512 = replaceiPadPurple512.replace(
    "Wi-Fi 512 Silver",
    "512 Silver Wi-Fi"
  );
  const replaceiPadSpaceGrey512 = replaceiPadSilver512.replace(
    "Wi-Fi 512 Gray",
    "512 Gray Wi-Fi"
  );
  const replaceiPadBlue512 = replaceiPadSpaceGrey512.replace(
    "Wi-Fi 512 Blue",
    "512 Blue Wi-Fi"
  );
  const replaceiPadYellow512 = replaceiPadBlue512.replace(
    "Wi-Fi 512 Yellow",
    "512 Yellow Wi-Fi"
  );
  const replaceiPadPinkLTE512 = replaceiPadYellow512.replace(
    "LTE 512 Pink",
    "512 Pink LTE"
  );
  const replaceiPadSilverLTE512 = replaceiPadPinkLTE512.replace(
    "LTE 512 Silver",
    "512 Silver LTE"
  );
  const replaceiPadBlueLTE512 = replaceiPadSilverLTE512.replace(
    "LTE 512 Blue",
    "512 Blue LTE"
  );
  const replaceiPadYellowLTE512 = replaceiPadBlueLTE512.replace(
    "LTE 512 Yellow",
    "512 Yellow LTE"
  );
  const replaceiPadPink1Tb = replaceiPadYellowLTE512.replace(
    "Wi-Fi 1Tb Pink",
    "1Tb Pink Wi-Fi"
  );
  const replaceiPadSpaceGrey1Tb = replaceiPadPink1Tb.replace(
    "Wi-Fi 1Tb Gray",
    "1Tb Gray Wi-Fi"
  );
  const replaceiPadSilver1Tb = replaceiPadSpaceGrey1Tb.replace(
    "Wi-Fi 1Tb Silver",
    "1Tb Silver Wi-Fi"
  );
  const replaceiPadBlue1Tb = replaceiPadSilver1Tb.replace(
    "Wi-Fi 1Tb Blue",
    "1Tb Blue Wi-Fi"
  );
  const replaceiPadYellow1Tb = replaceiPadBlue1Tb.replace(
    "Wi-Fi 1Tb Yellow",
    "1Tb Yellow Wi-Fi"
  );
  const replaceiPadPinkLTE1Tb = replaceiPadYellow1Tb.replace(
    "LTE 1Tb Pink",
    "1Tb Pink LTE"
  );
  const replaceiPadSilverLTE1Tb = replaceiPadPinkLTE1Tb.replace(
    "LTE 1Tb Silver",
    "1Tb Silver LTE"
  );
  const replaceiPadBlueLTE1Tb = replaceiPadSilverLTE1Tb.replace(
    "LTE 1Tb Blue",
    "1Tb Blue LTE"
  );
  const replaceiPadYellowLTE1Tb = replaceiPadBlueLTE1Tb.replace(
    "LTE 1Tb Yellow",
    "1Tb Yellow LTE"
  );

  const replaceiPadPink = replaceiPadYellowLTE1Tb.replace(
    "Wi-Fi Pink",
    "Pink Wi-Fi"
  );
  const replaceiPadSilver = replaceiPadPink.replace(
    "Wi-Fi Silver",
    "Silver Wi-Fi"
  );
  const replaceiPadBlue = replaceiPadSilver.replace("Wi-Fi Blue", "Blue Wi-Fi");
  const replaceiPadYellow = replaceiPadBlue.replace(
    "Wi-Fi Yellow",
    "Yellow Wi-Fi"
  );
  const replaceiPadPurple = replaceiPadYellow.replace(
    "Wi-Fi Purple",
    "Purple Wi-Fi"
  );
  const replaceiPadSpaceBlack = replaceiPadPurple.replace(
    "Wi-Fi Black",
    "Black Wi-Fi"
  );
  const replaceiPadPinkLTE = replaceiPadSpaceBlack.replace(
    "LTE Pink",
    "Pink LTE"
  );
  const replaceiPadSilverLTE = replaceiPadPinkLTE.replace(
    "LTE Silver",
    "Silver LTE"
  );
  const replaceiPadBlueLTE = replaceiPadSilverLTE.replace(
    "LTE Blue",
    "Blue LTE"
  );
  const replaceiPadYellowLTE = replaceiPadBlueLTE.replace(
    "LTE Yellow",
    "Yellow LTE"
  );
  const replaceiPadPurpleLTE = replaceiPadYellowLTE.replace(
    "LTE Purple",
    "Purple LTE"
  );
  const replaceiPadSpaceBlackLTE = replaceiPadPurpleLTE.replace(
    "LTE Black",
    "Black LTE"
  );

  const fixProMax = replaceiPadSpaceBlackLTE.replace(proMax, "Pro Max");

  // const toLowerCase = fixProMax.toLowerCase();

  const removeLightGreen = fixProMax.replace("Light Green", "Green");
  const removeLightViolet = removeLightGreen.replace("Light Violet", "Violet");
  const removePhantom = removeLightViolet.replace("Phantom ", "");

  const fixMidnightBlack = removeLightViolet.replace("Midnight Black", "Black");
  const fixForestGreen = fixMidnightBlack.replace("Forest Green", "Green");
  const fixOceanTeal = fixForestGreen.replace("Ocean Teal", "Teal");
  const fixProPlus = fixOceanTeal.replace("Pro Plus", "Pro +");
  const fixMoonlightWhite = fixProPlus.replace("Moonlight White", "White");
  const fixProMaxx = fixMoonlightWhite.replace("ProMax", "Pro Max");

  return fixProMaxx;
};
