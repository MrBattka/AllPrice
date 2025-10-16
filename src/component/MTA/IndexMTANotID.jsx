import { useState } from "react";
import { baseFixMTA } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  returnFixNameMTA,
  returnNameInArrMTA,
  returnStockPriceMTA,
} from "./helpers/helpers";

const IndexMTANotID = ({ el, mtaData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  mtaData.map((mta) => {
    baseFixMTA(mta) && returnStockPriceMTA(returnFixNameMTA(mta.name));
    if (mta.name && typeof mta.name === "string" && baseFixMTA(mta) && isOpen) {
      return (
        getIdByName(defaultFixName(returnFixNameMTA(mta.name))) === "No match" &&
        returnStockPriceMTA(returnFixNameMTA(mta.name)).indexOf("00") !== -1 &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnNameInArrMTA(returnFixNameMTA(mta.name)))),
          name: returnNameInArrMTA(returnFixNameMTA(mta.name)),
          stockPrice: returnStockPriceMTA(returnFixNameMTA(mta.name)),
          provider: "DStore",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "DStore Not ID ▲" : "DStore Not ID ▼"}
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

export default IndexMTANotID;
