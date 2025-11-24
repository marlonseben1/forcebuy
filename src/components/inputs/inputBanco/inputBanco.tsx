import { MenuItem, TextField } from "@mui/material";
import { InputBancoMockData } from "./inputBanco.static";

const InputBanco = () => {
  return (
    <TextField
      select
      label="Banco"
      placeholder="Selecione o banco"
      variant="outlined"
      fullWidth
      margin="normal"
      required
      defaultValue={InputBancoMockData[0].value}
    >
      {InputBancoMockData.map((banco) => (
        <MenuItem key={banco.id} value={banco.value}>
          {banco.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputBanco;
