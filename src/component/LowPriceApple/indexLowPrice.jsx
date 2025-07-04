import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { baseFixLowPrice } from "../../helpers/baseFix";
import { fixNameLowPrice, returnNameInArrLowPrice, returnStockPriceLowPrice } from "./helpers/helpers";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexLowPrice = ({ el, lowPriceData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  lowPriceData.map((lowPrice) => {
    if (
      lowPrice.name &&
      typeof lowPrice.name === "string" &&
      baseFixLowPrice(lowPrice)
    ) {
      return (
        (returnIDSamsung(fixNameLowPrice(lowPrice.name)) !== "No match" ||
      returnIDSamsung2(fixNameLowPrice(lowPrice.name)) !== "No match") &&
        returnStockPriceLowPrice(lowPrice.name) &&
        returnStockPriceLowPrice(fixNameLowPrice(lowPrice.name)).indexOf("00") !== -1 &&
        resultArr.push({
          id: returnIDSamsung(returnNameInArrLowPrice(fixNameLowPrice(lowPrice.name))) |
          returnIDSamsung2(returnNameInArrLowPrice(fixNameLowPrice(lowPrice.name))),
          name: returnNameInArrLowPrice(fixNameLowPrice(lowPrice.name)),
          stockPrice: returnStockPriceLowPrice(fixNameLowPrice(lowPrice.name)),
          provider: "LowPrice",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "LowPriceApple ▲" : "LowPriceApple ▼"}
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

export default IndexLowPrice;
