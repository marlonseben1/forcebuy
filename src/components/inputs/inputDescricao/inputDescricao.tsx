import { TextField } from "@mui/material";

const InputDescricao = () => {
  return (
    <TextField
      label="Descrição"
      variant="outlined"
      required
      placeholder="Adicione uma descrição"
      fullWidth
    />
  );
};

export default InputDescricao;
