import React, { useState } from "react";
import { read, utils } from "xlsx";
import "../App.css";
import BasicTable from "./Create Table/Table";

const IndexParserPrice = () => {
  const allPrice = [];
  const all = []
  const [dataAll, setDataAll] = useState([])
  const [IsOpen, setIsOpen] = useState(false)

  dataAll.map((allEl) => {
    allEl.Name &&
      allEl.Name.length &&
      all.push({ name: allEl.Name, price: allEl.Price, id: allEl.ID });
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
          const rowsAll = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setDataAll(rowsAll);
          setIsOpen(true)
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  all.map((all) => {
    return (
      all.name &&
      allPrice.push({
        id: all.id,
        name: all.name,
        stockPrice: all.price
      })
    );
  });
 
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
     
      <div className="wrapper_cat"></div>
      {IsOpen && <BasicTable resultArr={allPrice} />}
    </div>
  );
};

export default IndexParserPrice;
