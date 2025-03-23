import { RootState } from "./store";

// написать селектор для нашего редьюснра
export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReduser;

export const selectCurrentCityData = (state: RootState) =>
  state.currentCitySliceReducer;

export const selectForecastListData = (state: RootState) =>
    state.forecastListReducer;
