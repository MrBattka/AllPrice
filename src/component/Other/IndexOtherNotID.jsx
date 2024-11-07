import React, { useState } from "react";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { returnFixNameOther, returnNameInArrOther, returnStockPriceOther } from "./helpers/helpers";
import style from "./styles.module.css";

const IndexOtherNotID = ({ el, otherData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    otherData.map((other) => {
      returnStockPriceOther(returnFixNameOther(other.name));
      if (
        other.name &&
        typeof other.name === "string" &&
        isOpen
      )
       {
        return (
          returnIDSamsung(returnFixNameOther(other.name)) === 'No match' &&
          returnStockPriceOther(other.name) &&
          resultArr.push({
            id: returnIDSamsung(returnNameInArrOther(returnFixNameOther(other.name))),
            name: returnNameInArrOther(returnFixNameOther(other.name)),
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
            {isOpen ? "Разное Not ID ▲" : "Разное Not ID ▼"}
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

export default IndexOtherNotID;