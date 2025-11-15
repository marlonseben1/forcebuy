import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { mockDataFornecedor } from "./inputFornecedor.static";
import { BsPlusSquareFill } from "react-icons/bs";

const InputFornecedor = () => {
  return (
    <TextField
      select
      label="Fornecedor"
      required
      variant="outlined"
      fullWidth
      margin="normal"
      placeholder="Digite para buscar ou clique + para cadastrar"
      slotProps={{
        select: {
          IconComponent: () => null,
        },
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <BsPlusSquareFill size={25} cursor={"pointer"} />
            </InputAdornment>
          ),
        },
      }}
    >
      {mockDataFornecedor.map((fornecedor) => (
        <MenuItem key={fornecedor.id} value={fornecedor.nome}>
          {fornecedor.nome} -{" "}
          {fornecedor.cpf ? fornecedor.cpf : fornecedor.cnpj}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputFornecedor;
