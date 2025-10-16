import { useState } from "react";
import { baseFixOther } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  returnFixNameOther,
  returnNameInArrOther,
  returnStockPriceOther,
} from "./helpers/helpers";

const IndexOtherNotID = ({ el, otherData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  otherData.map((other) => {
    returnStockPriceOther(returnFixNameOther(other.name));
    if (other.name && typeof other.name === "string" && isOpen) {
      return (
        getIdByName(defaultFixName(returnFixNameOther(other.name))) === "No match" &&
        returnStockPriceOther(other.name) &&
        baseFixOther(other) &&
        resultArr.push({
          id: getIdByName(defaultFixName(
            returnNameInArrOther(returnFixNameOther(other.name)))
          ),
          name: returnNameInArrOther(returnFixNameOther(other.name)),
          stockPrice: returnStockPriceOther(returnFixNameOther(other.name)),
          provider: "All",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "All Not ID ▲" : "All Not ID ▼"}
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

export default IndexOtherNotID;
