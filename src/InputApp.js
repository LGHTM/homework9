import React from "react";
import { withLocalStorage } from "./withLocalStorage";

const TextInput = ({ value, onChange }) => (
  <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
);

const NumericInput = ({ value, onChange }) => (
  <input
    type="number"
    value={value}
    onChange={(e) => onChange(e.target.valueAsNumber)}
  />
);

const TextInputWithLocalStorage = withLocalStorage(
  TextInput,
  "123",
  "text-input"
);
const NumericInputWithLocalStorage = withLocalStorage(
  NumericInput,
  10,
  "numeric-input"
);

function InputApp() {
  return (
    <>
      <TextInputWithLocalStorage />
      <NumericInputWithLocalStorage />
    </>
  );
}

export default InputApp;
