import React, { useState } from "react";
import { baseFixSuperPrice } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/NewPrice";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";
import { fixNameSuperPrice } from "./helpers/helpers";
import style from "./styles.module.css";

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
        returnIDApple(fixNameSuperPrice(superprice.name)) === 'No match' &&
        newPrice(superprice.name, superprice.price) &&
        superprice.price &&
        resultArr.push({
          id: returnIDApple(fixNameSuperPrice(superprice.name)),
          name: fixNameSuperPrice(superprice.name),
          extraPrice: newPrice(fixNameSuperPrice(superprice.name), superprice.price),
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