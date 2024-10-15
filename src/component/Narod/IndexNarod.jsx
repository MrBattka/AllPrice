import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";

const IndexNarod = ({ el, narodData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  // narodData.map((narod) => {
  //   baseFixTagir(narod) && returnStockPriceTagir(fixNameTagir(narod.name));
  //   if (
  //     narod.name &&
  //     typeof narod.name === "string" &&
  //     baseFixTagir(narod) &&
  //     isOpen
  //   ) {
  //     return (
  //       returnIDApple(fixNameTagir(narod.name)) !== "No match" &&
  //       returnStockPriceTagir(narod.name) &&
  //       resultArr.push({
  //         id: returnIDApple(returnNameTagir(fixNameTagir(narod.name))),
  //         name: returnNameTagir(fixNameTagir(narod.name)),
  //         extraPrice: returnStockPriceTagir(fixNameTagir(narod.name)),
  //         stockPrice: returnStockPriceTagir(fixNameTagir(narod.name)),
  //         provider: "Народ",
  //       })
  //     );
  //   }
  // });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Народ ▲" : "Народ ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div className={style.row}>
          {/* <BasicTable resultArr={resultArr} /> */}

          {narodData.map((narod) => (
            <div>{narod.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexNarod;
