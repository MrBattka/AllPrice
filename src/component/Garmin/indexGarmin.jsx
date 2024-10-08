import React, { useState } from "react";
import { baseFixGarmin } from "../../helpers/baseFix";
import { fixNameGarmin, returnExtraPriceGarmin, returnFixNameProductGarmin, returnStockPriceGarmin } from "./helpers/helpers";
import style from "./styles.module.css";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";

const IndexGarmin = ({ el, garminData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  garminData.map((garmin) => {
    baseFixGarmin(garmin) && returnStockPriceGarmin(fixNameGarmin(garmin.name));
    baseFixGarmin(garmin) && returnExtraPriceGarmin(fixNameGarmin(garmin.name));
    if (
      garmin.name &&
      typeof garmin.name === "string" &&
      baseFixGarmin(garmin) &&
      isOpen
    ) {
      return (
        returnIDApple(fixNameGarmin(garmin.name)) !== 'No match' &&
        returnExtraPriceGarmin(garmin.name) &&
        returnStockPriceGarmin(garmin.name) &&
        resultArr.push({
          id: returnIDApple(returnFixNameProductGarmin(fixNameGarmin(garmin.name))),
          name: returnFixNameProductGarmin(fixNameGarmin(garmin.name)),
          extraPrice: returnExtraPriceGarmin(fixNameGarmin(garmin.name)),
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
