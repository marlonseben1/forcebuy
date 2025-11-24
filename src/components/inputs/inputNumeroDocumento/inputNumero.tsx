import { TextField } from "@mui/material";

interface InputNumeroProps {
  label?: string;
  margin?: "normal" | "none";
  required?: boolean | undefined;
  fullWidth?: boolean | undefined;
}

const InputNumero = (props: InputNumeroProps) => {
  return (
    <TextField
      label={props.label}
      margin={props.margin}
      variant="outlined"
      fullWidth={props.fullWidth}
      required={props.required}
    ></TextField>
  );
};

export default InputNumero;
