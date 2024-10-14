import React, { useState } from "react";
import {
  baseFix,
  baseFixElectrozon,
  baseFixGarmin,
  baseFixHi,
  baseFixMiHonor,
  baseFixRacmag,
  baseFixRPTrade,
  baseFixS5,
  baseFixSuperPrice,
  baseFixVsemi,
} from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import { newPrice } from "../../helpers/NewPrice";
import { returnIDApple } from "../../helpers/returnIDApple";
import TableAllPrice from "../CreateAllPriceTable/TableAllPrice";
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
import { fixNameSuperPrice } from "../SuperPrice/helpers/helpers";
import { returnApple } from "../Unimtrn/Apple/apple";
import { returnDyson } from "../Unimtrn/Dyson/dyson";
import { returnGameConsole } from "../Unimtrn/GameConsole/gameConsole";
import { fixNameUnimtrn } from "../Unimtrn/helpers/helpers";
import { returnOtherProduct } from "../Unimtrn/OtherProduct/otherProduct";
import { returnSamsung } from "../Unimtrn/Samsung/samsung";
import {
  fixNameVseMi,
  returnExtraPriceVseMi,
  returnNameInArrVseMi,
  returnStockPriceVseMi,
} from "../VseMi/helpers/helpers";
import {
  fixNameMihonor,
  returnExtraPriceMihonor,
  returnNameInArrMihonor,
  returnStockPriceMihonor,
} from "../MiHonor/helpers/helpers";
import {
  fixNameGarmin,
  returnExtraPriceGarmin,
  returnFixNameProductGarmin,
  returnStockPriceGarmin,
} from "../Garmin/helpers/helpers";
import { returnXiaomi } from "../Unimtrn/Xiaomi/xiaomi";
import {
  fixNameS5,
  returnExtraPriceS5,
  returnNameInArrS5,
  returnStockPriceS5,
} from "../S5/helpers/helpers";
import { returnFixNameRPTrade } from "../RPTrade/helpers/helpers";
import {
  returnExtraPriceRacmag,
  returnFixNameRacmag,
  returnNameInArrRacmag,
  returnStockPriceRacmag,
} from "../Racmag/helpers/helpers";
import { returnFixNameElectrozon } from "../Electrozon/helpers/helpers";

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
        returnIDApple(fixNameSuperPrice(superprice.name)) !== "No match" &&
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
        returnIDApple(fixNameVseMi(vsemi.name)) !== "No match" &&
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
      returnIDApple(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn))) !==
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
        returnIDApple(fixNameHi(hi.name)) !== "No match" &&
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
        returnIDApple(fixNameMihonor(mihonor.name)) !== "No match" &&
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
        returnIDApple(fixNameGarmin(garmin.name)) !== "No match" &&
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
