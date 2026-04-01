import { useState } from "react";
import { baseFix } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { returnFixPrice } from "../../helpers/fixPrice";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { fixNameUnimtrn } from "./helpers/helpers";

const IndexUnimtrnNotID = ({ el, unimtrnData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  unimtrnData.map((unimtrn) => {
    if (
      unimtrn.name &&
      baseFix(unimtrn) &&
      getIdByName(defaultFixName(fixNameUnimtrn(unimtrn.name))) ===
        "No match" &&
      isOpen
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
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Метреон Not ID ▲" : "Метреон Not ID ▼"}
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

export default IndexUnimtrnNotID;
