import React, { useState } from "react";
import { baseFixHi } from "../../helpers/baseFix";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";
import { returnApple } from "./Apple/apple";
import { returnDyson } from "./Dyson/dyson";
import { returnGarmin } from "./Garmin/garmin";
import { returnGoogle } from "./Google/google";
import {
  fixName,
  returnExtraPrice,
  returnNameInArr,
  returnStockPrice,
} from "./helpers/helpers";
import { returnSamsung } from "./Samsung/samsung";
import style from "./styles.module.css";
import { returnXiaomi } from "./Xiaomi/xiaomi";

const IndexHiNotID = ({ el, hi, main }) => {
  const [isOpenNotID, setIsOpenNotID] = useState(false)
  const resultArr = [];

  hi.map((hi) => {
    if (
      hi.name &&
      typeof hi.name === "string" &&
      baseFixHi(hi) &&
      isOpenNotID &&
      (returnApple(hi.name) ||
        returnSamsung(hi.name) ||
        returnXiaomi(hi.name) ||
        returnGoogle(hi.name) ||
        returnGarmin(hi.name) ||
        returnDyson(hi.name))
    ) {
      return (
        returnIDApple(fixName(hi.name)) === 'No match' &&
        returnExtraPrice(hi.name) &&
        returnStockPrice(hi.name) &&
        resultArr.push({
          id: returnIDApple(fixName(hi.name)),
          name: returnNameInArr(fixName(hi.name)),
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
          <span className={style.title} onClick={() => setIsOpenNotID(!isOpenNotID)}>
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
