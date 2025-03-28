export interface Weather {
  coord?: Coord;
  weather: WeatherItem[];
  base?: string;
  main: Main;
  visibility?: number;
  wind: Wind;
  snow?: Snow;
  clouds?: Clouds;
  dt?: number;
  sys?: Sys;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Clouds {
  all: number;
}

export interface Snow {
  "1h": number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min?: number;
  temp_max?: number;
  pressure: number;
  humidity?: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface WeatherItem {
  id?: number;
  main: string;
  description: string;
  icon: string;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface ForecastList {

  list: {
    dt: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
    pressure: number;
    feels_like: {
      day: number;
    };
    speed: number;
  }[];
}
