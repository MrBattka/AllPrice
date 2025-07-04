import React, { useState } from "react";
import { baseFixRPTrade } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { returnFixNameRPTrade } from "./helpers/helpers";
import style from "../styles.module.css";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexRPTradeNotID = ({ el, rptradeData }) => {
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
          (returnIDSamsung(returnFixNameRPTrade(rptrade.name)) === 'No match' ||
        returnIDSamsung2(returnFixNameRPTrade(rptrade.name)) === 'No match') &&
          rptrade.price &&
          resultArr.push({
            id: returnIDSamsung(returnFixNameRPTrade(rptrade.name)) |
            returnIDSamsung2(returnFixNameRPTrade(rptrade.name)),
            name: returnFixNameRPTrade(rptrade.name),
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
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "RPTrade Not ID ▲" : "RPTrade Not ID ▼"}
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

export default IndexRPTradeNotID;
