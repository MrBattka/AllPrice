import React, { useState } from "react";
import { baseFixMiOpts } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { fixNameMiOpts, returnExtraPriceMiOpts, returnNameInArrMiOpts, returnStockPriceMiOpts } from "./helpers/helpers";
import style from "../styles.module.css";

const IndexMiOptsNotID = ({ el, mioptsData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  mioptsData.map((miopts) => {
    baseFixMiOpts(miopts) && returnStockPriceMiOpts(fixNameMiOpts(miopts.name));
    baseFixMiOpts(miopts) && returnExtraPriceMiOpts(fixNameMiOpts(miopts.name));
    if (
      miopts.name &&
      typeof miopts.name === "string" &&
      baseFixMiOpts(miopts)
    ) {
      return (
        returnIDSamsung(fixNameMiOpts(miopts.name)) === "No match" &&
        returnExtraPriceMiOpts(miopts.name) &&
        returnStockPriceMiOpts(miopts.name) &&
        resultArr.push({
          id: returnIDSamsung(returnNameInArrMiOpts(fixNameMiOpts(miopts.name))),
          name: returnNameInArrMiOpts(fixNameMiOpts(miopts.name)),
          extraPrice: returnExtraPriceMiOpts(fixNameMiOpts(miopts.name)),
          stockPrice: returnStockPriceMiOpts(fixNameMiOpts(miopts.name)),
          provider: "MiOpts",
        })
      );
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.titleNotID} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "MiOpts Not ID ▲" : "MiOpts Not ID ▼"}
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

export default IndexMiOptsNotID;
