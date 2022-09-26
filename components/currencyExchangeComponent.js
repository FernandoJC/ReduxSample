import { Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateExchangeRate } from "../redux/slices/exchangeRateSlice";

export default function CurrencyExchangeComponent() {
  const reduxDispatch = useDispatch();
  const reduxExchangeRate = useSelector(
    (state) => state.exchangeRateReducer.exchangeRate
  );
  const reduxUpdateExchangeRate = (newExchangeRate) => {
    reduxDispatch(updateExchangeRate(newExchangeRate));
  };

  return (
    <>
      <h1>Enter the exchange rate you want</h1>
      <Input
        value={reduxExchangeRate}
        type="number"
        className="text-white"
        onChange={() => {
          reduxUpdateExchangeRate(event.target.value);
        }}
      />
    </>
  );
}
