import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";
import { returnFixNameElectrozon } from "./helpers/helpers";
import { baseFixElectrozon } from "../../helpers/baseFix";
import { returnIDApple } from "../../helpers/returnIDApple";
import { newPrice } from "../../helpers/NewPrice";

const IndexElectrozonNotID = ({ el, electrozonData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    electrozonData.map((electrozon) => {
      if (
        electrozon.name &&
        typeof electrozon.name === "string" &&
        baseFixElectrozon(electrozon) &&
        isOpen
      )
       {
        return (
          returnIDApple(returnFixNameElectrozon(electrozon.name)) === 'No match' &&
          electrozon.price &&
          resultArr.push({
            id: returnIDApple(returnFixNameElectrozon(electrozon.name)),
            name: returnFixNameElectrozon(electrozon.name),
            extraPrice: newPrice(electrozon.name, electrozon.price),
            stockPrice: electrozon.price,
            provider: "Electrozon",
          })
        );
      }
    });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Electrozon Not ID ▲" : "Electrozon Not ID ▼"}
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

export default IndexElectrozonNotID;
