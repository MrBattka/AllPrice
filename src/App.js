import React, { useState } from "react";
import { read, utils } from "xlsx";
import "./App.css";
import IndexHi from "./component/Hi/IndexHi";
import IndexHiNotID from "./component/Hi/IndexHiNotID";
import IndexUnimtrn from "./component/Unimtrn/indexUNIMTRN";
import IndexUnimtrnNotID from "./component/Unimtrn/indexUNIMTRNNotID";
import icon from "./source/icon/icon.png";
import IndexMiHonor from "./component/MiHonor/indexMiHonor";
import IndexMiHonorNotID from "./component/MiHonor/indexMiHonorNotID copy";
import IndexVseMi from "./component/VseMi/indexVseMi";
import IndexVseMiNotID from "./component/VseMi/indexVseMiNotID";
import IndexSuperPrice from "./component/SuperPrice/indexSuperPrice";
import IndexSuperPriceNotID from "./component/SuperPrice/indexSuperPriceNotID";
import AllPrice from "./component/AllPrice/AllPrice";
import IndexGarmin from "./component/Garmin/indexGarmin";
import IndexGarminNotID from "./component/Garmin/indexGarminNotID";
import AllPriceWithID from "./component/AllPrice/AllPriceWithID";
import IndexS5 from "./component/S5/IndexS5";
import IndexS5NotID from "./component/S5/IndexS5NotID";
import IndexRPTrade from "./component/RPTrade/IndexRPTrade";
import IndexRPTradeNotID from "./component/RPTrade/IndexRPTradeNotID";
import IndexRacmag from "./component/Racmag/IndexRacmag";
import IndexRacmagNotID from "./component/Racmag/IndexRacmagNotID";
import IndexArti from "./component/Arti/indexArti";
import IndexElectrozon from "./component/Electrozon/IndexElectrozon";
import IndexElectrozonNotID from "./component/Electrozon/IndexElectrozonNotID";
import IndexReSale from "./component/ReSale/indexReSale";
import IndexReSaleNotID from "./component/ReSale/indexReSaleNotID";
import IndexArtiNotID from "./component/Arti/indexArtiNotID";
import IndexTagir from "./component/Tagir/IndexTagir";
import IndexTagirNotID from "./component/Tagir/IndexTagirNotID";
import IndexNarod from "./component/Narod/IndexNarod";

const App = () => {
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

  dataHi.map((hiEl) => {
    hiEl.Hi && typeof hiEl.Hi === "string" && hi.push({ name: hiEl.Hi });
  });

  dataUNIMTRN.map((unimtrnEl) => {
    unimtrnEl.Товар &&
      unimtrn.push({ name: unimtrnEl.Товар, price: unimtrnEl.Стоимость });
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
    superpriceEl.Наименование &&
      typeof superpriceEl.Наименование === "string" &&
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
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="App">
      <div className="flexbox">
        <img className="img" src={icon} alt="Not found" />
        <div className="wrapper_control">
          <div className="col-sm-6 offset-3">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <div className="custom-file">
                    <label for="inputGroupFile" class="custom-file-upload">
                      Custom Upload
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
      </div>
      <div className="wrapper_cat">
        {/* Народ */}
        {/* <IndexNarod el={dataNarod} narodData={narod} /> */}
        {/* Сема */}
        <IndexHi el={dataHi} hi={hi} />
        <IndexHiNotID el={dataHi} hi={hi} />
        {/* Метры */}
        <IndexUnimtrn el={dataUNIMTRN} />
        <IndexUnimtrnNotID el={dataUNIMTRN} />
        {/* MiHonor */}
        <IndexMiHonor el={dataMihonor} mihonorData={mihonor} />
        <IndexMiHonorNotID el={dataMihonor} mihonorData={mihonor} />
        {/* VseMi */}
        <IndexVseMi el={dataVsemi} vsemiData={vsemi} />
        <IndexVseMiNotID el={dataVsemi} vsemiData={vsemi} />
        {/* Super Price */}
        <IndexSuperPrice
          el={dataSuperprice}
          superpriceData={superprice}
          allPrice={allPrice}
        />
        <IndexSuperPriceNotID el={dataSuperprice} superpriceData={superprice} />
        {/* Garmin */}
        <IndexGarmin el={dataGarmin} garminData={garmin} />
        <IndexGarminNotID el={dataGarmin} garminData={garmin} />
        {/* S5 */}
        <IndexS5 el={dataS5} S5Data={S5} />
        <IndexS5NotID el={dataS5} S5Data={S5} />
        {/* RPTrade */}
        <IndexRPTrade el={dataRPTrade} rptradeData={rptrade} />
        <IndexRPTradeNotID el={dataRPTrade} rptradeData={rptrade} />
        {/* Рацмаг */}
        <IndexRacmag el={dataRacmag} racmagData={racmag} />
        <IndexRacmagNotID el={dataRacmag} racmagData={racmag} />
        {/* Arti */}
        <IndexArti el={dataArti} artiData={arti} />
        <IndexArtiNotID el={dataArti} artiData={arti} />
        {/* Electrozon */}
        <IndexElectrozon el={dataElectrozon} electrozonData={electrozon} />
        <IndexElectrozonNotID el={dataElectrozon} electrozonData={electrozon} />
        {/* ReSale */}
        <IndexReSale el={dataReSale} resaleData={resale} />
        <IndexReSaleNotID el={dataReSale} resaleData={resale} />
        {/* Тагир */}
        <IndexTagir el={dataTagir} tagirData={tagir} />
        <IndexTagirNotID el={dataTagir} tagirData={tagir} />

        {/* All Price */}
        <AllPriceWithID
          dataSuperprice={superprice}
          dataVsemi={vsemi}
          dataUnimtrn={dataUNIMTRN}
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
        />

        <AllPrice
          dataSuperprice={superprice}
          dataVsemi={vsemi}
          dataUnimtrn={dataUNIMTRN}
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
        />
      </div>
    </div>
  );
};

export default App;
