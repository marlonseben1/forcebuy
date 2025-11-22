import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import type { DialogContasProps } from "./dialogContas.types";

const DialogContas = (props: DialogContasProps) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Cadastro de contas</DialogTitle>
      <DialogContent>
        <Button onClick={props.onClose}>Fechar</Button>
      </DialogContent>
    </Dialog>
  );
};

export default DialogContas;
