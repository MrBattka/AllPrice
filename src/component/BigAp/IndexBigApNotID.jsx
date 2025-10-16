import { useState } from "react";
import { baseFixBigAp } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  returnFixNameBigAp,
  returnNameInArrBigAp,
  returnStockPriceBigAp,
} from "./helpers/helpers";

const IndexBigApNotID = ({ el, bigApData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  bigApData.map((bigAp) => {
    baseFixBigAp(bigAp) &&
      returnStockPriceBigAp(returnFixNameBigAp(bigAp.name));
    if (
      bigAp.name &&
      typeof bigAp.name === "string" &&
      baseFixBigAp(bigAp) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameBigAp(bigAp.name))) === "No match" &&
        returnStockPriceBigAp(bigAp.name) &&
        resultArr.push({
          id: getIdByName(defaultFixName(
            returnNameInArrBigAp(returnFixNameBigAp(bigAp.name)))
          ),
          name: returnNameInArrBigAp(returnFixNameBigAp(bigAp.name)),
          stockPrice: returnStockPriceBigAp(returnFixNameBigAp(bigAp.name)),
          provider: "BigAp",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "BigAp Not ID ▲" : "BigAp Not ID ▼"}
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

export default IndexBigApNotID;
