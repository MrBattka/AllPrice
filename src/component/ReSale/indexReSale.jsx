import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";
import { returnFixNameReSale, returnNameReSale, returnStockPriceReSale } from "./helpers/helpers";
import { baseFixReSale } from "../../helpers/baseFix";

const IndexReSale = ({ el, resaleData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

//   resaleData.map((resale) => {
//     baseFixVsemi(vsemi) && returnStockPriceVseMi(fixNameVseMi(vsemi.name));
//     baseFixVsemi(vsemi) && returnExtraPriceVseMi(fixNameVseMi(vsemi.name));
//     if (
//       vsemi.name &&
//       typeof vsemi.name === "string" &&
//       baseFixVsemi(vsemi) &&
//       isOpen
//     )
//      {
//       return (
//         returnIDApple(fixNameVseMi(vsemi.name)) !== 'No match' &&
//         returnExtraPriceVseMi(vsemi.name) &&
//         returnStockPriceVseMi(vsemi.name) &&
//         resultArr.push({
//           id: returnIDApple(returnNameInArrVseMi(fixNameVseMi(vsemi.name))),
//           name: returnNameInArrVseMi(fixNameVseMi(vsemi.name)),
//           extraPrice: returnExtraPriceVseMi(fixNameVseMi(vsemi.name)),
//           stockPrice: returnStockPriceVseMi(fixNameVseMi(vsemi.name)),
//           provider: "VseMi",
//         })
//       );
//     }
//   });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Re:Sale ▲" : "Re:Sale ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div className={style.row}>
          {/* <BasicTable resultArr={resultArr} /> */}

          {resaleData.map((resale) => (
            <div>
                {baseFixReSale(resale) && returnNameReSale(returnFixNameReSale(resale.name))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexReSale;