import React, { useState } from "react";
import { baseFixHi } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { returnAppleHi } from "./Apple/apple";
import { returnDysonHi } from "./Dyson/dyson";
import { returnGarminHi } from "./Garmin/garmin";
import { returnGoogleHi } from "./Google/google";
import {
  fixNameHi,
  returnNameInArrHi,
  returnStockPriceHi
} from "./helpers/helpers";
import { returnSamsungHi } from "./Samsung/samsung";
import style from "./styles.module.css";
import { returnXiaomiHi } from "./Xiaomi/xiaomi";

const IndexHi = ({ el, hi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  hi.map((hi) => {
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
        returnIDSamsung(fixNameHi(hi.name)) !== 'No match' &&
        returnStockPriceHi(hi.name) &&
        resultArr.push({
          id: returnIDSamsung(fixNameHi(hi.name)),
          name: returnNameInArrHi(fixNameHi(hi.name)),
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
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Hi (Сема) ▲" : "Hi (Сема) ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div className={style.row}>
          <BasicTable resultArr={resultArr} />
        </div>
      )}
    </div>
  );
};

export default IndexHi;