import React, { useState } from "react";
import {
  baseFix,
  baseFixArti,
  baseFixBase,
  baseFixElectrozon,
  baseFixF51,
  baseFixGarmin,
  baseFixHi,
  baseFixMiHonor,
  baseFixNarod,
  baseFixRacmag,
  baseFixReSale,
  baseFixRPTrade,
  baseFixS5,
  baseFixSuperPrice,
  baseFixTagir,
  baseFixVsemi,
} from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import { newPrice } from "../../helpers/NewPrice";
import { returnIDApple } from "../../helpers/returnIDApple";
import TableAllPrice from "../CreateAllPriceTable/TableAllPrice";
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
  returnExtraPriceHi,
  returnNameInArrHi,
  returnStockPriceHi,
} from "../Hi/helpers/helpers";
import { returnSamsungHi } from "../Hi/Samsung/samsung";
import style from "../Hi/styles.module.css";
import { returnXiaomiHi } from "../Hi/Xiaomi/xiaomi";
import {
  fixNameMihonor,
  returnExtraPriceMihonor,
  returnNameInArrMihonor,
  returnStockPriceMihonor,
} from "../MiHonor/helpers/helpers";
import {
  returnExtraPriceRacmag,
  returnFixNameRacmag,
  returnNameInArrRacmag,
  returnStockPriceRacmag,
} from "../Racmag/helpers/helpers";
import { returnFixNameRPTrade } from "../RPTrade/helpers/helpers";
import {
  fixNameS5,
  returnExtraPriceS5,
  returnNameInArrS5,
  returnStockPriceS5,
} from "../S5/helpers/helpers";
import { fixNameSuperPrice } from "../SuperPrice/helpers/helpers";
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
import { returnFixNameElectrozon } from "../Electrozon/helpers/helpers";
import {
  returnFixNameArti,
  returnNameArti,
  returnStockPriceArti,
} from "../Arti/helpers/helpers";
import { returnCategoryArti } from "../Arti/category/Category";
import {
  returnExtraPriceReSale,
  returnFixNameReSale,
  returnNameReSale,
  returnStockPriceReSale,
} from "../ReSale/helpers/helpers";
import {
  fixNameTagir,
  returnNameTagir,
  returnStockPriceTagir,
} from "../Tagir/helpers/helpers";
import {
  fixNameNarod,
  returnNameNarod,
  returnStockPriceNarod,
} from "../Narod/helpers/helpers";
import { returnNameF51 } from "../F51/helpers/helpers";
import { returnFixNameBase } from "../Base/helpers/helpers";
import {
  returnExtraPriceOther,
  returnFixNameOther,
  returnNameInArrOther,
  returnStockPriceOther,
} from "../Other/helpers/helpers";

