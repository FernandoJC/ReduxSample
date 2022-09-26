import { createSlice } from "@reduxjs/toolkit";

export const exchangeRateSlice = createSlice({
  name: "exchangeRate",
  initialState: {
    exchangeRate: 3,
  },
  reducers: {
    updateExchangeRate: (state, action) => {
      console.log(
        `Updating exchange rate from ${state.exchangeRate} to ${action.payload}.`
      );
      state.exchangeRate = action.payload;
    },
  },
});

export const { updateExchangeRate } = exchangeRateSlice.actions;
export default exchangeRateSlice.reducer; // Reducer -> Import with the name you wish without using brakets (since it is default)
