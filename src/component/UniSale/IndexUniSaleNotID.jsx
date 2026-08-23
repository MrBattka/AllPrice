import { useState } from "react";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameUniSale, returnNameInArrUniSale, returnStockPriceUniSale } from "./helpers/helpers";
import { baseFixUnisale } from "../../helpers/baseFix";

const IndexUniSaleNotID = ({ el, uniSaleData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  uniSaleData.map((uniSale) => {
    if (
      uniSale.name.length > 3 &&
      typeof uniSale.name === "string" &&
      typeof uniSale.name !== "undefined" &&
      baseFixUnisale(returnNameInArrUniSale(returnFixNameUniSale(uniSale.name))) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnNameInArrUniSale(returnFixNameUniSale(uniSale.name)))) === "No match" &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnNameInArrUniSale(returnFixNameUniSale(uniSale.name)))),
          name: returnNameInArrUniSale(returnFixNameUniSale(uniSale.name)),
          stockPrice: returnStockPriceUniSale(returnFixNameUniSale(uniSale.name)),
          provider: "UniSale",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Юнисейл Not ID ▲" : "Юнисейл Not ID ▼"}
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

export default IndexUniSaleNotID;
