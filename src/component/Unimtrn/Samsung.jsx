import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";

const Samsung = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let zFlip = /Z flip/gi;
  let galaxyWatch = /Galaxy Watch/gi;
  let classik = /Classik/gi;
  let wiFi = /wifi/gi;
  let s21 = /Samsung S21/gi;
  let s22 = /Samsung S22/gi;
  let s23 = /Samsung S23/gi;
  let s24 = /Samsung S24/gi;
  let a550 = /A550/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixGalaxyWatch = fixGb.replace(galaxyWatch, "Watch");
    const fixClassik = fixGalaxyWatch.replace(classik, "Classic");
    const fixS21 = fixClassik.replace(s21, "S21");
    const fixS22 = fixS21.replace(s22, "S22");
    const fixS23 = fixS22.replace(s23, "S23");
    const fixS24 = fixS23.replace(s24, "S24");
    const fixWiFi = fixS24.replace(wiFi, "Wi-Fi");
    const fixA550 = fixWiFi.replace(a550, "A55");
    return fixA550.replace(zFlip, "Z Flip");
  };

  const newPrice = (el) => {
    if (
      el.Товар.indexOf("Galaxy Buds") != -1 ||
      el.Товар.indexOf("Galaxy Smart Tag") != -1
    ) {
      return Number(el.Стоимость) + 100;
    } else if (
      el.Товар.indexOf("A05s ") != -1 ||
      el.Товар.indexOf("A05 ") != -1 ||
      el.Товар.indexOf("A15 ") != -1 ||
      el.Товар.indexOf("A25 ") != -1 ||
      el.Товар.indexOf("A24 ") != -1 ||
      el.Товар.indexOf("A54 ") != -1 ||
      el.Товар.indexOf("A35 ") != -1 ||
      el.Товар.indexOf("A34 ") != -1 ||
      el.Товар.indexOf("M34 ") != -1 ||
      el.Товар.indexOf("M54 ") != -1 ||
      el.Товар.indexOf("A55") != -1 ||
      el.Товар.indexOf("Galaxy Watch") != -1
    ) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Товар.indexOf("Watch 6") != -1 ||
      el.Товар.indexOf("Tab A") != -1
    ) {
      return Number(el.Стоимость) + 400;
    } else if (
      el.Товар.indexOf("S21") != -1 ||
      el.Товар.indexOf("S22") != -1 ||
      el.Товар.indexOf("S23") != -1 ||
      el.Товар.indexOf("S24") != -1 ||
      el.Товар.indexOf("Z Flip") != -1 ||
      el.Товар.indexOf("Z Fold") != -1 ||
      el.Товар.indexOf("Tab S") != -1
    ) {
      return Number(el.Стоимость) + 500;
    } else if (el.Товар.indexOf("Tab S") != -1) {
      return Number(el.Стоимость) + 600;
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
              {isOpen ? "Samsung ▲" : "Samsung ▼"}
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
                        (el.Товар.indexOf("Galaxy Buds") != -1 ||
                        el.Товар.indexOf("Smart Tag") != -1 ||
                          el.Товар.indexOf("A05s") != -1 ||
                          el.Товар.indexOf("A05") != -1 ||
                          el.Товар.indexOf("A15") != -1 ||
                          el.Товар.indexOf("A25") != -1 ||
                          el.Товар.indexOf("A24") != -1 ||
                          el.Товар.indexOf("A54") != -1 ||
                          el.Товар.indexOf("A34") != -1 ||
                          el.Товар.indexOf("M34") != -1 ||
                          el.Товар.indexOf("M54") != -1 ||
                          el.Товар.indexOf("A55") != -1 ||
                          el.Товар.indexOf("S21") != -1 ||
                          el.Товар.indexOf("S22") != -1 ||
                          el.Товар.indexOf("S23") != -1 ||
                          el.Товар.indexOf("S24") != -1 ||
                          el.Товар.indexOf("Z Flip") != -1 ||
                          el.Товар.indexOf("Z Fold") != -1 ||
                          el.Товар.indexOf("Watch 6") != -1 ||
                          el.Товар.indexOf("Tab S") != -1) &&
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

export default Samsung;
