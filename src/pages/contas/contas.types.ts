export type TBanco =
  | "Nubank"
  | "Banco do Brasil"
  | "Inter"
  | "Itau"
  | "Bradesco"
  | "Santander";


export interface ContasDataItem {
    id: number;
    tipoConta: 'poupanca' | 'corrente';
    banco: TBanco;
    saldo: number;
}