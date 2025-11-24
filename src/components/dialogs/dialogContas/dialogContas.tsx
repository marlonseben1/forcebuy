import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import type { DialogContasProps } from "./dialogContas.types";
import InputBanco from "../../inputs/inputBanco/inputBanco";
import InputValor from "../../inputs/inputValor/inputValor";
import InputNumero from "../../inputs/inputNumeroDocumento/inputNumero";
import { colorPalette } from "../../../theme";
import { IoClose } from "react-icons/io5";

const DialogContas = (props: DialogContasProps) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Cadastro de contas</DialogTitle>
      <IconButton
        aria-label="close"
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
        }}
        onClick={props.onClose}
      >
        <IoClose size={"25px"} color={colorPalette.neutral[400]} />
      </IconButton>
      <DialogContent>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid size={7}>
              <InputBanco />
            </Grid>
            <Grid size={5}>
              <InputNumero label="Agência" margin="normal" required />
            </Grid>
            <Grid size={7}>
              <InputNumero
                label="Número da conta"
                margin="none"
                required
                fullWidth
              />
            </Grid>
            <Grid size={5}>
              <InputValor label="Valor inicial" margin="none" />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancelar</Button>
        <Button onClick={props.onClose}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogContas;
