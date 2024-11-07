import React, { useState } from "react";
import { baseFixVsemi } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { fixNameVseMi, returnNameInArrVseMi, returnStockPriceVseMi } from "./helpers/helpers";
import style from "./styles.module.css";

const IndexVseMiNotID = ({ el, vsemiData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  vsemiData.map((vsemi) => {
    baseFixVsemi(vsemi) && returnStockPriceVseMi(fixNameVseMi(vsemi.name));
    if (
      vsemi.name &&
      typeof vsemi.name === "string" &&
      baseFixVsemi(vsemi) &&
      isOpen
    )
     {
      return (
        returnIDSamsung(fixNameVseMi(vsemi.name)) === 'No match' &&
        returnStockPriceVseMi(vsemi.name) &&
        resultArr.push({
          id: returnIDSamsung(returnNameInArrVseMi(fixNameVseMi(vsemi.name))),
          name: returnNameInArrVseMi(fixNameVseMi(vsemi.name)),
          stockPrice: returnStockPriceVseMi(fixNameVseMi(vsemi.name)),
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