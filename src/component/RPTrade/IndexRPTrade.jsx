import { useState } from "react";
import { baseFixRPTrade } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameRPTrade } from "./helpers/helpers";

const IndexRPTrade = ({ el, rptradeData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  rptradeData.map((rptradeEl) => {
    if (
      rptradeEl.name &&
      typeof rptradeEl.name === "string" &&
      baseFixRPTrade(rptradeEl) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameRPTrade(rptradeEl.name))) !== "No match" &&
        rptradeEl.price &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnFixNameRPTrade(rptradeEl.name))),
          name: returnFixNameRPTrade(rptradeEl.name),
          stockPrice: rptradeEl.price,
          provider: "RPTrade",
        })
      );
    }
  });

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
