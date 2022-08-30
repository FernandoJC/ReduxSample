import { Input } from "@mui/material";
import { useEffect, useState } from "react";

export default function ConvertionComponent(props) {
  const [amountToConvert, setAmountToConvert] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const calculateConvertionAmount = () => {
    setConvertedAmount(amountToConvert / props.exchangeRate);
  };

  useEffect(() => {
    calculateConvertionAmount();
  }, [amountToConvert, props.exchangeRate]);

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
