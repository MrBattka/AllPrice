import { flags } from "../../../helpers/fixPrice";
import { newPriceHi } from "../../../helpers/NewPrice";

export const returnNameInArr = (name) => {
  if (
    name?.indexOf("🇪🇺") != -1 ||
    name?.indexOf("🇷🇺") != -1 ||
    name?.indexOf("🇰🇿") != -1 ||
    name?.indexOf("🇿🇦") != -1 ||
    name?.indexOf("🇮🇳") != -1 ||
    name?.indexOf("🇦🇪") != -1 ||
    name?.indexOf("🇲🇾") != -1 ||
    name?.indexOf("🇭🇰") != -1 ||
    name?.indexOf("🇻🇳") != -1 ||
    name?.indexOf("🇹🇭") != -1 ||
    name?.indexOf("🇬🇧") != -1 ||
    name?.indexOf("🇯🇵") != -1 ||
    name?.indexOf("🇺🇸") != -1 ||
    name?.indexOf("🇨🇳") != -1 ||
    name?.indexOf("🇸🇬") != -1
  ) {
    let splitPriceEU = name.replace(/🇪🇺.*/g, "🇪🇺");
    let splitPriceRU = splitPriceEU.replace(/🇷🇺.*/g, "🇷🇺");
    let splitPriceKZ = splitPriceRU.replace(/🇰🇿.*/g, "🇰🇿");
    let splitPriceZA = splitPriceKZ.replace(/🇿🇦.*/g, "🇿🇦");
    let splitPriceIN = splitPriceZA.replace(/🇮🇳.*/g, "🇮🇳");
    let splitPriceAE = splitPriceIN.replace(/🇦🇪.*/g, "🇦🇪");
    let splitPriceMY = splitPriceAE.replace(/🇲🇾.*/g, "🇲🇾");
    let splitPriceHK = splitPriceMY.replace(/🇭🇰.*/g, "🇭🇰");
    let splitPriceVN = splitPriceHK.replace(/🇻🇳.*/g, "🇻🇳");
    let splitPriceTH = splitPriceVN.replace(/🇹🇭.*/g, "🇹🇭");
    let splitPriceGB = splitPriceTH.replace(/🇬🇧.*/g, "🇬🇧");
    let splitPriceJP = splitPriceGB.replace(/🇯🇵.*/g, "🇯🇵");
    let splitPriceUS = splitPriceJP.replace(/🇺🇸.*/g, "🇺🇸");
    let splitPriceCN = splitPriceUS.replace(/🇨🇳.*/g, "🇨🇳");
    let splitPricesSG = splitPriceCN.replace(/🇸🇬.*/g, "🇸🇬");

    let fixLemon = splitPricesSG.replace("🍏 ", "");
    let fixFire = fixLemon.replace("🔥 ", "");
    let fixDoubleCar = fixFire.replace(" 🏎", "");
    let fixDoubleSpaceCar = fixDoubleCar.replace("  🏎", "");
    let fixCarPrice = fixDoubleSpaceCar.replace("🏎", "");
    let fixAirPods = fixCarPrice.replace("🎧", "");
    let fixMacbook = fixAirPods.replace("💻", "");
    let fixAppleName = fixMacbook.replace("Apple", "");

    return fixAppleName;
  } else {
    let fixLemon = name.replace("🍏 ", "");
    let fixFire = fixLemon.replace("🔥", "");
    let fixDoubleCar = fixFire.replace(" 🏎", "");
    let fixDoubleSpaceCar = fixDoubleCar.replace("  🏎", "");
    let fixCarPrice = fixDoubleSpaceCar.replace("🏎", "");
    let fixAirPods = fixCarPrice.replace("🎧", "");
    let fixMacbook = fixAirPods.replace("💻", "");

    let reverseStrName = fixMacbook.split("").reverse().join("");
    let removeSpaceName =
      reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
    let removeDoubleSpaceName =
      removeSpaceName[0] === " " ? removeSpaceName.slice(1) : removeSpaceName;
    let splitPriceEU = /\s(.+)/.exec(removeDoubleSpaceName)[1];
    let reverseBackStrName = splitPriceEU.split("").reverse().join("");

    return reverseBackStrName;
  }
};

