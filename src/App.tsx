import React from "react";
import "./style/index.scss";
import Home from "./pages/Home/components/Home";
import MonthStatistics from "./pages/MonthStatistics/components/MonthStatistics";
import { Route, Routes } from "react-router";
import Header from "./shared/Header/Header";
import HeaderSkeleton from "./shared/Header/HeaderSkeleton";
import { useCustomSelector } from "./hooks/store";
import { selectCurrentWeatherData } from "./store/selectors";

function App() {
  const { isLoading } = useCustomSelector(selectCurrentWeatherData);

  return (
    <div className="global-container">
      <div className="container">
        {isLoading ? <HeaderSkeleton /> : <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
