import { MenuItem, TextField } from "@mui/material";

const InputCategoria = () => {
  const categorias = [
    {
      value: "Alimentação",
      label: "Alimentação",
    },
    {
      value: "Transporte",
      label: "Transporte",
    },
    {
      value: "Lazer",
      label: "Lazer",
    },
    {
      value: "Multas",
      label: "Multas",
    },
  ];

  return (
    <TextField
      select
      variant="outlined"
      defaultValue={categorias[0].value}
      label="Categoria"
      margin="normal"
      fullWidth
      required
    >
      {categorias.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputCategoria;
