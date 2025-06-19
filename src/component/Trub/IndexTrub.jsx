import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { baseFixTrub } from "../../helpers/baseFix";
import { fixNameTrub, returnNameInArrTrub, returnStockPriceTrub } from "./helpers/helpers";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexTrub = ({ el, trubData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    trubData.map((trub) => {
      if (
        trub.name &&
        typeof trub.name === "string" &&
        baseFixTrub(trub) &&
        isOpen &&
        returnStockPriceTrub(fixNameTrub(trub.name)).indexOf("0") != -1
      )
       {
        return (
          (returnIDSamsung(fixNameTrub(trub.name)) !== 'No match' ||
        returnIDSamsung2(fixNameTrub(trub.name)) !== 'No match') &&
          returnStockPriceTrub(trub.name) &&
          resultArr.push({
            id: returnIDSamsung(returnNameInArrTrub(fixNameTrub(trub.name))) |
            returnIDSamsung2(returnNameInArrTrub(fixNameTrub(trub.name))),
            name: returnNameInArrTrub(fixNameTrub(trub.name)),
            stockPrice: returnStockPriceTrub(fixNameTrub(trub.name)),
            provider: "Трубный",
          })
        );
      }
    });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Трубный ▲" : "Трубный ▼"}
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

export default IndexTrub;
