import { useState } from "react";
import { baseFixGarmin } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  fixNameGarmin,
  returnFixNameProductGarmin,
  returnStockPriceGarmin,
} from "./helpers/helpers";

const IndexGarminNotID = ({ el, garminData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  garminData.map((garmin) => {
    baseFixGarmin(garmin) && returnStockPriceGarmin(fixNameGarmin(garmin.name));
    if (
      garmin.name &&
      typeof garmin.name === "string" &&
      baseFixGarmin(garmin) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(fixNameGarmin(garmin.name))) === "No match" &&
        returnStockPriceGarmin(garmin.name) && 
        returnStockPriceGarmin(fixNameGarmin(garmin.name)).indexOf("00") !== -1 &&
        resultArr.push({
          id: getIdByName(defaultFixName(
            returnFixNameProductGarmin(fixNameGarmin(garmin.name)))
          ),
          name: returnFixNameProductGarmin(fixNameGarmin(garmin.name)),
          stockPrice: returnStockPriceGarmin(fixNameGarmin(garmin.name)),
          provider: "Garmin",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Garmin Not ID ▲" : "Garmin Not ID ▼"}
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

export default IndexGarminNotID;
