import { configureStore } from "@reduxjs/toolkit";
import exchangeRateReducer from "./slices/exchangeRateSlice";

export default configureStore({
  reducer: {
    exchangeRate: exchangeRateReducer,
  },
});
