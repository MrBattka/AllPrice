import React, { useState } from "react";
import { baseFixGarmin } from "../../helpers/baseFix";
import { fixNameGarmin, returnFixNameProductGarmin } from "./helpers/helpers";
import style from "./styles.module.css";

const IndexGarmin = ({ el, garminData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  garminData.map((garmin) => {
    // baseFixMiHonor(mihonor) && returnStockPriceMihonor(fixNameMihonor(mihonor.name));
    // baseFixMiHonor(mihonor) && returnExtraPriceMihonor(fixNameMihonor(mihonor.name));
    // if (
    //   mihonor.name &&
    //   typeof mihonor.name === "string" &&
    //   baseFixMiHonor(mihonor) &&
    //   isOpen
    // )
    //  {
    //   return (
    //     returnIDApple(fixNameMihonor(mihonor.name)) !== 'No match' &&
    //     returnExtraPriceMihonor(mihonor.name) &&
    //     returnStockPriceMihonor(mihonor.name) &&
    //     resultArr.push({
    //       id: returnIDApple(returnNameInArrMihonor(fixNameMihonor(mihonor.name))),
    //       name: returnNameInArrMihonor(fixNameMihonor(mihonor.name)),
    //       extraPrice: returnExtraPriceMihonor(fixNameMihonor(mihonor.name)),
    //       stockPrice: returnStockPriceMihonor(fixNameMihonor(mihonor.name)),
    //       provider: "MiHonor",
    //     })
    //   );
    // }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Garmin ▲" : "Garmin ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div className={style.row}>
          {/* <BasicTable resultArr={resultArr} /> */}
          {garminData.map((garmin) => (
            <div>
              {baseFixGarmin(garmin) &&
                returnFixNameProductGarmin(fixNameGarmin(garmin.name))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexGarmin;
