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
import { CategoriasMockData } from "./categoriasMockData";
import { colorPalette } from "../../theme";
import { MdDelete, MdOutlineDehaze } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { BotaoCadastro } from "../../components/buttons/botaoCadastro/botaoCadastro";
import DialogCategorias from "../../components/dialogs/dialogCategorias/dialogCategorias";

const Categorias = () => {
  const [openCategoriasDialog, setOpenCategoriasDialog] = useState(false);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleAbrirCategoriasDialog = () => {
    setOpenCategoriasDialog(true);
  };

  const handleFecharCategoriasDialog = () => {
    setOpenCategoriasDialog(false);
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
        onClick={handleAbrirCategoriasDialog}
        tipo="categoria"
      ></BotaoCadastro>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Tipo</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Grupo</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Categoria</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>Ações</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CategoriasMockData.map((categoria) => (
              <TableRow
                key={categoria.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Typography>
                    {categoria.tipo === "receita" ? "Receita" : "Despesa"}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{categoria.grupo}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{categoria.categoria}</Typography>
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
      <DialogCategorias
        open={openCategoriasDialog}
        onClose={handleFecharCategoriasDialog}
      />
    </>
  );
};

export default Categorias;
