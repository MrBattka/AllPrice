import React, { useState } from "react";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import {
  returnFixNameOther,
  returnNameInArrOther,
  returnStockPriceOther
} from "./helpers/helpers";
import style from "../styles.module.css";
import { baseFixOther } from "../../helpers/baseFix";

const IndexOther = ({ el, otherData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  otherData.map((other) => {
    returnStockPriceOther(returnFixNameOther(other.name));
    if (other.name && typeof other.name === "string" && isOpen && baseFixOther(other)) {
      return (
        returnStockPriceOther(returnFixNameOther(other.name)).indexOf('0') !== -1 &&
        returnIDSamsung(returnFixNameOther(other.name)) !== "No match" &&
        returnStockPriceOther(returnFixNameOther(other.name)) &&
        baseFixOther(other) &&
        resultArr.push({
          id: returnIDSamsung(
            returnFixNameOther(other.name)
          ),
          name: baseFixOther(other) && returnNameInArrOther(returnFixNameOther(other.name)),
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
