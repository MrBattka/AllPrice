import { useState } from "react";
import { baseFixReSale } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  returnFixNameReSale,
  returnNameReSale,
  returnStockPriceReSale,
} from "./helpers/helpers";

const IndexReSale = ({ el, resaleData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  resaleData.map((resale) => {
    baseFixReSale(resale) &&
      returnStockPriceReSale(returnFixNameReSale(resale.name));
    if (
      resale.name &&
      typeof resale.name === "string" &&
      baseFixReSale(resale) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameReSale(resale.name))) !== "No match" &&
        returnStockPriceReSale(resale.name) &&
        returnStockPriceReSale(returnFixNameReSale(resale.name)).indexOf("А") ==
          -1 &&
        returnStockPriceReSale(returnFixNameReSale(resale.name)).indexOf(
          "00"
        ) != -1 &&
        resultArr.push({
          id: getIdByName(defaultFixName(
            returnNameReSale(returnFixNameReSale(resale.name)))
          ),
          name: returnNameReSale(returnFixNameReSale(resale.name)),
          stockPrice: returnStockPriceReSale(returnFixNameReSale(resale.name)),
          provider: "Re:Sale",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Re:Sale ▲" : "Re:Sale ▼"}
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

export default IndexReSale;
