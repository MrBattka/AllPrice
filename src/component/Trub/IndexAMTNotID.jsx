import { useState } from "react";
import { baseFixTrub } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { fixNameTrub, returnNameInArrTrub, returnStockPriceTrub } from "./helpers/helpers";

const IndexAMTNotID = ({ el, AMTData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    AMTData.map((amt) => {
      if (
        amt.name &&
        typeof amt.name === "string" &&
        baseFixTrub(amt) &&
        isOpen &&
        returnStockPriceTrub(fixNameTrub(amt.name)).indexOf("0") != -1
      )
       {
        return (
          getIdByName(defaultFixName(fixNameTrub(amt.name))) === 'No match'  &&
          returnStockPriceTrub(amt.name) &&
          resultArr.push({
            id: getIdByName(defaultFixName(returnNameInArrTrub(fixNameTrub(amt.name)))),
            name: returnNameInArrTrub(fixNameTrub(amt.name)),
            stockPrice: returnStockPriceTrub(fixNameTrub(amt.name)),
            provider: "AMT",
          })
        );
      }
    });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "AMT Not ID ▲" : "AMT Not ID ▼"}
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

export default IndexAMTNotID;
