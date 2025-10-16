import { useState } from "react";
import { read, utils } from "xlsx";
import "../App.css";
import IndexA18 from "./A18/IndexA18";
import IndexA18NotID from "./A18/IndexA18NotID";
import AllPriceNotID from "./AllPrice/AllPriceNotID";
import AllPriceQuickID from "./AllPrice/AllPriceQuickID";
import AllPriceWithID from "./AllPrice/AllPriceWithID";
import IndexArti from "./Arti/indexArti";
import IndexArtiNotID from "./Arti/indexArtiNotID";
import IndexBase from "./Base/IndexBase";
import IndexBaseNotID from "./Base/IndexBaseNotID";
import IndexBigAp from "./BigAp/IndexBigAp";
import IndexBigApNotID from "./BigAp/IndexBigApNotID";
import IndexBoltun from "./Boltun/IndexBolltun";
import IndexBoltunNotID from "./Boltun/IndexBoltunNotID";
import IndexBonusNotID from "./BonusOPT/IndexBonusNotID";
import IndexBonus from "./BonusOPT/IndexEBonus";
import IndexDiscount from "./Discount/IndexDiscount";
import IndexDiscountNotID from "./Discount/IndexDiscountNotID";
import IndexElectrozon from "./Electrozon/IndexElectrozon";
import IndexElectrozonNotID from "./Electrozon/IndexElectrozonNotID";
import IndexF51 from "./F51/IndexF51";
import IndexF51NotID from "./F51/IndexF51NotID";
import IndexGarmin from "./Garmin/indexGarmin";
import IndexGarminNotID from "./Garmin/indexGarminNotID";
import IndexHi from "./Hi/IndexHi";
import IndexHiNotID from "./Hi/IndexHiNotID";
import IndexInfinity from "./Infinity/indexInfinity";
import IndexInfinityNotID from "./Infinity/indexInfinityNotID";
import IndexL27 from "./L27/IndexL27";
import IndexL27NotID from "./L27/IndexL27NotID";
import IndexLikemob from "./Likemob/IndexLikemob";
import IndexLikemobNotID from "./Likemob/IndexLikemobNotID";
import IndexLowPrice from "./LowPriceApple/indexLowPrice";
import IndexLowPriceNotID from "./LowPriceApple/indexLowPriceNotID";
import IndexMTA from "./MTA/IndexMTA";
import IndexMTANotID from "./MTA/IndexMTANotID";
import IndexMiHonor from "./MiHonor/indexMiHonor";
import IndexMiHonorNotID from "./MiHonor/indexMiHonorNotID";
import IndexMiOpts from "./MiOpts/indexMiOpts";
import IndexMiOptsNotID from "./MiOpts/indexMiOptsNotID";
import IndexNarod from "./Narod/IndexNarod";
import IndexNarodNotID from "./Narod/IndexNarodNotID";
import IndexOther from "./Other/IndexOther";
import IndexOtherNotID from "./Other/IndexOtherNotID";
import IndexRPTrade from "./RPTrade/IndexRPTrade";
import IndexRPTradeNotID from "./RPTrade/IndexRPTradeNotID";
import IndexRacmag from "./Racmag/IndexRacmag";
import IndexRacmagNotID from "./Racmag/IndexRacmagNotID";
import IndexReSale from "./ReSale/indexReSale";
import IndexReSaleNotID from "./ReSale/indexReSaleNotID";
import IndexRootOpt from "./RootOPT/IndexERootOpt";
import IndexRootOptNotID from "./RootOPT/IndexRootOptNotID";
import IndexS5 from "./S5/IndexS5";
import IndexS5NotID from "./S5/IndexS5NotID";
import IndexStore77 from "./Store77/IndexStore77";
import IndexStore77NotID from "./Store77/IndexStore77NotID";
import IndexSunrise from "./Sunrise/IndexSunrise";
import IndexSunriseNotID from "./Sunrise/IndexSunriseNotID";
import IndexSuperPrice from "./SuperPrice/indexSuperPrice";
import IndexSuperPriceNotID from "./SuperPrice/indexSuperPriceNotID";
import IndexTagir from "./Tagir/IndexTagir";
import IndexTagirNotID from "./Tagir/IndexTagirNotID";
import IndexAMT from "./Trub/IndexAMT";
import IndexAMTNotID from "./Trub/IndexAMTNotID";
import IndexUnimtrn from "./Unimtrn/indexUNIMTRN";
import IndexUnimtrnNotID from "./Unimtrn/indexUNIMTRNNotID";
import IndexVseMi from "./VseMi/indexVseMi";
import IndexVseMiNotID from "./VseMi/indexVseMiNotID";
import IndexUnimtrn_1 from "./Unimtrn/indexUNIMTRN_1";
import IndexUnimtrnNotID_1 from "./Unimtrn/indexUNIMTRNNotID_1";
import AllPriceWithIDTest from "./AllPrice/AllPriceWithIDTest";

