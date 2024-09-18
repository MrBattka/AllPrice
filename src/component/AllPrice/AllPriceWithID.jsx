import React, { useState } from "react";
import {
  baseFix,
  baseFixGarmin,
  baseFixHi,
  baseFixMiHonor,
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
import { fixNameGarmin, returnExtraPriceGarmin, returnFixNameProductGarmin, returnStockPriceGarmin } from "../Garmin/helpers/helpers";
import { returnXiaomi } from "../Unimtrn/Xiaomi/xiaomi";

const AllPriceWithID = ({
  dataSuperprice,
  dataVsemi,
  dataUnimtrn,
  dataHi,
  dataMihonor,
  dataGarmin
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
        returnIDApple(fixNameHi(hi.name)) !== 'No match' &&
        returnExtraPriceHi(hi.name) &&
        returnStockPriceHi(hi.name) &&
        allPriceArr.push({
          id: returnIDApple(fixNameHi(hi.name)),
          name: returnNameInArrHi(fixNameHi(hi.name)),
          extraPrice: returnExtraPriceHi(hi.name),
          stockPrice: returnStockPriceHi(hi.name),
          provider: "Hi"
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
        returnIDApple(fixNameGarmin(garmin.name)) !== 'No match' &&
        returnExtraPriceGarmin(garmin.name) &&
        returnStockPriceGarmin(garmin.name) &&
        allPriceArr.push({
          id: returnIDApple(returnFixNameProductGarmin(fixNameGarmin(garmin.name))),
          name: returnFixNameProductGarmin(fixNameGarmin(garmin.name)),
          extraPrice: returnExtraPriceGarmin(fixNameGarmin(garmin.name)),
          stockPrice: returnStockPriceGarmin(fixNameGarmin(garmin.name)),
          provider: "Garmin",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {dataSuperprice?.length > 1 && (
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
