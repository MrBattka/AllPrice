import { useState } from "react";
import { baseFixStore77 } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameStore77 } from "./helpers/helpers";

const IndexStore77NotID = ({ el, store77Data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  store77Data.map((store77) => {
    if (
      store77.name &&
      typeof store77.name === "string" &&
      baseFixStore77(store77) &&
      isOpen
    ) {
      return (
        (returnIDSamsung(returnFixNameStore77(store77.name)) === "No match" ||
      returnIDSamsung2(returnFixNameStore77(store77.name)) === "No match") &&
        store77.price &&
        resultArr.push({
          id: returnIDSamsung(returnFixNameStore77(store77.name)) |
          returnIDSamsung2(returnFixNameStore77(store77.name)),
          name: returnFixNameStore77(store77.name),
          stockPrice: store77.price,
          provider: "Store 77",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Store 77 Not ID ▲" : "Store 77 Not ID ▼"}
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

export default IndexStore77NotID;
