import React, { useState } from "react";
import style from "./styles.module.css";
import { baseFixArti } from "../../helpers/baseFix";
import { returnFixNameArti } from "./helpers/helpers";

const IndexArti = ({ el, artiData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  // artiData.map((vsemi) => {
  //   baseFixVsemi(vsemi) && returnStockPriceVseMi(fixNameVseMi(vsemi.name));
  //   baseFixVsemi(vsemi) && returnExtraPriceVseMi(fixNameVseMi(vsemi.name));
  //   if (
  //     vsemi.name &&
  //     typeof vsemi.name === "string" &&
  //     baseFixVsemi(vsemi) &&
  //     isOpen
  //   )
  //    {
  //     return (
  //       returnIDApple(fixNameVseMi(vsemi.name)) !== 'No match' &&
  //       returnExtraPriceVseMi(vsemi.name) &&
  //       returnStockPriceVseMi(vsemi.name) &&
  //       resultArr.push({
  //         id: returnIDApple(returnNameInArrVseMi(fixNameVseMi(vsemi.name))),
  //         name: returnNameInArrVseMi(fixNameVseMi(vsemi.name)),
  //         extraPrice: returnExtraPriceVseMi(fixNameVseMi(vsemi.name)),
  //         stockPrice: returnStockPriceVseMi(fixNameVseMi(vsemi.name)),
  //         provider: "Arti",
  //       })
  //     );
  //   }
  // });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Arti ▲" : "Arti ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div className={style.row}>
          {/* <BasicTable resultArr={resultArr} /> */}
          {artiData.map((arti) => (
            <div>
              {baseFixArti(arti) && returnFixNameArti(arti.name)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexArti;