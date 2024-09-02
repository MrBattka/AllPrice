import React, { useState } from "react";
import { baseFixMiHonor } from "../../helpers/baseFix";
import style from "./styles.module.css";
import {
  fixName,
  returnExtraPrice,
  returnNameInArr,
  returnStockPrice,
} from "./helpers/helpers";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";

const IndexMiHonorNotID = ({ el, mihonorData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  mihonorData.map((mihonor) => {
    baseFixMiHonor(mihonor) && returnStockPrice(fixName(mihonor.name));
    baseFixMiHonor(mihonor) && returnExtraPrice(fixName(mihonor.name));
    if (
      mihonor.name &&
      typeof mihonor.name === "string" &&
      baseFixMiHonor(mihonor) &&
      isOpen
    )
     {
      return (
        returnIDApple(fixName(mihonor.name)) === 'No match' &&
        returnExtraPrice(mihonor.name) &&
        returnStockPrice(mihonor.name) &&
        resultArr.push({
          id: returnIDApple(returnNameInArr(fixName(mihonor.name))),
          name: returnNameInArr(fixName(mihonor.name)),
          extraPrice: returnExtraPrice(fixName(mihonor.name)),
          stockPrice: returnStockPrice(fixName(mihonor.name)),
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