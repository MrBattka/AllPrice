import React, { useState } from "react";
import style from "../styles.module.css";
import { returnFixNameSunrise, returnNameInArrSunrise, returnStockPriceSunrise } from "./helpers/helpers";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { baseFixSunrise } from "../../helpers/baseFix";
import BasicTable from "../Create Table/Table";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexSunrise = ({ el, sunriseData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  sunriseData.map((sunrise) => {
    baseFixSunrise(sunrise) && returnStockPriceSunrise(returnFixNameSunrise(sunrise.name));
    if (
      sunrise.name &&
      typeof sunrise.name === "string" &&
      baseFixSunrise(sunrise) &&
      isOpen
    )
     {
      return (
        (returnIDSamsung(returnFixNameSunrise(sunrise.name)) !== 'No match' ||
      returnIDSamsung2(returnFixNameSunrise(sunrise.name)) !== 'No match') &&
        returnStockPriceSunrise(sunrise.name) &&
        resultArr.push({
          id: returnIDSamsung(returnNameInArrSunrise(returnFixNameSunrise(sunrise.name))) |
          returnIDSamsung2(returnNameInArrSunrise(returnFixNameSunrise(sunrise.name))),
          name: returnNameInArrSunrise(returnFixNameSunrise(sunrise.name)),
          stockPrice: returnStockPriceSunrise(returnFixNameSunrise(sunrise.name)),
          provider: "Восход",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Восход ▲" : "Восход ▼"}
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

export default IndexSunrise;
