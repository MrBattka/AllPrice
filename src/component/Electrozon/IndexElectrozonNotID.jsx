import React, { useState } from "react";
import { baseFixElectrozon } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { returnFixNameElectrozon } from "./helpers/helpers";
import style from "../styles.module.css";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

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
          (returnIDSamsung(returnFixNameElectrozon(electrozon.name)) === 'No match' ||
        returnIDSamsung2(returnFixNameElectrozon(electrozon.name)) === 'No match') &&
          electrozon.price &&
          resultArr.push({
            id: returnIDSamsung(returnFixNameElectrozon(electrozon.name)) |
            returnIDSamsung2(returnFixNameElectrozon(electrozon.name)),
            name: returnFixNameElectrozon(electrozon.name),
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
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
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
