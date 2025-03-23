import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import {ForecastList} from "../types/types";

// тип стора
type Forecast = {
  forecast: ForecastList;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};


const initialState: Forecast= {
  forecast: {
    list: []
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const forecastListSlice = createSlice({
  name: "forecast_list",
  // начальное значение
  initialState,
  reducers: {
    fetchForecastList(state) {
      state.isLoading = true;
    },
    //редьюсер, изменяющий состояние стора
    fetchForecastListSuccess(
      state,
      action: PayloadAction<AxiosResponse<any>>,
    ) {
      state.forecast = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchForecastListError(
      state,
      action: PayloadAction<AxiosResponse<any>>,
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default forecastListSlice.reducer;
