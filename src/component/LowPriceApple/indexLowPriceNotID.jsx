import { useState } from "react";
import { baseFixLowPrice } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  fixNameLowPrice,
  returnNameInArrLowPrice,
  returnStockPriceLowPrice,
} from "./helpers/helpers";

const IndexLowPriceNotID = ({ el, lowPriceData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  lowPriceData.map((lowPrice) => {
    if (
      lowPrice.name &&
      typeof lowPrice.name === "string" &&
      baseFixLowPrice(lowPrice)
    ) {
      return (
        getIdByName(defaultFixName(fixNameLowPrice(lowPrice.name))) === "No match" &&
        returnStockPriceLowPrice(lowPrice.name) &&
        resultArr.push({
          id: getIdByName(defaultFixName(
            returnNameInArrLowPrice(fixNameLowPrice(lowPrice.name)))
          ),
          name: returnNameInArrLowPrice(fixNameLowPrice(lowPrice.name)),
          stockPrice: returnStockPriceLowPrice(fixNameLowPrice(lowPrice.name)),
          provider: "Ghost Re:Sale",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Ghost Re:Sale Not ID ▲" : "Ghost Re:Sale Not ID ▼"}
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

export default IndexLowPriceNotID;
