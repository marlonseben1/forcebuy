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
} from "@mui/material";
import { MdOutlineDehaze } from "react-icons/md";
import { BotaoLancamento } from "../../components/buttons/botaoLancamento/botaoLancamento";
import { useState } from "react";
import { DialogLancamento } from "../../components/dialogs/dialogLancamento/dialogLancamento";
import { dadosTeste } from "./tabelaPrincipalMockData";

export const TabelaPrincipal = () => {
  const [open, setOpen] = useState(false);
  const [tipoSelecionado, setTipoSelecionado] = useState<"receita" | "despesa">(
    "despesa"
  );

  const handleAbrirDialogLancamento = (tipo: "receita" | "despesa") => {
    setTipoSelecionado(tipo);
    setOpen(true);
  };

  const handleFecharDialogLancamento = () => {
    setOpen(false);
  };

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
                  <IconButton>
                    <MdOutlineDehaze size={22} color="black" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DialogLancamento
        open={open}
        onClose={handleFecharDialogLancamento}
        tipo={tipoSelecionado}
      />
    </>
  );
};
