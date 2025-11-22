import { Button } from "@mui/material";
import type { BotaoCadastroProps } from "./botaoCadastro.types";
import { colorPalette } from "../../../theme";

export const BotaoCadastro = ({ tipo, onClick }: BotaoCadastroProps) => {
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
      {tipo === "conta" ? "Nova conta" : "Nova categoria"}
    </Button>
  );
};
