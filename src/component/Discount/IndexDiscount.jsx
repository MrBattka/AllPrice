import React, { useState } from "react";
import BasicTable from "../Create Table/Table";
import style from "./styles.module.css";

const IndexDiscount = ({ el, discountData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

    // racmagData.map((racmag) => {
    //   baseFixRacmag(racmag) && returnStockPriceRacmag(returnFixNameRacmag(racmag.name));
    //   baseFixRacmag(racmag) && returnExtraPriceRacmag(returnFixNameRacmag(racmag.name));
    //   if (
    //     racmag.name &&
    //     typeof racmag.name === "string" &&
    //     baseFixRacmag(racmag) &&
    //     isOpen
    //   )
    //    {
    //     return (
    //       returnIDSamsung(returnFixNameRacmag(racmag.name)) !== 'No match' &&
    //       returnStockPriceRacmag(racmag.name) &&
    //       resultArr.push({
    //         id: returnIDSamsung(returnNameInArrRacmag(returnFixNameRacmag(racmag.name))),
    //         name: returnNameInArrRacmag(returnFixNameRacmag(racmag.name)),
    //         extraPrice: returnExtraPriceRacmag(returnFixNameRacmag(racmag.name)),
    //         stockPrice: returnStockPriceRacmag(returnFixNameRacmag(racmag.name)),
    //         provider: "Рацмаг",
    //       })
    //     );
    //   }
    // });
    

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Discount ▲" : "Discount ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div className={style.row}>
          {/* <BasicTable resultArr={resultArr} /> */}
          {discountData.map((dis) => (
            <div>{dis.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexDiscount;