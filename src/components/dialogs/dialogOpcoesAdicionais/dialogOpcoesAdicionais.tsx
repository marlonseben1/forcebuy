import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import type { DialogOpcoesAdicionaisProps } from "./dialogOpcoesAdicionais.types";

const DialogOpcoesAdicionais = (props: DialogOpcoesAdicionaisProps) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Opções adicionais</DialogTitle>
      <DialogContent>
        <Button onClick={props.onClose}>Fechar</Button>
      </DialogContent>
    </Dialog>
  );
};

export default DialogOpcoesAdicionais;
