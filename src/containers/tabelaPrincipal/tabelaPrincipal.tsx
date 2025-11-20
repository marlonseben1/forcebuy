import {
  Typography,
  Paper,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Popover,
  Button,
  Divider,
} from "@mui/material";
import { MdOutlineDehaze } from "react-icons/md";
import { BotaoLancamento } from "../../components/buttons/botaoLancamento/botaoLancamento";
import { useState } from "react";
import { DialogLancamento } from "../../components/dialogs/dialogLancamento/dialogLancamento";
import { dadosTeste } from "./tabelaPrincipalMockData";

export const TabelaPrincipal = () => {
  const [openDialogLancamento, setOpenDialogLancamento] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [tipoSelecionado, setTipoSelecionado] = useState<"receita" | "despesa">(
    "despesa"
  );

  const handleAbrirDialogLancamento = (tipo: "receita" | "despesa") => {
    setTipoSelecionado(tipo);
    setOpenDialogLancamento(true);
  };

  const handleFecharDialogLancamento = () => {
    setOpenDialogLancamento(false);
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
      <BotaoLancamento
        tipo="despesa"
        onClick={() => handleAbrirDialogLancamento("despesa")}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Nº</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Lançamento</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Fornecedor</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Categoria</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Vencimento</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Valor</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Situação</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Método</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Ações</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dadosTeste.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Typography>{row.id}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{row.lancamento}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{row.fornecedor}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{row.categoria}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{row.vencimento}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{row.valor}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    color={row.situacao === "Pago" ? "success" : "error"}
                  >
                    {row.situacao}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{row.metodo}</Typography>
                </TableCell>
                <TableCell align="left">
                  <IconButton onClick={handleAbrirPopoverAcoes}>
                    <MdOutlineDehaze size={22} color="black" />
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
                      <Typography color="black">Visualizar</Typography>
                    </Button>
                    <Divider />
                    <Button>
                      <Typography color="black">Baixar</Typography>
                    </Button>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DialogLancamento
        open={openDialogLancamento}
        onClose={handleFecharDialogLancamento}
        tipo={tipoSelecionado}
      />
    </>
  );
};
