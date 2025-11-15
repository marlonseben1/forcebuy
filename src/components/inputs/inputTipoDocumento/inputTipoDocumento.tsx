import { MenuItem, TextField } from "@mui/material";
import { tiposDocumento } from "./inputTipoDocumento.static";

const InputTipoDocumento = () => {
  return (
    <TextField
      select
      defaultValue={tiposDocumento[0]?.value}
      label="Tipo de documento"
      fullWidth
      margin="normal"
    >
      {tiposDocumento.map((documento) => (
        <MenuItem key={documento?.value} value={documento.value}>
          {documento.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputTipoDocumento;
