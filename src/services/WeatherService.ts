import { AxiosResponse } from "axios";
import { Weather } from "../store/types/types";
import { api } from "../axios";

interface ForecastPayload {
  city: string;
  days: number;
}

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }
  static getForecastList({days,city}:ForecastPayload): Promise<AxiosResponse<Weather[]>> {
    return api.get<Weather[]>(`/forecast/daily?q=${city}&cnt=${days}`);
  }
}
