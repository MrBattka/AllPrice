import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { baseFixDiscount } from "../../helpers/baseFix";
import {
  returnFixNameDiscount,
  returnNameInArrDiscount,
  returnStockPriceDiscount,
} from "./helpers/helpers";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexDiscountNotID = ({ el, discountData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  discountData.map((discount) => {
    baseFixDiscount(discount) && returnStockPriceDiscount(returnFixNameDiscount(discount.name));
    if (
      discount.name &&
      typeof discount.name === "string" &&
      baseFixDiscount(discount) &&
      isOpen
    )
     {
      return (
        (returnIDSamsung(returnFixNameDiscount(discount.name)) === 'No match' ||
      returnIDSamsung2(returnFixNameDiscount(discount.name)) === 'No match') &&
        returnStockPriceDiscount(discount.name) &&
        resultArr.push({
          id: returnIDSamsung(returnNameInArrDiscount(returnFixNameDiscount(discount.name))) |
          returnIDSamsung2(returnNameInArrDiscount(returnFixNameDiscount(discount.name))),
          name: returnNameInArrDiscount(returnFixNameDiscount(discount.name)),
          stockPrice: returnStockPriceDiscount(returnFixNameDiscount(discount.name)),
          provider: "Discount",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Discount Not ID ▲" : "Discount Not ID ▼"}
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

export default IndexDiscountNotID;
