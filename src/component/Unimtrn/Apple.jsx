import React, { useState } from "react";
import { baseFix } from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { masterArr } from "../../helpers/masterArr";
import BasicTable from "../Hi/HiTable";
import { newPriceUNIMETRN } from "../../helpers/NewPrice";
import { returnApple } from "./Apple/apple";

const Apple = ({ el, dataUNIMTRN }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  let gb = /Gb/gi;
  let aws9 = /AW Series 9/gi;
  let aw9Space = /AW  9/gi;
  let aw9 = /AW 9/gi;
  let awu2 = /AW Ultra 2/gi;
  let awSE = /AW SE/gi;
  let apple = /Apple /gi;
  let mb = /MB /gi;
  let ipad = /🇺🇸 \(2022\)/gi;
  let aw8Spaces = /AW  8/gi;
  let aws8 = /AW 8/gi;
  let airPods = /Airpods/gi;
  let proMax = /ProMax/gi;
  let wiFi = /wifi/gi;
  let watchS8 = /Watch S8/gi;
  let IPad9 = /IPad 9/gi;
  let fixFlagJp = /🇺🇸🇯🇵 \(2022\)/gi;
  let fixFlagUs = /🇺🇸🇯🇵🇦🇺 \(2022\)/gi;
  let fixFlagAu = /🇺🇸🇦🇺 \(2022\)/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixIPad9 = fixGb.replace(IPad9, "iPad 9");
    const fixWatchS8 = fixIPad9.replace(watchS8, "S8");
    const fixWiFi = fixWatchS8.replace(wiFi, "Wi-Fi");
    const fixAWS9Space = fixWiFi.replace(aw9Space, "S9");
    const fixAWS9 = fixAWS9Space.replace(aws9, "S9");
    const fixAW9 = fixAWS9.replace(aw9, "S9");
    const fixAW8 = fixAW9.replace(aws8, "S8");
    const fixAW8Space = fixAW8.replace(aw8Spaces, "S8");
    const fixAWU2 = fixAW8Space.replace(awu2, "Ultra 2");
    const fixAWSE = fixAWU2.replace(awSE, "SE");
    const fixApple = fixAWSE.replace(apple, "");
    const fixmb = fixApple.replace(mb, "");
    const fixIpad = fixmb.replace(ipad, "(2022) 🇺🇸");
    const fixIpadUs = fixIpad.replace(fixFlagUs, "(2022)🇺🇸🇯🇵🇦🇺");
    const fixIpadJp = fixIpadUs.replace(fixFlagJp, "(2022)🇺🇸🇯🇵");
    const fixIpadAu = fixIpadJp.replace(fixFlagAu, "(2022)🇺🇸🇦🇺");
    const fixAirPods = fixIpadAu.replace(airPods, "AirPods");
    return fixAirPods.replace(proMax, "Pro Max");
  };

  el.map((unimtrn) => {
    if (baseFix(unimtrn) && returnApple(unimtrn)) {
      resultArr.push({
        id: masterArr(returnFixPrice(unimtrn, fixName(unimtrn))),
        name: returnFixPrice(unimtrn, fixName(unimtrn)),
        extraPrice: newPriceUNIMETRN(unimtrn),
        stockPrice: unimtrn.Стоимость,
        provider: "UNIMETRN",
      });
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "UNIMTRN ▲" : "UNIMTRN ▼"}
          </span>
        )}
      </div>
      {isOpen && (
        <div className={style.row}>
          <BasicTable resultArr={resultArr} />
        </div>
      )}
    </div>
  );
};

export default Apple;
