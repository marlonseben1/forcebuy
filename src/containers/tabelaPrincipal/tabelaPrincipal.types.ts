export interface DataItem {
  id: number;
  lancamento: string;
  fornecedor: string;
  categoria: string;
  vencimento: string;
  valor: string;
  situacao: string;
  metodo?: string;
}