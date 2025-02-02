import React, { useState } from "react";
import { baseFixArti } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { returnCategoryArti } from "./category/Category";
import { returnFixNameArti, returnNameArti, returnStockPriceArti } from "./helpers/helpers";
import style from "../styles.module.css";

const IndexArtiNotID = ({ el, artiData }) => {
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
        returnIDSamsung(returnFixNameArti(arti.name)) === 'No match' &&
        returnStockPriceArti(arti.name) &&
        returnCategoryArti(arti.name) &&
        resultArr.push({
          id: returnIDSamsung(returnNameArti(returnFixNameArti(arti.name))),
          name: returnNameArti(returnFixNameArti(arti.name)),
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
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Arti Not ID ▲" : "Arti Not ID ▼"}
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

export default IndexArtiNotID;