export const returnExtraPrice = (name) => {
  if (
    name?.indexOf("🇪🇺") != -1 ||
    name?.indexOf("🇷🇺") != -1 ||
    name?.indexOf("🇰🇿") != -1 ||
    name?.indexOf("🇿🇦") != -1 ||
    name?.indexOf("🇮🇳") != -1 ||
    name?.indexOf("🇦🇪") != -1 ||
    name?.indexOf("🇲🇾") != -1 ||
    name?.indexOf("🇭🇰") != -1 ||
    name?.indexOf("🇻🇳") != -1 ||
    name?.indexOf("🇹🇭") != -1 ||
    name?.indexOf("🇬🇧") != -1 ||
    name?.indexOf("🇯🇵") != -1 ||
    name?.indexOf("🇺🇸") != -1 ||
    name?.indexOf("🇨🇳") != -1 ||
    name?.indexOf("🇸🇬") != -1
  ) {
    let fixLemonPrice = name.replace("🍏 ", "");
    let fixDoubleCarPrice = fixLemonPrice.replace(" 🏎", "");
    let fixDoubleSpaceCarPrice = fixDoubleCarPrice.replace("  🏎", "");
    let fixCarPricePrice = fixDoubleSpaceCarPrice.replace("🏎", "");
    let flagSearch =
      fixCarPricePrice.search("🇪🇺") &
      fixCarPricePrice.search("🇷🇺") &
      fixCarPricePrice.search("🇰🇿") &
      fixCarPricePrice.search("🇿🇦") &
      fixCarPricePrice.search("🇮🇳") &
      fixCarPricePrice.search("🇦🇪") &
      fixCarPricePrice.search("🇲🇾") &
      fixCarPricePrice.search("🇭🇰") &
      fixCarPricePrice.search("🇻🇳") &
      fixCarPricePrice.search("🇹🇭") &
      fixCarPricePrice.search("🇬🇧") &
      fixCarPricePrice.search("🇯🇵") &
      fixCarPricePrice.search("🇺🇸") &
      fixCarPricePrice.search("🇨🇳") &
      fixCarPricePrice.search("🇸🇬");
    let length = fixCarPricePrice.length;

    let splitStartPriceFlag = fixCarPricePrice.substring(flagSearch, length);

    let splitFlagEU = splitStartPriceFlag.replace("🇪🇺", "");
    let splitFlagRU = splitFlagEU.replace("🇷🇺", "");
    let splitFlagKZ = splitFlagRU.replace("🇰🇿", "");
    let splitFlagZA = splitFlagKZ.replace("🇿🇦", "");
    let splitFlagIN = splitFlagZA.replace("🇮🇳", "");
    let splitFlagAE = splitFlagIN.replace("🇦🇪", "");
    let splitFlagMY = splitFlagAE.replace("🇲🇾", "");
    let splitFlagHK = splitFlagMY.replace("🇭🇰", "");
    let splitFlagVN = splitFlagHK.replace("🇻🇳", "");
    let splitFlagTH = splitFlagVN.replace("🇹🇭", "");
    let splitFlagGB = splitFlagTH.replace("🇬🇧", "");
    let splitFlagJP = splitFlagGB.replace("🇯🇵", "");
    let splitFlagUS = splitFlagJP.replace("🇺🇸", "");
    let splitFlagCN = splitFlagUS.replace("🇨🇳", "");
    let splitFlagSG = splitFlagCN.replace("🇸🇬", "");

    let reverseStr = splitFlagSG.split("").reverse().join("");
    let removeSpace1 = reverseStr[0] === " " ? reverseStr.slice(1) : reverseStr;
    let removeSpace2 =
      removeSpace1[0] === " " ? removeSpace1.slice(1) : removeSpace1;
    let removeSpace3 =
      removeSpace2[0] === " " ? removeSpace2.slice(1) : removeSpace2;

    let splitStartPrice = removeSpace3.split("  ")[0];
    let reverseBackStr = splitStartPrice.split("").reverse().join("");

    let fixCar = reverseBackStr?.replace("🏎", "");

    let splitPriceEU = name.replace(/🇪🇺.*/g, "🇪🇺");
    let splitPriceRU = splitPriceEU.replace(/🇷🇺.*/g, "🇷🇺");
    let splitPriceKZ = splitPriceRU.replace(/🇰🇿.*/g, "🇰🇿");
    let splitPriceZA = splitPriceKZ.replace(/🇿🇦.*/g, "🇿🇦");
    let splitPriceIN = splitPriceZA.replace(/🇮🇳.*/g, "🇮🇳");
    let splitPriceAE = splitPriceIN.replace(/🇦🇪.*/g, "🇦🇪");
    let splitPriceMY = splitPriceAE.replace(/🇲🇾.*/g, "🇲🇾");
    let splitPriceHK = splitPriceMY.replace(/🇭🇰.*/g, "🇭🇰");
    let splitPriceVN = splitPriceHK.replace(/🇻🇳.*/g, "🇻🇳");
    let splitPriceTH = splitPriceVN.replace(/🇹🇭.*/g, "🇹🇭");
    let splitPriceGB = splitPriceTH.replace(/🇬🇧.*/g, "🇬🇧");
    let splitPriceJP = splitPriceGB.replace(/🇯🇵.*/g, "🇯🇵");
    let splitPriceUS = splitPriceJP.replace(/🇺🇸.*/g, "🇺🇸");
    let splitPriceCN = splitPriceUS.replace(/🇨🇳.*/g, "🇨🇳");
    let splitPricesSG = splitPriceCN.replace(/🇸🇬.*/g, "🇸🇬");

    let fixLemon = splitPricesSG.replace("🍏 ", "");
    let fixDoubleCar = fixLemon.replace(" 🏎", "");
    let fixDoubleSpaceCar = fixDoubleCar.replace("  🏎", "");
    let fixCarPrice = fixDoubleSpaceCar.replace("🏎", "");
    let fixAirPods = fixCarPrice.replace("🎧", "");
    let fixMacbook = fixAirPods.replace("💻", "");
    let fixAppleName = fixMacbook.replace("Apple", "");

    return newPriceHi(fixAppleName, fixCar);
  } else {
    let fixLemonPrice = name.replace("🍏 ", "");
    let fixDoubleCarPrice = fixLemonPrice.replace(" 🏎", "");
    let fixDoubleSpaceCarPrice = fixDoubleCarPrice.replace("  🏎", "");
    let fixCarPricePrice = fixDoubleSpaceCarPrice.replace("🏎", "");

    let reverseStr = fixCarPricePrice.split("").reverse().join("");
    let removeSpace1 = reverseStr[0] === " " ? reverseStr.slice(1) : reverseStr;
    let removeSpace2 =
      removeSpace1[0] === " " ? removeSpace1.slice(1) : removeSpace1;
    let removeSpace3 =
      removeSpace2[0] === " " ? removeSpace2.slice(1) : removeSpace2;
    let splitStartPrice = removeSpace3.split(" ")[0];
    let reverseBackStr = splitStartPrice.split("").reverse().join("");

    let fixCar = reverseBackStr.replace("🏎", "");

    let fixLemon = name.replace("🍏 ", "");
    let fixDoubleCar = fixLemon.replace(" 🏎", "");
    let fixDoubleSpaceCar = fixDoubleCar.replace("  🏎", "");
    let fixCarPrice = fixDoubleSpaceCar.replace("🏎", "");
    let fixAirPods = fixCarPrice.replace("🎧", "");
    let fixMacbook = fixAirPods.replace("💻", "");

    let reverseStrName = fixMacbook.split("").reverse().join("");
    let removeSpaceName1 =
      reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
    let removeSpaceName2 =
      removeSpaceName1[0] === " "
        ? removeSpaceName1.slice(1)
        : removeSpaceName1;
    let removeSpaceName3 =
      removeSpaceName2[0] === " "
        ? removeSpaceName2.slice(1)
        : removeSpaceName2;
    let splitPriceEU = /\s(.+)/.exec(removeSpaceName3)[1];
    let reverseBackStrName = splitPriceEU.split("").reverse().join("");

    return newPriceHi(reverseBackStrName, fixCar);
  }
};

