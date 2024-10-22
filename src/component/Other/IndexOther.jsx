import React, { useState } from "react";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";
import {
  returnExtraPriceOther,
  returnFixNameOther,
  returnNameInArrOther,
  returnStockPriceOther,
} from "./helpers/helpers";
import style from "./styles.module.css";

const IndexOther = ({ el, otherData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  otherData.map((other) => {
    returnStockPriceOther(returnFixNameOther(other.name));
    returnExtraPriceOther(returnFixNameOther(other.name));
    if (other.name && typeof other.name === "string" && isOpen) {
      return (
        returnIDApple(returnFixNameOther(other.name)) !== "No match" &&
        returnStockPriceOther(returnFixNameOther(other.name)) &&
        resultArr.push({
          id: returnIDApple(
            returnFixNameOther(other.name)
          ),
          name: returnNameInArrOther(returnFixNameOther(other.name)),
          extraPrice: returnExtraPriceOther(returnFixNameOther(other.name)),
          stockPrice: returnStockPriceOther(returnFixNameOther(other.name)),
          provider: "Разное",
        })
      );
    }
  });
  

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Разное ▲" : "Разное ▼"}
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

export default IndexOther;
