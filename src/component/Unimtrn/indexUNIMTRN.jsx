import { useState, useMemo } from "react";
import { baseFix } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName.js";
import { getIdByName } from "../../helpers/returnIDByName.js";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { fixNameUnimtrn } from "./helpers/helpers.js";

const IndexUnimtrn = ({ el, unimtrnData }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Оптимизированное вычисление resultArr
  const resultArr = useMemo(() => {
    if (!isOpen) return [];

    return unimtrnData.reduce((acc, unimtrn) => {
      if (!unimtrn.name || !baseFix(unimtrn)) return acc;

      const cleanName = fixNameUnimtrn(unimtrn.name);
      const defaultName = defaultFixName(cleanName);
      const id = getIdByName(defaultName);

      if (id === "No match") return acc;

      acc.push({
        id,
        name: cleanName,
        stockPrice: unimtrn.price,
        provider: "Метреон",
      });
      return acc;
    }, []);
  }, [unimtrnData, isOpen]);

  return (
    <div>
      {el.length > 1 && (
        <div className={style.title} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Метреон ▲" : "Метреон ▼"}
        </div>
      )}
      {isOpen && (
        <div className={style.row}>
          <BasicTable resultArr={resultArr} />
        </div>
      )}
    </div>
  );
};

export default IndexUnimtrn;