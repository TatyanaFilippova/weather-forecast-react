import React, {useEffect, useState} from "react";
import s from "./Days.module.scss";
import CardSkeleton from "./CardSkeleton";
import Tabs from "./Tabs";
import {fetchForecastList} from "../../../../store/thunks/fetchForecastList";
import {useCustomDispatch, useCustomSelector} from "../../../../hooks/store";
import {selectCurrentCityData} from "../../../../store/selectors";

const DaysSkeleton = () => {
  const dispatch = useCustomDispatch();
  const { city } = useCustomSelector(selectCurrentCityData);
  const [open, setOpen] = useState("7");
  useEffect(() => {
    dispatch(fetchForecastList({ city: city.value, days: +open }));
  }, [city.label, city.value, open, dispatch]);
  return (
    <>
      <Tabs open={open} setOpen={setOpen} />
      <div className={s.days}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  );
};

export default DaysSkeleton;
