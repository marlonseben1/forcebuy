import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import type { DialogLancamentoProps } from "./dialogLancamento.types";
import InputCategoria from "../../inputs/inputCategoria/inputCategoria";
import InputConta from "../../inputs/inputConta/inputConta";
import InputData from "../../inputs/inputData/inputData";
import InputDescricao from "../../inputs/inputDescricao/inputDescricao";
import InputTipoDocumento from "../../inputs/inputTipoDocumento/inputTipoDocumento";
import InputFornecedor from "../../inputs/inputFornecedor/inputFornecedor";
import InputNumeroDocumento from "../../inputs/inputNumeroDocumento/inputNumeroDocumento";
import InputValor from "../../inputs/inputValor/inputValor";

export const DialogLancamento = (props: DialogLancamentoProps) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>{`Nova ${props.tipo}`}</DialogTitle>
      <DialogContent>
        <Box component="form">
          <Grid container spacing={3}>
            <Grid size={8}>
              <InputCategoria />
            </Grid>

            <Grid size={4}>
              <InputConta />
            </Grid>

            <Grid size={4}>
              <InputData tipo={"lancamento"} />
            </Grid>

            <Grid size={8}>
              <InputDescricao />
            </Grid>

            <Grid size={7}>
              <InputTipoDocumento />
            </Grid>

            <Grid size={5}>
              <InputNumeroDocumento />
            </Grid>

            <Grid size={12}>
              <InputFornecedor />
            </Grid>

            <Grid size={6}>
              <InputValor />
            </Grid>

            <Grid size={4}>
              <InputData tipo={"vencimento"} />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Fechar modal</Button>
      </DialogActions>
    </Dialog>
  );
};
