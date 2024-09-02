import React, { useState } from "react";
import { baseFix } from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import { newPriceUNIMETRN } from "../../helpers/NewPrice";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";
import { returnApple } from "./Apple/apple";
import { returnDyson } from "./Dyson/dyson";
import { returnGameConsole } from "./GameConsole/gameConsole";
import { returnOtherProduct } from "./OtherProduct/otherProduct";
import { returnSamsung } from "./Samsung/samsung";
import style from "./styles.module.css";
import { fixNameUnimtrn } from "./helpers/helpers.js";

const IndexUnimtrn = ({ el, dataUNIMTRN }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  el.map((unimtrn) => {
    if (
      unimtrn.Товар &&
      returnIDApple(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn))) !== 'No match' &&
      isOpen &&
      baseFix(unimtrn) &&
      (returnApple(unimtrn) ||
        returnDyson(unimtrn) ||
        returnSamsung(unimtrn) ||
        returnGameConsole(unimtrn) ||
        returnOtherProduct(unimtrn))
    ) {
      resultArr.push({
        id: returnIDApple(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn))),
        name: returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn)),
        extraPrice: newPriceUNIMETRN(unimtrn),
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
