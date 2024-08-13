import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";

const Xiaomi = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    return fixGb.replace(wiFi, "Wi-Fi");
  };

  const newPrice = (el) => {
    if (el.Товар.indexOf("Redmi Buds") != -1) {
      return Number(el.Стоимость) + 100;
    } else if (
      el.Товар.indexOf("Mi ") != -1 ||
      el.Товар.indexOf("MI ") != -1 ||
      el.Товар.indexOf("Poco") != -1 ||
      el.Товар.indexOf("POCO") != -1
    ) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Товар.indexOf("Redmi Note") != -1 ||
      el.Товар.indexOf("Redmi") != -1 ||
      el.Товар.indexOf("Note") != -1 ||
      el.Товар.indexOf("Watch") != -1
    ) {
      return Number(el.Стоимость) + 400;
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
              {isOpen ? "Xiaomi ▲" : "Xiaomi ▼"}
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
                        (el.Товар.indexOf("Redmi Buds") != -1 ||
                          el.Товар.indexOf("Redmi Note") != -1 ||
                          el.Товар.indexOf("Redmi") != -1 ||
                          el.Товар.indexOf("Note") != -1 ||
                          el.Товар.indexOf("Mi Watch") != -1 ||
                          el.Товар.indexOf("Mi ") != -1 ||
                          el.Товар.indexOf("MI ") != -1 ||
                          el.Товар.indexOf("Poco") != -1 ||
                          el.Товар.indexOf("POCO") != -1) &&
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

export default Xiaomi;
