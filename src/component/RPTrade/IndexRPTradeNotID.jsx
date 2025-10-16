import { useState } from "react";
import { baseFixRPTrade } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameRPTrade } from "./helpers/helpers";

const IndexRPTradeNotID = ({ el, rptradeData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  rptradeData.map((rptrade) => {
    if (
      rptrade.name &&
      typeof rptrade.name === "string" &&
      baseFixRPTrade(rptrade) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameRPTrade(rptrade.name))) === "No match" &&
        rptrade.price &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnFixNameRPTrade(rptrade.name))),
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
