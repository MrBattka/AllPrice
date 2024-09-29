import React, { useState } from "react";
import { newPrice } from "../../helpers/NewPrice";
import { returnFixNameRPTrade } from "./helpers/helpers";
import style from "./styles.module.css";
import { baseFixRPTrade } from "../../helpers/baseFix";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";

const IndexRPTrade = ({ el, rptradeData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    rptradeData.map((rptrade) => {
      if (
        rptrade.name &&
        typeof rptrade.name === "string" &&
        baseFixRPTrade(rptrade) &&
        isOpen
      )
       {
        return (
          returnIDApple(returnFixNameRPTrade(rptrade.name)) !== 'No match' &&
          rptrade.price &&
          resultArr.push({
            id: returnIDApple(returnFixNameRPTrade(rptrade.name)),
            name: returnFixNameRPTrade(rptrade.name),
            extraPrice: newPrice(rptrade.name, rptrade.price),
            stockPrice: rptrade.price,
            provider: "RPTrade",
          })
        );
      }
    });

  return (
    <div>
      <div>
        {el.length > 1 && (
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
