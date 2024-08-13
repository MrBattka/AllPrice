import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";

const OtherProduct = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let aws9 = /AW Series 9/gi;
  let aw9 = /AW  9/gi;
  let awu2 = /AW Ultra 2/gi;
  let awSE = /AW SE/gi;
  let apple = /Apple /gi;
  let mb = /MB /gi;
  let ipad = /🇺🇸 \(2022\)/gi;
  let aws8 = /AW 8/gi;
  let airPods = /Airpods/gi;
  let proMax = /ProMax/gi;
  let wiFi = /wifi/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixWiFi = fixGb.replace(wiFi, "Wi-Fi");
    const fixAWS9 = fixWiFi.replace(aws9, "S9");
    const fixAW9 = fixAWS9.replace(aw9, "S9");
    const fixAW8 = fixAW9.replace(aws8, "S8");
    const fixAWU2 = fixAW8.replace(awu2, "Ultra 2");
    const fixAWSE = fixAWU2.replace(awSE, "SE");
    const fixApple = fixAWSE.replace(apple, "");
    const fixmb = fixApple.replace(mb, "");
    const fixIpad = fixmb.replace(ipad, "(2022) 🇺🇸");
    const fixAirPods = fixIpad.replace(airPods, "AirPods");
    return fixAirPods.replace(proMax, "Pro Max");
  };

  const newPrice = (el) => {
    if (
      el.Товар.indexOf("AirPods") == -1 ||
      el.Товар.indexOf("Airpods") == -1 ||
      el.Товар.indexOf("Air Pods") == -1 ||
      el.Товар.indexOf("Pencil") == -1 ||
      el.Товар.indexOf("HomePod") == -1
    ) {
      return Number(el.Стоимость) + 100;
    } else if (
      el.Товар.indexOf("Watch SE") == -1 ||
      el.Товар.indexOf("SE (2023) Gen") == -1
    ) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Товар.indexOf("iPad 9") == -1 ||
      el.Товар.indexOf("iPad 10") == -1 ||
      el.Товар.indexOf("iPad 9") == -1
    ) {
      return Number(el.Стоимость) + 400;
    } else if (
      el.Товар.indexOf("SE 2") == -1 ||
      el.Товар.indexOf("SE 3") == -1 ||
      el.Товар.indexOf("11 64") == -1 ||
      el.Товар.indexOf("11 128") == -1 ||
      el.Товар.indexOf("12 64") == -1 ||
      el.Товар.indexOf("12 128") == -1 ||
      el.Товар.indexOf("12 Pro Max") == -1 ||
      el.Товар.indexOf("13 128") == -1 ||
      el.Товар.indexOf("13 256") == -1 ||
      el.Товар.indexOf("13 512") == -1 ||
      el.Товар.indexOf("14 128") == -1 ||
      el.Товар.indexOf("14 256") == -1 ||
      el.Товар.indexOf("14 512") == -1 ||
      el.Товар.indexOf("14 Plus") == -1 ||
      el.Товар.indexOf("14 Pro 128") == -1 ||
      el.Товар.indexOf("14 Pro 256") == -1 ||
      el.Товар.indexOf("14 Pro 512") == -1 ||
      el.Товар.indexOf("14 Pro 1Tb") == -1 ||
      el.Товар.indexOf("14 Pro 1TB") == -1 ||
      el.Товар.indexOf("14 ProMax") == -1 ||
      el.Товар.indexOf("15 128") == -1 ||
      el.Товар.indexOf("15 256") == -1 ||
      el.Товар.indexOf("15 512") == -1 ||
      el.Товар.indexOf("iPad Mini 6") == -1 ||
      el.Товар.indexOf("iPad Air 5") == -1 ||
      el.Товар.indexOf("iPad Pro 11") == -1 ||
      el.Товар.indexOf("AW Series 9") == -1 ||
      el.Товар.indexOf("Mac") == -1 ||
      el.Товар.indexOf("AW 9") == -1 ||
      el.Товар.indexOf("AW  9") == -1 ||
      el.Товар.indexOf("AW Series 8") == -1 ||
      el.Товар.indexOf("AW 8") == -1 ||
      el.Товар.indexOf("AW  8") == -1
    ) {
      return Number(el.Стоимость) + 500;
    } else if (
      el.Товар.indexOf("15 Plus 128") == -1 ||
      el.Товар.indexOf("15 Plus 256") == -1 ||
      el.Товар.indexOf("15 Plus 512") == -1 ||
      el.Товар.indexOf("15 Pro 128") == -1 ||
      el.Товар.indexOf("15 Pro 256") == -1 ||
      el.Товар.indexOf("15 Pro 512") == -1 ||
      el.Товар.indexOf("15 Pro 1Tb") == -1 ||
      el.Товар.indexOf("15 ProMax 256") == -1 ||
      el.Товар.indexOf("15 ProMax 512") == -1 ||
      el.Товар.indexOf("15 ProMax 1Tb") == -1 ||
      el.Товар.indexOf("iPad Pro 12.9") == -1 ||
      el.Товар.indexOf("Ultra 2") == -1
    ) {
      return Number(el.Стоимость) + 600;
    } else if (
      el.Товар.indexOf("Macbook") == -1 ||
      el.Товар.indexOf("Book ") == -1 ||
      el.Товар.indexOf("MB") == -1 ||
      el.Товар.indexOf("Vision Pro") == -1
    ) {
      return Number(el.Стоимость) + 1000;
    } else {
      return `${el.Стоимость} 🟥 `;
    }
  };

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Новый товар ▲" : "Новый товар ▼"}
          </span>
        )}
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
                        el.Товар.indexOf("Oppo") == -1 &&
                        el.Товар.indexOf("HUAWEI") == -1 &&
                        el.Товар.indexOf("Huawei") == -1 &&
                        el.Товар.indexOf("Marshall") == -1 &&
                        el.Товар.indexOf("Blackview") == -1 &&
                        el.Товар.indexOf("infinix") == -1 &&
                        el.Товар.indexOf("Fujifilm") == -1 &&
                        el.Товар.indexOf("Beats") == -1 &&
                        el.Товар.indexOf("AGM") == -1 &&
                        el.Товар.indexOf("Blackview") == -1 &&
                        el.Товар.indexOf("Insta ") == -1 &&
                        el.Товар.indexOf("Sony Wireless") == -1 &&
                        el.Товар.indexOf("Wireless") == -1 &&
                        el.Товар.indexOf("Acer") == -1 &&
                        el.Товар.indexOf("MSI") == -1 &&
                        el.Товар.indexOf("Motorola") == -1 &&
                        el.Товар.indexOf("Nothing Phone") == -1 &&
                        el.Товар.indexOf("Nothing Ear") == -1 &&
                        el.Товар.indexOf("Nothing ear") == -1 &&
                        el.Товар.indexOf("Nothing CMF") == -1 &&
                        el.Товар.indexOf("Realme") == -1 &&
                        el.Товар.indexOf("OnePlus") == -1 &&
                        el.Товар.indexOf("RedMagic") == -1 &&
                        el.Товар.indexOf("Tecno") == -1 &&
                        el.Товар.indexOf("Nubia") == -1 &&
                        el.Товар.indexOf("Redmi Buds") == -1 &&
                        el.Товар.indexOf("Redmi Note") == -1 &&
                        el.Товар.indexOf("Redmi") == -1 &&
                        el.Товар.indexOf("Note") == -1 &&
                        el.Товар.indexOf("Mi Watch") == -1 &&
                        el.Товар.indexOf("Mi ") == -1 &&
                        el.Товар.indexOf("MI ") == -1 &&
                        el.Товар.indexOf("Poco") == -1 &&
                        el.Товар.indexOf("POCO") == -1 &&
                        el.Товар.indexOf("Galaxy") == -1 &&
                        el.Товар.indexOf("Watch") == -1 &&
                        el.Товар.indexOf("Tab S") == -1 &&
                        el.Товар.indexOf("A05s") == -1 &&
                        el.Товар.indexOf("A05") == -1 &&
                        el.Товар.indexOf("A15") == -1 &&
                        el.Товар.indexOf("A25") == -1 &&
                        el.Товар.indexOf("A24") == -1 &&
                        el.Товар.indexOf("A25") == -1 &&
                        el.Товар.indexOf("A54") == -1 &&
                        el.Товар.indexOf("A34") == -1 &&
                        el.Товар.indexOf("A35") == -1 &&
                        el.Товар.indexOf("M34") == -1 &&
                        el.Товар.indexOf("M54") == -1 &&
                        el.Товар.indexOf("A55") == -1 &&
                        el.Товар.indexOf("S21") == -1 &&
                        el.Товар.indexOf("S22") == -1 &&
                        el.Товар.indexOf("S23") == -1 &&
                        el.Товар.indexOf("S24") == -1 &&
                        el.Товар.indexOf("Z Flip") == -1 &&
                        el.Товар.indexOf("Z Fold") == -1 &&
                        el.Товар.indexOf("Asus") == -1 &&
                        el.Товар.indexOf("Lenovo") == -1 &&
                        el.Товар.indexOf("ZenFone") == -1 &&
                        el.Товар.indexOf("Google") == -1 &&
                        el.Товар.indexOf("Pixel") == -1 &&
                        el.Товар.indexOf("Xperia") == -1 &&
                        el.Товар.indexOf("ROG") == -1 &&
                        el.Товар.indexOf("Rog") == -1 &&
                        el.Товар.indexOf("DJL ") == -1 &&
                        el.Товар.indexOf("DJI ") == -1 &&
                        el.Товар.indexOf("Dji ") == -1 &&
                        el.Товар.indexOf("Garmin") == -1 &&
                        el.Товар.indexOf("JBL") == -1 &&
                        el.Товар.indexOf("GoPro") == -1 &&
                        el.Товар.indexOf("RayBan") == -1 &&
                        el.Товар.indexOf("Nintendo") == -1 &&
                        el.Товар.indexOf("Oculus") == -1 &&
                        el.Товар.indexOf("Playstation") == -1 &&
                        el.Товар.indexOf("PlayStation") == -1 &&
                        el.Товар.indexOf("Xbox") == -1 &&
                        el.Товар.indexOf("PS5") == -1 &&
                        el.Товар.indexOf("Pico") == -1 &&
                        el.Товар.indexOf("Steam") == -1 &&
                        el.Товар.indexOf("Airwrap ") == -1 &&
                        el.Товар.indexOf("Heapdphone") == -1 &&
                        el.Товар.indexOf("V1") == -1 &&
                        el.Товар.indexOf("Vented") == -1 &&
                        el.Товар.indexOf("HD0") == -1 &&
                        el.Товар.indexOf("HD1") == -1 &&
                        el.Товар.indexOf("Gen5 Detect") == -1 &&
                        el.Товар.indexOf("Gen 5 Detect") == -1 &&
                        el.Товар.indexOf("RB0") == -1 &&
                        el.Товар.indexOf("HT0") == -1 &&
                        el.Товар.indexOf("HS0") == -1 &&
                        el.Товар.indexOf("Designed") == -1 &&
                        el.Товар.indexOf("AirPods") == -1 &&
                        el.Товар.indexOf("Airpods") == -1 &&
                        el.Товар.indexOf("Air Pods") == -1 &&
                        el.Товар.indexOf("Pencil") == -1 &&
                        el.Товар.indexOf("HomePod") == -1 &&
                        el.Товар.indexOf("Watch SE") == -1 &&
                        el.Товар.indexOf("SE (2023) Gen") == -1 &&
                        el.Товар.indexOf("SE (2022) Gen") == -1 &&
                        el.Товар.indexOf("SE 2") == -1 &&
                        el.Товар.indexOf("SE 3") == -1 &&
                        el.Товар.indexOf("SE 64") == -1 &&
                        el.Товар.indexOf("SE 128") == -1 &&
                        el.Товар.indexOf("SE 256") == -1 &&
                        el.Товар.indexOf("11 64") == -1 &&
                        el.Товар.indexOf("11 128") == -1 &&
                        el.Товар.indexOf("12 64") == -1 &&
                        el.Товар.indexOf("12 128") == -1 &&
                        el.Товар.indexOf("12 256") == -1 &&
                        el.Товар.indexOf("12 Pro Max") == -1 &&
                        el.Товар.indexOf("13 128") == -1 &&
                        el.Товар.indexOf("13 256") == -1 &&
                        el.Товар.indexOf("13 512") == -1 &&
                        el.Товар.indexOf("14 128") == -1 &&
                        el.Товар.indexOf("14 256") == -1 &&
                        el.Товар.indexOf("14 512") == -1 &&
                        el.Товар.indexOf("14 Plus") == -1 &&
                        el.Товар.indexOf("14 Pro 128") == -1 &&
                        el.Товар.indexOf("14 Pro 256") == -1 &&
                        el.Товар.indexOf("14 Pro 512") == -1 &&
                        el.Товар.indexOf("14 Pro 1Tb") == -1 &&
                        el.Товар.indexOf("14 Pro 1TB") == -1 &&
                        el.Товар.indexOf("14 ProMax") == -1 &&
                        el.Товар.indexOf("15 128") == -1 &&
                        el.Товар.indexOf("15 256") == -1 &&
                        el.Товар.indexOf("15 512") == -1 &&
                        el.Товар.indexOf("iPad 9") == -1 &&
                        el.Товар.indexOf("IPad 9") == -1 &&
                        el.Товар.indexOf("iPad 10") == -1 &&
                        el.Товар.indexOf("iPad Mini") == -1 &&
                        el.Товар.indexOf("iPad Air") == -1 &&
                        el.Товар.indexOf("iPad Pro") == -1 &&
                        el.Товар.indexOf("AW Series 9") == -1 &&
                        el.Товар.indexOf("AW 9") == -1 &&
                        el.Товар.indexOf("AW  9") == -1 &&
                        el.Товар.indexOf("AW Series 8") == -1 &&
                        el.Товар.indexOf("AW 8") == -1 &&
                        el.Товар.indexOf("AW  8") == -1 &&
                        el.Товар.indexOf("Watch S8") == -1 &&
                        el.Товар.indexOf("Watch S9") == -1 &&
                        el.Товар.indexOf("Mac") == -1 &&
                        el.Товар.indexOf("15 Plus 128") == -1 &&
                        el.Товар.indexOf("15 Plus 256") == -1 &&
                        el.Товар.indexOf("15 Plus 512") == -1 &&
                        el.Товар.indexOf("15 Pro 128") == -1 &&
                        el.Товар.indexOf("15 Pro 256") == -1 &&
                        el.Товар.indexOf("15 Pro 512") == -1 &&
                        el.Товар.indexOf("15 Pro 1Tb") == -1 &&
                        el.Товар.indexOf("15 ProMax 256") == -1 &&
                        el.Товар.indexOf("15 ProMax 512") == -1 &&
                        el.Товар.indexOf("15 ProMax 1Tb") == -1 &&
                        el.Товар.indexOf("15 Pro Max 1TB") == -1 &&
                        el.Товар.indexOf("15 Pro Max 1Tb") == -1 &&
                        el.Товар.indexOf("iPad Pro 12.9") == -1 &&
                        el.Товар.indexOf("Ultra 2") == -1 &&
                        el.Товар.indexOf("Macbook") == -1 &&
                        el.Товар.indexOf("Book ") == -1 &&
                        el.Товар.indexOf("MB") == -1 &&
                        el.Товар.indexOf("Vision Pro") == -1 &&
                        el.Товар.indexOf("Magic Keyboard") == -1 &&
                        returnFixPrice(el, fixName(el)) + el.Стоимость}
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

export default OtherProduct;
