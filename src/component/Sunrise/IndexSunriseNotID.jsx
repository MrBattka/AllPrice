import { useState } from "react";
import { baseFixSunrise } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  returnFixNameSunrise,
  returnNameInArrSunrise,
  returnStockPriceSunrise,
} from "./helpers/helpers";

const IndexSunriseNotID = ({ el, sunriseData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  sunriseData.map((sunrise) => {
    baseFixSunrise(sunrise) &&
      returnStockPriceSunrise(returnFixNameSunrise(sunrise.name));
    if (
      sunrise.name &&
      typeof sunrise.name === "string" &&
      baseFixSunrise(sunrise) &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameSunrise(sunrise.name)) === "No match" &&
        returnStockPriceSunrise(sunrise.name) &&
        resultArr.push({
          id: returnIDSamsung(
            returnNameInArrSunrise(returnFixNameSunrise(sunrise.name))
          ),
          name: returnNameInArrSunrise(returnFixNameSunrise(sunrise.name)),
          stockPrice: returnStockPriceSunrise(
            returnFixNameSunrise(sunrise.name)
          ),
          provider: "Восход",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Восход Not ID ▲" : "Восход Not ID ▼"}
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

export default IndexSunriseNotID;
