import React, { useState } from "react";
import style from "./styles.module.css";
import { baseFixVsemi } from "../../helpers/baseFix";
import { fixName, returnExtraPrice, returnNameInArr, returnStockPrice } from "./helpers/helpers";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";

const IndexVseMiNotID = ({ el, vsemiData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  vsemiData.map((vsemi) => {
    baseFixVsemi(vsemi) && returnStockPrice(fixName(vsemi.name));
    baseFixVsemi(vsemi) && returnExtraPrice(fixName(vsemi.name));
    if (
      vsemi.name &&
      typeof vsemi.name === "string" &&
      baseFixVsemi(vsemi) &&
      isOpen
    )
     {
      return (
        returnIDApple(fixName(vsemi.name)) === 'No match' &&
        returnExtraPrice(vsemi.name) &&
        returnStockPrice(vsemi.name) &&
        resultArr.push({
          id: returnIDApple(returnNameInArr(fixName(vsemi.name))),
          name: returnNameInArr(fixName(vsemi.name)),
          extraPrice: returnExtraPrice(fixName(vsemi.name)),
          stockPrice: returnStockPrice(fixName(vsemi.name)),
          provider: "VseMi",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "VseMi Not ID ▲" : "VseMi Not ID ▼"}
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

export default IndexVseMiNotID;