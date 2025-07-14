import { useState } from "react";
import { baseFixBoltun } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameBoltun } from "./helpers/helpers";

const IndexBoltunNotID = ({ el, boltunData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  boltunData.map((boltun) => {
    if (
      boltun.name &&
      typeof boltun.name === "string" &&
      baseFixBoltun(boltun) &&
      isOpen
    ) {
      return (
        (returnIDSamsung(returnFixNameBoltun(boltun.name)) === "No match" ||
      returnIDSamsung2(returnFixNameBoltun(boltun.name)) === "No match") &&
        boltun.price &&
        resultArr.push({
          id: returnIDSamsung(returnFixNameBoltun(boltun.name)) |
          returnIDSamsung2(returnFixNameBoltun(boltun.name)),
          name: returnFixNameBoltun(boltun.name),
          stockPrice: boltun.price,
          provider: "Болтун",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Болтун Not ID ▲" : "Болтун Not ID ▼"}
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

export default IndexBoltunNotID;

