import { AppDispatch } from "../store";
import { WeatherService } from "../../services/WeatherService";
import { forecastListSlice } from "../slices/forecastListSlice";

interface ForecastPayload {
    city: string;
    days: number;
}


export const fetchForecastList =
  (payload: ForecastPayload) => async (dispatch: AppDispatch) => {
    try {
      dispatch(forecastListSlice.actions.fetchForecastList());
      const res = await WeatherService.getForecastList(payload);
      if (res.status === 200) {
        dispatch(forecastListSlice.actions.fetchForecastListSuccess(res));
      } else {
        dispatch(forecastListSlice.actions.fetchForecastListError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
