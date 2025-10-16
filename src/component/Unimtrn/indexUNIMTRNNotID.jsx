import { useState } from "react";
import { baseFix } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { returnFixPrice } from "../../helpers/fixPrice";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { fixNameUnimtrn } from "./helpers/helpers";

const IndexUnimtrnNotID = ({ el, dataUNIMTRN }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  el.map((unimtrn) => {
    if (
      baseFix(unimtrn) &&
      getIdByName(defaultFixName(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn)))) ===
        "No match" &&
      (unimtrn.Товар || unimtrn.Модификация) &&
      isOpen
    ) {
      resultArr.push({
        id: getIdByName(defaultFixName(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn)))),
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
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Метреон Not ID ▲" : "Метреон Not ID ▼"}
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

export default IndexUnimtrnNotID;
