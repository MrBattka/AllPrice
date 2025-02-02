import React, { useState } from "react";
import { baseFixRacmag } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { returnFixNameRacmag, returnNameInArrRacmag, returnStockPriceRacmag } from "./helpers/helpers";
import style from "../styles.module.css";

const IndexRacmag = ({ el, racmagData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    racmagData.map((racmag) => {
      baseFixRacmag(racmag) && returnStockPriceRacmag(returnFixNameRacmag(racmag.name));
      if (
        racmag.name &&
        typeof racmag.name === "string" &&
        baseFixRacmag(racmag) &&
        isOpen
      )
       {
        return (
          returnIDSamsung(returnFixNameRacmag(racmag.name)) !== 'No match' &&
          returnStockPriceRacmag(racmag.name) &&
          resultArr.push({
            id: returnIDSamsung(returnNameInArrRacmag(returnFixNameRacmag(racmag.name))),
            name: returnNameInArrRacmag(returnFixNameRacmag(racmag.name)),
            stockPrice: returnStockPriceRacmag(returnFixNameRacmag(racmag.name)),
            provider: "Рацмаг",
          })
        );
      }
    });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Рацмаг ▲" : "Рацмаг ▼"}
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

export default IndexRacmag;