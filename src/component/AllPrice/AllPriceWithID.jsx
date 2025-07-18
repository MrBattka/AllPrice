import { useState } from "react";
import {
  baseFix,
  baseFixArti,
  baseFixBase,
  baseFixBigAp,
  baseFixBoltun,
  baseFixBonus,
  baseFixDiscount,
  baseFixElectrozon,
  baseFixF51,
  baseFixGarmin,
  baseFixHi,
  baseFixInfinity,
  baseFixL27,
  baseFixLikemob,
  baseFixLowPrice,
  baseFixMiHonor,
  baseFixMiOpts,
  baseFixMTA,
  baseFixNarod,
  baseFixOther,
  baseFixRacmag,
  baseFixReSale,
  baseFixRootOpt,
  baseFixRPTrade,
  baseFixS5,
  baseFixSunrise,
  baseFixSuperPrice,
  baseFixTagir,
  baseFixTrub,
  baseFixVsemi,
} from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import { newPrice } from "../../helpers/NewPrice";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import {
  returnFixNameA18,
  returnNameInArrA18,
  returnStockPriceA18,
} from "../A18/helpers/helpers";
import { returnCategoryArti } from "../Arti/category/Category";
import {
  returnFixNameArti,
  returnNameArti,
  returnStockPriceArti,
} from "../Arti/helpers/helpers";
import { returnFixNameBase } from "../Base/helpers/helpers";
import {
  returnFixNameBigAp,
  returnNameInArrBigAp,
  returnStockPriceBigAp,
} from "../BigAp/helpers/helpers";
import { returnFixNameBonus } from "../BonusOPT/helpers/helpers";
import TableAllPrice from "../CreateAllPriceTable/TableAllPrice";
import {
  returnFixNameDiscount,
  returnNameInArrDiscount,
  returnStockPriceDiscount,
} from "../Discount/helpers/helpers";
import { returnFixNameElectrozon } from "../Electrozon/helpers/helpers";
import { returnNameF51 } from "../F51/helpers/helpers";
import {
  fixNameGarmin,
  returnExtraPriceGarmin,
  returnFixNameProductGarmin,
  returnStockPriceGarmin,
} from "../Garmin/helpers/helpers";
import { returnAppleHi } from "../Hi/Apple/apple";
import { returnDysonHi } from "../Hi/Dyson/dyson";
import { returnGarminHi } from "../Hi/Garmin/garmin";
import { returnGoogleHi } from "../Hi/Google/google";
import {
  fixNameHi,
  returnNameInArrHi,
  returnStockPriceHi,
} from "../Hi/helpers/helpers";
import { returnSamsungHi } from "../Hi/Samsung/samsung";
import { returnXiaomiHi } from "../Hi/Xiaomi/xiaomi";
import {
  fixNameInfinity,
  returnNameInArrInfinity,
  returnStockPriceInfinity,
} from "../Infinity/helpers/helpers";
import {
  returnFixNameL27,
  returnNameInArrL27,
  returnStockPriceL27,
} from "../L27/helpers/helpers";
import {
  returnFixNameLikemob,
  returnNameInArrLikemob,
  returnStockPriceLikemob,
} from "../Likemob/helpers/helpers";
import {
  fixNameLowPrice,
  returnNameInArrLowPrice,
  returnStockPriceLowPrice,
} from "../LowPriceApple/helpers/helpers";
import {
  fixNameMihonor,
  returnExtraPriceMihonor,
  returnNameInArrMihonor,
  returnStockPriceMihonor,
} from "../MiHonor/helpers/helpers";
import {
  fixNameMiOpts,
  returnExtraPriceMiOpts,
  returnNameInArrMiOpts,
  returnStockPriceMiOpts,
} from "../MiOpts/helpers/helpers";
import {
  returnFixNameMTA,
  returnNameInArrMTA,
  returnStockPriceMTA,
} from "../MTA/helpers/helpers";
import {
  fixNameNarod,
  returnNameNarod,
  returnStockPriceNarod,
} from "../Narod/helpers/helpers";
import {
  returnExtraPriceOther,
  returnFixNameOther,
  returnNameInArrOther,
  returnStockPriceOther,
} from "../Other/helpers/helpers";
import {
  returnExtraPriceRacmag,
  returnFixNameRacmag,
  returnNameInArrRacmag,
  returnStockPriceRacmag,
} from "../Racmag/helpers/helpers";
import {
  returnExtraPriceReSale,
  returnFixNameReSale,
  returnNameReSale,
  returnStockPriceReSale,
} from "../ReSale/helpers/helpers";
import { returnFixNameRootOpt } from "../RootOPT/helpers/helpers";
import { returnFixNameRPTrade } from "../RPTrade/helpers/helpers";
import {
  fixNameS5,
  returnExtraPriceS5,
  returnNameInArrS5,
  returnStockPriceS5,
} from "../S5/helpers/helpers";
import style from "../styles.module.css";
import {
  returnFixNameSunrise,
  returnNameInArrSunrise,
  returnStockPriceSunrise,
} from "../Sunrise/helpers/helpers";
import { fixNameSuperPrice } from "../SuperPrice/helpers/helpers";
import {
  fixNameTagir,
  returnNameTagir,
  returnStockPriceTagir,
} from "../Tagir/helpers/helpers";
import {
  fixNameTrub,
  returnNameInArrTrub,
  returnStockPriceTrub,
} from "../Trub/helpers/helpers";
import { returnApple } from "../Unimtrn/Apple/apple";
import { returnDyson } from "../Unimtrn/Dyson/dyson";
import { returnGameConsole } from "../Unimtrn/GameConsole/gameConsole";
import { fixNameUnimtrn } from "../Unimtrn/helpers/helpers";
import { returnOtherProduct } from "../Unimtrn/OtherProduct/otherProduct";
import { returnSamsung } from "../Unimtrn/Samsung/samsung";
import { returnXiaomi } from "../Unimtrn/Xiaomi/xiaomi";
import {
  fixNameVseMi,
  returnExtraPriceVseMi,
  returnNameInArrVseMi,
  returnStockPriceVseMi,
} from "../VseMi/helpers/helpers";
import { returnFixNameBoltun } from "../Boltun/helpers/helpers";
import { returnFixPriceHi } from "../../helpers/fixFlags";

