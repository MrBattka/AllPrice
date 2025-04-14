import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameA18, returnNameInArrA18, returnStockPriceA18 } from "./helpers/helpers";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";

const IndexA18 = ({ el, a18Data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  a18Data.map((A18) => {
    // baseFixA18(A18) &&
      returnStockPriceA18(returnFixNameA18(A18.name))
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
        resultArr.push({
          id: returnIDSamsung(
            returnNameInArrA18(returnFixNameA18(A18.name))
          ),
          name: returnNameInArrA18(returnFixNameA18(A18.name)),
          stockPrice: returnStockPriceA18(returnFixNameA18(A18.name)),
          provider: "A18",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Богатырев ▲" : "Богатырев ▼"}
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

export default IndexA18;
