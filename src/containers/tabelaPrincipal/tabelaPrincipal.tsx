import { Typography, Paper, Box, Grid, IconButton } from "@mui/material";
import { MdOutlineDehaze } from "react-icons/md";

interface DataItem {
  id: number;
  lancamento: string;
  fornecedor: string;
  categoria: string;
  vencimento: string;
  valor: string;
  situacao: string;
  metodo?: string;
}

const dadosTeste: DataItem[] = [
  {
    id: 1,
    lancamento: "10/11/2025",
    fornecedor: "JOAQUIM DA SILVA",
    categoria: "Saúde",
    vencimento: "11/11/2025",
    valor: "R$650,85",
    situacao: "Pago",
    metodo: "Pix",
  },
  {
    id: 2,
    lancamento: "10/11/2025",
    fornecedor: "AMANDA REIS",
    categoria: "Alimentação",
    vencimento: "11/11/2025",
    valor: "R$354,95",
    situacao: "A pagar",
  },
  {
    id: 3,
    lancamento: "10/11/2025",
    fornecedor: "CARLOS PEREIRA",
    categoria: "Transporte",
    vencimento: "12/11/2025",
    valor: "R$185,30",
    situacao: "A pagar",
  },
  {
    id: 4,
    lancamento: "10/11/2025",
    fornecedor: "JOSUE DA SILVA",
    categoria: "Internet",
    vencimento: "12/11/2025",
    valor: "R$185,30",
    situacao: "Pago",
    metodo: "Dinheiro",
  },
];

export const TabelaPrincipal = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        overflow: "hidden",
        maxHeight: 400,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          background: "#f5f5f5",
          p: 1,
          position: "sticky",
          top: 0,
          zIndex: 1,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Grid container spacing={1} alignItems="center">
          <Grid size={1}>
            <Typography fontWeight="bold">Nº</Typography>
          </Grid>
          <Grid size={1.5}>
            <Typography fontWeight="bold">Lançamento</Typography>
          </Grid>
          <Grid size={2}>
            <Typography fontWeight="bold">Fornecedor</Typography>
          </Grid>
          <Grid size={1.5}>
            <Typography fontWeight="bold">Categoria</Typography>
          </Grid>
          <Grid size={1.5}>
            <Typography fontWeight="bold">Vencimento</Typography>
          </Grid>
          <Grid size={1}>
            <Typography fontWeight="bold">Valor</Typography>
          </Grid>
          <Grid size={1}>
            <Typography fontWeight="bold">Situação</Typography>
          </Grid>
          <Grid size={1}>
            <Typography fontWeight="bold">Método</Typography>
          </Grid>
          <Grid size={1}>
            <Typography fontWeight="bold">Ações</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          overflowY: "auto",
          flex: 1,
          "&::-webkit-scrollbar": { width: 6 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#bbb",
            borderRadius: 3,
          },
        }}
      >
        {dadosTeste.map((item) => (
          <Paper
            key={item.id}
            sx={{
              p: 1,
              borderRadius: 0,
              borderBottom: "1px solid #eee",
              "&:hover": { backgroundColor: "#fafafa" },
              transition: "0.2s",
            }}
            square
          >
            <Grid container alignItems="center" spacing={1}>
              <Grid size={1}>
                <Typography>{item.id}</Typography>
              </Grid>
              <Grid size={1.5}>
                <Typography>{item.lancamento}</Typography>
              </Grid>
              <Grid size={2}>
                <Typography>{item.fornecedor}</Typography>
              </Grid>
              <Grid size={1.5}>
                <Typography>{item.categoria}</Typography>
              </Grid>
              <Grid size={1.5}>
                <Typography>{item.vencimento}</Typography>
              </Grid>
              <Grid size={1}>
                <Typography color={item.situacao === "Pago" ? "green" : "red"}>
                  {item.valor}
                </Typography>
              </Grid>
              <Grid size={1}>
                <Typography
                  color={item.situacao === "Pago" ? "success" : "error"}
                >
                  {item.situacao}
                </Typography>
              </Grid>
              <Grid size={1}>
                <Typography>{item.metodo}</Typography>
              </Grid>
              <Grid
                size={1}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <MdOutlineDehaze size={22} color="black" />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
