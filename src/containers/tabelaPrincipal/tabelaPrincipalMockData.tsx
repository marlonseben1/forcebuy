import type { DataItem } from "./tabelaPrincipal.types";

export const dadosTeste: DataItem[] = [
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
