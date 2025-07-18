import React, { useState } from "react";
import { baseFixArti } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { returnCategoryArti } from "./category/Category";
import { returnFixNameArti, returnNameArti, returnStockPriceArti } from "./helpers/helpers";
import style from "../styles.module.css";
import { returnQuickID } from "../../helpers/returnQuickID";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexArti = ({ el, artiData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];
  const resultArrQuickID = [];

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
        (returnIDSamsung(returnFixNameArti(arti.name)) !== 'No match' ||
      returnIDSamsung2(returnFixNameArti(arti.name)) !== 'No match') &&
        returnStockPriceArti(arti.name) &&
        returnCategoryArti(arti.name) &&
        resultArr.push({
          id: returnIDSamsung(returnNameArti(returnFixNameArti(arti.name))) |
          returnIDSamsung2(returnNameArti(returnFixNameArti(arti.name))),
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