export const returnStockPrice = (name) => {
  if (
    name?.indexOf("🇪🇺") != -1 ||
    name?.indexOf("🇷🇺") != -1 ||
    name?.indexOf("🇰🇿") != -1 ||
    name?.indexOf("🇿🇦") != -1 ||
    name?.indexOf("🇮🇳") != -1 ||
    name?.indexOf("🇦🇪") != -1 ||
    name?.indexOf("🇲🇾") != -1 ||
    name?.indexOf("🇭🇰") != -1 ||
    name?.indexOf("🇻🇳") != -1 ||
    name?.indexOf("🇹🇭") != -1 ||
    name?.indexOf("🇬🇧") != -1 ||
    name?.indexOf("🇯🇵") != -1 ||
    name?.indexOf("🇺🇸") != -1 ||
    name?.indexOf("🇨🇳") != -1 ||
    name?.indexOf("🇸🇬") != -1
  ) {
    let fixLemonPrice = name.replace("🍏 ", "");
    let fixDoubleCarPrice = fixLemonPrice.replace(" 🏎", "");
    let fixDoubleSpaceCarPrice = fixDoubleCarPrice.replace("  🏎", "");
    let fixCarPricePrice = fixDoubleSpaceCarPrice.replace("🏎", "");
    let flagSearch =
      fixCarPricePrice.search("🇪🇺") &
      fixCarPricePrice.search("🇷🇺") &
      fixCarPricePrice.search("🇰🇿") &
      fixCarPricePrice.search("🇿🇦") &
      fixCarPricePrice.search("🇮🇳") &
      fixCarPricePrice.search("🇦🇪") &
      fixCarPricePrice.search("🇲🇾") &
      fixCarPricePrice.search("🇭🇰") &
      fixCarPricePrice.search("🇻🇳") &
      fixCarPricePrice.search("🇹🇭") &
      fixCarPricePrice.search("🇬🇧") &
      fixCarPricePrice.search("🇯🇵") &
      fixCarPricePrice.search("🇺🇸") &
      fixCarPricePrice.search("🇨🇳") &
      fixCarPricePrice.search("🇸🇬");
    let length = fixCarPricePrice.length;

    let splitStartPriceFlag = fixCarPricePrice.substring(flagSearch, length);

    let splitFlagEU = splitStartPriceFlag.replace("🇪🇺", "");
    let splitFlagRU = splitFlagEU.replace("🇷🇺", "");
    let splitFlagKZ = splitFlagRU.replace("🇰🇿", "");
    let splitFlagZA = splitFlagKZ.replace("🇿🇦", "");
    let splitFlagIN = splitFlagZA.replace("🇮🇳", "");
    let splitFlagAE = splitFlagIN.replace("🇦🇪", "");
    let splitFlagMY = splitFlagAE.replace("🇲🇾", "");
    let splitFlagHK = splitFlagMY.replace("🇭🇰", "");
    let splitFlagVN = splitFlagHK.replace("🇻🇳", "");
    let splitFlagTH = splitFlagVN.replace("🇹🇭", "");
    let splitFlagGB = splitFlagTH.replace("🇬🇧", "");
    let splitFlagJP = splitFlagGB.replace("🇯🇵", "");
    let splitFlagUS = splitFlagJP.replace("🇺🇸", "");
    let splitFlagCN = splitFlagUS.replace("🇨🇳", "");
    let splitFlagSG = splitFlagCN.replace("🇸🇬", "");

    let reverseStr = splitFlagSG.split("").reverse().join("");
    let removeSpace1 = reverseStr[0] === " " ? reverseStr.slice(1) : reverseStr;
    let removeSpace2 =
      removeSpace1[0] === " " ? removeSpace1.slice(1) : removeSpace1;
    let removeSpace3 =
      removeSpace2[0] === " " ? removeSpace2.slice(1) : removeSpace2;
    let splitStartPrice = removeSpace3.split("  ")[0];
    let reverseBackStr = splitStartPrice.split("").reverse().join("");

    let fixCar = reverseBackStr.replace("🏎", "");

    return fixCar;
  } else {
    let fixLemonPrice = name.replace("🍏 ", "");
    let fixDoubleCarPrice = fixLemonPrice.replace(" 🏎", "");
    let fixDoubleSpaceCarPrice = fixDoubleCarPrice.replace("  🏎", "");
    let fixCarPricePrice = fixDoubleSpaceCarPrice.replace("🏎", "");

    let reverseStr = fixCarPricePrice.split("").reverse().join("");

    let removeSpace1 = reverseStr[0] === " " ? reverseStr.slice(1) : reverseStr;
    let removeSpace2 =
      removeSpace1[0] === " " ? removeSpace1.slice(1) : removeSpace1;
    let removeSpace3 =
      removeSpace2[0] === " " ? removeSpace2.slice(1) : removeSpace2;
    let splitStartPrice = removeSpace3.split("  ")[0];
    let reverseBackStr = splitStartPrice.split("").reverse().join("");

    let fixCar = reverseBackStr.replace("🏎", "");

    return fixCar;
  }
};

