import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";
import { baseFixS5 } from "../../helpers/baseFix";
import { fixNameS5, returnExtraPriceS5, returnNameInArrS5, returnStockPriceS5 } from "./helpers/helpers";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";

const IndexS5 = ({ el, S5Data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    S5Data.map((S5) => {
      baseFixS5(S5) && returnStockPriceS5(fixNameS5(S5.name));
      baseFixS5(S5) && returnExtraPriceS5(fixNameS5(S5.name));
      if (
        S5.name &&
        typeof S5.name === "string" &&
        baseFixS5(S5) &&
        isOpen
      )
       {
        return (
          returnIDSamsung(fixNameS5(S5.name)) !== 'No match' &&
          returnExtraPriceS5(S5.name) &&
          returnStockPriceS5(S5.name) &&
          resultArr.push({
            id: returnIDSamsung(returnNameInArrS5(fixNameS5(S5.name))),
            name: returnNameInArrS5(fixNameS5(S5.name)),
            extraPrice: returnExtraPriceS5(fixNameS5(S5.name)),
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
