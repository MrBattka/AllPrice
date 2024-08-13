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
