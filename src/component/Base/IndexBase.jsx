import React, { useState } from "react";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";
import { returnFixNameBase } from "./helpers/helpers";
import { baseFixBase } from "../../helpers/baseFix";

const IndexBase = ({ el, baseData }) => {
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
        returnIDSamsung(returnFixNameBase(base.name)) !== "No match" &&
        base.price &&
        baseFixBase(base) &&
        resultArr.push({
          id: returnIDSamsung(returnFixNameBase(base.name)),
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
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "База ▲" : "База ▼"}
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

export default IndexBase;
