import React, { useState } from "react";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";
import { returnFixNameBase } from "./helpers/helpers";
import { baseFixBase } from "../../helpers/baseFix";

const IndexBaseNotID = ({ el, baseData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    baseData.map((base) => {
      if (
        base.name &&
        typeof base.name === "string" &&
        isOpen &&
        baseFixBase(base)
      )
       {
        return (
          returnIDApple(returnFixNameBase(base.name)) === 'No match' &&
          base.price &&
          baseFixBase(base) &&
          resultArr.push({
            id: returnIDApple(returnFixNameBase(base.name)),
            name: returnFixNameBase(base.name),
            extraPrice: base.extra,
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
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
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
