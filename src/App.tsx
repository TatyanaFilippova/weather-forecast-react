import React from "react";
import "./style/index.scss";

import Home from "./pages/Home/components/Home";
import MonthStatistics from "./pages/MonthStatistics/components/MonthStatistics";
import { Route, Routes } from "react-router";
import Header from "./shared/Header/Header";

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
