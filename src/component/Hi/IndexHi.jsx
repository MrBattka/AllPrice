import React, { useState } from "react";
import { baseFixHiTest } from "../../helpers/baseFix";
import { masterArr } from "../../helpers/masterArr";
import {
    returnExtraPrice,
    returnNameInArr,
    returnStockPrice,
} from "./helpers/helpers";
import BasicTable from "./HiTable";
import style from "./styles.module.css";
import { returnDyson } from "./Dyson/dyson";
import { returnApple } from "./Apple/apple";
import { returnSamsung } from "./Samsung/samsung";
import { returnXiaomi } from "./Xiaomi/xiaomi";
import { returnGoogle } from "./Google/google";
import { returnGarmin } from "./Garmin/garmin";

const IndexHi = ({ el, hi, main }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  hi.map((hi) => {
    if (
      hi.name &&
      typeof hi.name === "string" &&
      baseFixHiTest(hi) &&
      (
        returnApple(hi.name) ||
        returnSamsung(hi.name) ||
        returnXiaomi(hi.name) ||
        returnGoogle(hi.name) ||
        returnGarmin(hi.name) ||
        returnDyson(hi.name)
        )
    ) {
      return (
        returnExtraPrice(hi.name) &&
        returnStockPrice(hi.name) &&
        resultArr.push({
          id: masterArr(hi.name),
          name: returnNameInArr(hi.name),
          extraPrice: returnExtraPrice(hi.name),
          stockPrice: returnStockPrice(hi.name),
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
