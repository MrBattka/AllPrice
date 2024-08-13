import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";

const GoogleSonyAsusLenovo = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let rog = /Rog/gi;
  let sony = /Sony Xperia/gi;
  let zenFone = /Asus ZenFone/gi;
  let wiFi = /wifi/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixSony = fixGb.replace(sony, "Xperia");
    const fixRog = fixSony.replace(rog, "ROG");
    const fixZenFone = fixRog.replace(zenFone, "ZenFone");
    return fixZenFone.replace(wiFi, "Wi-Fi");
  };

  const newPrice = (el) => {
    if (el.Товар.indexOf("Asus") != -1 || el.Товар.indexOf("ZenFone") != -1) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Товар.indexOf("Google") != -1 ||
      el.Товар.indexOf("Pixel") != -1 ||
      el.Товар.indexOf("Xperia") != -1 ||
      el.Товар.indexOf("ROG") != -1 ||
      el.Товар.indexOf("Rog") != -1 ||
      el.Товар.indexOf("Sony Wireless") != -1 ||
      el.Товар.indexOf("Wireless WH") != -1
    ) {
      return Number(el.Стоимость) + 400;
    } else if (
      el.Товар.indexOf("Acer") != -1 ||
      el.Товар.indexOf("MSI") != -1 ||
      el.Товар.indexOf("Asus") != -1 ||
      el.Товар.indexOf("Lenovo") != -1
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
                ? "Google / Sony / Asus / Lenovo ▲"
                : "Google / Sony / Asus / Lenovo ▼"}
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
                        (el.Товар.indexOf("Asus") != -1 ||
                          el.Товар.indexOf("ZenFone") != -1 ||
                          el.Товар.indexOf("Google") != -1 ||
                          el.Товар.indexOf("Pixel") != -1 ||
                          el.Товар.indexOf("Xperia") != -1 ||
                          el.Товар.indexOf("ROG") != -1 ||
                          el.Товар.indexOf("Rog") != -1 ||
                          el.Товар.indexOf("Sony Wireless") != -1 ||
                          el.Товар.indexOf("Wireless WH") != -1 ||
                          el.Товар.indexOf("Lenovo") != -1 ||
                          el.Товар.indexOf("Acer") != -1 ||
                          el.Товар.indexOf("MSI") != -1 ||
                          el.Товар.indexOf("Asus") != -1 ||
                          el.Товар.indexOf("Lenovo") != -1) &&
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

export default GoogleSonyAsusLenovo;
