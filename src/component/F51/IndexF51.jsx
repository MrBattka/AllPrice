import { useState } from "react";
import { baseFixF51 } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnNameF51, returnNameInArrF51, returnStockPriceF51 } from "./helpers/helpers";

const IndexF51 = ({ el, f51Data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  f51Data.map((f51) => {
    baseFixF51(f51) && returnNameF51(f51.name);
    if (f51.name && typeof f51.name === "string" && baseFixF51(f51) && isOpen) {
      return (
        getIdByName(
          defaultFixName(returnNameInArrF51(returnNameF51(f51.name)))
        ) !== "No match" &&
        resultArr.push({
          id: getIdByName(
            defaultFixName(returnNameInArrF51(returnNameF51(f51.name)))
          ),
          name: returnNameInArrF51(returnNameF51(f51.name)),
          stockPrice: returnStockPriceF51(f51.name),
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
          {/* {f51Data.map((el) => (
            <div>{el.name}</div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default IndexF51;
