import { useState } from "react";
import { baseFixElectrozon } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameElectrozon } from "./helpers/helpers";

const IndexElectrozon = ({ el, electrozonData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  electrozonData.map((electrozon) => {
    if (
      electrozon.name &&
      typeof electrozon.name === "string" &&
      baseFixElectrozon(electrozon) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameElectrozon(electrozon.name))) !==
          "No match" &&
        electrozon.price &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnFixNameElectrozon(electrozon.name))),
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
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Electrozon ▲" : "Electrozon ▼"}
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

export default IndexElectrozon;
