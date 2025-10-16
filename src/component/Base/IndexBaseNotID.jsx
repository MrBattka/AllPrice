import { useState } from "react";
import { baseFixBase } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameBase } from "./helpers/helpers";

const IndexBaseNotID = ({ el, baseData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  baseData.map((base) => {
    if (
      base.name &&
      typeof base.name === "string" &&
      isOpen &&
      baseFixBase(base)
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameBase(base.name))) === "No match" &&
        base.price &&
        baseFixBase(base) &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnFixNameBase(base.name))),
          name: returnFixNameBase(base.name),
          stockPrice: base.price,
          provider: "База",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "База NotID ▲" : "База NotID ▼"}
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

export default IndexBaseNotID;
