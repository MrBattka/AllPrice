import React, { useState } from "react";
import style from "./styles.module.css";
import { fixName } from "./helpers/helpers";
import { baseFixSuperPrice } from "../../helpers/baseFix";
import { returnIDApple } from "../../helpers/returnIDApple";
import { newPrice } from "../../helpers/NewPrice";
import BasicTable from "../Create Table/Table";

const IndexSuperPriceNotID = ({ el, superpriceData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  superpriceData.map((superprice) => {
    if (
      superprice.name &&
      typeof superprice.name === "string" &&
      baseFixSuperPrice(superprice) &&
      isOpen
    )
     {
      return (
        returnIDApple(fixName(superprice.name)) === 'No match' &&
        newPrice(superprice.name, superprice.price) &&
        superprice.price &&
        resultArr.push({
          id: returnIDApple(fixName(superprice.name)),
          name: fixName(superprice.name),
          extraPrice: newPrice(fixName(superprice.name), superprice.price),
          stockPrice: superprice.price,
          provider: "Super Price",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Super Price Not ID ▲" : "Super Price Not ID ▼"}
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

export default IndexSuperPriceNotID;