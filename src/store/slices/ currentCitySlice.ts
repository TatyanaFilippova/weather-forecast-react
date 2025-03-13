import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface City {
  value: string;
  label: string;
}

interface CurrentCity {
  city: City;
}

const initialState: CurrentCity = {
  city: { value: "saint petersburg", label: "Санкт-Петербург" },
};

export const currentCitySlice = createSlice({
  name: "current_city",
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
  },
});

export default currentCitySlice.reducer;
