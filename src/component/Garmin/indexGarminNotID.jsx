import React, { useState } from "react";
import { baseFixGarmin } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { fixNameGarmin, returnFixNameProductGarmin, returnStockPriceGarmin } from "./helpers/helpers";
import style from "./styles.module.css";

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
        returnIDSamsung(fixNameGarmin(garmin.name)) === 'No match' &&
        returnStockPriceGarmin(garmin.name) &&
        resultArr.push({
          id: returnIDSamsung(returnFixNameProductGarmin(fixNameGarmin(garmin.name))),
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
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
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
