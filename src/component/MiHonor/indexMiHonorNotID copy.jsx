import React, { useState } from "react";
import { baseFixMiHonor } from "../../helpers/baseFix";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";
import {
  fixNameMihonor,
  returnExtraPriceMihonor,
  returnNameInArrMihonor,
  returnStockPriceMihonor
} from "./helpers/helpers";
import style from "./styles.module.css";

const IndexMiHonorNotID = ({ el, mihonorData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  mihonorData.map((mihonor) => {
    baseFixMiHonor(mihonor) && returnStockPriceMihonor(fixNameMihonor(mihonor.name));
    baseFixMiHonor(mihonor) && returnExtraPriceMihonor(fixNameMihonor(mihonor.name));
    if (
      mihonor.name &&
      typeof mihonor.name === "string" &&
      baseFixMiHonor(mihonor) &&
      isOpen
    )
     {
      return (
        returnIDApple(fixNameMihonor(mihonor.name)) === 'No match' &&
        returnExtraPriceMihonor(mihonor.name) &&
        returnStockPriceMihonor(mihonor.name) &&
        resultArr.push({
          id: returnIDApple(returnNameInArrMihonor(fixNameMihonor(mihonor.name))),
          name: returnNameInArrMihonor(fixNameMihonor(mihonor.name)),
          extraPrice: returnExtraPriceMihonor(fixNameMihonor(mihonor.name)),
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
            {isOpen ? "MiHonor Not ID ▲" : "MiHonor Not ID ▼"}
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

export default IndexMiHonorNotID;