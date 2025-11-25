export interface iCategoriasMockData {
  id: number;
  tipo: "receita" | "despesa";
  grupo: string;
  categoria: string;
}

export const CategoriasMockData: iCategoriasMockData[] = [
  {
    id: 1,
    tipo: "receita",
    grupo: "Alimentação",
    categoria: "Lanche",
  },
  {
    id: 2,
    tipo: "despesa",
    grupo: "Lazer",
    categoria: "Cinema",
  },
];
