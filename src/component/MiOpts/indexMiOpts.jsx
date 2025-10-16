import { useState } from "react";
import { baseFixMiOpts } from "../../helpers/baseFix";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
import BasicTable from "../Create Table/Table";
import style from "../styles.module.css";
import {
  fixNameMiOpts,
  returnExtraPriceMiOpts,
  returnNameInArrMiOpts,
  returnStockPriceMiOpts,
} from "./helpers/helpers";
import { defaultFixName } from "../../helpers/defaultFixName";
import { getIdByName } from "../../helpers/returnIDByName";

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
        getIdByName(defaultFixName(fixNameMiOpts(miopts.name))) !== "No match" &&
        returnExtraPriceMiOpts(miopts.name) &&
        returnStockPriceMiOpts(miopts.name) &&
        returnStockPriceMiOpts(fixNameMiOpts(miopts.name)) > 1000 &&
        (returnNameInArrMiOpts(miopts.name).indexOf("GB") !== -1 ||
          returnNameInArrMiOpts(miopts.name).indexOf("TRB") !== -1) &&
        resultArr.push({
          id: getIdByName(
            defaultFixName(returnNameInArrMiOpts(fixNameMiOpts(miopts.name)))
          ),
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
