import { TextField } from "@mui/material";
import { maskValor } from "../../../utils/masks/masks";
import { useState } from "react";

interface InputValorProps {
  label?: string;
  margin?: "normal" | "none";
}

const InputValor = (props: InputValorProps) => {
  const [valor, setValor] = useState<number | "">("");

  return (
    <TextField
      required
      label={props.label}
      variant="outlined"
      margin={props.margin}
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
