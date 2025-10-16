import { useState } from "react";
import { baseFixTagir } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  fixNameTagir,
  returnNameTagir,
  returnStockPriceTagir,
} from "./helpers/helpers";

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
        getIdByName(defaultFixName(fixNameTagir(tagir.name))) !== "No match" &&
        returnStockPriceTagir(tagir.name) &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnNameTagir(fixNameTagir(tagir.name)))),
          name: returnNameTagir(fixNameTagir(tagir.name)),
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
