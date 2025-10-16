import { useState } from "react";
import { baseFixNarod } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  fixNameNarod,
  returnNameNarod,
  returnStockPriceNarod,
} from "./helpers/helpers";

const IndexNarodNotID = ({ el, narodData }) => {
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
        getIdByName(defaultFixName(fixNameNarod(narod.name))) === "No match" &&
        returnStockPriceNarod(narod.name) &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnNameNarod(fixNameNarod(narod.name)))),
          name: returnNameNarod(fixNameNarod(narod.name)),
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
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Народ Not ID ▲" : "Народ Not ID ▼"}
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

export default IndexNarodNotID;
