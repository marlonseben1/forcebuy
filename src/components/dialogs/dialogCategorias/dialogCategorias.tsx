import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import type { DialogCategoriasProps } from "./dialogCategorias.types";

const DialogCategorias = (props: DialogCategoriasProps) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Cadastro de categorias</DialogTitle>
      {/* <IconButton
        aria-label="close"
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
        }}
        onClick={props.onClose}
      >
        <IoClose size={"25px"} color={colorPalette.neutral[400]} />
      </IconButton> */}
      <DialogActions>
        <Button onClick={props.onClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogCategorias;