const IndexAllPrice = () => {
  const allPrice = [];

  const [dataHi, setDataHi] = useState([]);
  const [dataUNIMTRN, setDataUNIMTRN] = useState([]);
  const [dataMihonor, setDataMihonor] = useState([]);
  const [dataVsemi, setDataVseMi] = useState([]);
  const [dataSuperprice, setDataSuperprice] = useState([]);
  const [dataGarmin, setDataGarmin] = useState([]);
  const [dataS5, setDataS5] = useState([]);
  const [dataRPTrade, setDataRPTrade] = useState([]);
  const [dataRacmag, setDataRacmag] = useState([]);
  const [dataArti, setDataArti] = useState([]);
  const [dataElectrozon, setDataElectrozon] = useState([]);
  const [dataReSale, setDataReSale] = useState([]);
  const [dataTagir, setDataTagir] = useState([]);
  const [dataNarod, setDataNarod] = useState([]);
  const [dataF51, setDataF51] = useState([]);
  const [dataDiscount, setDataDiscount] = useState([]);
  const [dataBase, setDataBase] = useState([]);
  const [dataOther, setDataOther] = useState([]);
  const [dataMiopts, setDataMiopts] = useState([]);
  const [dataLowPrice, setDataLowPrice] = useState([]);
  const [dataL27, setDataL27] = useState([]);
  const [dataSunrise, setDataSunrise] = useState([]);
  const [dataInfinity, setDataInfinity] = useState([]);
  const [dataLikemob, setDataLikemob] = useState([]);
  const [dataBigAp, setDataBigAp] = useState([]);
  const [dataMTA, setDataMTA] = useState([]);
  const [dataBonus, setDataBonus] = useState([]);
  const [dataRootOpt, setDataRootOpt] = useState([]);
  const [dataA18, setDataA18] = useState([]);
  const [dataAMT, setDataAMT] = useState([]);
  const [dataBoltun, setDataBoltun] = useState([]);
  const [dataStore77, setDataStore77] = useState([]);

  const unimtrn = [];
  const hi = [];
  const mihonor = [];
  const vsemi = [];
  const superprice = [];
  const garmin = [];
  const S5 = [];
  const rptrade = [];
  const racmag = [];
  const arti = [];
  const electrozon = [];
  const resale = [];
  const tagir = [];
  const narod = [];
  const f51 = [];
  const discount = [];
  const base = [];
  const other = [];
  const miopts = [];
  const lowprice = [];
  const l27 = [];
  const sunrise = [];
  const infinity = [];
  const likemob = [];
  const bigAp = [];
  const mta = [];
  const bonus = [];
  const rootOpt = [];
  const a18 = [];
  const amt = [];
  const boltun = [];
  const store77 = [];

  const allItems = [];

  const returnNewMiopt = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (
        item.MiOpts.includes("₽") &&
        (item.MiOpts.includes("GB") || item.MiOpts.includes("TRB"))
      ) {
        allItems.push({ MiOpts: item.MiOpts });
      } else if (!item.MiOpts.includes("GB") || !item.MiOpts.includes("TRB")) {
        const priceItem = arr[i + 1];
        if (
          priceItem &&
          priceItem.MiOpts.includes("₽") &&
          (item.MiOpts.includes("GB") || item.MiOpts.includes("TRB"))
        ) {
          allItems.push({ MiOpts: item.MiOpts + " " + priceItem.MiOpts });
        } else {
          allItems.push({ MiOpts: item.MiOpts });
        }
      }
    }
  };

  // returnNewMiopt(dataMiopts);

  dataHi.map((hiEl) => {
    hiEl.Hi && typeof hiEl.Hi === "string" && hi.push({ name: hiEl.Hi });
  });

  // dataUNIMTRN.map((unimtrnEl) => {
  //   (unimtrnEl.Товар || unimtrnEl.Модификация) &&
  //     unimtrn.push({
  //       name: unimtrnEl.Товар || unimtrnEl.Модификация,
  //       price: unimtrnEl.Стоимость || unimtrnEl.Cтоимость || unimtrnEl.Цена,
  //     });
  // });

  dataUNIMTRN.map((unimtrnEl) => {
    unimtrnEl.Metr &&
      typeof unimtrnEl.Metr === "string" &&
      unimtrn.push({ name: unimtrnEl.Metr });
  });

  dataMihonor.map((mihonorEl) => {
    mihonorEl.MiHonor &&
      typeof mihonorEl.MiHonor === "string" &&
      mihonor.push({ name: mihonorEl.MiHonor });
  });

  dataVsemi.map((vsemiEl) => {
    vsemiEl.VseMi &&
      typeof vsemiEl.VseMi === "string" &&
      vsemi.push({ name: vsemiEl.VseMi });
  });

  dataSuperprice.map((superpriceEl) => {
    (superpriceEl.Наименование || superpriceEl.Название) &&
      (typeof superpriceEl.Наименование === "string" ||
        typeof superpriceEl.Название === "string") &&
      superprice.push({
        name: superpriceEl.Наименование || superpriceEl.Название,
        price: superpriceEl.Прайс || superpriceEl.Опт || superpriceEl.Цена,
      });
  });

  dataGarmin.map((garminEl) => {
    garminEl.Garmin &&
      garminEl.Garmin.length > 2 &&
      typeof garminEl.Garmin === "string" &&
      garmin.push({ name: garminEl.Garmin });
  });

  dataS5.map((S5El) => {
    S5El.S5 &&
      S5El.S5.length > 2 &&
      typeof S5El.S5 === "string" &&
      S5.push({ name: S5El.S5 });
  });

  dataRPTrade.map((rptradeEl) => {
    rptradeEl.Наименование &&
      rptradeEl.Наименование.length > 2 &&
      typeof rptradeEl.Наименование === "string" &&
      rptrade.push({ name: rptradeEl.Наименование, price: rptradeEl.Цена });
  });

  dataRacmag.map((racmagEl) => {
    racmagEl.Рацмаг &&
      racmagEl.Рацмаг.length > 2 &&
      typeof racmagEl.Рацмаг === "string" &&
      racmag.push({ name: racmagEl.Рацмаг });
  });

  dataArti.map((artiEl) => {
    artiEl.Arti &&
      artiEl.Arti.length > 2 &&
      typeof artiEl.Arti === "string" &&
      arti.push({ name: artiEl.Arti });
  });

  dataElectrozon.map((electrozonEl) => {
    electrozonEl.Наименование &&
      electrozonEl.Наименование.length > 2 &&
      typeof electrozonEl.Наименование === "string" &&
      electrozon.push({
        name: electrozonEl.Наименование,
        price: electrozonEl.Цена,
      });
  });

  dataReSale.map((resaleEl) => {
    resaleEl.ReSale &&
      resaleEl.ReSale.length > 7 &&
      typeof resaleEl.ReSale === "string" &&
      resale.push({ name: resaleEl.ReSale });
  });

  dataTagir.map((tagirEl) => {
    tagirEl.Tagir &&
      tagirEl.Tagir.length > 7 &&
      typeof tagirEl.Tagir === "string" &&
      tagir.push({ name: tagirEl.Tagir });
  });

  dataNarod.map((narodEl) => {
    narodEl.Narod &&
      narodEl.Narod.length > 7 &&
      typeof narodEl.Narod === "string" &&
      narod.push({ name: narodEl.Narod });
  });

  dataF51.map((F51El) => {
    F51El.Товар &&
      F51El.Товар.length > 7 &&
      typeof F51El.Товар === "string" &&
      f51.push({ name: F51El.Товар, price: F51El.Цена, country: F51El.Страна });
  });
  dataDiscount.map((discountEl) => {
    discountEl.Discount &&
      discountEl.Discount.length > 7 &&
      typeof discountEl.Discount === "string" &&
      discount.push({ name: discountEl.Discount });
  });

  dataBase.map((baseEl) => {
    baseEl.Наименование &&
      baseEl.Наименование.length > 7 &&
      typeof baseEl.Наименование === "string" &&
      base.push({
        name: baseEl.Наименование,
        price: baseEl.Себестоимость,
        extra: baseEl.Опт,
      });
  });

  const deleteDoubleProduct = base.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.place === value.place && t.name === value.name)
  );

  dataOther.map((otherEl) => {
    otherEl.All &&
      otherEl.All.length > 7 &&
      typeof otherEl.All === "string" &&
      other.push({ name: otherEl.All });
  });

  dataMiopts.map((mioptsEl) => {
    mioptsEl.MiOpts &&
      mioptsEl.MiOpts.length > 7 &&
      typeof mioptsEl.MiOpts === "string" &&
      miopts.push({ name: mioptsEl.MiOpts });
  });

  dataLowPrice.map((lowpriceEl) => {
    lowpriceEl.LowPrice &&
      lowpriceEl.LowPrice.length > 7 &&
      typeof lowpriceEl.LowPrice === "string" &&
      lowprice.push({ name: lowpriceEl.LowPrice });
  });

  dataL27.map((l27El) => {
    l27El.L27 &&
      l27El.L27.length > 7 &&
      typeof l27El.L27 === "string" &&
      l27.push({ name: l27El.L27 });
  });

  dataSunrise.map((sunriseEl) => {
    sunriseEl.Sunrise &&
      sunriseEl.Sunrise.length > 7 &&
      typeof sunriseEl.Sunrise === "string" &&
      sunrise.push({ name: sunriseEl.Sunrise });
  });

  dataInfinity.map((infinityEl) => {
    infinityEl.Infinity &&
      infinityEl.Infinity.length > 7 &&
      typeof infinityEl.Infinity === "string" &&
      infinity.push({ name: infinityEl.Infinity });
  });

  dataLikemob.map((likemobEl) => {
    likemobEl.Likemob &&
      likemobEl.Likemob.length > 7 &&
      typeof likemobEl.Likemob === "string" &&
      likemob.push({ name: likemobEl.Likemob });
  });

  dataBigAp.map((bigApEl) => {
    bigApEl.BigAp &&
      bigApEl.BigAp.length &&
      bigAp.push({ name: bigApEl.BigAp });
  });

  dataMTA.map((mtaEl) => {
    mtaEl.MTA && mtaEl.MTA.length && mta.push({ name: mtaEl.MTA });
  });

  dataBonus.map((bonusEl) => {
    bonusEl.Name &&
      bonusEl.Name.length &&
      bonus.push({ name: bonusEl.Name, price: bonusEl.Price });
  });

  dataRootOpt.map((rootOptEl) => {
    rootOptEl.НАИМЕНОВАНИЕ &&
      rootOptEl.НАИМЕНОВАНИЕ.length &&
      rootOpt.push({ name: rootOptEl.НАИМЕНОВАНИЕ, price: rootOptEl.ЦЕНА });
  });

  dataA18.map((a18El) => {
    a18El.A18 && a18El.A18.length && a18.push({ name: a18El.A18 });
  });

  dataAMT.map((AMTEl) => {
    AMTEl.AMT && AMTEl.AMT.length && amt.push({ name: AMTEl.AMT });
  });

  dataBoltun.map((boltunEl) => {
    boltunEl.name &&
      boltunEl.name.length &&
      boltun.push({ name: boltunEl.name, price: boltunEl.price });
  });

  dataStore77.map((store77El) => {
    store77El.name &&
      store77El.name.length &&
      store77.push({ name: store77El.name, price: store77El.price });
  });

  const handleImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rowsUNIMTRN = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setDataUNIMTRN(rowsUNIMTRN);
          const rowHi = utils.sheet_to_json(wb.Sheets[sheets[1]]);
          setDataHi(rowHi);
          const rowMihonor = utils.sheet_to_json(wb.Sheets[sheets[2]]);
          setDataMihonor(rowMihonor);
          const rowVseMi = utils.sheet_to_json(wb.Sheets[sheets[3]]);
          setDataVseMi(rowVseMi);
          const rowSuperprice = utils.sheet_to_json(wb.Sheets[sheets[4]]);
          setDataSuperprice(rowSuperprice);
          const rowGarmin = utils.sheet_to_json(wb.Sheets[sheets[5]]);
          setDataGarmin(rowGarmin);
          const rowS5 = utils.sheet_to_json(wb.Sheets[sheets[6]]);
          setDataS5(rowS5);
          const rowRPTrade = utils.sheet_to_json(wb.Sheets[sheets[7]]);
          setDataRPTrade(rowRPTrade);
          const rowRacmag = utils.sheet_to_json(wb.Sheets[sheets[8]]);
          setDataRacmag(rowRacmag);
          const rowArti = utils.sheet_to_json(wb.Sheets[sheets[9]]);
          setDataArti(rowArti);
          const rowElectrozon = utils.sheet_to_json(wb.Sheets[sheets[10]]);
          setDataElectrozon(rowElectrozon);
          const rowReSale = utils.sheet_to_json(wb.Sheets[sheets[11]]);
          setDataReSale(rowReSale);
          const rowTagir = utils.sheet_to_json(wb.Sheets[sheets[12]]);
          setDataTagir(rowTagir);
          const rowNarod = utils.sheet_to_json(wb.Sheets[sheets[13]]);
          setDataNarod(rowNarod);
          const rowF51 = utils.sheet_to_json(wb.Sheets[sheets[14]]);
          setDataF51(rowF51);
          const rowDiscount = utils.sheet_to_json(wb.Sheets[sheets[15]]);
          setDataDiscount(rowDiscount);
          const rowBase = utils.sheet_to_json(wb.Sheets[sheets[16]]);
          setDataBase(rowBase);
          const rowOther = utils.sheet_to_json(wb.Sheets[sheets[17]]);
          setDataOther(rowOther);
          const rowMiopts = utils.sheet_to_json(wb.Sheets[sheets[18]]);
          setDataMiopts(rowMiopts);
          const rowLowPrice = utils.sheet_to_json(wb.Sheets[sheets[19]]);
          setDataLowPrice(rowLowPrice);
          const rowL27 = utils.sheet_to_json(wb.Sheets[sheets[20]]);
          setDataL27(rowL27);
          const rowSunrise = utils.sheet_to_json(wb.Sheets[sheets[21]]);
          setDataSunrise(rowSunrise);
          const rowInfinity = utils.sheet_to_json(wb.Sheets[sheets[22]]);
          setDataInfinity(rowInfinity);
          const rowLikemob = utils.sheet_to_json(wb.Sheets[sheets[23]]);
          setDataLikemob(rowLikemob);
          const rowBigAp = utils.sheet_to_json(wb.Sheets[sheets[24]]);
          setDataBigAp(rowBigAp);
          const rowMTA = utils.sheet_to_json(wb.Sheets[sheets[25]]);
          setDataMTA(rowMTA);
          const rowBonus = utils.sheet_to_json(wb.Sheets[sheets[26]]);
          setDataBonus(rowBonus);
          const rowRootOpt = utils.sheet_to_json(wb.Sheets[sheets[27]]);
          setDataRootOpt(rowRootOpt);
          const rowA18 = utils.sheet_to_json(wb.Sheets[sheets[28]]);
          setDataA18(rowA18);
          const rowAMT = utils.sheet_to_json(wb.Sheets[sheets[29]]);
          setDataAMT(rowAMT);
          const rowBoltun = utils.sheet_to_json(wb.Sheets[sheets[30]]);
          setDataBoltun(rowBoltun);
          const rowStore77 = utils.sheet_to_json(wb.Sheets[sheets[31]]);
          setDataStore77(rowStore77);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="wrapper_control">
      <div className="flexbox">
        <div className="col-sm-6 offset-3">
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <div className="custom-file">
                  <label for="inputGroupFile" class="custom-file-upload">
                    Select File...
                  </label>
                  <input
                    type="file"
                    name="file"
                    className="custom-file-input"
                    id="inputGroupFile"
                    required
                    onChange={handleImport}
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="wrapper_cat">
        
        {/* All Price */}
        <AllPriceWithIDTest
          dataSuperprice={superprice}
          dataVsemi={vsemi}
          dataUnimtrn={unimtrn}
          dataHi={hi}
          dataMihonor={mihonor}
          dataGarmin={garmin}
          S5Data={S5}
          rptradeData={rptrade}
          racmagData={racmag}
          electrozonData={electrozon}
          artiData={arti}
          resaleData={resale}
          tagirData={tagir}
          narodData={narod}
          f51Data={f51}
          discountData={discount}
          baseData={deleteDoubleProduct}
          otherData={other}
          mioptsData={miopts}
          lowPriceData={lowprice}
          l27Data={l27}
          sunriseData={sunrise}
          infinityData={infinity}
          likemobData={likemob}
          mtaData={mta}
          bonusData={bonus}
          bigApData={bigAp}
          rootOptData={rootOpt}
          a18Data={a18}
          AMTData={amt}
          boltunData={boltun}
        />
        {/* <AllPriceNotID
          dataSuperprice={superprice}
          dataVsemi={vsemi}
          dataUnimtrn={unimtrn}
          dataHi={hi}
          dataMihonor={mihonor}
          dataGarmin={garmin}
          S5Data={S5}
          rptradeData={rptrade}
          racmagData={racmag}
          electrozonData={electrozon}
          artiData={arti}
          resaleData={resale}
          tagirData={tagir}
          narodData={narod}
          f51Data={f51}
          discountData={discount}
          baseData={deleteDoubleProduct}
          otherData={other}
          mioptsData={miopts}
          lowPriceData={lowprice}
          l27Data={l27}
          sunriseData={sunrise}
          infinityData={infinity}
          likemobData={likemob}
          mtaData={mta}
          bonusData={bonus}
          bigApData={bigAp}
          rootOptData={rootOpt}
          a18Data={a18}
          AMTData={amt}
          boltunData={boltun}
        /> */}
      </div>
    </div>
  );
};

export default IndexAllPrice;
