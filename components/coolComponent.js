import { Button, Input } from "@mui/material";
import { useState } from "react";

export function CoolComponent(props) {
  const [number, setNumber] = useState(props.initialNumber);
  const [inputNumber, setInputNumber] = useState(0);

  const updateNumber = (newNumber) => {
    setNumber(newNumber);
  };

  return (
    <>
      <h1>Number: {number}</h1>
      <Input
        placeholder="Enter a number here"
        value={inputNumber}
        type="number"
        className="text-white"
        onChange={() => {
          setInputNumber(event.target.value);
        }}
      />
      <Button
        onClick={() => {
          updateNumber(inputNumber);
        }}
      >
        Update!
      </Button>
    </>
  );
}
