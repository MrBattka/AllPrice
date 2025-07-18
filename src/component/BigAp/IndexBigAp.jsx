import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { baseFixBigAp } from "../../helpers/baseFix";
import { returnFixNameBigAp, returnNameInArrBigAp, returnStockPriceBigAp } from "./helpers/helpers";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexBigAp = ({ el, bigApData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  bigApData.map((bigAp) => {
    baseFixBigAp(bigAp) &&
      returnStockPriceBigAp(returnFixNameBigAp(bigAp.name));
    if (
      bigAp.name &&
      typeof bigAp.name === "string" &&
      baseFixBigAp(bigAp) &&
      isOpen
    ) {
      return (
        (returnIDSamsung(returnFixNameBigAp(bigAp.name)) !== "No match" ||
      returnIDSamsung2(returnFixNameBigAp(bigAp.name)) !== "No match") &&
        returnStockPriceBigAp(bigAp.name) &&
        resultArr.push({
          id: returnIDSamsung(
            returnNameInArrBigAp(returnFixNameBigAp(bigAp.name))
          ) |
          returnIDSamsung2(
            returnNameInArrBigAp(returnFixNameBigAp(bigAp.name))
          ),
          name: returnNameInArrBigAp(returnFixNameBigAp(bigAp.name)),
          stockPrice: returnStockPriceBigAp(returnFixNameBigAp(bigAp.name)),
          provider: "BigAp",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "BigAp ▲" : "BigAp ▼"}
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

export default IndexBigAp;
