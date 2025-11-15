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
              <InputData />
            </Grid>

            <Grid size={8}>
              <InputDescricao />
            </Grid>

            <Grid size={12}>
              <InputTipoDocumento />
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
