import React, { useState } from "react";
import { baseFixS5 } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { fixNameS5, returnNameInArrS5, returnStockPriceS5 } from "./helpers/helpers";
import style from "../styles.module.css";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexS5 = ({ el, S5Data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    S5Data.map((S5) => {
      if (
        S5.name &&
        typeof S5.name === "string" &&
        baseFixS5(S5) &&
        isOpen &&
        returnStockPriceS5(fixNameS5(S5.name)).indexOf("0") != -1
      )
       {
        return (
          (returnIDSamsung(fixNameS5(S5.name)) !== 'No match' ||
        returnIDSamsung2(fixNameS5(S5.name)) !== 'No match') &&
          returnStockPriceS5(S5.name) &&
          resultArr.push({
            id: returnIDSamsung(returnNameInArrS5(fixNameS5(S5.name))) |
            returnIDSamsung2(returnNameInArrS5(fixNameS5(S5.name))),
            name: returnNameInArrS5(fixNameS5(S5.name)),
            stockPrice: returnStockPriceS5(fixNameS5(S5.name)),
            provider: "S5",
          })
        );
      }
    });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "S5 ▲" : "S5 ▼"}
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

export default IndexS5;
