import { TextField } from "@mui/material";
import { maskValor } from "../../../utils/masks/masks";
import { useState } from "react";

const InputValor = () => {
  const [valor, setValor] = useState<number | "">("");

  return (
    <TextField
      required
      label="Valor"
      variant="outlined"
      value={maskValor.format(valor)}
      error={typeof valor === "number" && valor <= 0}
      helperText={
        typeof valor === "number" && valor <= 0 ? "O valor não pode ser 0" : ""
      }
      onChange={(e) => {
        setValor(maskValor.parse(e.target.value));
      }}
      placeholder="0,00"
    ></TextField>
  );
};

export default InputValor;
