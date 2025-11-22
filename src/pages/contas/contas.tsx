import {
  Button,
  Divider,
  IconButton,
  Paper,
  Popover,
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
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { BotaoCadastro } from "../../components/buttons/botaoCadastro/botaoCadastro";
import DialogContas from "../../components/dialogs/dialogContas/dialogContas";

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
                <Typography fontWeight={"bold"}>Nome da conta</Typography>
              </TableCell>
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
                  <Typography>{c.nomeConta}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{c.tipoConta}</Typography>
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
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleFecharPopoverAcoes}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    slotProps={{
                      paper: {
                        elevation: 1,
                      },
                    }}
                  >
                    <Button>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: ".5rem",
                        }}
                      >
                        <FaEdit color={colorPalette.neutral[500]} />
                        <Typography
                          color={colorPalette.neutral[500]}
                          textTransform={"none"}
                        >
                          Editar
                        </Typography>
                      </div>
                    </Button>
                    <Divider />
                    <Button>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: ".5rem",
                        }}
                      >
                        <MdDelete color={colorPalette.neutral[500]} />
                        <Typography
                          color={colorPalette.neutral[500]}
                          textTransform={"none"}
                        >
                          Excluir
                        </Typography>
                      </div>
                    </Button>
                  </Popover>
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
