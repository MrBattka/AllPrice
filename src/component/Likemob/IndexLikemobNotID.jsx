import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import { baseFixLikemob } from "../../helpers/baseFix";
import { returnFixNameLikemob, returnNameInArrLikemob, returnStockPriceLikemob } from "./helpers/helpers";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexLikemobNotID = ({ el, likemobData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  likemobData.map((likemob) => {
    baseFixLikemob(likemob) &&
      returnStockPriceLikemob(returnFixNameLikemob(likemob.name));
    if (
      likemob.name &&
      typeof likemob.name === "string" &&
      baseFixLikemob(likemob) &&
      isOpen
    ) {
      return (
        (returnIDSamsung(returnFixNameLikemob(likemob.name)) === "No match" ||
      returnIDSamsung2(returnFixNameLikemob(likemob.name)) === "No match") &&
        returnStockPriceLikemob(likemob.name) &&
        resultArr.push({
          id: returnIDSamsung(
            returnNameInArrLikemob(returnFixNameLikemob(likemob.name))
          ) |
          returnIDSamsung2(
            returnNameInArrLikemob(returnFixNameLikemob(likemob.name))
          ),
          name: returnNameInArrLikemob(returnFixNameLikemob(likemob.name)),
          stockPrice: returnStockPriceLikemob(
            returnFixNameLikemob(likemob.name)
          ),
          provider: "Likemob",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Likemob Not ID ▲" : "Likemob Not ID ▼"}
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

export default IndexLikemobNotID;
