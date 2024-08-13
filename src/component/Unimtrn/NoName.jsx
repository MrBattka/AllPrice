import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";

const NoName = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;

  console.log(el);

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    return fixGb.replace(wiFi, "Wi-Fi");
  };

  const newPrice = (el) => {
    if (
      el.Товар.indexOf("AGM") != -1 ||
      el.Товар.indexOf("Blackview") != -1 ||
      el.Товар.indexOf("Insta ") != -1 ||
      el.Товар.indexOf("HUAWEI") != -1 ||
      el.Товар.indexOf("Huawei") != -1 ||
      el.Товар.indexOf("Fujifilm") != -1 ||
      el.Товар.indexOf("Beats") != -1 ||
      el.Товар.indexOf("infinix") != -1 ||
      el.Товар.indexOf("Tecno") != -1 ||
      el.Товар.indexOf("Realme") != -1
    ) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Товар.indexOf("RayBan") != -1 ||
      el.Товар.indexOf("Oppo") != -1 ||
      el.Товар.indexOf("Motorola") != -1
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
                ? "No name ▲"
                : "No name ▼"}
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
                        (el.Товар.indexOf("Fujifilm") != -1 ||
                          el.Товар.indexOf("Beats") != -1 ||
                          el.Товар.indexOf("Blackview") != -1 ||
                          el.Товар.indexOf("AGM") != -1 ||
                          el.Товар.indexOf("Insta ") != -1 ||
                          el.Товар.indexOf("RayBan") != -1 ||
                          el.Товар.indexOf("infinix") != -1 ||
                          el.Товар.indexOf("Oppo") != -1 ||
                          el.Товар.indexOf("HUAWEI") != -1 ||
                          el.Товар.indexOf("Huawei") != -1 ||
                          el.Товар.indexOf("Realme") != -1 ||
                          el.Товар.indexOf("Tecno") != -1 ||
                          el.Товар.indexOf("Motorola") != -1) &&
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

export default NoName;
