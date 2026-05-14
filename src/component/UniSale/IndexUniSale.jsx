import { useState } from "react";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameUniSale, returnFixPriceUniSale } from "./helpers/helpers";
import { baseFixUnisale } from "../../helpers/baseFix";

const IndexUniSale = ({ el, uniSaleData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  uniSaleData.map((uniSale) => {
    if (
      uniSale.name.length > 3 &&
      typeof uniSale.name === "string" &&
      typeof uniSale.name !== "undefined" &&
      baseFixUnisale(returnFixNameUniSale(uniSale.name)) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(baseFixUnisale(returnFixNameUniSale(uniSale.name)))) !== "No match" &&
        uniSale.price &&
        resultArr.push({
          id: getIdByName(defaultFixName(baseFixUnisale(returnFixNameUniSale(uniSale.name)))),
          name: baseFixUnisale(returnFixNameUniSale(uniSale.name)),
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
            {isOpen ? "Юнисейл ▲" : "Юнисейл ▼"}
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