const AllPrice = ({
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
        newPrice(superprice.name, superprice.price) &&
        superprice.price &&
        allPriceArr.push({
          id: returnIDApple(fixNameSuperPrice(superprice.name)),
          name: fixNameSuperPrice(superprice.name),
          extraPrice: newPrice(
            fixNameSuperPrice(superprice.name),
            superprice.price
          ),
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
        returnExtraPriceVseMi(vsemi.name) &&
        returnStockPriceVseMi(vsemi.name) &&
        allPriceArr.push({
          id: returnIDApple(returnNameInArrVseMi(fixNameVseMi(vsemi.name))),
          name: returnNameInArrVseMi(fixNameVseMi(vsemi.name)),
          extraPrice: returnExtraPriceVseMi(fixNameVseMi(vsemi.name)),
          provider: "VseMi",
        })
      );
    }
  });

  dataUnimtrn.map((unimtrn) => {
    if (
      unimtrn.Товар &&
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
        id: returnIDApple(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn))),
        name: returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn)),
        extraPrice: newPrice(
          unimtrn.Товар,
          unimtrn.Стоимость || unimtrn.Cтоимость
        ),
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
        returnExtraPriceHi(hi.name) &&
        returnStockPriceHi(hi.name) &&
        allPriceArr.push({
          id: returnIDApple(fixNameHi(hi.name)),
          name: returnNameInArrHi(fixNameHi(hi.name)),
          extraPrice: returnExtraPriceHi(hi.name),
          stockPrice: returnStockPriceHi(hi.name),
          provider: "Hi",
        })
      );
    }
  });

  dataMihonor.map((mihonor) => {
    baseFixMiHonor(mihonor) &&
      returnStockPriceMihonor(fixNameMihonor(mihonor.name));
    baseFixMiHonor(mihonor) &&
      returnExtraPriceMihonor(fixNameMihonor(mihonor.name));
    if (
      mihonor.name &&
      typeof mihonor.name === "string" &&
      baseFixMiHonor(mihonor) &&
      isOpen
    ) {
      return (
        returnExtraPriceMihonor(mihonor.name) &&
        returnStockPriceMihonor(mihonor.name) &&
        allPriceArr.push({
          id: returnIDApple(
            returnNameInArrMihonor(fixNameMihonor(mihonor.name))
          ),
          name: returnNameInArrMihonor(fixNameMihonor(mihonor.name)),
          extraPrice: returnExtraPriceMihonor(fixNameMihonor(mihonor.name)),
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
        returnExtraPriceGarmin(garmin.name) &&
        returnStockPriceGarmin(garmin.name) &&
        allPriceArr.push({
          id: returnIDApple(
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
        returnIDApple(fixNameS5(S5.name)) !== "No match" &&
        returnExtraPriceS5(S5.name) &&
        returnStockPriceS5(S5.name) &&
        allPriceArr.push({
          id: returnIDApple(returnNameInArrS5(fixNameS5(S5.name))),
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
        returnIDApple(returnFixNameRPTrade(rptrade.name)) !== "No match" &&
        rptrade.price &&
        allPriceArr.push({
          id: returnIDApple(returnFixNameRPTrade(rptrade.name)),
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
        returnIDApple(returnFixNameRacmag(racmag.name)) !== "No match" &&
        returnStockPriceRacmag(racmag.name) &&
        allPriceArr.push({
          id: returnIDApple(
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
        returnIDApple(returnFixNameArti(arti.name)) !== "No match" &&
        returnStockPriceArti(arti.name) &&
        returnCategoryArti(arti.name) &&
        allPriceArr.push({
          id: returnIDApple(returnNameArti(returnFixNameArti(arti.name))),
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
        returnIDApple(returnFixNameElectrozon(electrozon.name)) !==
          "No match" &&
        electrozon.price &&
        allPriceArr.push({
          id: returnIDApple(returnFixNameElectrozon(electrozon.name)),
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
        returnIDApple(returnFixNameReSale(resale.name)) !== "No match" &&
        returnExtraPriceReSale(resale.name) &&
        returnStockPriceReSale(resale.name) &&
        returnStockPriceReSale(returnFixNameReSale(resale.name)).indexOf("А") ==
          -1 &&
        returnStockPriceReSale(returnFixNameReSale(resale.name)).indexOf(
          "00"
        ) != -1 &&
        allPriceArr.push({
          id: returnIDApple(returnNameReSale(returnFixNameReSale(resale.name))),
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
        returnIDApple(fixNameTagir(tagir.name)) !== "No match" &&
        returnStockPriceTagir(tagir.name) &&
        allPriceArr.push({
          id: returnIDApple(returnNameTagir(fixNameTagir(tagir.name))),
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
        returnIDApple(fixNameNarod(narod.name)) !== "No match" &&
        returnStockPriceNarod(narod.name) &&
        allPriceArr.push({
          id: returnIDApple(returnNameNarod(fixNameNarod(narod.name))),
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
        returnIDApple(returnNameF51(f51.name)) !== "No match" &&
        f51.price &&
        allPriceArr.push({
          id: returnIDApple(returnNameF51(f51.name)),
          name: returnNameF51(f51.name),
          extraPrice: f51.price,
          stockPrice: f51.price,
          provider: "F51",
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
        returnIDApple(returnFixNameBase(base.name)) !== "No match" &&
        base.price &&
        baseFixBase(base) &&
        allPriceArr.push({
          id: returnIDApple(returnFixNameBase(base.name)),
          name: returnFixNameBase(base.name),
          extraPrice: base.extra,
          stockPrice: base.stock,
          provider: "База",
        })
      );
    }
  });

  otherData.map((other) => {
    returnStockPriceOther(returnFixNameOther(other.name));
    returnExtraPriceOther(returnFixNameOther(other.name));
    if (other.name && typeof other.name === "string" && isOpen) {
      return (
        returnIDApple(returnFixNameOther(other.name)) !== "No match" &&
        returnStockPriceOther(other.name) &&
        allPriceArr.push({
          id: returnIDApple(
            returnNameInArrOther(returnFixNameOther(other.name))
          ),
          name: returnNameInArrOther(returnFixNameOther(other.name)),
          extraPrice: returnExtraPriceOther(returnFixNameOther(other.name)),
          stockPrice: returnStockPriceOther(returnFixNameOther(other.name)),
          provider: "Разное",
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
            {isOpen ? "All Price Для Лехи ▲" : "All Price Для Лехи ▼"}
          </span>
        )}
      </div>
      {isOpen && <TableAllPrice allPriceArr={allPriceArr} />}
    </div>
  );
};

export default AllPrice;
