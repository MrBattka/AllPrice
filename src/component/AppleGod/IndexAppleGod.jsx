import { useState } from "react";
import { baseFixAppleGod } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameAppleGod } from "./helpers/helpers";

const IndexAppleGod = ({ el, appleGodData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  appleGodData.map((appleGod) => {
    if (
      appleGod.name &&
      typeof appleGod.name === "string" &&
      baseFixAppleGod(appleGod) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameAppleGod(appleGod.name))) !== "No match" &&
        appleGod.price &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnFixNameAppleGod(appleGod.name))),
          name: returnFixNameAppleGod(appleGod.name),
          stockPrice: appleGod.price,
          provider: "AppleGod",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "AppleGod ▲" : "AppleGod ▼"}
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

export default IndexAppleGod;
