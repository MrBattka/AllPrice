import { useState } from "react";
import { baseFixHi } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { returnFixPriceHi } from "../../helpers/fixFlags";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  fixNameHi,
  returnNameInArrHi,
  returnStockPriceHi,
} from "./helpers/helpers";

const IndexHi = ({ el, hi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];
  hi.map((hi) => {
    if (hi.name && typeof hi.name === "string" && baseFixHi(hi) && isOpen) {
      return (
        getIdByName(
          defaultFixName(
            returnFixPriceHi(hi, returnNameInArrHi(fixNameHi(hi.name)))
          )
        ) !== "No match" &&
        returnStockPriceHi(fixNameHi(hi.name)) &&
        returnStockPriceHi(fixNameHi(hi.name)).indexOf("00") !== -1 &&
        resultArr.push({
          id: getIdByName(
            defaultFixName(
              returnFixPriceHi(hi, returnNameInArrHi(fixNameHi(hi.name)))
            )
          ),
          name: returnFixPriceHi(hi, returnNameInArrHi(fixNameHi(hi.name))),
          stockPrice: returnStockPriceHi(fixNameHi(hi.name)),
          provider: "Hi",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Hi (Сема) ▲" : "Hi (Сема) ▼"}
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

export default IndexHi;
