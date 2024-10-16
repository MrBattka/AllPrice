import React, { useState } from "react";
import { baseFixArti } from "../../helpers/baseFix";
import { returnCategoryArti } from "./category/Category";
import { returnFixNameArti, returnNameArti, returnStockPriceArti } from "./helpers/helpers";
import style from "./styles.module.css";
import { returnIDApple } from "../../helpers/returnIDApple";
import BasicTable from "../Create Table/Table";

const IndexArti = ({ el, artiData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  artiData.map((arti) => {
    baseFixArti(arti) && returnStockPriceArti(returnFixNameArti(arti.name));
    if (
      arti.name &&
      typeof arti.name === "string" &&
      baseFixArti(arti) &&
      isOpen
    )
     {
      return (
        returnIDApple(returnFixNameArti(arti.name)) !== 'No match' &&
        returnStockPriceArti(arti.name) &&
        returnCategoryArti(arti.name) &&
        resultArr.push({
          id: returnIDApple(returnNameArti(returnFixNameArti(arti.name))),
          name: returnNameArti(returnFixNameArti(arti.name)),
          extraPrice: returnStockPriceArti(returnFixNameArti(arti.name)),
          stockPrice: returnStockPriceArti(returnFixNameArti(arti.name)),
          provider: "Arti",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Arti ▲" : "Arti ▼"}
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

export default IndexArti;