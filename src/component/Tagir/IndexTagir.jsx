import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";
import {
  fixNameTagir,
  returnNameTagir,
  returnStockPriceTagir,
} from "./helpers/helpers";
import { baseFixTagir } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";

const IndexTagir = ({ el, tagirData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  tagirData.map((tagir) => {
    baseFixTagir(tagir) && returnStockPriceTagir(fixNameTagir(tagir.name));
    if (
      tagir.name &&
      typeof tagir.name === "string" &&
      baseFixTagir(tagir) &&
      isOpen
    ) {
      return (
        returnIDSamsung(fixNameTagir(tagir.name)) !== "No match" &&
        returnStockPriceTagir(tagir.name) &&
        resultArr.push({
          id: returnIDSamsung(returnNameTagir(fixNameTagir(tagir.name))),
          name: returnNameTagir(fixNameTagir(tagir.name)),
          extraPrice: returnStockPriceTagir(fixNameTagir(tagir.name)),
          stockPrice: returnStockPriceTagir(fixNameTagir(tagir.name)),
          provider: "Тагир",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Тагир ▲" : "Тагир ▼"}
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

export default IndexTagir;
