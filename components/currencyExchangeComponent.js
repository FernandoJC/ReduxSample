import { Input } from "@mui/material";
import { useEffect, useState } from "react";

export default function CurrencyExchangeComponent(props) {
  const { updateExchangeRate } = props;
  const [exchangeRate, setExchangeRate] = useState(props.exchangeRate);

  useEffect(() => {
    updateExchangeRate(exchangeRate);
  }, [exchangeRate]);

  return (
    <>
      <h1>Enter the exchange rate you want</h1>
      <Input
        value={exchangeRate}
        type="number"
        className="text-white"
        onChange={() => {
          setExchangeRate(event.target.value);
        }}
      />
    </>
  );
}
