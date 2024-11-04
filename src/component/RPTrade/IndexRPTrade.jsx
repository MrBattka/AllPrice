import React, { useState } from "react";
import { newPrice } from "../../helpers/NewPrice";
import { returnFixNameRPTrade } from "./helpers/helpers";
import style from "./styles.module.css";
import { baseFixRPTrade } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";

const IndexRPTrade = ({ el, rptradeData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    rptradeData.map((rptradeEl) => {
      if (
        rptradeEl.name &&
        typeof rptradeEl.name === "string" &&
        baseFixRPTrade(rptradeEl) &&
        isOpen
      )
       {
        return (
          returnIDSamsung(returnFixNameRPTrade(rptradeEl.name)) !== 'No match' &&
          rptradeEl.price &&
          resultArr.push({
            id: returnIDSamsung(returnFixNameRPTrade(rptradeEl.name)),
            name: returnFixNameRPTrade(rptradeEl.name),
            extraPrice: newPrice(rptradeEl.name, rptradeEl.price),
            stockPrice: rptradeEl.price,
            provider: "RPTrade",
          })
        );
      }
    });
console.log(rptradeData);

  return (
    <div>
      <div>
        {rptradeData.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "RPTrade ▲" : "RPTrade ▼"}
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

export default IndexRPTrade;
