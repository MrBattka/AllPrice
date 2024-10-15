import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";
import { baseFixNarod } from "../../helpers/baseFix";
import { fixNameNarod, returnNameNarod, returnStockPriceNarod } from "./helpers/helpers";
import { returnIDApple } from "../../helpers/returnIDApple";

const IndexNarod = ({ el, narodData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  narodData.map((narod) => {
    baseFixNarod(narod) && returnStockPriceNarod(fixNameNarod(narod.name));
    if (
      narod.name &&
      typeof narod.name === "string" &&
      baseFixNarod(narod) &&
      isOpen
    ) {
      return (
        returnIDApple(fixNameNarod(narod.name)) !== "No match" &&
        returnStockPriceNarod(narod.name) &&
        resultArr.push({
          id: returnIDApple(returnNameNarod(fixNameNarod(narod.name))),
          name: returnNameNarod(fixNameNarod(narod.name)),
          extraPrice: returnStockPriceNarod(fixNameNarod(narod.name)),
          stockPrice: returnStockPriceNarod(fixNameNarod(narod.name)),
          provider: "Народ",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Народ ▲" : "Народ ▼"}
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

export default IndexNarod;
