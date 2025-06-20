import React, { useState } from "react";
import { baseFixRootOpt } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { returnFixNameRootOpt } from "./helpers/helpers";
import style from "../styles.module.css";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexRootOpt = ({ el, rootOptData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  rootOptData.map((rootOpt) => {
    if (
      rootOpt.name &&
      typeof rootOpt.name === "string" &&
      baseFixRootOpt(rootOpt) &&
      rootOpt.price !== 'ожидается' &&
      isOpen
    ) {
      return (
        (returnIDSamsung(returnFixNameRootOpt(rootOpt.name)) !== "No match" ||
      returnIDSamsung2(returnFixNameRootOpt(rootOpt.name)) !== "No match") &&
        rootOpt.price &&
        resultArr.push({
          id: returnIDSamsung(returnFixNameRootOpt(rootOpt.name)) |
          returnIDSamsung2(returnFixNameRootOpt(rootOpt.name)),
          name: returnFixNameRootOpt(rootOpt.name),
          stockPrice: rootOpt.price,
          provider: "RootOPT",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "RootOPT ▲" : "RootOPT ▼"}
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

export default IndexRootOpt;
