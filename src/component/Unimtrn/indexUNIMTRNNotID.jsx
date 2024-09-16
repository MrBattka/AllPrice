import React, { useState } from "react";
import { baseFix } from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import { newPrice } from "../../helpers/NewPrice";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";
import { returnApple } from "./Apple/apple";
import { returnDyson } from "./Dyson/dyson";
import { returnGameConsole } from "./GameConsole/gameConsole";
import { fixNameUnimtrn } from "./helpers/helpers";
import { returnOtherProduct } from "./OtherProduct/otherProduct";
import { returnSamsung } from "./Samsung/samsung";
import style from "./styles.module.css";
import { returnXiaomi } from "./Xiaomi/xiaomi";

const IndexUnimtrnNotID = ({ el, dataUNIMTRN }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  el.map((unimtrn) => {
    if (
      baseFix(unimtrn) &&
      returnIDApple(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn))) ===
        "No match" &&
      unimtrn.Товар &&
      isOpen &&
      (returnApple(unimtrn) ||
        returnDyson(unimtrn) ||
        returnSamsung(unimtrn) ||
        returnXiaomi(unimtrn) ||
        returnGameConsole(unimtrn) ||
        returnOtherProduct(unimtrn))
    ) {
      resultArr.push({
        id: returnIDApple(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn))),
        name: returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn)),
        extraPrice: newPrice(unimtrn.Товар, unimtrn.Стоимость || unimtrn.Cтоимость),
        stockPrice: unimtrn.Стоимость || unimtrn.Cтоимость,
        provider: "Метреон",
      });
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
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
