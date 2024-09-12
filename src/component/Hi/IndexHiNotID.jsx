import React, { useState } from "react";
import { baseFixHi } from "../../helpers/baseFix";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";
import { returnAppleHi } from "./Apple/apple";
import { returnDysonHi } from "./Dyson/dyson";
import { returnGarminHi } from "./Garmin/garmin";
import { returnGoogleHi } from "./Google/google";
import {
  fixNameHi,
  returnExtraPriceHi,
  returnNameInArrHi,
  returnStockPriceHi
} from "./helpers/helpers";
import { returnSamsungHi } from "./Samsung/samsung";
import style from "./styles.module.css";
import { returnXiaomiHi } from "./Xiaomi/xiaomi";

const IndexHiNotID = ({ el, hi, main }) => {
  const [isOpenNotID, setIsOpenNotID] = useState(false);
  const resultArr = [];

  hi.map((hi) => {
    if (
      hi.name &&
      typeof hi.name === "string" &&
      baseFixHi(hi) &&
      isOpenNotID &&
      (returnAppleHi(hi.name) ||
        returnSamsungHi(hi.name) ||
        returnXiaomiHi(hi.name) ||
        returnGoogleHi(hi.name) ||
        returnGarminHi(hi.name) ||
        returnDysonHi(hi.name))
    ) {
      return (
        returnIDApple(fixNameHi(hi.name)) === "No match" &&
        returnExtraPriceHi(hi.name) &&
        returnStockPriceHi(hi.name) &&
        resultArr.push({
          id: returnIDApple(fixNameHi(hi.name)),
          name: returnNameInArrHi(fixNameHi(hi.name)),
          extraPrice: returnExtraPriceHi(hi.name),
          stockPrice: returnStockPriceHi(hi.name),
          provider: "Hi",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span
            className={style.title}
            onClick={() => setIsOpenNotID(!isOpenNotID)}
          >
            {isOpenNotID ? "Hi (Сема) Not ID ▲" : "Hi (Сема) Not ID ▼"}
          </span>
        )}
      </div>
      {isOpenNotID && (
        <div className={style.row}>
          <BasicTable resultArr={resultArr} />
        </div>
      )}
    </div>
  );
};

export default IndexHiNotID;
