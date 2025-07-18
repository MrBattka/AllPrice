import React, { useState } from "react";
import { baseFixVsemi } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { fixNameVseMi, returnNameInArrVseMi, returnStockPriceVseMi } from "./helpers/helpers";
import style from "../styles.module.css";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexVseMi = ({ el, vsemiData }) => {
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
        (returnIDSamsung(fixNameVseMi(vsemi.name)) !== 'No match' ||
      returnIDSamsung2(fixNameVseMi(vsemi.name)) !== 'No match') &&
        returnStockPriceVseMi(vsemi.name) &&
        resultArr.push({
          id: returnIDSamsung(returnNameInArrVseMi(fixNameVseMi(vsemi.name))) |
          returnIDSamsung2(returnNameInArrVseMi(fixNameVseMi(vsemi.name))),
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
            {isOpen ? "VseMi ▲" : "VseMi ▼"}
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

export default IndexVseMi;