import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { baseFixBonus } from "../../helpers/baseFix";
import { returnFixNameBonus } from "./helpers/helpers";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexBonus = ({ el, bonusData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    bonusData.map((bonus) => {
      if (
        bonus.name &&
        typeof bonus.name === "string" &&
        baseFixBonus(bonus) &&
        isOpen
      )
       {
        return (
          (returnIDSamsung(returnFixNameBonus(bonus.name)) !== 'No match' ||
        returnIDSamsung2(returnFixNameBonus(bonus.name)) !== 'No match') &&
          bonus.price &&
          resultArr.push({
            id: returnIDSamsung(returnFixNameBonus(bonus.name)) |
            returnIDSamsung2(returnFixNameBonus(bonus.name)),
            name: returnFixNameBonus(bonus.name),
            stockPrice: bonus.price,
            provider: "БонусОПТ",
          })
        );
      }
    });
    
  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "БонусОПТ ▲" : "БонусОПТ ▼"}
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

export default IndexBonus;
