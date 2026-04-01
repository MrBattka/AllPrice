import { useState } from "react";
import { baseFix } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName.js";
import { returnFixPrice } from "../../helpers/fixPrice";
import { getIdByName } from "../../helpers/returnIDByName.js";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { fixNameUnimtrn } from "./helpers/helpers.js";

const IndexUnimtrn = ({ el, unimtrnData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  unimtrnData.map((unimtrn) => {
    if (
      unimtrn.name &&
      getIdByName(defaultFixName(fixNameUnimtrn(unimtrn.name))) !==
        "No match" &&
      isOpen &&
      baseFix(unimtrn)
    ) {
      resultArr.push({
        id: getIdByName(defaultFixName(fixNameUnimtrn(unimtrn.name))),
        name: fixNameUnimtrn(unimtrn.name),
        stockPrice: unimtrn.price,
        provider: "Метреон",
      });
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Метреон ▲" : "Метреон ▼"}
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

export default IndexUnimtrn;
