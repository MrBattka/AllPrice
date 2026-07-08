import { useState } from "react";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameTrubkoved, returnFixNameUniSale, returnFixPriceUniSale } from "./helpers/helpers";
import { baseFixTrubkoved, baseFixUnisale } from "../../helpers/baseFix";

const IndexTrubkovedNotID = ({ el, trubkovedData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  trubkovedData.map((trubkoved) => {
    if (
      trubkoved.name.length > 3 &&
      baseFixTrubkoved(returnFixNameTrubkoved(trubkoved.name)) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameTrubkoved(trubkoved.name))) === "No match" &&
        trubkoved.price &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnFixNameTrubkoved(trubkoved.name))),
          name: returnFixNameTrubkoved(trubkoved.name),
          stockPrice: trubkoved.price,
          provider: "Трубковед",
        })
      );
    }
  });
  
  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Трубковед Not ID ▲" : "Трубковед Not ID ▼"}
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

export default IndexTrubkovedNotID;
