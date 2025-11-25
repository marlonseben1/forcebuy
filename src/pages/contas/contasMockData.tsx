import type { ContasDataItem } from "./contas.types";

export const ContasMockData: ContasDataItem[] = [
  {
    id: 1,
    tipoConta: "corrente",
    banco: "Banco do Brasil",
    saldo: 250.0,
  },
  {
    id: 2,
    tipoConta: "poupanca",
    banco: "Nubank",
    saldo: 250.0,
  },
];
