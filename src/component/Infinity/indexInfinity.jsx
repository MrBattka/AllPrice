import { useState } from "react";
import { baseFixInfinity } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  fixNameInfinity,
  returnNameInArrInfinity,
  returnStockPriceInfinity,
} from "./helpers/helpers";

const IndexInfinity = ({ el, infinityData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  infinityData.map((infinity) => {
    if (
      infinity.name &&
      typeof infinity.name === "string" &&
      baseFixInfinity(infinity)
    ) {
      return (
        returnIDSamsung(fixNameInfinity(infinity.name)) !== "No match" &&
        returnStockPriceInfinity(infinity.name) &&
        resultArr.push({
          id: returnIDSamsung(
            returnNameInArrInfinity(fixNameInfinity(infinity.name))
          ),
          name: returnNameInArrInfinity(fixNameInfinity(infinity.name)),
          stockPrice: returnStockPriceInfinity(fixNameInfinity(infinity.name)),
          provider: "Infinity",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Infinity ▲" : "Infinity ▼"}
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

export default IndexInfinity;
