import React from "react";
import "./App.css";
import IndexAllPrice from "./component/IndexAllPrice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import icon from "./source/icon/icon1.png";
import Header from "./component/Header/Header";
import IndexParserPrice from "./component/IndexParserPrice";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <img className="img" src={icon} alt="Not found" />

        <IndexAllPrice />
        {/* <Routes>
              <Route path="/AllUnload" element={<IndexAllPrice />} />
              <Route path="/ParserPrice" element={<IndexParserPrice />} />
            </Routes> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
