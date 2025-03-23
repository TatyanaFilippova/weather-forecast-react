import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReduser from "./slices/currentWeatherSlice";
import currentCitySliceReducer from "./slices/ currentCitySlice";
import forecastListReducer from "./slices/forecastListSlice";

// тут мы активируем редьюсеры
const rootReducer = combineReducers({
  currentWeatherSliceReduser,
    currentCitySliceReducer,
  forecastListReducer,

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
