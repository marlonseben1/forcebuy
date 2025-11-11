import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import type { DialogLancamentoProps } from "./dialogLancamento.types";

export const DialogLancamento = (props: DialogLancamentoProps) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>{`Nova ${props.tipo}`}</DialogTitle>

      <DialogActions>
        <Button onClick={props.onClose}>Fechar modal</Button>
      </DialogActions>
    </Dialog>
  );
};
