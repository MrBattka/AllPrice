import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";

const OnePlusZTENothing = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let tecno = /T.Tecno/gi;
  let realme = /T.Realme/gi;
  let wiFi = /wifi/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixTecno = fixGb.replace(tecno, "Tecno");
    const fixRealme = fixTecno.replace(realme, "Realme");
    return fixRealme.replace(wiFi, "Wi-Fi");
  };

  const newPrice = (el) => {
    if (
      el.Товар.indexOf("Nothing Ear") != -1 ||
      el.Товар.indexOf("Nothing ear") != -1 ||
      el.Товар.indexOf("Nothing CMF") != -1
    ) {
      return Number(el.Стоимость) + 200;
    } else if (
      el.Товар.indexOf("ZenFone") != -1
    ) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Товар.indexOf("OnePlus") != -1 ||
      el.Товар.indexOf("RedMagic") != -1 ||
      el.Товар.indexOf("Nubia") != -1 ||
      el.Товар.indexOf("Nothing Phone") != -1
    ) {
      return Number(el.Стоимость) + 500;
    } else {
      return `${el.Стоимость} 🟥 `;
    }
  };

  return (
    <div>
      <div>
        <div>
          {el.length > 1 && (
            <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
              {isOpen
                ? "OnePlus / ZTE / Nothing ▲"
                : "OnePlus / ZTE / Nothing ▼"}
            </span>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={style.row}>
          <div className="col-sm-6 offset-3">
            <table className="table">
              <thead>
                <tr>{/* <th scope="col">Товар</th> */}</tr>
              </thead>
              <tbody>
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("OnePlus") != -1 ||
                          el.Товар.indexOf("RedMagic") != -1 ||
                          el.Товар.indexOf("Nubia") != -1 ||
                          el.Товар.indexOf("Nothing Phone") != -1 ||
                          el.Товар.indexOf("Nothing CMF") != -1 ||
                          el.Товар.indexOf("Nothing Ear") != -1 ||
                          el.Товар.indexOf("Nothing ear") != -1) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnePlusZTENothing;
