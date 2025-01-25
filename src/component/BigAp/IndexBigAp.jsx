import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";
import { baseFixBigAp } from "../../helpers/baseFix";
import { returnFixNameBigAp } from "./helpers/helpers";

const IndexBigAp = ({ el, bigApData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  // aliksonData.map((racmag) => {
  //   baseFixAlikson(racmag) &&
  //     returnStockPriceAlikson(returnFixNameAlikson(racmag.name));
  //   if (
  //     racmag.name &&
  //     typeof racmag.name === "string" &&
  //     baseFixAlikson(racmag) &&
  //     isOpen
  //   ) {
  //     return (
  //       returnIDSamsung(returnFixNameAlikson(racmag.name)) !== "No match" &&
  //       returnStockPriceAlikson(racmag.name) &&
  //       resultArr.push({
  //         id: returnIDSamsung(
  //           returnNameInArrAlikson(returnFixNameAlikson(racmag.name))
  //         ),
  //         name: returnNameInArrAlikson(returnFixNameAlikson(racmag.name)),
  //         stockPrice: returnStockPriceAlikson(returnFixNameAlikson(racmag.name)),
  //         provider: "Alikson",
  //       })
  //     );
  //   }
  // });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "BigAp ▲" : "BigAp ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div className={style.row}>
          {/* <BasicTable resultArr={resultArr} /> */}
          {bigApData.map((el) => (
            <div>{baseFixBigAp(el) && returnFixNameBigAp(el.name)}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexBigAp;
