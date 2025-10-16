import { useState } from "react";
import { baseFixLikemob } from "../../helpers/baseFix";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  returnFixNameLikemob,
  returnNameInArrLikemob,
  returnStockPriceLikemob,
} from "./helpers/helpers";

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
      returnStockPriceLikemob(returnFixNameLikemob(likemob.name)).indexOf("00") !== -1 &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameLikemob(likemob.name))) === "No match" &&
        returnStockPriceLikemob(likemob.name) &&
        resultArr.push({
          id: getIdByName(defaultFixName(
            returnNameInArrLikemob(returnFixNameLikemob(likemob.name)))
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
