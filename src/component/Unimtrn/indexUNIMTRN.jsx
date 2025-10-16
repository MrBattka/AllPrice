import { useState } from "react";
import { baseFix } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName.js";
import { returnFixPrice } from "../../helpers/fixPrice";
import { getIdByName } from "../../helpers/returnIDByName.js";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { fixNameUnimtrn } from "./helpers/helpers.js";

const IndexUnimtrn = ({ el, dataUNIMTRN }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  el.map((unimtrn) => {
    if (
      (unimtrn.Товар || unimtrn.Модификация) &&
      getIdByName(defaultFixName(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn)))) !==
        "No match" &&
      isOpen &&
      baseFix(unimtrn)
    ) {
      resultArr.push({
        id: getIdByName(defaultFixName(fixNameUnimtrn(unimtrn))),
        name: returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn)),
        stockPrice: unimtrn.Стоимость || unimtrn.Cтоимость || unimtrn.Цена,
        provider: "Метреон",
      });
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Метреон ▲" : "Метреон ▼"}
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

export default IndexUnimtrn;
