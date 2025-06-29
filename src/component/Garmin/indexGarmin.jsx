import React, { useState } from "react";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  fixNameGarmin,
  returnFixNameProductGarmin,
  returnStockPriceGarmin,
} from "./helpers/helpers";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";
import { baseFixGarmin } from "../../helpers/baseFix";

const IndexGarmin = ({ el, garminData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  garminData.map((garmin) => {
    if (
      garmin.name &&
      typeof garmin.name === "string" &&
      baseFixGarmin(garmin) &&
      isOpen
    ) {
      return (
        (returnIDSamsung(fixNameGarmin(garmin.name)) !== "No match" ||
          returnIDSamsung2(fixNameGarmin(garmin.name)) !== "No match") &&
        returnStockPriceGarmin(garmin.name) &&
        resultArr.push({
          id:
            returnIDSamsung(
              returnFixNameProductGarmin(fixNameGarmin(garmin.name))
            ) |
            returnIDSamsung2(
              returnFixNameProductGarmin(fixNameGarmin(garmin.name))
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
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Garmin ▲" : "Garmin ▼"}
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

export default IndexGarmin;
