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
import BotaoOpcoesAdicionais from "../../buttons/botaoOpcoesAdicionais/botaoOpcoesAdicionais";
import DialogOpcoesAdicionais from "../dialogOpcoesAdicionais/dialogOpcoesAdicionais";
import { useState } from "react";

export const DialogLancamento = (props: DialogLancamentoProps) => {
  const [openOpcoesAdicionais, setOpenOpcoesAdicionais] = useState(false);

  const handleAbrirDialogOpcoesAdicionais = () => {
    setOpenOpcoesAdicionais(true);
  };

  const handleFecharDialogOpcoesAdicionais = () => {
    setOpenOpcoesAdicionais(false);
  };

  return (
    <>
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

              <Grid size={5}>
                <InputValor />
              </Grid>

              <Grid size={5}>
                <InputData tipo={"vencimento"} />
              </Grid>

              <Grid size={2} display={"flex"} justifyContent={"end"}>
                <BotaoOpcoesAdicionais
                  onClick={handleAbrirDialogOpcoesAdicionais}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Fechar modal</Button>
        </DialogActions>
      </Dialog>
      <DialogOpcoesAdicionais
        open={openOpcoesAdicionais}
        onClose={handleFecharDialogOpcoesAdicionais}
      />
    </>
  );
};
