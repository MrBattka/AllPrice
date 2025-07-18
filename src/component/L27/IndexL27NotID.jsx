import React, { useState } from "react";
import { baseFixL27 } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  returnFixNameL27,
  returnNameInArrL27,
  returnStockPriceL27,
} from "./helpers/helpers";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexL27NotID = ({ el, l27Data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  l27Data.map((l27) => {
    baseFixL27(l27) &&
      returnStockPriceL27(returnFixNameL27(l27.name));
    if (
      l27.name &&
      typeof l27.name === "string" &&
      baseFixL27(l27) &&
      returnStockPriceL27(returnFixNameL27(l27.name)).indexOf("00") !== -1 &&
      isOpen
    ) {
      return (
        (returnIDSamsung(returnFixNameL27(l27.name)) === "No match" ||
      returnIDSamsung2(returnFixNameL27(l27.name)) === "No match") &&
        returnStockPriceL27(l27.name) &&
        resultArr.push({
          id: returnIDSamsung(
            returnNameInArrL27(returnFixNameL27(l27.name))
          ) |
          returnIDSamsung2(
            returnNameInArrL27(returnFixNameL27(l27.name))
          ),
          name: returnNameInArrL27(returnFixNameL27(l27.name)),
          stockPrice: returnStockPriceL27(returnFixNameL27(l27.name)),
          provider: "Л27-28",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Л27-28 Not ID ▲" : "Л27-28 Not ID ▼"}
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

export default IndexL27NotID;