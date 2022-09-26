import { createSlice } from "@reduxjs/toolkit";

export const exchangeRateSlice = createSlice({
  name: "exchangeRate",
  initialState: {
    exchangeRate: 3,
  },
  reducers: {
    updateExchangeRate: (state, action) => {
      state.exchangeRate = action.payload;
    },
  },
});

export const { updateExchangeRate } = exchangeRateSlice.actions;
export default exchangeRateSlice.reducer;
