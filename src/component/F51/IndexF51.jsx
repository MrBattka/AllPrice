import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";
import { baseFixF51 } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { returnNameF51 } from "./helpers/helpers";

const IndexF51 = ({ el, f51Data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  f51Data.map((f51) => {
    baseFixF51(f51) && returnNameF51(f51.name);
    if (f51.name && typeof f51.name === "string" && baseFixF51(f51) && isOpen) {
      return (
        returnIDSamsung(returnNameF51(f51.name)) !== "No match" &&
        f51.price &&
        resultArr.push({
          id: returnIDSamsung(returnNameF51(f51.name)),
          name: returnNameF51(f51.name),
          extraPrice: f51.price,
          stockPrice: f51.price,
          provider: "F51",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "F51 ▲" : "F51 ▼"}
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

export default IndexF51;
