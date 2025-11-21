import { Button } from "@mui/material";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import type { BotaoLancamentoProps } from "./botaoLancamento.types";
import { colorPalette } from "../../../theme";

export const BotaoLancamento = ({ tipo, onClick }: BotaoLancamentoProps) => {
  const icone =
    tipo === "receita" ? (
      <FaLongArrowAltUp size={18} />
    ) : (
      <FaLongArrowAltDown size={18} />
    );

  return (
    <Button
      sx={{
        backgroundColor: colorPalette.purple[100],
        color: colorPalette.neutral[0],
        fontSize: "16px",
        fontWeight: "bold",
      }}
      onClick={onClick}
    >
      {tipo === "receita" ? "Lançar Receita" : "Lançar despesa"}
      {icone}
    </Button>
  );
};
