import { useState } from "react";
import { baseFixRootOpt } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { returnFixNameRootOpt, returnNameInArrRoot, returnStockPriceRoot } from "./helpers/helpers";

const IndexRootOpt = ({ el, rootOptData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  rootOptData.map((rootOpt) => {
    if (
      rootOpt.name &&
      typeof rootOpt.name === "string" &&
      baseFixRootOpt(rootOpt) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameRootOpt(returnNameInArrRoot(rootOpt.name)))) !== "No match" &&
        resultArr.push({
          id: getIdByName(defaultFixName(returnFixNameRootOpt(returnNameInArrRoot(rootOpt.name)))),
          name: returnNameInArrRoot(returnFixNameRootOpt(rootOpt.name)),
          stockPrice: returnStockPriceRoot(rootOpt.name),
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
