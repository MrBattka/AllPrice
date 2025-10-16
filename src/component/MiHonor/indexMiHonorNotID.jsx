import { useState } from "react";
import { baseFixMiHonor } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  fixNameMihonor,
  returnNameInArrMihonor,
  returnStockPriceMihonor,
} from "./helpers/helpers";

const IndexMiHonorNotID = ({ el, mihonorData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  mihonorData.map((mihonor) => {
    if (
      mihonor.name &&
      typeof mihonor.name === "string" &&
      mihonor.name.indexOf("₽") !== -1 &&
      baseFixMiHonor(mihonor) &&
      isOpen
    ) {
      return (
        mihonor.name.indexOf("₽") !== -1 &&
        getIdByName(defaultFixName(fixNameMihonor(mihonor.name))) === "No match" &&
        returnStockPriceMihonor(mihonor.name) &&
        resultArr.push({
          id: getIdByName(defaultFixName(
            returnNameInArrMihonor(fixNameMihonor(mihonor.name)))
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
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
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
