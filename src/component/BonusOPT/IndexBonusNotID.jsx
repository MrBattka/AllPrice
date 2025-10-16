import { useState } from "react";
import { baseFixBonus } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameBonus } from "./helpers/helpers";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";

const IndexBonusNotID = ({ el, bonusData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  bonusData.map((bonus) => {
    if (
      bonus.name &&
      typeof bonus.name === "string" &&
      baseFixBonus(bonus) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameBonus(bonus.name))) === "No match" &&
        bonus.price &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnFixNameBonus(bonus.name))),
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
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "БонусОПТ Not ID ▲" : "БонусОПТ Not ID ▼"}
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

export default IndexBonusNotID;
