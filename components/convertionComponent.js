import { Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ConvertionComponent() {
  const [amountToConvert, setAmountToConvert] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const reduxExchangeRate = useSelector(
    (state) => state.exchangeRateReducer.exchangeRate
  );

  const calculateConvertionAmount = () => {
    setConvertedAmount(amountToConvert / reduxExchangeRate);
  };

  useEffect(() => {
    calculateConvertionAmount();
  }, [amountToConvert, reduxExchangeRate]);

  return (
    <>
      <h1>${convertedAmount}</h1>
      <Input
        placeholder="Enter number in soles"
        value={amountToConvert}
        type="number"
        className="text-white"
        onChange={() => {
          setAmountToConvert(event.target.value);
        }}
      />
    </>
  );
}
