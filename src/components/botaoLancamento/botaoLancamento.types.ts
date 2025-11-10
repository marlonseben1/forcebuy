import type { ReactNode } from "react";

export interface BotaoLancamentoProps  {
  tipo: "receita" | "despesa";
  icone: ReactNode;
};