import { MenuItem, TextField } from "@mui/material";

const InputConta = () => {
  const contas = [
    {
      value: "Caixa Interno",
      label: "Caixa Interno",
    },
    {
      value: "Nubank",
      label: "Nubank",
    },
    {
      value: "Inter",
      label: "Inter",
    },
    {
      value: "Sicredi",
      label: "Sicredi",
    },
  ];

  return (
    <TextField
      select
      variant="outlined"
      defaultValue={contas[0].value}
      label="Conta"
      margin="normal"
      required
    >
      {contas.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputConta;
