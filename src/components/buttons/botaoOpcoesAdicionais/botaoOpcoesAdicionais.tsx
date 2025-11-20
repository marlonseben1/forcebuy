import { Button } from "@mui/material";
import { LuFileCog } from "react-icons/lu";
import type { botaoOpcoesAdicionaisProps } from "./botaoOpcoesAdicionais.types";

const BotaoOpcoesAdicionais = ({ onClick }: botaoOpcoesAdicionaisProps) => {
  return (
    <Button
      aria-label="opções adicionais"
      variant="outlined"
      sx={{ height: "100%" }}
      onClick={onClick}
    >
      <LuFileCog size={"55%"} />
    </Button>
  );
};

export default BotaoOpcoesAdicionais;
