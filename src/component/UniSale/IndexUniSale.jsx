import { useState } from "react";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameUniSale, returnFixPriceUniSale } from "./helpers/helpers";

const IndexUniSale = ({ el, uniSaleData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  uniSaleData.map((uniSale) => {
    if (
      uniSale.name &&
      typeof uniSale.name === "string" &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameUniSale(uniSale.name))) !== "No match" &&
        uniSale.price &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnFixNameUniSale(uniSale.name))),
          name: returnFixNameUniSale(uniSale.name),
          stockPrice: returnFixPriceUniSale(uniSale.price),
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
            {isOpen ? "Store 77 ▲" : "Store 77 ▼"}
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

export default IndexUniSale;
