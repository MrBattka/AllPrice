import { useState } from "react";
import { baseFixBoltun } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameBoltun } from "./helpers/helpers";

const IndexBoltun = ({ el, boltunData }) => {
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
        getIdByName(defaultFixName(returnFixNameBoltun(boltun.name))) !== "No match" &&
        boltun.price &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnFixNameBoltun(boltun.name))),
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
            {isOpen ? "Болтун ▲" : "Болтун ▼"}
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

export default IndexBoltun;