const AllPriceWithID = ({
  dataSuperprice,
  dataVsemi,
  dataUnimtrn,
  dataHi,
  dataMihonor,
  dataGarmin,
  S5Data,
  rptradeData,
  racmagData,
  electrozonData,
  artiData,
  resaleData,
  tagirData,
  narodData,
  f51Data,
  baseData,
  otherData,
  discountData,
  mioptsData,
  lowPriceData,
  l27Data,
  sunriseData,
  infinityData,
  likemobData,
  mtaData,
  bonusData,
  bigApData,
  rootOptData,
  a18Data,
  trubData,
  boltunData
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const allPriceArr = [];

  dataSuperprice.map((superprice) => {
    if (
      superprice.name &&
      typeof superprice.name === "string" &&
      baseFixSuperPrice(superprice) &&
      isOpen
    ) {
      return (
        returnIDSamsung(fixNameSuperPrice(superprice.name)) !== "No match" &&
        newPrice(superprice.name, superprice.price) &&
        superprice.price &&
        allPriceArr.push({
          id: returnIDSamsung(fixNameSuperPrice(superprice.name)),
          name: fixNameSuperPrice(superprice.name),
          stockPrice: superprice.price,
          provider: "SuperPrice",
        })
      );
    }
  });

  dataVsemi.map((vsemi) => {
    baseFixVsemi(vsemi) && returnStockPriceVseMi(fixNameVseMi(vsemi.name));
    baseFixVsemi(vsemi) && returnExtraPriceVseMi(fixNameVseMi(vsemi.name));
    if (
      vsemi.name &&
      typeof vsemi.name === "string" &&
      baseFixVsemi(vsemi) &&
      isOpen
    ) {
      return (
        returnIDSamsung(fixNameVseMi(vsemi.name)) !== "No match" &&
        returnExtraPriceVseMi(vsemi.name) &&
        returnStockPriceVseMi(vsemi.name) &&
        allPriceArr.push({
          id: returnIDSamsung(returnNameInArrVseMi(fixNameVseMi(vsemi.name))),
          name: returnNameInArrVseMi(fixNameVseMi(vsemi.name)),
          stockPrice: returnStockPriceVseMi(fixNameVseMi(vsemi.name)),
          provider: "VseMi",
        })
      );
    }
  });

  dataUnimtrn.map((unimtrn) => {
    if (
      unimtrn.Модификация &&
      returnIDSamsung(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn))) !==
        "No match" &&
      isOpen &&
      baseFix(unimtrn) &&
      (returnApple(unimtrn) ||
        returnDyson(unimtrn) ||
        returnSamsung(unimtrn) ||
        returnXiaomi(unimtrn) ||
        returnGameConsole(unimtrn) ||
        returnOtherProduct(unimtrn))
    ) {
      allPriceArr.push({
        id: returnIDSamsung(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn))),
        name: returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn)),
        stockPrice: unimtrn.Стоимость || unimtrn.Cтоимость || unimtrn.Цена,
        provider: "Метреон",
      });
    }
  });

  dataHi.map((hi) => {
    if (
      hi.name &&
      typeof hi.name === "string" &&
      baseFixHi(hi) &&
      isOpen &&
      (returnAppleHi(hi.name) ||
        returnSamsungHi(hi.name) ||
        returnXiaomiHi(hi.name) ||
        returnGoogleHi(hi.name) ||
        returnGarminHi(hi.name) ||
        returnDysonHi(hi.name))
    ) {
      return (
        returnIDSamsung(fixNameHi(hi.name)) !== "No match" &&
        returnStockPriceHi(fixNameHi(hi.name)) &&
        returnStockPriceHi(fixNameHi(hi.name)).indexOf("00") !== -1 &&
        allPriceArr.push({
          id: returnIDSamsung(fixNameHi(hi.name)),
          name: returnFixPriceHi(returnNameInArrHi(fixNameHi(hi.name))),
          stockPrice: returnStockPriceHi(fixNameHi(hi.name)),
          provider: "Hi",
        })
      );
    }
  });

  dataMihonor.map((mihonor) => {
    if (
      mihonor.name &&
      typeof mihonor.name === "string" &&
      mihonor.name.indexOf("₽") !== -1 &&
      baseFixMiHonor(mihonor) &&
      isOpen
    ) {
      return (
        mihonor.name.indexOf("₽") !== -1 &&
        returnIDSamsung(fixNameMihonor(mihonor.name)) !== "No match" &&
        returnExtraPriceMihonor(mihonor.name) &&
        returnStockPriceMihonor(mihonor.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrMihonor(fixNameMihonor(mihonor.name))
          ),
          name: returnNameInArrMihonor(fixNameMihonor(mihonor.name)),
          stockPrice: returnStockPriceMihonor(fixNameMihonor(mihonor.name)),
          provider: "MiHonor",
        })
      );
    }
  });

  dataGarmin.map((garmin) => {
    baseFixGarmin(garmin) && returnStockPriceGarmin(fixNameGarmin(garmin.name));
    baseFixGarmin(garmin) && returnExtraPriceGarmin(fixNameGarmin(garmin.name));
    if (
      garmin.name &&
      typeof garmin.name === "string" &&
      baseFixGarmin(garmin) &&
      isOpen
    ) {
      return (
        returnIDSamsung(fixNameGarmin(garmin.name)) !== "No match" &&
        returnExtraPriceGarmin(garmin.name) &&
        returnStockPriceGarmin(garmin.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnFixNameProductGarmin(fixNameGarmin(garmin.name))
          ),
          name: returnFixNameProductGarmin(fixNameGarmin(garmin.name)),
          extraPrice: returnExtraPriceGarmin(fixNameGarmin(garmin.name)),
          stockPrice: returnStockPriceGarmin(fixNameGarmin(garmin.name)),
          provider: "Garmin",
        })
      );
    }
  });

  S5Data.map((S5) => {
    baseFixS5(S5) && returnStockPriceS5(fixNameS5(S5.name));
    baseFixS5(S5) && returnExtraPriceS5(fixNameS5(S5.name));
    if (S5.name && typeof S5.name === "string" && baseFixS5(S5) && isOpen) {
      return (
        returnIDSamsung(fixNameS5(S5.name)) !== "No match" &&
        returnExtraPriceS5(S5.name) &&
        returnStockPriceS5(S5.name) &&
        allPriceArr.push({
          id: returnIDSamsung(returnNameInArrS5(fixNameS5(S5.name))),
          name: returnNameInArrS5(fixNameS5(S5.name)),
          extraPrice: returnExtraPriceS5(fixNameS5(S5.name)),
          stockPrice: returnStockPriceS5(fixNameS5(S5.name)),
          provider: "S5",
        })
      );
    }
  });

  rptradeData.map((rptrade) => {
    if (
      rptrade.name &&
      typeof rptrade.name === "string" &&
      baseFixRPTrade(rptrade) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameRPTrade(rptrade.name)) !== "No match" &&
        rptrade.price &&
        allPriceArr.push({
          id: returnIDSamsung(returnFixNameRPTrade(rptrade.name)),
          name: returnFixNameRPTrade(rptrade.name),
          extraPrice: newPrice(rptrade.name, rptrade.price),
          stockPrice: rptrade.price,
          provider: "RPTrade",
        })
      );
    }
  });

  racmagData.map((racmag) => {
    baseFixRacmag(racmag) &&
      returnStockPriceRacmag(returnFixNameRacmag(racmag.name));
    baseFixRacmag(racmag) &&
      returnExtraPriceRacmag(returnFixNameRacmag(racmag.name));
    if (
      racmag.name &&
      typeof racmag.name === "string" &&
      baseFixRacmag(racmag) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameRacmag(racmag.name)) !== "No match" &&
        returnStockPriceRacmag(racmag.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrRacmag(returnFixNameRacmag(racmag.name))
          ),
          name: returnNameInArrRacmag(returnFixNameRacmag(racmag.name)),
          extraPrice: returnExtraPriceRacmag(returnFixNameRacmag(racmag.name)),
          stockPrice: returnStockPriceRacmag(returnFixNameRacmag(racmag.name)),
          provider: "Рацмаг",
        })
      );
    }
  });

  artiData.map((arti) => {
    baseFixArti(arti) && returnStockPriceArti(returnFixNameArti(arti.name));
    if (
      arti.name &&
      typeof arti.name === "string" &&
      baseFixArti(arti) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameArti(arti.name)) !== "No match" &&
        returnStockPriceArti(arti.name) &&
        returnCategoryArti(arti.name) &&
        allPriceArr.push({
          id: returnIDSamsung(returnNameArti(returnFixNameArti(arti.name))),
          name: returnNameArti(returnFixNameArti(arti.name)),
          extraPrice: returnStockPriceArti(returnFixNameArti(arti.name)),
          stockPrice: returnStockPriceArti(returnFixNameArti(arti.name)),
          provider: "Arti",
        })
      );
    }
  });

  electrozonData.map((electrozon) => {
    if (
      electrozon.name &&
      typeof electrozon.name === "string" &&
      baseFixElectrozon(electrozon) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameElectrozon(electrozon.name)) !==
          "No match" &&
        electrozon.price &&
        allPriceArr.push({
          id: returnIDSamsung(returnFixNameElectrozon(electrozon.name)),
          name: returnFixNameElectrozon(electrozon.name),
          extraPrice: newPrice(electrozon.name, electrozon.price),
          stockPrice: electrozon.price,
          provider: "Electrozon",
        })
      );
    }
  });

  resaleData.map((resale) => {
    baseFixReSale(resale) &&
      returnStockPriceReSale(returnFixNameReSale(resale.name));
    if (
      resale.name &&
      typeof resale.name === "string" &&
      baseFixReSale(resale) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameReSale(resale.name)) !== "No match" &&
        returnExtraPriceReSale(resale.name) &&
        returnStockPriceReSale(resale.name) &&
        returnStockPriceReSale(returnFixNameReSale(resale.name)).indexOf("А") ==
          -1 &&
        returnStockPriceReSale(returnFixNameReSale(resale.name)).indexOf(
          "00"
        ) != -1 &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameReSale(returnFixNameReSale(resale.name))
          ),
          name: returnNameReSale(returnFixNameReSale(resale.name)),
          extraPrice: returnExtraPriceReSale(returnFixNameReSale(resale.name)),
          stockPrice: returnStockPriceReSale(returnFixNameReSale(resale.name)),
          provider: "Re:Sale",
        })
      );
    }
  });

  tagirData.map((tagir) => {
    baseFixTagir(tagir) && returnStockPriceTagir(fixNameTagir(tagir.name));
    if (
      tagir.name &&
      typeof tagir.name === "string" &&
      baseFixTagir(tagir) &&
      isOpen
    ) {
      return (
        returnIDSamsung(fixNameTagir(tagir.name)) !== "No match" &&
        returnStockPriceTagir(tagir.name) &&
        allPriceArr.push({
          id: returnIDSamsung(returnNameTagir(fixNameTagir(tagir.name))),
          name: returnNameTagir(fixNameTagir(tagir.name)),
          extraPrice: returnStockPriceTagir(fixNameTagir(tagir.name)),
          stockPrice: returnStockPriceTagir(fixNameTagir(tagir.name)),
          provider: "Тагир",
        })
      );
    }
  });

  narodData.map((narod) => {
    baseFixNarod(narod) && returnStockPriceNarod(fixNameNarod(narod.name));
    if (
      narod.name &&
      typeof narod.name === "string" &&
      baseFixNarod(narod) &&
      isOpen
    ) {
      return (
        returnIDSamsung(fixNameNarod(narod.name)) !== "No match" &&
        returnStockPriceNarod(narod.name) &&
        allPriceArr.push({
          id: returnIDSamsung(returnNameNarod(fixNameNarod(narod.name))),
          name: returnNameNarod(fixNameNarod(narod.name)),
          extraPrice: returnStockPriceNarod(fixNameNarod(narod.name)),
          stockPrice: returnStockPriceNarod(fixNameNarod(narod.name)),
          provider: "Народ",
        })
      );
    }
  });

  f51Data.map((f51) => {
    baseFixF51(f51) && returnNameF51(f51.name);
    if (f51.name && typeof f51.name === "string" && baseFixF51(f51) && isOpen) {
      return (
        returnIDSamsung(returnNameF51(f51.name)) !== "No match" &&
        f51.price &&
        allPriceArr.push({
          id: returnIDSamsung(returnNameF51(f51.name)),
          name: returnNameF51(f51.name),
          extraPrice: f51.price,
          stockPrice: f51.price,
          provider: "F51",
        })
      );
    }
  });

  discountData.map((discount) => {
    baseFixDiscount(discount) &&
      returnStockPriceDiscount(returnFixNameDiscount(discount.name));
    if (
      discount.name &&
      typeof discount.name === "string" &&
      baseFixDiscount(discount) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameDiscount(discount.name)) !== "No match" &&
        returnStockPriceDiscount(discount.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrDiscount(returnFixNameDiscount(discount.name))
          ),
          name: returnNameInArrDiscount(returnFixNameDiscount(discount.name)),
          stockPrice: returnStockPriceDiscount(
            returnFixNameDiscount(discount.name)
          ),
          provider: "Discount",
        })
      );
    }
  });

  baseData.map((base) => {
    if (
      base.name &&
      typeof base.name === "string" &&
      isOpen &&
      baseFixBase(base)
    ) {
      return (
        returnIDSamsung(returnFixNameBase(base.name)) !== "No match" &&
        base.price &&
        baseFixBase(base) &&
        allPriceArr.push({
          id: returnIDSamsung(returnFixNameBase(base.name)),
          name: returnFixNameBase(base.name),
          extraPrice: base.extra,
          stockPrice: base.price,
          provider: "База",
        })
      );
    }
  });

  otherData.map((other) => {
    returnStockPriceOther(returnFixNameOther(other.name));
    returnExtraPriceOther(returnFixNameOther(other.name));
    if (
      other.name &&
      typeof other.name === "string" &&
      baseFixOther(other) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameOther(other.name)) !== "No match" &&
        returnStockPriceOther(other.name) &&
        baseFixOther(other) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrOther(returnFixNameOther(other.name))
          ),
          name: returnNameInArrOther(returnFixNameOther(other.name)),
          extraPrice: returnExtraPriceOther(returnFixNameOther(other.name)),
          stockPrice: returnStockPriceOther(returnFixNameOther(other.name)),
          provider: "All",
        })
      );
    }
  });

  mioptsData.map((miopts) => {
    baseFixMiOpts(miopts) && returnStockPriceMiOpts(fixNameMiOpts(miopts.name));
    baseFixMiOpts(miopts) && returnExtraPriceMiOpts(fixNameMiOpts(miopts.name));
    if (
      miopts.name &&
      typeof miopts.name === "string" &&
      baseFixMiOpts(miopts)
    ) {
      return (
        returnIDSamsung(fixNameMiOpts(miopts.name)) !== "No match" &&
        returnExtraPriceMiOpts(miopts.name) &&
        returnStockPriceMiOpts(miopts.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrMiOpts(fixNameMiOpts(miopts.name))
          ),
          name: returnNameInArrMiOpts(fixNameMiOpts(miopts.name)),
          extraPrice: returnExtraPriceMiOpts(fixNameMiOpts(miopts.name)),
          stockPrice: returnStockPriceMiOpts(fixNameMiOpts(miopts.name)),
          provider: "MiOpts",
        })
      );
    }
  });

  lowPriceData.map((lowPrice) => {
    if (
      lowPrice.name &&
      typeof lowPrice.name === "string" &&
      baseFixLowPrice(lowPrice)
    ) {
      return (
        returnIDSamsung(fixNameLowPrice(lowPrice.name)) !== "No match" &&
        returnStockPriceLowPrice(lowPrice.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrLowPrice(fixNameLowPrice(lowPrice.name))
          ),
          name: returnNameInArrLowPrice(fixNameLowPrice(lowPrice.name)),
          stockPrice: returnStockPriceLowPrice(fixNameLowPrice(lowPrice.name)),
          provider: "LowPrice",
        })
      );
    }
  });

  l27Data.map((l27) => {
    baseFixL27(l27) && returnStockPriceL27(returnFixNameL27(l27.name));
    if (
      l27.name &&
      typeof l27.name === "string" &&
      baseFixL27(l27) &&
      returnStockPriceL27(returnFixNameL27(l27.name)).indexOf("00") !== -1 &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameL27(l27.name)) !== "No match" &&
        returnStockPriceL27(l27.name) &&
        allPriceArr.push({
          id: returnIDSamsung(returnNameInArrL27(returnFixNameL27(l27.name))),
          name: returnNameInArrL27(returnFixNameL27(l27.name)),
          stockPrice: returnStockPriceL27(returnFixNameL27(l27.name)),
          provider: "Л27-28",
        })
      );
    }
  });

  sunriseData.map((sunrise) => {
    baseFixSunrise(sunrise) &&
      returnStockPriceSunrise(returnFixNameSunrise(sunrise.name));
    if (
      sunrise.name &&
      typeof sunrise.name === "string" &&
      baseFixSunrise(sunrise) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameSunrise(sunrise.name)) !== "No match" &&
        returnStockPriceSunrise(sunrise.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrSunrise(returnFixNameSunrise(sunrise.name))
          ),
          name: returnNameInArrSunrise(returnFixNameSunrise(sunrise.name)),
          stockPrice: returnStockPriceSunrise(
            returnFixNameSunrise(sunrise.name)
          ),
          provider: "Восход",
        })
      );
    }
  });

  infinityData.map((infinity) => {
    if (
      infinity.name &&
      typeof infinity.name === "string" &&
      baseFixInfinity(infinity)
    ) {
      return (
        returnIDSamsung(fixNameInfinity(infinity.name)) !== "No match" &&
        returnStockPriceInfinity(infinity.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrInfinity(fixNameInfinity(infinity.name))
          ),
          name: returnNameInArrInfinity(fixNameInfinity(infinity.name)),
          stockPrice: returnStockPriceInfinity(fixNameInfinity(infinity.name)),
          provider: "Infinity",
        })
      );
    }
  });

  likemobData.map((likemob) => {
    baseFixLikemob(likemob) &&
      returnStockPriceLikemob(returnFixNameLikemob(likemob.name));
    if (
      likemob.name &&
      typeof likemob.name === "string" &&
      baseFixLikemob(likemob) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameLikemob(likemob.name)) !== "No match" &&
        returnStockPriceLikemob(likemob.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrLikemob(returnFixNameLikemob(likemob.name))
          ),
          name: returnNameInArrLikemob(returnFixNameLikemob(likemob.name)),
          stockPrice: returnStockPriceLikemob(
            returnFixNameLikemob(likemob.name)
          ),
          provider: "Likemob",
        })
      );
    }
  });

  bigApData.map((bigAp) => {
    baseFixBigAp(bigAp) &&
      returnStockPriceBigAp(returnFixNameBigAp(bigAp.name));
    if (
      bigAp.name &&
      typeof bigAp.name === "string" &&
      baseFixBigAp(bigAp) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameBigAp(bigAp.name)) !== "No match" &&
        returnStockPriceBigAp(bigAp.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrBigAp(returnFixNameBigAp(bigAp.name))
          ),
          name: returnNameInArrBigAp(returnFixNameBigAp(bigAp.name)),
          stockPrice: returnStockPriceBigAp(returnFixNameBigAp(bigAp.name)),
          provider: "BigAp",
        })
      );
    }
  });

  mtaData.map((mta) => {
    baseFixMTA(mta) && returnStockPriceMTA(returnFixNameMTA(mta.name));
    if (mta.name && typeof mta.name === "string" && baseFixMTA(mta) && isOpen) {
      return (
        returnIDSamsung(returnFixNameMTA(mta.name)) !== "No match" &&
        returnStockPriceMTA(returnFixNameMTA(mta.name)).indexOf("00") !== -1 &&
        allPriceArr.push({
          id: returnIDSamsung(returnNameInArrMTA(returnFixNameMTA(mta.name))),
          name: returnNameInArrMTA(returnFixNameMTA(mta.name)),
          stockPrice: returnStockPriceMTA(returnFixNameMTA(mta.name)),
          provider: "MTA Store",
        })
      );
    }
  });

  bonusData.map((bonus) => {
    if (
      bonus.name &&
      typeof bonus.name === "string" &&
      baseFixBonus(bonus) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameBonus(bonus.name)) !== "No match" &&
        bonus.price &&
        allPriceArr.push({
          id: returnIDSamsung(returnFixNameBonus(bonus.name)),
          name: returnFixNameBonus(bonus.name),
          stockPrice: bonus.price,
          provider: "БонусОПТ",
        })
      );
    }
  });

  rootOptData.map((rootOpt) => {
    if (
      rootOpt.name &&
      typeof rootOpt.name === "string" &&
      baseFixRootOpt(rootOpt) &&
      rootOpt.price !== "ожидается" &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameRootOpt(rootOpt.name)) !== "No match" &&
        rootOpt.price &&
        allPriceArr.push({
          id: returnIDSamsung(returnFixNameRootOpt(rootOpt.name)),
          name: returnFixNameRootOpt(rootOpt.name),
          stockPrice: rootOpt.price,
          provider: "RootOPT",
        })
      );
    }
  });

  a18Data.map((A18) => {
    // baseFixA18(A18) &&
    returnStockPriceA18(returnFixNameA18(A18.name));
    if (
      A18.name &&
      typeof A18.name === "string" &&
      returnStockPriceA18(returnFixNameA18(A18.name)).indexOf("00") !== -1 &&
      // baseFixA18(A18) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameA18(A18.name)) !== "No match" &&
        returnStockPriceA18(A18.name) &&
        allPriceArr.push({
          id: returnIDSamsung(returnNameInArrA18(returnFixNameA18(A18.name))),
          name: returnNameInArrA18(returnFixNameA18(A18.name)),
          stockPrice: returnStockPriceA18(returnFixNameA18(A18.name)),
          provider: "A18",
        })
      );
    }
  });

  trubData.map((trub) => {
    if (
      trub.name &&
      typeof trub.name === "string" &&
      baseFixTrub(trub) &&
      isOpen &&
      returnStockPriceTrub(fixNameTrub(trub.name)).indexOf("0") != -1
    ) {
      return (
        returnIDSamsung(fixNameTrub(trub.name)) !== "No match" &&
        returnStockPriceTrub(trub.name) &&
        allPriceArr.push({
          id: returnIDSamsung(returnNameInArrTrub(fixNameTrub(trub.name))),
          name: returnNameInArrTrub(fixNameTrub(trub.name)),
          stockPrice: returnStockPriceTrub(fixNameTrub(trub.name)),
          provider: " Трубный",
        })
      );
    }
  });

  boltunData.map((boltun) => {
    if (
      boltun.name &&
      typeof boltun.name === "string" &&
      baseFixBoltun(boltun) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameBoltun(boltun.name)) !== "No match" &&
        boltun.price &&
        allPriceArr.push({
          id: returnIDSamsung(returnFixNameBoltun(boltun.name)),
          name: returnFixNameBoltun(boltun.name),
          stockPrice: boltun.price,
          provider: "Болтун",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {(dataSuperprice?.length > 2 ||
          dataVsemi?.length > 2 ||
          dataUnimtrn?.length > 2 ||
          dataHi?.length > 2 ||
          dataMihonor?.length > 2 ||
          dataGarmin?.length > 2 ||
          dataGarmin?.length > 2 ||
          S5Data?.length > 2 ||
          rptradeData?.length > 2 ||
          racmagData?.length > 2) && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "All Price Для Сайта ▲" : "All Price Для Сайта ▼"}
          </span>
        )}
      </div>
      {isOpen && <TableAllPrice allPriceArr={allPriceArr} />}
    </div>
  );
};

export default AllPriceWithID;
