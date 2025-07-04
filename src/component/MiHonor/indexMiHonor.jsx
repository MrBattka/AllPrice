import React, { useState } from "react";
import { baseFixMiHonor } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import {
  fixNameMihonor,
  returnNameInArrMihonor,
  returnStockPriceMihonor,
} from "./helpers/helpers";
import style from "../styles.module.css";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexMiHonor = ({ el, mihonorData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  mihonorData.map((mihonor) => {
    // baseFixMiHonor(mihonor) && returnStockPriceMihonor(fixNameMihonor(mihonor.name));
    if (
      mihonor.name &&
      typeof mihonor.name === "string" &&
      mihonor.name.indexOf("₽") !== -1 &&
      baseFixMiHonor(mihonor) &&
      isOpen
    ) {
      return (
        mihonor.name.indexOf("₽") !== -1 &&
        (returnIDSamsung(fixNameMihonor(mihonor.name)) !== "No match" ||
        returnIDSamsung2(fixNameMihonor(mihonor.name)) !== "No match") &&
        returnStockPriceMihonor(mihonor.name) &&
        resultArr.push({
          id:
            returnIDSamsung(
              returnNameInArrMihonor(fixNameMihonor(mihonor.name))
            ) |
            returnIDSamsung2(
              returnNameInArrMihonor(fixNameMihonor(mihonor.name))
            ),
          name: returnNameInArrMihonor(fixNameMihonor(mihonor.name)),
          stockPrice: returnStockPriceMihonor(fixNameMihonor(mihonor.name)),
          provider: "MiHonor",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "MiHonor ▲" : "MiHonor ▼"}
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

export default IndexMiHonor;
