import React, { useState } from "react";
import { read, utils } from "xlsx";
import "./App.css";
import IndexHi from "./component/Hi/IndexHi";
import icon from "./source/icon/icon.png";
import Apple from "./component/Unimtrn/Apple";

const App = () => {
  const [dataMain, setDataMain] = useState([]);
  const [dataHi, setDataHi] = useState([]);
  const [dataUNIMTRN, setDataUNIMTRN] = useState([]);

  const main = [];
  const unimtrn = [];
  const hi = [];

  dataMain.map((name) => {
    main.push({ id: name.ID, name: name.Наименование });
  });

  dataHi.map((hiEl) => {
    hiEl.Hi &&
      // h.Hi !== "    " &&
      // h.Hi !== "   " &&
      // h.Hi !== "  " &&
      typeof hiEl.Hi === "string" &&
      // h.Hi.length &&
      hi.push({ name: hiEl.Hi });
  });
  console.log(main);

  dataUNIMTRN.map((unimtrnEl) => {
    unimtrnEl.Товар &&
      unimtrn.push({ name: unimtrnEl.Товар, price: unimtrnEl.Стоимость });
  });
  // console.log(hi);
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
          const rowHi = utils.sheet_to_json(wb.Sheets[sheets[2]]);
          setDataHi(rowHi);
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
        <IndexHi el={dataHi} hi={hi} main={main} />
        {/* Met
        <Dyson el={dataUNIMTRN} />
        <GarminGoProDji el={dataUNIMTRN} />
        <NoName el={dataUNIMTRN} />
        <GoogleSonyAsusLenovo el={dataUNIMTRN} />
        <OnePlusZTETecno el={dataUNIMTRN} />
        <GameConsoles el={dataUNIMTRN} />
        <Samsung el={dataUNIMTRN} />
        <OtherProduct el={dataUNIMTRN} /> 
        <Xiaomi el={dataUNIMTRN} />*/}
        <Apple el={dataUNIMTRN} />
        
      </div>
    </div>
  );
};

export default App;
