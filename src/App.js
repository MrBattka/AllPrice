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

const App = () => {
  const allPrice = [];
  const [openAllPrice, setOpenAllPrice] = useState(false);

  const [dataHi, setDataHi] = useState([]);
  const [dataUNIMTRN, setDataUNIMTRN] = useState([]);
  const [dataMihonor, setDataMihonor] = useState([]);
  const [dataVsemi, setDataVseMi] = useState([]);
  const [dataSuperprice, setDataSuperprice] = useState([]);
  const [dataGarmin, setDataGarmin] = useState([]);

  const unimtrn = [];
  const hi = [];
  const mihonor = [];
  const vsemi = [];
  const superprice = [];
  const garmin = []

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
          setOpenAllPrice={setOpenAllPrice}
        />
        <IndexSuperPriceNotID el={dataSuperprice} superpriceData={superprice} />
        {/* Garmin */}
        <IndexGarmin el={dataGarmin} garminData={garmin} />
        <IndexGarminNotID el={dataGarmin} garminData={garmin} />
        {/* All Price */}
        <AllPriceWithID
          dataSuperprice={superprice}
          dataVsemi={vsemi}
          dataUnimtrn={dataUNIMTRN}
          dataHi={hi}
          dataMihonor={mihonor}
          dataGarmin={garmin}
        />

        <AllPrice
          dataSuperprice={superprice}
          dataVsemi={vsemi}
          dataUnimtrn={dataUNIMTRN}
          dataHi={hi}
          dataMihonor={mihonor}
          dataGarmin={garmin}
        />
      </div>
    </div>
  );
};

export default App;