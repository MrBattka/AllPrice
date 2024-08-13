import React, { useState } from "react";
import { baseFix } from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { masterArr } from "../../helpers/masterArr";
import BasicTable from "../Hi/HiTable";
import { newPriceUNIMETRN } from "../../helpers/NewPrice";
import { returnApple } from "./Apple/apple";
import { returnDyson } from "./Dyson/dyson";
import { returnSamsung } from "./Samsung/samsung";
import { returnGameConsole } from "./GameConsole/gameConsole";
import { returnOtherProduct } from "./OtherProduct/otherProduct";

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
  let air13 = /13.6 M/gi;
  let air15 = /15 M/gi;
  let airAir13 = /Air 13.6/gi;
  let airAir15 = /Air 15/gi;
  let MGN63 = /M1 256 Gold MGND3/gi;
  let MGN93 = /M1 256 Silver MGN93/gi;
  let MGND3 = /M1 256 Space Grey MGN63/gi;
  let heapdphone = /Heapdphone/gi;
  let dyson = /Dyson/gi;
  let playstation = /Playstation/gi;
  let zFlip = /Z flip/gi;
  let galaxyWatch = /Galaxy Watch/gi;
  let classik = /Classik/gi;
  let s21 = /Samsung S21/gi;
  let s22 = /Samsung S22/gi;
  let s23 = /Samsung S23/gi;
  let s24 = /Samsung S24/gi;
  let a550 = /A550/gi;
  let poco = /Poco/gi;
  let poco1 = /poco/gi;
  let watchGarmin = /Watch Garmin/gi;
  let sunglases = /Sunglases/gi;
  let dji = /Dji/gi;
  let rog = /Rog/gi;
  let sony = /Sony Xperia/gi;
  let zenFone = /Asus ZenFone/gi;
  let google = /Google /gi;
  let asus = /Asus /gi;
  let glasses = /glases/gi;
  let huawei = /HUAWEI/gi;
  let tecno = /T.Tecno/gi;
  let realme = /T.Realme/gi;

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
    const fixAir13 = fixAirPods.replace(air13, "Air 13.6 M");
    const fixAir15 = fixAir13.replace(air15, "Air 15 M");
    const fixAirAir13 = fixAir15.replace(airAir13, "13.6");
    const fixAirAir15 = fixAirAir13.replace(airAir15, "15");
    const fixMGN63 = fixAirAir15.replace(MGN63, "Air M1 256 Gold MGND3");
    const fixMGN93 = fixMGN63.replace(MGN93, "Air M1 256 Silver MGN93");
    const fixMGND3 = fixMGN93.replace(MGND3, "Air M1 256 Space Grey MGN63");
    const fixHeapdphone = fixMGND3.replace(heapdphone, "Headphone");
    const fixDyson = fixHeapdphone.replace(dyson, "");
    const fixPlaystation = fixDyson.replace(playstation, "PlayStation");
    const fixGalaxyWatch = fixPlaystation.replace(galaxyWatch, "Watch");
    const fixClassik = fixGalaxyWatch.replace(classik, "Classic");
    const fixS21 = fixClassik.replace(s21, "S21");
    const fixS22 = fixS21.replace(s22, "S22");
    const fixS23 = fixS22.replace(s23, "S23");
    const fixS24 = fixS23.replace(s24, "S24");
    const fixA550 = fixS24.replace(a550, "A55");
    const fixZflip = fixA550.replace(zFlip, "Z Flip");
    const fixPoco = fixZflip.replace(poco, "POCO");
    const fixPoco1 = fixPoco.replace(poco1, "POCO");
    const fixWatchGarmin = fixPoco1.replace(watchGarmin, "Garmin");
    const fixSunglases = fixWatchGarmin.replace(sunglases, "Sunglasses");
    const fixDji = fixSunglases.replace(dji, "DJI");
    const fixSony = fixDji.replace(sony, "Xperia");
    const fixRog = fixSony.replace(rog, "ROG");
    const fixGoogle = fixRog.replace(google, "");
    const fixZenFone = fixGoogle.replace(zenFone, "ZenFone");
    const fixAsus = fixZenFone.replace(asus, "");
    const fixGlasses = fixAsus.replace(glasses, "glasses");
    const fixHuawei = fixGlasses.replace(huawei, "Huawei");
    const fixTecno = fixHuawei.replace(tecno, "Tecno");
    const fixRealme = fixTecno.replace(realme, "Realme");
    return fixRealme.replace(proMax, "Pro Max");
  };

  el.map((unimtrn) => {
    if (
      baseFix(unimtrn) &&
      (returnApple(unimtrn) ||
        returnDyson(unimtrn) ||
        returnSamsung(unimtrn) ||
        returnGameConsole(unimtrn) ||
        returnOtherProduct(unimtrn))
    ) {
      resultArr.push({
        id: masterArr(returnFixPrice(unimtrn, fixName(unimtrn))),
        name: returnFixPrice(unimtrn, fixName(unimtrn)),
        extraPrice: newPriceUNIMETRN(unimtrn),
        stockPrice: unimtrn.Стоимость,
        provider: "Метреон",
      });
    }
  });

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Метреон ▲" : "Метреон ▼"}
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
