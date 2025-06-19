import React, { useState } from "react";
import { baseFixMiOpts } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import { fixNameMiOpts, returnExtraPriceMiOpts, returnNameInArrMiOpts, returnStockPriceMiOpts } from "./helpers/helpers";
import style from "../styles.module.css";
import { returnIDSamsung2 } from "../../helpers/returnIDSamsung2";

const IndexMiOpts = ({ el, mioptsData }) => {
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
        (returnIDSamsung(fixNameMiOpts(miopts.name)) !== "No match" ||
      returnIDSamsung2(fixNameMiOpts(miopts.name)) !== "No match") &&
        returnExtraPriceMiOpts(miopts.name) &&
        returnStockPriceMiOpts(miopts.name) &&
        resultArr.push({
          id: returnIDSamsung(returnNameInArrMiOpts(fixNameMiOpts(miopts.name))) |
          returnIDSamsung2(returnNameInArrMiOpts(fixNameMiOpts(miopts.name))),
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
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "MiOpts ▲" : "MiOpts ▼"}
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

export default IndexMiOpts;
