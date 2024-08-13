import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";

const GameConsoles = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;
  let playstation = /Playstation/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixPlaystation = fixGb.replace(playstation, "PlayStation");
    return fixPlaystation.replace(wiFi, "Wi-Fi");
  };

  const newPrice = (el) => {
    if (
      el.Товар.indexOf("Nintendo") != -1 ||
      el.Товар.indexOf("Oculus") != -1 ||
      el.Товар.indexOf("Playstation") != -1 ||
      el.Товар.indexOf("PlayStation") != -1 ||
      el.Товар.indexOf("Xbox") != -1 ||
      el.Товар.indexOf("PS5") != -1 ||
      el.Товар.indexOf("Pico") != -1 ||
      el.Товар.indexOf("Steam") != -1
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
              {isOpen ? "Игровые приставки ▲" : "Игровые приставки ▼"}
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
                        (el.Товар.indexOf("Nintendo") != -1 ||
                          el.Товар.indexOf("Oculus") != -1 ||
                          el.Товар.indexOf("Playstation") != -1 ||
                          el.Товар.indexOf("PlayStation") != -1 ||
                          el.Товар.indexOf("Xbox") != -1 ||
                          el.Товар.indexOf("PS5") != -1 ||
                          el.Товар.indexOf("Pico") != -1 ||
                          el.Товар.indexOf("Steam") != -1) &&
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

export default GameConsoles;
