import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ContasMockData } from "./contasMockData";
import { MdDelete, MdOutlineDehaze } from "react-icons/md";
import { colorPalette } from "../../theme";
import { useState } from "react";
import { BotaoCadastro } from "../../components/buttons/botaoCadastro/botaoCadastro";
import DialogContas from "../../components/dialogs/dialogContas/dialogContas";
import PopoverAcoes from "../../components/popoverAcoes/popoverAcoes";
import { FaEdit } from "react-icons/fa";

const Contas = () => {
  const [openContasDialog, setOpenContasDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleAbrirContasDialog = () => {
    setOpenContasDialog(true);
  };

  const handleFecharContasDialog = () => {
    setOpenContasDialog(false);
  };

  const handleAbrirPopoverAcoes = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFecharPopoverAcoes = () => {
    setAnchorEl(null);
  };

  const open = !!anchorEl;
  const id = open ? "popover-acoes" : undefined;

  return (
    <>
      <BotaoCadastro
        onClick={handleAbrirContasDialog}
        tipo="conta"
      ></BotaoCadastro>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Tipo de conta</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Banco</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Saldo</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Ações</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ContasMockData.map((c) => (
              <TableRow
                key={c.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Typography>
                    {c.tipoConta === "corrente" ? "Corrente" : "Poupança"}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{c.banco}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>R${c.saldo}</Typography>
                </TableCell>
                <TableCell align="left">
                  <IconButton onClick={handleAbrirPopoverAcoes}>
                    <MdOutlineDehaze
                      size={22}
                      color={colorPalette.neutral[900]}
                    />
                  </IconButton>
                  <PopoverAcoes
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    handleFecharPopoverAcoes={handleFecharPopoverAcoes}
                    actions={[
                      {
                        label: "Editar",
                        icon: <FaEdit color={colorPalette.neutral[500]} />,
                        onClick: () =>
                          console.log("Implementar posteriormente"),
                      },
                      {
                        label: "Excluir",
                        icon: <MdDelete color={colorPalette.neutral[500]} />,
                        onClick: () =>
                          console.log("Implementar posteriormente"),
                      },
                    ]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DialogContas
        open={openContasDialog}
        onClose={handleFecharContasDialog}
      />
    </>
  );
};

export default Contas;
