import { useState } from "react";
import { baseFixDiscount } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  returnFixNameDiscount,
  returnNameInArrDiscount,
  returnStockPriceDiscount,
} from "./helpers/helpers";

const IndexDiscountNotID = ({ el, discountData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  discountData.map((discount) => {
    baseFixDiscount(discount) &&
      returnStockPriceDiscount(returnFixNameDiscount(discount.name));
    if (
      discount.name &&
      typeof discount.name === "string" &&
      baseFixDiscount(discount) &&
      returnStockPriceDiscount(returnFixNameDiscount(discount.name)).indexOf("00") !== -1 &&
      isOpen
    ) {
      return (
        returnIDSamsung(returnFixNameDiscount(discount.name)) === "No match" &&
        returnStockPriceDiscount(discount.name) &&
        resultArr.push({
          id: returnIDSamsung(
            returnNameInArrDiscount(returnFixNameDiscount(discount.name))
          ),
          name: returnNameInArrDiscount(returnFixNameDiscount(discount.name)),
          stockPrice: returnStockPriceDiscount(
            returnFixNameDiscount(discount.name)
          ),
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
