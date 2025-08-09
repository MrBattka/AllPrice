import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { baseFixTrub } from "../../helpers/baseFix";
import { fixNameTrub, returnNameInArrTrub, returnStockPriceTrub } from "./helpers/helpers";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexAMTNotID = ({ el, AMTData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    AMTData.map((amt) => {
      if (
        amt.name &&
        typeof amt.name === "string" &&
        baseFixTrub(amt) &&
        isOpen &&
        returnStockPriceTrub(fixNameTrub(amt.name)).indexOf("0") != -1
      )
       {
        return (
          returnIDSamsung(fixNameTrub(amt.name)) === 'No match'  &&
          returnStockPriceTrub(amt.name) &&
          resultArr.push({
            id: returnIDSamsung(returnNameInArrTrub(fixNameTrub(amt.name))),
            name: returnNameInArrTrub(fixNameTrub(amt.name)),
            stockPrice: returnStockPriceTrub(fixNameTrub(amt.name)),
            provider: "AMT",
          })
        );
      }
    });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "AMT Not ID ▲" : "AMT Not ID ▼"}
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

export default IndexAMTNotID;
