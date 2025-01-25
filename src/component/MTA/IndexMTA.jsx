import React, { useState } from "react";
import { baseFixMTA } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import {
  returnFixNameMTA,
  returnNameInArrMTA,
  returnStockPriceMTA,
} from "./helpers/helpers";
import style from "./styles.module.css";

const IndexMTA = ({ el, mtaData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  mtaData.map((mta) => {
    baseFixMTA(mta) &&
      returnStockPriceMTA(returnFixNameMTA(mta.name));
    if (
      mta.name &&
      typeof mta.name === "string" &&
      baseFixMTA(mta) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameMTA(mta.name)) !== "No match" &&
        returnStockPriceMTA(returnFixNameMTA(mta.name)).indexOf("00") !== -1 &&
        resultArr.push({
          id: returnIDSamsung(
            returnNameInArrMTA(returnFixNameMTA(mta.name))
          ),
          name: returnNameInArrMTA(returnFixNameMTA(mta.name)),
          stockPrice: returnStockPriceMTA(returnFixNameMTA(mta.name)),
          provider: "MTA Store",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "MTA Store ▲" : "MTA Store ▼"}
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

export default IndexMTA;