export const fixName = (name) => {
  const toLowercase = name.toLowerCase();
  const removeDoubleSpace = toLowercase.replace(/\s+/g, " ");

  const fixPlus = removeDoubleSpace.replace("s24 +", "s24+");
  const fixMarbleGray = fixPlus.replace(
    "s24 8/128 gray",
    "s24 8/128 marble gray"
  );
  const fixCobaltViolet = fixMarbleGray.replace(
    "s24 8/128 violet",
    "s24 8/128 cobalt violet"
  );
  const fixAmberYellow = fixCobaltViolet.replace(
    "s24 8/128 yellow",
    "s24 8/128 amber yellow"
  );
  const fixJadeGreen = fixAmberYellow.replace(
    "s24 8/128 green",
    "s24 8/128 jade green"
  );
  const fixSandstoneOrange = fixJadeGreen.replace(
    "s24 8/128 orange",
    "s24 8/128 sandstone orange"
  );
  const fixSapphireBlue = fixSandstoneOrange.replace(
    "s24 8/128 blue",
    "s24 8/128 sapphire blue"
  );

  const fixMarbleGray256 = fixSapphireBlue.replace(
    "s24 8/256 gray",
    "s24 8/256 marble gray"
  );
  const fixCobaltViolet256 = fixMarbleGray256.replace(
    "s24 8/256 violet",
    "s24 8/256 cobalt violet"
  );
  const fixAmberYellow256 = fixCobaltViolet256.replace(
    "s24 8/256 yellow",
    "s24 8/256 amber yellow"
  );
  const fixOnyxBlack256 = fixAmberYellow256.replace(
    "s24 8/256 black",
    "s24 8/256 onyx black"
  );
  const fixJadeGreen256 = fixOnyxBlack256.replace(
    "s24 8/256 green",
    "s24 8/256 jade green"
  );
  const fixSandstoneOrange256 = fixJadeGreen256.replace(
    "s24 8/256 orange",
    "s24 8/256 sandstone orange"
  );
  const fixSapphireBlue256 = fixSandstoneOrange256.replace(
    "s24 8/256 blue",
    "s24 8/256 sapphire blue"
  );

  const fixMarbleGray12256 = fixSapphireBlue256.replace(
    "s24 12/256 gray",
    "s24 12/256 marble gray"
  );
  const fixCobaltViolet12256 = fixMarbleGray12256.replace(
    "s24 12/256 violet",
    "s24 12/256 cobalt violet"
  );
  const fixAmberYellow12256 = fixCobaltViolet12256.replace(
    "s24 12/256 yellow",
    "s24 12/256 amber yellow"
  );
  const fixOnyxBlack12256 = fixAmberYellow12256.replace(
    "s24 12/256 black",
    "s24 12/256 onyx black"
  );
  const fixJadeGreen12256 = fixOnyxBlack12256.replace(
    "s24 12/256 green",
    "s24 12/256 jade green"
  );
  const fixSandstoneOrange12256 = fixJadeGreen12256.replace(
    "s24 12/256 orange",
    "s24 12/256 sandstone orange"
  );
  const fixSapphireBlue12256 = fixSandstoneOrange12256.replace(
    "s24 12/256 blue",
    "s24 12/256 sapphire blue"
  );

  const fixMarbleGray12512 = fixSapphireBlue12256.replace(
    "s24 12/512 gray",
    "s24 12/512 marble gray"
  );
  const fixCobaltViolet12512 = fixMarbleGray12512.replace(
    "s24 12/512 violet",
    "s24 12/512 cobalt violet"
  );
  const fixAmberYellow12512 = fixCobaltViolet12512.replace(
    "s24 12/512 yellow",
    "s24 12/512 amber yellow"
  );
  const fixOnyxBlack12512 = fixAmberYellow12512.replace(
    "s24 12/512 black",
    "s24 12/512 onyx black"
  );
  const fixJadeGreen12512 = fixOnyxBlack12512.replace(
    "s24 12/512 green",
    "s24 12/512 jade green"
  );
  const fixSandstoneOrange12512 = fixJadeGreen12512.replace(
    "s24 12/512 orange",
    "s24 12/512 sandstone orange"
  );
  const fixSapphireBlue12512 = fixSandstoneOrange12512.replace(
    "s24 12/512 blue",
    "s24 12/512 sapphire blue"
  );

  const fixMarbleGrayPlus12256 = fixSapphireBlue12512.replace(
    "s24+ 12/256 gray",
    "s24+ 12/256 marble gray"
  );
  const fixCobaltVioletPlus12256 = fixMarbleGrayPlus12256.replace(
    "s24+ 12/256 violet",
    "s24+ 12/256 cobalt violet"
  );
  const fixAmberYellowPlus12256 = fixCobaltVioletPlus12256.replace(
    "s24+ 12/256 yellow",
    "s24+ 12/256 amber yellow"
  );
  const fixOnyxBlackPlus12256 = fixAmberYellowPlus12256.replace(
    "s24+ 12/256 black",
    "s24+ 12/256 onyx black"
  );
  const fixJadeGreenPlus12256 = fixOnyxBlackPlus12256.replace(
    "s24+ 12/256 green",
    "s24+ 12/256 jade green"
  );
  const fixSandstoneOrangePlus12256 = fixJadeGreenPlus12256.replace(
    "s24+ 12/256 orange",
    "s24+ 12/256 sandstone orange"
  );
  const fixSapphireBluePlus12256 = fixSandstoneOrangePlus12256.replace(
    "s24+ 12/256 blue",
    "s24+ 12/256 sapphire blue"
  );

  const fixMarbleGrayPlus12512 = fixSapphireBluePlus12256.replace(
    "s24+ 12/512 gray",
    "s24+ 12/512 marble gray"
  );
  const fixCobaltVioletPlus12512 = fixMarbleGrayPlus12512.replace(
    "s24+ 12/512 violet",
    "s24+ 12/512 cobalt violet"
  );
  const fixAmberYellowPlus12512 = fixCobaltVioletPlus12512.replace(
    "s24+ 12/512 yellow",
    "s24+ 12/512 amber yellow"
  );
  const fixOnyxBlackPlus12512 = fixAmberYellowPlus12512.replace(
    "s24+ 12/512 black",
    "s24+ 12/512 onyx black"
  );
  const fixJadeGreenPlus12512 = fixOnyxBlackPlus12512.replace(
    "s24+ 12/512 green",
    "s24+ 12/512 jade green"
  );
  const fixSandstoneOrangePlus12512 = fixJadeGreenPlus12512.replace(
    "s24+ 12/512 orange",
    "s24+ 12/512 sandstone orange"
  );
  const fixSapphireBluePlus12512 = fixSandstoneOrangePlus12512.replace(
    "s24+ 12/512 blue",
    "s24+ 12/512 sapphire blue"
  );

  const fixZFlip5 = fixSapphireBluePlus12512.replace("z flip5", "z flip 5");
  const fixBeige = fixZFlip5.replace("beigie", "beige");
  const fixS95g = fixBeige.replace("tab s9 5g 8/128", "tab s9 8/128 lte");
  const fixOrange = fixS95g.replace("orange beige", "orange");
  const fixGray = fixOrange.replace("green gray", "gray");
  const fixTabs9Plus = fixGray.replace("s9 +", "s9+");
  const fixTabs9FE = fixTabs9Plus.replace("fe +", "fe+");
  const fixMM = fixTabs9FE.replace("mm", "");
  const fixBlackBlue = fixMM.replace("black blue", "blue/black");
  const fixIceBlue = fixBlackBlue.replace("ice blue", "iceblue");
  const fixLavender = fixIceBlue.replace("lavander", "lavender");
  const fixZFold5 = fixLavender.replace("z fold5", "z fold 5");
  const fix13C = fixZFold5.replace("13с", "13c");
  
  const fixA256128 = fix13C.replace("a25 6/128 black", "a25 6/128 blue/black");
  const fixA258128 = fixA256128.replace("a25 8/128 black", "a25 8/128 blue/black");
  const fixF258256 = fixA258128.replace("a25 8/256 black", "a25 8/256 blue/black");

  const fixS248128 = fixF258256.replace("s24 8/128 yellow", "s24 8/128 amber yellow");
  const fixS248256 = fixS248128.replace("s24 8/256 yellow", "s24 8/256 amber yellow");
  const fixS248512 = fixS248256.replace("s24 8/512 yellow", "s24 8/512 amber yellow");
  const fixS2412256 = fixS248512.replace("s24 12/256 yellow", "s24 12/256 amber yellow");

  const fixZFold5121 = fixS2412256.replace("z fold 5 12/1tb iceblue", "	z fold 5 12/1tb icy blue");
  const fixZFold512512 = fixZFold5121.replace("z fold 5 12/512 iceblue", "	z fold 5 12/512 icy blue");
  const fixZFold12256 = fixZFold512512.replace("z fold 5 12/256 iceblue", "	z fold 5 12/256 icy blue");

  const removeLightGreen = fixZFold12256.replace("light green", "green");
  const removeLightViolet = removeLightGreen.replace("light violet", "violet");

  const fixBlueBlack = removeLightViolet.replace("blue black", "blue/black");


  return fixBlueBlack.replace("s24 8/128 black", "s24 8/128 onyx black");
};
