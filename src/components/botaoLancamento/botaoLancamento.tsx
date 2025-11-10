import { Button } from "@mui/material";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import type { BotaoLancamentoProps } from "./botaoLancamento.types";

export const BotaoLancamento = ({ tipo }: BotaoLancamentoProps) => {
  const icone =
    tipo === "receita" ? (
      <FaLongArrowAltUp size={18} />
    ) : (
      <FaLongArrowAltDown size={18} />
    );

  return (
    <Button
      sx={{
        backgroundColor: "#784BFF",
        color: "#FFFFFF",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      {tipo === "receita" ? "Lançar Receita" : "Lançar despesa"}
      {icone}
    </Button>
  );
};
