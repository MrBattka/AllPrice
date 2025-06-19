import React, { useState } from "react";
import { baseFixSuperPrice } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/NewPrice";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { fixNameSuperPrice } from "./helpers/helpers";
import style from "../styles.module.css";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexSuperPrice = ({ el, superpriceData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  superpriceData.map((superprice) => {
    if (
      superprice.name &&
      typeof superprice.name === "string" &&
      baseFixSuperPrice(superprice) &&
      isOpen
    ) {
      return (
        (returnIDSamsung(fixNameSuperPrice(superprice.name)) !== "No match" ||
      returnIDSamsung2(fixNameSuperPrice(superprice.name)) !== "No match") &&
        newPrice(superprice.name, superprice.price) &&
        superprice.price &&
        resultArr.push({
          id: returnIDSamsung(fixNameSuperPrice(superprice.name)) |
          returnIDSamsung2(fixNameSuperPrice(superprice.name)),
          name: fixNameSuperPrice(superprice.name),
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
            {isOpen ? "Super Price ▲" : "Super Price ▼"}
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

export default IndexSuperPrice;
